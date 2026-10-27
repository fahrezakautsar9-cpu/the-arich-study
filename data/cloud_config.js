// ==============================================================================
// KONFIGURASI DATABASE CLOUD (THE ARICH STUDY)
// ==============================================================================
// Webhook Google Apps Script gratis yang menghubungkan HP seluruh murid & Guru.
// Jika diisi, data murid & hasil latihan dari semua perangkat otomatis tersinkron
// secara real-time ke Google Spreadsheet milik Guru.
// ==============================================================================

window.THE_ARICH_CONFIG = {
  // Masukkan URL Deployment Google Apps Script Anda di sini (atau via Mode Guru)
  cloudWebhookUrl: ""
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.THE_ARICH_CONFIG;
}
