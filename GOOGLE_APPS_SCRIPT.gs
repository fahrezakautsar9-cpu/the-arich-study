/**
 * ==============================================================================
 * THE ARICH STUDY - CLOUD DATABASE BACKEND ENGINE (GOOGLE APPS SCRIPT)
 * ==============================================================================
 * BISA DIPAKAI DI LAPTOP MAUPUN DI IPAD / HP!
 * 
 * JIKA DI IPAD (Tanpa Menu Extensions):
 * 1. Buka browser Safari / Chrome di iPad.
 * 2. Ketik alamat: https://script.new  (langsung terbuka Apps Script)
 * 3. Hapus teks bawaan, lalu paste seluruh isi kode ini.
 * 4. Klik ikon Disket (Simpan).
 * 5. Klik 'Deploy' (Terapkan) > 'New deployment' (Deployment baru).
 *    - Pilih Jenis: 'Web app' (Aplikasi Web)
 *    - Execute as: 'Me' (Saya)
 *    - Who has access: 'Anyone' (Siapa saja)  <-- WAJIB!
 * 6. Klik 'Deploy', izinkan akses jika diminta, lalu salin URL /exec.
 * 7. Kirim link /exec tersebut ke chat AI!
 * 
 * *Catatan: Script ini otomatis membuat file "Database The Arich Study" 
 * di Google Drive Anda tanpa perlu Anda buat manual!
 * ==============================================================================
 */

// Helper cerdas: mendeteksi apakah script menempel di Sheet atau dibuat mandiri via script.new
function getSpreadsheet() {
  // 1. Jika dibuka lewat menu Extensions di Google Sheets (di Laptop)
  var active = SpreadsheetApp.getActiveSpreadsheet();
  if (active) return active;
  
  // 2. Jika dibuat mandiri via https://script.new (di iPad / HP)
  var props = PropertiesService.getScriptProperties();
  var savedId = props.getProperty("ARICH_SHEET_ID");
  if (savedId) {
    try {
      return SpreadsheetApp.openById(savedId);
    } catch (e) {}
  }
  
  // Otomatis buatkan Google Spreadsheet baru di Google Drive Anda!
  var newSS = SpreadsheetApp.create("Database The Arich Study");
  props.setProperty("ARICH_SHEET_ID", newSS.getId());
  
  // Siapkan sheet Daftar_Siswa
  var sSiswa = newSS.getActiveSheet();
  sSiswa.setName("Daftar_Siswa");
  sSiswa.appendRow(["Waktu Terdaftar", "Nama Siswa", "Kelas", "Asal Sekolah", "Aktivitas Terakhir"]);
  sSiswa.getRange(1, 1, 1, 5).setFontWeight("bold").setBackground("#059669").setFontColor("#ffffff");
  sSiswa.setFrozenRows(1);
  
  // Siapkan sheet Rekap_Nilai
  var sNilai = newSS.insertSheet("Rekap_Nilai");
  sNilai.appendRow(["Waktu Ujian", "Nama Siswa", "Kelas", "Materi Bab", "Benar", "Total Soal", "Skor", "Status"]);
  sNilai.getRange(1, 1, 1, 8).setFontWeight("bold").setBackground("#4f46e5").setFontColor("#ffffff");
  sNilai.setFrozenRows(1);
  
  return newSS;
}

// Menangani tarikan data oleh Guru (GET request)
function doGet(e) {
  var ss = getSpreadsheet();
  
  // 1. Ambil Data Murid dari sheet Daftar_Siswa
  var sheetSiswa = ss.getSheetByName("Daftar_Siswa") || ss.getSheets()[0];
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

  return ContentService.createTextOutput(JSON.stringify({ 
    status: "success", 
    sheetUrl: ss.getUrl(),
    students: students, 
    submissions: submissions 
  })).setMimeType(ContentService.MimeType.JSON);
}

// Menangani pendaftaran murid & kiriman nilai dari HP siswa (POST request)
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000); // Mencegah bentrokan data saat banyak siswa submit bersamaan
  } catch (errLock) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "error", 
      message: "Server sibuk, silakan coba sesaat lagi" 
    })).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var ss = getSpreadsheet();
    var data = JSON.parse(e.postData.contents);
    
    // AKSI 1: PENDAFTARAN / UPDATE SISWA DARI HP
    if (data.action === "register_student") {
      var sSiswa = ss.getSheetByName("Daftar_Siswa") || ss.insertSheet("Daftar_Siswa");
      
      if (sSiswa.getLastRow() === 0) {
        sSiswa.appendRow(["Waktu Terdaftar", "Nama Siswa", "Kelas", "Asal Sekolah", "Aktivitas Terakhir"]);
        sSiswa.getRange(1, 1, 1, 5).setFontWeight("bold").setBackground("#059669").setFontColor("#ffffff");
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
        sSiswa.getRange(foundIndex, 3).setValue(data.gradeName || data.grade || "-"); 
        sSiswa.getRange(foundIndex, 4).setValue(data.school || "Sekolah"); 
        sSiswa.getRange(foundIndex, 5).setValue(now); 
      } else { 
        sSiswa.appendRow([now, data.name, data.gradeName || data.grade || "-", data.school || "Sekolah", now]); 
      }
      
      return ContentService.createTextOutput(JSON.stringify({ 
        status: "success", 
        sheetUrl: ss.getUrl(),
        message: "Akun murid berhasil dicatat di Cloud" 
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // AKSI 2: PENGIRIMAN NILAI LATIHAN/UJIAN
    if (data.action === "submit_exam" || data.score !== undefined) {
      var sNilai = ss.getSheetByName("Rekap_Nilai") || ss.insertSheet("Rekap_Nilai");
      
      if (sNilai.getLastRow() === 0) {
        sNilai.appendRow(["Waktu Ujian", "Nama Siswa", "Kelas", "Materi Bab", "Benar", "Total Soal", "Skor", "Status"]);
        sNilai.getRange(1, 1, 1, 8).setFontWeight("bold").setBackground("#4f46e5").setFontColor("#ffffff");
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
        sheetUrl: ss.getUrl(),
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
