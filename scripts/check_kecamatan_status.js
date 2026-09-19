const fs = require('fs');
const path = require('path');

const kotaFilePath = path.join(__dirname, '../data/kota.json');
const kotaData = JSON.parse(fs.readFileSync(kotaFilePath, 'utf8'));

const filled = kotaData.filter(item => item.kecamatan && item.kecamatan.length > 0);
const missing = kotaData.filter(item => !item.kecamatan || item.kecamatan.length === 0);

console.log(`TOTAL DAERAH IN KOTA.JSON: ${kotaData.length}`);
console.log(`SUDAH ADA KECAMATAN: ${filled.length} (${((filled.length / kotaData.length) * 100).toFixed(1)}%)`);
console.log(`BELUM ADA KECAMATAN: ${missing.length} (${((missing.length / kotaData.length) * 100).toFixed(1)}%)`);

// Group missing by provinsi for easy reading
const missingByProv = {};
missing.forEach(item => {
  const prov = item.provinsi || 'Lainnya';
  if (!missingByProv[prov]) missingByProv[prov] = [];
  missingByProv[prov].push(`${item.nama} (${item.slug})`);
});

console.log('\n--- DAFTAR KOTA/KABUPATEN YANG BELUM ADA DATA KECAMATAN (PER PROVINSI) ---');
for (const [prov, items] of Object.entries(missingByProv)) {
  console.log(`\n📌 ${prov} (${items.length} daerah):`);
  items.forEach(it => console.log(`   - ${it}`));
}
