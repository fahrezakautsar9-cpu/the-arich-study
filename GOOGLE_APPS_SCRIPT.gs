/**
 * ==============================================================================
 * THE ARICH STUDY - CLOUD DATABASE BACKEND ENGINE (GOOGLE APPS SCRIPT)
 * ==============================================================================
 * KODE INI BERFUNGSI SEBAGAI JEMBATAN OTOMATIS:
 * - Menampung pendaftaran nama murid dari semua HP siswa.
 * - Mencatat nilai kuis/latihan murid secara live ke Google Spreadsheet.
 * - Menyajikan data ke Dashboard Mode Guru (PIN: 010822).
 *
 * CARA PAKAI (HANYA BUTUH 2 MENIT):
 * 1. Buka https://sheets.new di browser laptop.
 * 2. Klik menu 'Ekstensi' (Extensions) > 'Apps Script'.
 * 3. Hapus tulisan bawaan di editor, lalu PASTE SELURUH ISI KODE INI.
 * 4. Klik ikon Disket (Simpan).
 * 5. Klik tombol biru 'Terapkan' (Deploy) > 'Deployment baru' (New deployment).
 * 6. Pilih Jenis: 'Aplikasi Web' (Web app).
 *    - Jalankan sebagai: 'Saya' (Me)
 *    - Siapa yang memiliki akses: 'Siapa saja' (Anyone)  <--- (WAJIB PILIH INI!)
 * 7. Klik 'Terapkan' (Deploy), lalu salin URL Aplikasi Web (/exec).
 * 8. Tempel link tersebut ke chat ini, atau ke Mode Guru > 'Koneksi Cloud'.
 * ==============================================================================
 */

// Menangani tarikan data oleh Guru saat membuka Dashboard Mode Guru (GET request)
function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Ambil Data Murid dari sheet Daftar_Siswa
  var sheetSiswa = ss.getSheetByName("Daftar_Siswa");
  var students = [];
  if (sheetSiswa && sheetSiswa.getLastRow() > 1) {
    var sData = sheetSiswa.getRange(2, 1, sheetSiswa.getLastRow() - 1, 5).getValues();
    students = sData.map(function(r) { 
      return { 
        timestamp: r[0], 
        name: r[1], 
        gradeName: r[2], 
        school: r[3], 
        lastLogin: r[4] 
      }; 
    });
  }

  // 2. Ambil Rekap Nilai Ujian dari sheet Rekap_Nilai
  var sheetNilai = ss.getSheetByName("Rekap_Nilai");
  var submissions = [];
  if (sheetNilai && sheetNilai.getLastRow() > 1) {
    var nData = sheetNilai.getRange(2, 1, sheetNilai.getLastRow() - 1, 8).getValues();
    submissions = nData.map(function(r) { 
      return { 
        timestamp: r[0], 
        studentName: r[1], 
        studentClass: r[2], 
        displaySubject: r[3], 
        correctCount: r[4], 
        totalQuestions: r[5], 
        score: r[6], 
        passed: r[7] === "TUNTAS" || r[7] === true 
      }; 
    });
  }

  // Kembalikan JSON dengan header CORS otomatis
  return ContentService.createTextOutput(JSON.stringify({ 
    status: "success", 
    students: students, 
    submissions: submissions 
  })).setMimeType(ContentService.MimeType.JSON);
}

// Menangani pendaftaran murid & kiriman nilai dari HP siswa (POST request)
function doPost(e) {
  var lock = LockService.getScriptLock();
  // Cegah bentrokan data saat puluhan murid submit bersamaan
  try {
    lock.waitLock(10000);
  } catch (errLock) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "error", 
      message: "Server sibuk, silakan kirim ulang" 
    })).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);
    
    // AKSI 1: PENDAFTARAN / LOGIN SISWA DARI HP
    if (data.action === "register_student") {
      var sSiswa = ss.getSheetByName("Daftar_Siswa") || ss.insertSheet("Daftar_Siswa");
      
      // Buat header jika sheet masih baru
      if (sSiswa.getLastRow() === 0) {
        sSiswa.appendRow(["Waktu Terdaftar", "Nama Siswa", "Kelas", "Asal Sekolah", "Aktivitas Terakhir"]);
        sSiswa.getRange(1, 1, 1, 5)
          .setFontWeight("bold")
          .setBackground("#059669")
          .setFontColor("#ffffff");
        sSiswa.setFrozenRows(1);
      }
      
      var rows = sSiswa.getDataRange().getValues();
      var foundIndex = -1;
      var targetName = (data.name || "").toString().trim().toLowerCase();
      
      for (var i = 1; i < rows.length; i++) { 
        if (rows[i][1] && rows[i][1].toString().trim().toLowerCase() === targetName) { 
          foundIndex = i + 1; 
          break; 
        } 
      }
      
      var now = data.timestamp || Utilities.formatDate(new Date(), "Asia/Jakarta", "dd/MM/yyyy HH:mm:ss");
      
      if (foundIndex > 0) { 
        // Update data jika murid sudah ada (tidak menimpa histori nama)
        sSiswa.getRange(foundIndex, 3).setValue(data.gradeName || data.grade || "-"); 
        sSiswa.getRange(foundIndex, 4).setValue(data.school || "Sekolah"); 
        sSiswa.getRange(foundIndex, 5).setValue(now); 
      } else { 
        // Tambahkan baris baru untuk murid baru
        sSiswa.appendRow([now, data.name, data.gradeName || data.grade || "-", data.school || "Sekolah", now]); 
      }
      
      return ContentService.createTextOutput(JSON.stringify({ 
        status: "success", 
        message: "Akun murid berhasil dicatat di Cloud" 
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // AKSI 2: PENGIRIMAN NILAI LATIHAN/UJIAN SISWA
    if (data.action === "submit_exam" || data.score !== undefined) {
      var sNilai = ss.getSheetByName("Rekap_Nilai") || ss.insertSheet("Rekap_Nilai");
      
      // Buat header jika sheet masih baru
      if (sNilai.getLastRow() === 0) {
        sNilai.appendRow(["Waktu Ujian", "Nama Siswa", "Kelas", "Materi Bab", "Benar", "Total Soal", "Skor", "Status"]);
        sNilai.getRange(1, 1, 1, 8)
          .setFontWeight("bold")
          .setBackground("#4f46e5")
          .setFontColor("#ffffff");
        sNilai.setFrozenRows(1);
      }
      
      var examTime = data.timestamp || Utilities.formatDate(new Date(), "Asia/Jakarta", "dd/MM/yyyy HH:mm:ss");
      var isPassed = (data.passed === true || data.passed === "TUNTAS" || Number(data.score) >= 75);
      
      sNilai.appendRow([
        examTime, 
        data.studentName || "-", 
        data.studentClass || "-", 
        data.displaySubject || data.chapterTitle || "-", 
        data.correctCount !== undefined ? data.correctCount : 0, 
        data.totalQuestions !== undefined ? data.totalQuestions : 0, 
        data.score !== undefined ? data.score : 0, 
        isPassed ? "TUNTAS" : "REMEDIAL"
      ]);
      
      return ContentService.createTextOutput(JSON.stringify({ 
        status: "success", 
        message: "Nilai ujian berhasil direkap di Cloud" 
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "unknown_action" 
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "error", 
      message: err.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
