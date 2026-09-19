const fs = require('fs');
const path = require('path');

// Raw cities dataset organized by province from user prompt
const rawProvinces = [
  {
    provinsi: "Aceh",
    items: [
      "Kabupaten Aceh Barat", "Kabupaten Aceh Besar", "Kabupaten Aceh Jaya", "Kabupaten Aceh Selatan",
      "Kabupaten Aceh Singkil", "Kabupaten Aceh Tamiang", "Kabupaten Aceh Tengah", "Kabupaten Aceh Tenggara",
      "Kabupaten Aceh Timur", "Kabupaten Aceh Utara", "Kabupaten Bener Meriah", "Kabupaten Bireuen",
      "Kabupaten Gayo Lues", "Kabupaten Nagan Raya", "Kabupaten Pidie", "Kabupaten Pidie Jaya",
      "Kota Banda Aceh", "Kota Langsa", "Kota Lhokseumawe", "Kota Sabang", "Kota Subulussalam"
    ]
  },
  {
    provinsi: "Sumatera Utara",
    items: [
      "Kabupaten Asahan", "Kabupaten Batubara", "Kabupaten Dairi", "Kabupaten Deli Serdang",
      "Kabupaten Humbang Hasundutan", "Kabupaten Karo", "Kabupaten Labuhanbatu", "Kabupaten Labuhanbatu Selatan",
      "Kabupaten Labuhanbatu Utara", "Kabupaten Langkat", "Kabupaten Mandailing Natal", "Kabupaten Nias",
      "Kabupaten Padang Lawas", "Kabupaten Pakpak Bharat", "Kabupaten Samosir", "Kabupaten Serdang Bedagai",
      "Kabupaten Simalungun", "Kabupaten Tapanuli Selatan", "Kabupaten Tapanuli Tengah", "Kabupaten Tapanuli Utara",
      "Kabupaten Toba", "Kota Binjai", "Kota Medan", "Kota Padangsidimpuan", "Kota Pematangsiantar",
      "Kota Sibolga", "Kota Tanjungbalai", "Kota Tebing Tinggi", "Kota Kisaran", "Kota Rantau Prapat",
      "Sei Semangkei", "Kota Stabat", "Kota Pangkalan Brandan"
    ]
  },
  {
    provinsi: "Sumatera Barat",
    items: [
      "Kabupaten Agam", "Kabupaten Dharmasraya", "Kabupaten Lima Puluh Kota", "Kabupaten Padang Pariaman",
      "Kabupaten Pasaman", "Kabupaten Pasaman Barat", "Kabupaten Pesisir Selatan", "Kabupaten Sijunjung",
      "Kabupaten Solok", "Kabupaten Solok Selatan", "Kabupaten Tanah Datar", "Kota Bukittinggi",
      "Kota Padang", "Kota Padang Panjang", "Kota Pariaman", "Kota Payakumbuh", "Kota Sawahlunto", "Kota Solok"
    ]
  },
  {
    provinsi: "Riau",
    items: [
      "Kabupaten Bengkalis", "Kabupaten Indragiri Hilir", "Kabupaten Indragiri Hulu", "Kabupaten Kampar",
      "Kabupaten Kepulauan Meranti", "Kabupaten Kuantan Singingi", "Kabupaten Pelalawan", "Kabupaten Rokan Hilir",
      "Kabupaten Rokan Hulu", "Kabupaten Siak", "Kota Dumai", "Kota Pekanbaru"
    ]
  },
  {
    provinsi: "Kepulauan Riau",
    items: [
      "Kabupaten Bintan", "Kabupaten Karimun", "Kabupaten Kepulauan Anambas", "Kabupaten Lingga",
      "Kabupaten Natuna", "Kota Batam", "Kota Tanjungpinang"
    ]
  },
  {
    provinsi: "Jambi",
    items: [
      "Kabupaten Batanghari", "Kabupaten Bungo", "Kabupaten Kerinci", "Kabupaten Merangin",
      "Kabupaten Muaro Jambi", "Kabupaten Sarolangun", "Kabupaten Tanjung Jabung Barat",
      "Kabupaten Tanjung Jabung Timur", "Kabupaten Tebo", "Kota Jambi", "Kota Sungai Penuh"
    ]
  },
  {
    provinsi: "Bengkulu",
    items: [
      "Kabupaten Bengkulu", "Kabupaten Kaur", "Kabupaten Kepahiang", "Kabupaten Lebong",
      "Kabupaten Mukomuko", "Kabupaten Rejang Lebong", "Kabupaten Seluma", "Kota Bengkulu", "Kota Curup"
    ]
  },
  {
    provinsi: "Sumatera Selatan",
    items: [
      "Kabupaten Banyuasin", "Kabupaten Empat Lawang", "Kabupaten Lahat", "Kabupaten Muara Enim",
      "Kabupaten Musi Banyuasin", "Kabupaten Musi Rawas", "Kabupaten Musi Rawas Utara", "Kabupaten Ogan Ilir",
      "Kabupaten Ogan Komering", "Kabupaten Penukal Abab Lematang Ilir", "Kota Lubuklinggau",
      "Kota Pagar Alam", "Kota Palembang", "Kota Prabumulih", "Kota Sekayu"
    ]
  },
  {
    provinsi: "Bangka Belitung",
    items: [
      "Kabupaten Bangka", "Kabupaten Bangka Barat", "Kabupaten Bangka Selatan", "Kabupaten Bangka Tengah",
      "Kabupaten Belitung", "Kabupaten Belitung Timur", "Kota Pangkal Pinang"
    ]
  },
  {
    provinsi: "Lampung",
    items: [
      "Kabupaten Lampung Barat", "Kabupaten Lampung Selatan", "Kabupaten Lampung Tengah",
      "Kabupaten Lampung Timur", "Kabupaten Lampung Utara", "Kabupaten Mesuji", "Kabupaten Pesawaran",
      "Kabupaten Pesisir Barat", "Kabupaten Pringsewu", "Kabupaten Tanggamus", "Kabupaten Tulang Bawang",
      "Kabupaten Way Kanan", "Kota Bandar Lampung", "Kota Metro"
    ]
  },
  {
    provinsi: "Banten",
    items: [
      "Kabupaten Lebak", "Kabupaten Pandeglang", "Kabupaten Serang", "Kabupaten Tangerang",
      "Kota Cilegon", "Kota Serang", "Kota Tangerang", "Kota Tangerang Selatan"
    ]
  },
  {
    provinsi: "Jawa Barat",
    items: [
      "Kabupaten Bandung", "Kabupaten Bandung Barat", "Kabupaten Bekasi", "Kabupaten Bogor",
      "Kabupaten Ciamis", "Kabupaten Cianjur", "Kabupaten Cirebon", "Kabupaten Garut",
      "Kabupaten Indramayu", "Kabupaten Karawang", "Kabupaten Kuningan", "Kabupaten Majalengka",
      "Kabupaten Pangandaran", "Kabupaten Purwakarta", "Kabupaten Subang", "Kabupaten Sukabumi",
      "Kabupaten Sumedang", "Kabupaten Tasikmalaya", "Kota Bandung", "Kota Banjar", "Kota Bekasi",
      "Kota Bogor", "Kota Cimahi", "Kota Cirebon", "Kota Depok", "Kota Sukabumi", "Kota Tasikmalaya",
      "Kota Cikarang", "Kota Karawang", "Kota Cikampek", "Kota Ciamis", "Kota Cianjur",
      "Kota Garut", "Kota Indramayu", "Kota Kuningan", "Kota Majalengka", "Kota Pangandaran",
      "Kota Purwakarta", "Kota Subang", "Kota Sumedang"
    ]
  },
  {
    provinsi: "Jawa Tengah",
    items: [
      "Kabupaten Banjarnegara", "Kabupaten Banyumas", "Kabupaten Batang", "Kabupaten Blora",
      "Kabupaten Boyolali", "Kabupaten Brebes", "Kabupaten Cilacap", "Kabupaten Demak",
      "Kabupaten Grobogan", "Kabupaten Jepara", "Kabupaten Karanganyar", "Kabupaten Kebumen",
      "Kabupaten Kendal", "Kabupaten Klaten", "Kabupaten Kudus", "Kabupaten Magelang",
      "Kabupaten Pati", "Kabupaten Pekalongan", "Kabupaten Pemalang", "Kabupaten Purbalingga",
      "Kabupaten Purworejo", "Kabupaten Rembang", "Kabupaten Semarang", "Kabupaten Sragen",
      "Kabupaten Sukoharjo", "Kabupaten Tegal", "Kabupaten Temanggung", "Kabupaten Wonogiri",
      "Kabupaten Wonosobo", "Kota Magelang", "Kota Pekalongan", "Kota Salatiga", "Kota Semarang",
      "Kota Surakarta", "Kota Tegal", "Kota Cepu", "Kota Banjarnegara", "Kota Purwokerto",
      "Kota Batang", "Kota Blora", "Kota Boyolali", "Kota Brebes", "Kota Cilacap", "Kota Demak",
      "Kota Grobogan", "Kota Jepara", "Kota Karanganyar", "Kota Kebumen", "Kota Kendal",
      "Kota Klaten", "Kota Kudus", "Kota Pati", "Kota Pemalang", "Kota Purbalingga",
      "Kota Purworejo", "Kota Rembang", "Kota Sragen", "Kota Temanggung", "Kota Wonogiri", "Kota Wonosobo"
    ]
  },
  {
    provinsi: "DKI Jakarta",
    items: [
      "Kota Administrasi Jakarta Barat", "Kota Administrasi Jakarta Pusat",
      "Kota Administrasi Jakarta Selatan", "Kota Administrasi Jakarta Timur",
      "Kota Administrasi Jakarta Utara"
    ]
  },
  {
    provinsi: "D.I. Yogyakarta",
    items: [
      "Kabupaten Bantul", "Kabupaten Gunungkidul", "Kabupaten Kulon Progo",
      "Kabupaten Sleman", "Kota Yogyakarta"
    ]
  },
  {
    provinsi: "Jawa Timur",
    items: [
      "Madura", "Kabupaten Banyuwangi", "Kabupaten Blitar", "Kabupaten Bojonegoro",
      "Kabupaten Bondowoso", "Kabupaten Gresik", "Kabupaten Jember", "Kabupaten Jombang",
      "Kabupaten Kediri", "Kabupaten Lamongan", "Kabupaten Lumajang", "Kabupaten Madiun",
      "Kabupaten Magetan", "Kabupaten Malang", "Kabupaten Mojokerto", "Kabupaten Nganjuk",
      "Kabupaten Ngawi", "Kabupaten Pacitan", "Kabupaten Pasuruan", "Kabupaten Ponorogo",
      "Kabupaten Probolinggo", "Kabupaten Sidoarjo", "Kabupaten Situbondo", "Kabupaten Sumenep",
      "Kabupaten Trenggalek", "Kabupaten Tuban", "Kabupaten Tulungagung", "Kota Batu",
      "Kota Blitar", "Kota Kediri", "Kota Madiun", "Kota Malang", "Kota Mojokerto",
      "Kota Pasuruan", "Kota Probolinggo", "Kota Surabaya", "Kota Gresik", "Kota Bojonegoro",
      "Kota Pacitan", "Kota Tulungagung", "Kota Mojoagung", "Kota Ngawi", "Kota Nganjuk",
      "Kota Sidoarjo", "Kota Lumajang", "Kota Jombang"
    ]
  },
  {
    provinsi: "Bali",
    items: [
      "Kabupaten Badung", "Kabupaten Bangli", "Kabupaten Buleleng", "Kabupaten Gianyar",
      "Kabupaten Jembrana", "Kabupaten Karangasem", "Kabupaten Klungkung", "Kabupaten Tabanan",
      "Kota Denpasar"
    ]
  },
  {
    provinsi: "Nusa Tenggara Barat",
    items: [
      "Kabupaten Bima", "Pulau Dompu", "Kabupaten Lombok", "Kabupaten Sumbawa",
      "Kabupaten Sumbawa Barat", "Kota Bima", "Kota Mataram"
    ]
  },
  {
    provinsi: "Nusa Tenggara Timur",
    items: [
      "Kabupaten Alor", "Kabupaten Belu", "Kabupaten Ende", "Kabupaten Flores Timur",
      "Kabupaten Kupang", "Kabupaten Lembata", "Kabupaten Malaka", "Kabupaten Manggarai",
      "Kabupaten Ngada", "Kabupaten Nagekeo", "Kabupaten Sabu Raijua", "Kabupaten Sikka",
      "Kabupaten Sumba", "Kabupaten Timor", "Kota Kupang"
    ]
  },
  {
    provinsi: "Kalimantan Barat",
    items: [
      "Kabupaten Bengkayang", "Kabupaten Kapuas Hulu", "Kabupaten Kayong Utara", "Kabupaten Ketapang",
      "Kabupaten Kubu Raya", "Kabupaten Landak", "Kabupaten Melawi", "Kabupaten Mempawah",
      "Kabupaten Sambas", "Kabupaten Sanggau", "Kabupaten Sekadau", "Kabupaten Sintang",
      "Kota Pontianak", "Kota Singkawang"
    ]
  },
  {
    provinsi: "Kalimantan Selatan",
    items: [
      "Kabupaten Balangan", "Kabupaten Banjar", "Kabupaten Barito Kuala", "Kabupaten Hulu Sungai Selatan",
      "Kabupaten Hulu Sungai Tengah", "Kabupaten Hulu Sungai Utara", "Kabupaten Kotabaru",
      "Kabupaten Tabalong", "Kabupaten Tanah Bumbu", "Kabupaten Tanah Laut", "Kabupaten Tapin",
      "Kota Banjarbaru", "Kota Banjarmasin"
    ]
  },
  {
    provinsi: "Kalimantan Tengah",
    items: [
      "Kabupaten Barito Selatan", "Kabupaten Barito Timur", "Kabupaten Barito Utara",
      "Kabupaten Gunung Mas", "Kabupaten Kapuas", "Kabupaten Katingan", "Kabupaten Kotawaringin Barat",
      "Kabupaten Kotawaringin Timur", "Kabupaten Lamandau", "Kabupaten Murung Raya",
      "Kabupaten Pulang Pisau", "Kabupaten Sukamara", "Kabupaten Seruyan", "Kota Palangka Raya"
    ]
  },
  {
    provinsi: "Kalimantan Timur",
    items: [
      "Kabupaten Berau", "Kabupaten Kutai Barat", "Kabupaten Kutai Kartanegara", "Kabupaten Kutai Timur",
      "Kabupaten Mahakam Ulu", "Kabupaten Paser", "Kabupaten Penajam Paser Utara", "Kota Balikpapan",
      "Kota Bontang", "Kota Samarinda", "Melak"
    ]
  },
  {
    provinsi: "Kalimantan Utara",
    items: [
      "Kabupaten Bulungan", "Kabupaten Malinau", "Kabupaten Nunukan", "Kabupaten Tana Tidung",
      "Kota Tarakan"
    ]
  },
  {
    provinsi: "Gorontalo",
    items: [
      "Kabupaten Boalemo", "Kabupaten Bone Bolango", "Kabupaten Gorontalo", "Kabupaten Pohuwato",
      "Kota Gorontalo"
    ]
  },
  {
    provinsi: "Sulawesi Selatan",
    items: [
      "Kabupaten Bantaeng", "Kabupaten Barru", "Kabupaten Bone", "Kabupaten Bulukumba",
      "Kabupaten Enrekang", "Kabupaten Gowa", "Kabupaten Jeneponto", "Kabupaten Luwu",
      "Kabupaten Maros", "Kabupaten Pangkajene dan Kepulauan", "Kabupaten Pinrang",
      "Kabupaten Sidenreng Rappang", "Kabupaten Sinjai", "Kabupaten Soppeng", "Kabupaten Takalar",
      "Kabupaten Tana Toraja", "Kabupaten Toraja Utara", "Kabupaten Wajo", "Kota Makassar",
      "Kota Palopo", "Kota Parepare"
    ]
  },
  {
    provinsi: "Sulawesi Tenggara",
    items: [
      "Kabupaten Bombana", "Kabupaten Buton", "Kabupaten Kolaka", "Kabupaten Konawe",
      "Kabupaten Muna", "Kabupaten Wakatobi", "Kota Bau-Bau", "Kota Kendari"
    ]
  },
  {
    provinsi: "Sulawesi Tengah",
    items: [
      "Kabupaten Banggai", "Kabupaten Buol", "Kabupaten Donggala", "Kabupaten Morowali",
      "Kabupaten Morowali Utara", "Kabupaten Parigi Moutong", "Kabupaten Poso", "Kabupaten Sigi",
      "Kabupaten Tojo Una-Una", "Kabupaten Toli-Toli", "Bungku Tengah", "Kolonodale", "Kota Palu"
    ]
  },
  {
    provinsi: "Sulawesi Utara",
    items: [
      "Kabupaten Bolaang Mongondow", "Kabupaten Minahasa", "Kota Bitung", "Kota Kotamobagu",
      "Kota Manado", "Kota Tomohon", "Kota Tondano"
    ]
  },
  {
    provinsi: "Sulawesi Barat",
    items: [
      "Kabupaten Majene", "Kabupaten Mamasa", "Kabupaten Mamuju", "Kabupaten Polewali Mandar",
      "Kota Mamuju"
    ]
  },
  {
    provinsi: "Maluku",
    items: [
      "Kabupaten Seram", "Kota Ambon", "Kota Tual"
    ]
  },
  {
    provinsi: "Maluku Utara",
    items: [
      "Kabupaten Halmahera Barat", "Kabupaten Halmahera Tengah", "Kabupaten Halmahera Utara",
      "Kabupaten Halmahera Selatan", "Kabupaten Kepulauan Sula", "Kabupaten Halmahera Timur",
      "Kabupaten Pulau Morotai", "Kabupaten Pulau Taliabu", "Kota Ternate", "Kota Tidore Kepulauan",
      "Kota Jailolo", "Kota Weda"
    ]
  },
  {
    provinsi: "Papua",
    items: [
      "Kabupaten Jayapura", "Kabupaten Merauke", "Kabupaten Mimika", "Kabupaten Nabire",
      "Kota Jayapura", "Kota Timika"
    ]
  },
  {
    provinsi: "Papua Barat",
    items: [
      "Kabupaten Manokwari", "Kabupaten Sorong", "Kabupaten Teluk Bintuni"
    ]
  }
];

function determineCluster(nama, prov) {
  const n = nama.toLowerCase();
  const p = prov.toLowerCase();

  // Migas / Tambang
  if (
    n.includes("bontang") || n.includes("sangatta") || n.includes("lhokseumawe") ||
    n.includes("aceh utara") || n.includes("aceh timur") || n.includes("aceh tamiang") ||
    n.includes("langkat") || n.includes("pangkalan brandan") || n.includes("dumai") ||
    n.includes("bengkalis") || n.includes("rokan") || n.includes("muara enim") ||
    n.includes("musi banyuasin") || n.includes("sekayu") || n.includes("prabumulih") ||
    n.includes("bojonegoro") || n.includes("tuban") || n.includes("cepu") ||
    n.includes("balikpapan") || n.includes("kutai timur") || n.includes("kutai kartanegara") ||
    n.includes("penajam") || n.includes("tarakan") || n.includes("sorong") ||
    n.includes("teluk bintuni") || n.includes("morowali") || n.includes("mimika") ||
    n.includes("timika") || n.includes("weda") || n.includes("halmahera tengah") ||
    n.includes("berau") || n.includes("tabalong") || n.includes("tanah bumbu") ||
    n.includes("kotawaringin") || n.includes("sawahlunto")
  ) {
    return "migas";
  }

  // Manufaktur / Industri
  if (
    n.includes("cikarang") || n.includes("karawang") || n.includes("cikampek") ||
    n.includes("bekasi") || n.includes("tangerang") || n.includes("cilegon") ||
    n.includes("serang") || n.includes("gresik") || n.includes("sidoarjo") ||
    n.includes("surabaya") || n.includes("pasuruan") || n.includes("mojokerto") ||
    n.includes("batam") || n.includes("medan") || n.includes("deli serdang") ||
    n.includes("asahan") || n.includes("batubara") || n.includes("sei semangkei") ||
    n.includes("semarang") || n.includes("kendal") || n.includes("kudus") ||
    n.includes("jepara") || n.includes("purwakarta") || n.includes("cimahi") ||
    n.includes("bitung") || n.includes("makassar")
  ) {
    return "manufaktur";
  }

  // Konstruksi / Infrastruktur & Pembangunan
  if (
    n.includes("jakarta") || n.includes("bandung") || n.includes("yogyakarta") ||
    n.includes("sleman") || n.includes("kulon progo") || n.includes("badung") ||
    n.includes("denpasar") || n.includes("jayapura") || n.includes("manokwari") ||
    n.includes("ikn") || n.includes("bogor") || n.includes("depok")
  ) {
    return "konstruksi";
  }

  return "umum";
}

// Approximate lat/lng center for Indonesian provinces/cities
const provCoordinates = {
  "Aceh": { lat: 4.6951, lng: 96.7494 },
  "Sumatera Utara": { lat: 2.1154, lng: 99.5451 },
  "Sumatera Barat": { lat: -0.7399, lng: 100.8000 },
  "Riau": { lat: 0.5071, lng: 101.4478 },
  "Kepulauan Riau": { lat: 3.9456, lng: 108.1428 },
  "Jambi": { lat: -1.4852, lng: 102.4381 },
  "Bengkulu": { lat: -3.5778, lng: 102.3464 },
  "Sumatera Selatan": { lat: -3.3199, lng: 104.9147 },
  "Bangka Belitung": { lat: -2.7411, lng: 106.4406 },
  "Lampung": { lat: -4.5586, lng: 105.4068 },
  "Banten": { lat: -6.4058, lng: 106.0640 },
  "Jawa Barat": { lat: -6.9175, lng: 107.6191 },
  "Jawa Tengah": { lat: -7.1510, lng: 110.1403 },
  "DKI Jakarta": { lat: -6.2088, lng: 106.8456 },
  "D.I. Yogyakarta": { lat: -7.7956, lng: 110.3695 },
  "Jawa Timur": { lat: -7.5360, lng: 112.2384 },
  "Bali": { lat: -8.4095, lng: 115.1889 },
  "Nusa Tenggara Barat": { lat: -8.6529, lng: 117.3616 },
  "Nusa Tenggara Timur": { lat: -8.6574, lng: 121.0794 },
  "Kalimantan Barat": { lat: -0.2787, lng: 111.4753 },
  "Kalimantan Selatan": { lat: -3.0926, lng: 115.2838 },
  "Kalimantan Tengah": { lat: -1.6815, lng: 113.3824 },
  "Kalimantan Timur": { lat: 0.5387, lng: 116.4194 },
  "Kalimantan Utara": { lat: 3.0731, lng: 116.0414 },
  "Gorontalo": { lat: 0.6999, lng: 122.4467 },
  "Sulawesi Selatan": { lat: -3.6687, lng: 119.9740 },
  "Sulawesi Tenggara": { lat: -4.1449, lng: 122.1746 },
  "Sulawesi Tengah": { lat: -1.4300, lng: 121.4456 },
  "Sulawesi Utara": { lat: 1.2596, lng: 124.8428 },
  "Sulawesi Barat": { lat: -2.8441, lng: 119.2321 },
  "Maluku": { lat: -3.2385, lng: 130.1453 },
  "Maluku Utara": { lat: 1.5709, lng: 127.8087 },
  "Papua": { lat: -4.2699, lng: 138.0804 },
  "Papua Barat": { lat: -1.3361, lng: 133.1747 }
};

function getJenis(nama) {
  if (nama.startsWith("Kabupaten ")) return "kabupaten";
  if (nama.startsWith("Kota Administrasi ")) return "kota";
  if (nama.startsWith("Kota ")) return "kota";
  return "lainnya";
}

function cleanName(nama) {
  return nama
    .replace(/^Kabupaten\s+/i, '')
    .replace(/^Kota Administrasi\s+/i, '')
    .replace(/^Kota\s+/i, '')
    .trim();
}

function baseSlug(nama) {
  return cleanName(nama)
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const seenSlugs = new Set();
const seenRawNames = new Set();
const finalKotaList = [];
const collisionsReport = [];

rawProvinces.forEach(p => {
  p.items.forEach(rawNama => {
    // Deduplicate exact same string within province/raw list
    const nameKey = `${p.provinsi}:${rawNama}`;
    if (seenRawNames.has(nameKey)) return;
    seenRawNames.add(nameKey);

    let slug = baseSlug(rawNama);
    const jenis = getJenis(rawNama);

    // Collision handling for duplicate slugs
    if (seenSlugs.has(slug)) {
      // Disambiguate with prefix or province modifier
      if (jenis === "kabupaten") {
        slug = `kab-${slug}`;
      } else if (jenis === "kota") {
        slug = `kota-${slug}`;
      } else {
        const provSlug = p.provinsi.toLowerCase().replace(/\s+/g, '-');
        slug = `${slug}-${provSlug}`;
      }

      if (seenSlugs.has(slug)) {
        const provSlug = p.provinsi.toLowerCase().replace(/\s+/g, '-');
        slug = `${slug}-${provSlug}`;
      }

      collisionsReport.push({ originalNama: rawNama, provinsi: p.provinsi, finalSlug: slug });
    }

    seenSlugs.add(slug);

    const baseCoords = provCoordinates[p.provinsi] || { lat: -2.5489, lng: 118.0149 };
    // Small deterministic offset based on slug to spread points on map
    const hash = [...slug].reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const latOffset = ((hash % 100) - 50) * 0.03;
    const lngOffset = (((hash * 7) % 100) - 50) * 0.03;

    finalKotaList.push({
      nama: rawNama,
      slug: slug,
      provinsi: p.provinsi,
      jenis: jenis,
      cluster: determineCluster(rawNama, p.provinsi),
      lat: Number((baseCoords.lat + latOffset).toFixed(4)),
      lng: Number((baseCoords.lng + lngOffset).toFixed(4))
    });
  });
});

console.log(`Successfully generated ${finalKotaList.length} total unique city/regency entries.`);
console.log(`Handled ${collisionsReport.length} slug disambiguations.`);

const clusterCounts = { migas: 0, manufaktur: 0, konstruksi: 0, umum: 0 };
finalKotaList.forEach(k => clusterCounts[k.cluster]++);
console.log("Cluster distribution:", clusterCounts);

fs.writeFileSync(path.join(__dirname, '../data/kota.json'), JSON.stringify(finalKotaList, null, 2), 'utf8');
console.log("Updated data/kota.json file.");
