// ==============================================================================
// KONFIGURASI DATABASE CLOUD (THE ARICH STUDY)
// ==============================================================================
// Webhook Google Apps Script gratis yang menghubungkan HP seluruh murid & Guru.
// Data murid & hasil latihan dari semua perangkat otomatis tersinkron
// secara real-time ke Google Spreadsheet milik Guru.
// ==============================================================================

window.THE_ARICH_CONFIG = {
  // URL Deployment Google Apps Script Live
  cloudWebhookUrl: "https://script.google.com/macros/s/AKfycbyRapLk3zQG9ReU4ZGmghyMlyEuo7xzWbe7JY0573Lr5k0UxWZqBYQ3ug1YUi0ku6wx/exec"
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.THE_ARICH_CONFIG;
}
