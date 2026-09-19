const fs = require('fs');
const path = require('path');

const inputDataBatch2 = [
  {
    "slug": "pakpak-bharat",
    "nama": "Kabupaten Pakpak Bharat",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Kerajaan",
      "Pagindar",
      "Pergetteng Getteng Sintanghar",
      "Salak",
      "Siempat Rube",
      "Sitellu Tali Urang Jehe",
      "Sitellu Tali Urang Julu",
      "Tinada"
    ]
  },
  {
    "slug": "samosir",
    "nama": "Kabupaten Samosir",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Harian",
      "Nainggolan",
      "Onan Runggu",
      "Palipi",
      "Pangururan",
      "Ronggur Nihuta",
      "Sianjur Bara Mula",
      "Simanindo",
      "Sitiotio"
    ]
  },
  {
    "slug": "serdang-bedagai",
    "nama": "Kabupaten Serdang Bedagai",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Bandar Khalipah",
      "Bintang Bayu",
      "Dolok Masihul",
      "Dolok Merawan",
      "Kotarih",
      "Pantai Cermin",
      "Pegajahan",
      "Perbaungan",
      "Sei Bamban",
      "Sei Rampah",
      "Serba Jadi",
      "Silinda",
      "Spispis",
      "Tanjung Beringin",
      "Tebing Syahbandar",
      "Tebing Tinggi",
      "Teluk Mengkudu"
    ]
  },
  {
    "slug": "simalungun",
    "nama": "Kabupaten Simalungun",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Bandar",
      "Bandar Huluan",
      "Bandar Masilam",
      "Bosar Maligas",
      "Dolok Batu Nanggar",
      "Dolok Panribuan",
      "Dolok Silau",
      "Girsang Sipangan Bolon",
      "Gunung Malela",
      "Gunung Maligas",
      "Haranggaol Horison",
      "Hatonduhan",
      "Hutabayuraza",
      "Jawa Maraja Bah Jambi",
      "Jorlang Hataran",
      "Panei",
      "Panombeian Panei",
      "Pematang Bandar",
      "Pematang Sidamanik",
      "Pematang Silimahuta",
      "Purba",
      "Raya",
      "Raya Kahean",
      "Siantar",
      "Sidamanik",
      "Silimakuta",
      "Silau Kahean",
      "Tanah Jawa",
      "Tapian Dolok",
      "Ujung Padang"
    ]
  },
  {
    "slug": "tapanuli-selatan",
    "nama": "Kabupaten Tapanuli Selatan",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Aek Bilah",
      "Angkola Barat",
      "Angkola Muara Tais",
      "Angkola Sangkunur",
      "Angkola Selatan",
      "Angkola Timur",
      "Batang Angkola",
      "Batang Toru",
      "Marancar",
      "Muara Batang Toru",
      "Saipar Dolok Hole",
      "Sayur Matinggi",
      "Sipirok",
      "Tantam",
      "Tantom Angkola"
    ]
  },
  {
    "slug": "tapanuli-tengah",
    "nama": "Kabupaten Tapanuli Tengah",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Andam Dewi",
      "Badiri",
      "Barus",
      "Barus Utara",
      "Kolang",
      "Lumut",
      "Manduamas",
      "Pandaribu",
      "Passir Limau Kapas",
      "Passork",
      "Pinangsori",
      "Sarudik",
      "Sibabangun",
      "Sirandorung",
      "Sorkam",
      "Sorkam Barat",
      "Sosorgadong",
      "Sukabangun",
      "Tapian Nauli",
      "Tukka"
    ]
  },
  {
    "slug": "tapanuli-utara",
    "nama": "Kabupaten Tapanuli Utara",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Adian Koting",
      "Garoga",
      "Muara",
      "Pangururan",
      "Pahae Jae",
      "Pahae Julu",
      "Pangaribuan",
      "Parmonangan",
      "Purba Tua",
      "Siatas Barita",
      "Siborongborong",
      "Simangumban",
      "Sipahutar",
      "Sipoholon",
      "Tarutung"
    ]
  },
  {
    "slug": "toba",
    "nama": "Kabupaten Toba",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Ajibata",
      "Balige",
      "Borbor",
      "Habinsaran",
      "Lagu Boti",
      "Lumban Julu",
      "Nassau",
      "Parmaksian",
      "Pintu Pohan Meranti",
      "Porsea",
      "Siantar Narumonda",
      "Sigumpar",
      "Silaen",
      "Tampahan",
      "Uluan"
    ]
  },
  {
    "slug": "padang-lawas",
    "nama": "Kabupaten Padang Lawas",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Aek Nabara Barumun",
      "Barumun",
      "Barumun Baru",
      "Barumun Barat",
      "Barumun Selatan",
      "Barumun Tengah",
      "Batang Lubu Sutam",
      "Huristak",
      "Hutaraja Tinggi",
      "Lubuk Barumun",
      "Sosa",
      "Sosa Timur",
      "Sosa Julu",
      "Sosa Barat",
      "Sosa Timur",
      "Ulu Barumun"
    ]
  },
  {
    "slug": "padang-lawas-utara",
    "nama": "Kabupaten Padang Lawas Utara",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Batang Onang",
      "Dolok",
      "Dolok Sigompulon",
      "Halongonan",
      "Halongonan Timur",
      "Padang Bolak",
      "Padang Bolak Julu",
      "Padang Bolak Tenggara",
      "Portibi",
      "Simangambat",
      "Ujung Batu"
    ]
  },
  {
    "slug": "nias-barat",
    "nama": "Kabupaten Nias Barat",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Lahomi",
      "Lolofitu Moi",
      "Mandarrehe",
      "Mandarrehe Barat",
      "Mandarrehe Utara",
      "Moro'o",
      "Sirombu",
      "Ulu Moro'o"
    ]
  },
  {
    "slug": "nias-selatan",
    "nama": "Kabupaten Nias Selatan",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Amandraya",
      "Aramo",
      "Boronadu",
      "Fanayama",
      "Gomo",
      "Hibala",
      "Hilimegai",
      "Hilisalawa'ahe",
      "Huruna",
      "Luahagundre Maniamolo",
      "Maniamolo",
      "Mazino",
      "Mazo",
      "Onolalu",
      "Pulau-Pulau Batu",
      "Pulau-Pulau Batu Barat",
      "Pulau-Pulau Batu Utara",
      "Pulau-Pulau Batu Timur",
      "Sidua'ori",
      "Simuk",
      "Somaambawa",
      "Teluk Dalam",
      "Toma",
      "Ulunoyo",
      "Ulu Idanotae"
    ]
  },
  {
    "slug": "nias-utara",
    "nama": "Kabupaten Nias Utara",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Afulu",
      "Alasa",
      "Alasa Kita",
      "Lahewa",
      "Lahewa Timur",
      "Lotu",
      "Namohalu Esiwa",
      "Sawo",
      "Sitolu Ori",
      "Tugala Oyo"
    ]
  },
  {
    "slug": "gunungsitoli",
    "nama": "Kota Gunungsitoli",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Gunungsitoli",
      "Gunungsitoli Barat",
      "Gunungsitoli Selatan",
      "Gunungsitoli Utara",
      "Gunungsitoli Alo'oa",
      "Gunungsitoli Idanoi"
    ]
  },
  {
    "slug": "kepulauan-mentawai",
    "nama": "Kabupaten Kepulauan Mentawai",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "Pagai Selatan",
      "Pagai Utara",
      "Siberut Barat",
      "Siberut Barat Daya",
      "Siberut Selatan",
      "Siberut Tengah",
      "Siberut Utara",
      "Sikakap",
      "Sipora Selatan",
      "Sipora Utara"
    ]
  },
  {
    "slug": "gunung-mas",
    "nama": "Kabupaten Gunung Mas",
    "provinsi": "Provinsi Kalimantan Tengah",
    "kecamatan": [
      "Damang Batu",
      "Kahayan Hulu Utara",
      "Kurun",
      "Manuhing",
      "Manuhing Raya",
      "Miri Manasa",
      "Rungan",
      "Rungan Barat",
      "Rungan Hulu",
      "Sepang",
      "Tewah",
      "Tewang Sangalang Garing"
    ]
  },
  {
    "slug": "katingan",
    "nama": "Kabupaten Katingan",
    "provinsi": "Provinsi Kalimantan Tengah",
    "kecamatan": [
      "Bukit Raya",
      "Kamipang",
      "Katingan Hilir",
      "Katingan Hulu",
      "Katingan Kuala",
      "Katingan Tengah",
      "Marikit",
      "Mendawai",
      "Petak Malai",
      "Sanaman Mantikei",
      "Tasik Payawan",
      "Tewang Sangalang Garing"
    ]
  },
  {
    "slug": "lamandau",
    "nama": "Kabupaten Lamandau",
    "provinsi": "Provinsi Kalimantan Tengah",
    "kecamatan": [
      "Batang Kawa",
      "Belantikan Raya",
      "Bulik",
      "Bulik Timur",
      "Delang",
      "Lamandau",
      "Menthobi Raya",
      "Semenamu"
    ]
  },
  {
    "slug": "murung-raya",
    "nama": "Kabupaten Murung Raya",
    "provinsi": "Provinsi Kalimantan Tengah",
    "kecamatan": [
      "Barito Tuhup Raya",
      "Laung Tuhup",
      "Murung",
      "Permata Intan",
      "Seribu Riam",
      "Sumber Barito",
      "Sungai Babuat",
      "Tanah Siang",
      "Tanah Siang Selatan",
      "Uut Murung"
    ]
  },
  {
    "slug": "pulang-pisau",
    "nama": "Kabupaten Pulang Pisau",
    "provinsi": "Provinsi Kalimantan Tengah",
    "kecamatan": [
      "Banama Tingang",
      "Jabiren Raya",
      "Kahayan Hilir",
      "Kahayan Kuala",
      "Kahayan Tengah",
      "Maliku",
      "Pandih Batu",
      "Sebangau Kuala"
    ]
  },
  {
    "slug": "sukamara",
    "nama": "Kabupaten Sukamara",
    "provinsi": "Provinsi Kalimantan Tengah",
    "kecamatan": [
      "Balai Riam",
      "Jelai",
      "Permata Kecil",
      "Sukamara",
      "Pantai Lunci"
    ]
  },
  {
    "slug": "seruyan",
    "nama": "Kabupaten Seruyan",
    "provinsi": "Provinsi Kalimantan Tengah",
    "kecamatan": [
      "Batu Ampar",
      "Danau Sembuluh",
      "Danau Seluluk",
      "Hanau",
      "Seruyan Hilir",
      "Seruyan Hilir Timur",
      "Seruyan Hulu",
      "Seruyan Raya",
      "Seruyan Tengah",
      "Suling Tambun"
    ]
  },
  {
    "slug": "mahakam-ulu",
    "nama": "Kabupaten Mahakam Ulu",
    "provinsi": "Provinsi Kalimantan Timur",
    "kecamatan": [
      "Laham",
      "Long Apari",
      "Long Bagun",
      "Long Hubung",
      "Long Pahangai"
    ]
  },
  {
    "slug": "paser",
    "nama": "Kabupaten Paser",
    "provinsi": "Provinsi Kalimantan Timur",
    "kecamatan": [
      "Batu Engau",
      "Batu Sopang",
      "Kuaro",
      "Long Ikis",
      "Long Kali",
      "Muara Komam",
      "Muara Samu",
      "Pasir Belengkong",
      "Tanah Grogot",
      "Tanjung Harapan"
    ]
  },
  {
    "slug": "bulungan",
    "nama": "Kabupaten Bulungan",
    "provinsi": "Provinsi Kalimantan Utara",
    "kecamatan": [
      "Bunyu",
      "Pulasari",
      "Sekatak",
      "Tanjung Palas",
      "Tanjung Palas Barat",
      "Tanjung Palas Hilir",
      "Tanjung Palas Tengah",
      "Tanjung Palas Timur",
      "Tanjung Selor"
    ]
  },
  {
    "slug": "malinau",
    "nama": "Kabupaten Malinau",
    "provinsi": "Provinsi Kalimantan Utara",
    "kecamatan": [
      "Bahau Hulu",
      "Kayan Hilir",
      "Kayan Selatan",
      "Kayan Hulu",
      "Malinau Barat",
      "Malinau Kota",
      "Malinau Selatan",
      "Malinau Selatan Hilir",
      "Malinau Selatan Hulu",
      "Malinau Utara",
      "Mentarang",
      "Mentarang Hulu",
      "Pujungan",
      "Sungai Boh",
      "Sungai Tubu"
    ]
  },
  {
    "slug": "nunukan",
    "nama": "Kabupaten Nunukan",
    "provinsi": "Provinsi Kalimantan Utara",
    "kecamatan": [
      "Krayan",
      "Krayan Barat",
      "Krayan Selatan",
      "Krayan Tengah",
      "Krayan Timur",
      "Lumbis",
      "Lumbis Ogong",
      "Lumbis Pansiangan",
      "Lumbis Hulu",
      "Nunukan",
      "Nunukan Selatan",
      "Sebuku",
      "Sei Menggaris",
      "Sembakung",
      "Sembakung Atulai",
      "Tulin Onsoi"
    ]
  },
  {
    "slug": "tana-tidung",
    "nama": "Kabupaten Tana Tidung",
    "provinsi": "Provinsi Kalimantan Utara",
    "kecamatan": [
      "Betayau",
      "Muruk Rian",
      "Sesayap",
      "Sesayap Hilir",
      "Tana Lia"
    ]
  },
  {
    "slug": "boalemo",
    "nama": "Kabupaten Boalemo",
    "provinsi": "Provinsi Gorontalo",
    "kecamatan": [
      "Botumoito",
      "Dulupi",
      "Mananggu",
      "Paguyaman",
      "Paguyaman Pantai",
      "Wonosari",
      "Tilamuta"
    ]
  },
  {
    "slug": "bone-bolango",
    "nama": "Kabupaten Bone Bolango",
    "provinsi": "Provinsi Gorontalo",
    "kecamatan": [
      "Bonedaa",
      "Botupingge",
      "Bulango Selatan",
      "Bulango Timur",
      "Bulango Ulun",
      "Bulango Utara",
      "Bulawa",
      "Kabila",
      "Kabila Bone",
      "Pinogu",
      "Suwawa",
      "Suwawa Selatan",
      "Suwawa Tengah",
      "Suwawa Timur",
      "Tapa",
      "Tilongkabila",
      "Tombulilato"
    ]
  },
  {
    "slug": "gorontalo-kab",
    "nama": "Kabupaten Gorontalo",
    "provinsi": "Provinsi Gorontalo",
    "kecamatan": [
      "Asparaga",
      "Dungaliyo",
      "Batia",
      "Bongomeme",
      "Limboto",
      "Limboto Barat",
      "Mootilango",
      "Pulubala",
      "Sawoo",
      "Telaga",
      "Telaga Biru",
      "Telaga Jaya",
      "Tibawa",
      "Tilango",
      "Tolangohula"
    ]
  },
  {
    "slug": "gorontalo-utara",
    "nama": "Kabupaten Gorontalo Utara",
    "provinsi": "Provinsi Gorontalo",
    "kecamatan": [
      "Atinggola",
      "Biau",
      "Gentuma Raya",
      "Kwandang",
      "Monano",
      "Ponelo Kepulauan",
      "Sumalata",
      "Sumalata Timur",
      "Tolinggula",
      "Tomilito"
    ]
  },
  {
    "slug": "pohuwato",
    "nama": "Kabupaten Pohuwato",
    "provinsi": "Provinsi Gorontalo",
    "kecamatan": [
      "Buntulia",
      "Dengilo",
      "Duhiadaa",
      "Lemito",
      "Marisa",
      "Paguat",
      "Patilanggio",
      "Popayato",
      "Popayato Barat",
      "Popayato Timur",
      "Randangan",
      "Taluditi"
    ]
  },
  {
    "slug": "majene",
    "nama": "Kabupaten Majene",
    "provinsi": "Provinsi Sulawesi Barat",
    "kecamatan": [
      "Banggae",
      "Banggae Timur",
      "Malunda",
      "Pamboang",
      "Sendana",
      "Tammerodo Sendana",
      "Tubo Sendana",
      "Ulumanda"
    ]
  },
  {
    "slug": "mamasa",
    "nama": "Kabupaten Mamasa",
    "provinsi": "Provinsi Sulawesi Barat",
    "kecamatan": [
      "Aralle",
      "Balla",
      "Bambang",
      "Buntumalangka",
      "Mambi",
      "Mamasa",
      "Messawa",
      "Nosu",
      "Pana",
      "Rantebulahan Timur",
      "Sesena Padang",
      "Sumarorong",
      "Tabang",
      "Tabulahan",
      "Tanduk Kalua",
      "Tawalian"
    ]
  },
  {
    "slug": "mamuju-tengah",
    "nama": "Kabupaten Mamuju Tengah",
    "provinsi": "Provinsi Sulawesi Barat",
    "kecamatan": [
      "Budong-Budong",
      "Karossa",
      "Pangale",
      "Tobadak",
      "Topoyo"
    ]
  },
  {
    "slug": "pasangkayu",
    "nama": "Kabupaten Pasangkayu",
    "provinsi": "Provinsi Sulawesi Barat",
    "kecamatan": [
      "Bambalamutu",
      "Bambaira",
      "Baras",
      "Bulutaba",
      "Dapurang",
      "Doripoku",
      "Lariang",
      "Pasangkayu",
      "Pedongga",
      "Sarudu",
      "Tikke Raya",
      "Lembah Tule"
    ]
  },
  {
    "slug": "polewali-mandar",
    "nama": "Kabupaten Polewali Mandar",
    "provinsi": "Provinsi Sulawesi Barat",
    "kecamatan": [
      "Anreapi",
      "Binuang",
      "Balanipa",
      "Campalagian",
      "Luyo",
      "Limboro",
      "Mapilli",
      "Matakali",
      "Matangnga",
      "Nolloc",
      "Polewali",
      "Tutar",
      "Tapango",
      "Tinambung",
      "Wonomulyo"
    ]
  },
  {
    "slug": "bombana",
    "nama": "Kabupaten Bombana",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Kabaena",
      "Kabaena Barat",
      "Kabaena Selatan",
      "Kabaena Tengah",
      "Kabaena Timur",
      "Kabaena Utara",
      "Lantari Jaya",
      "Mata Oleo",
      "Mata Usu",
      "Poleang",
      "Poleang Barat",
      "Poleang Selatan",
      "Poleang Tenggara",
      "Poleang Timur",
      "Poleang Utara",
      "Rumbia",
      "Rumbia Tengah",
      "Tontonunu"
    ]
  },
  {
    "slug": "buton",
    "nama": "Kabupaten Buton",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Kapontori",
      "Lasalimu",
      "Lasalimu Selatan",
      "Passir Limau Kapas",
      "Pasarwajo",
      "Siontapina",
      "Wabula"
    ]
  },
  {
    "slug": "buton-selatan",
    "nama": "Kabupaten Buton Selatan",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Batauga",
      "Batu Atas",
      "Kadatua",
      "Lapandewa",
      "Sampolawa",
      "Siompu",
      "Siompu Barat"
    ]
  },
  {
    "slug": "buton-tengah",
    "nama": "Kabupaten Buton Tengah",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Gu",
      "Lakudo",
      "Mawasangka",
      "Mawasangka Timur",
      "Mawasangka Tengah",
      "Sangia Wambulu",
      "Talaga Raya"
    ]
  },
  {
    "slug": "buton-utara",
    "nama": "Kabupaten Buton Utara",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Bonegunu",
      "Kulisusu",
      "Kulisusu Barat",
      "Kulisusu Utara",
      "Kambowa",
      "Rongga"
    ]
  },
  {
    "slug": "kolaka",
    "nama": "Kabupaten Kolaka",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Baula",
      "Iwoimendaa",
      "Kolaka",
      "Latambaga",
      "Polinggona",
      "Pomalaa",
      "Samaturu",
      "Toari",
      "Tanggetada",
      "Wundulako",
      "Watubangga"
    ]
  },
  {
    "slug": "kolaka-timur",
    "nama": "Kabupaten Kolaka Timur",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Aewa",
      "Dangia",
      "Lalolae",
      "Lambandia",
      "Loea",
      "Mowewe",
      "Poli Polia",
      "Tinondo",
      "Tirawuta",
      "Uesi",
      "Uluiwoi"
    ]
  },
  {
    "slug": "kolaka-utara",
    "nama": "Kabupaten Kolaka Utara",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Batu Putih",
      "Katoi",
      "Kodeoha",
      "Lambai",
      "Lasusua",
      "Ngapa",
      "Pakue",
      "Pakue Tengah",
      "Pakue Utara",
      "Rante Angin",
      "Tiwu",
      "Tolala",
      "Wawo"
    ]
  },
  {
    "slug": "konawe",
    "nama": "Kabupaten Konawe",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Abuki",
      "Amonggedo",
      "Anggaberi",
      "Anggalomoare",
      "Asinua",
      "Besulutu",
      "Bondoala",
      "Kapoiala",
      "Lalonggasumeeto",
      "Lambuya",
      "Meluhu",
      "Onembute",
      "Padangguni",
      "Pondidaha",
      "Puriala",
      "Routa",
      "Sampara",
      "Soropia",
      "Tongauna",
      "Tongauna Utara",
      "Uepai",
      "Wawotobi",
      "Wonggeduku",
      "Wonggeduku Barat"
    ]
  },
  {
    "slug": "konawe-kepulauan",
    "nama": "Kabupaten Konawe Kepulauan",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Wawonii Barat",
      "Wawonii Selatan",
      "Wawonii Tengah",
      "Wawonii Tenggara",
      "Wawonii Timur",
      "Wawonii Timur Laut",
      "Wawonii Utara"
    ]
  },
  {
    "slug": "konawe-selatan",
    "nama": "Kabupaten Konawe Selatan",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Baito",
      "Basala",
      "Benua",
      "Buke",
      "Kolono",
      "Kolono Timur",
      "Konda",
      "Lainea",
      "Lalembuu",
      "Landy",
      "Laeya",
      "Moramo",
      "Moramo Utara",
      "Mowila",
      "Palangga",
      "Palangga Selatan",
      "Ranomeeto",
      "Ranomeeto Barat",
      "Tinanggea",
      "Wolasi"
    ]
  },
  {
    "slug": "konawe-utara",
    "nama": "Kabupaten Konawe Utara",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Asera",
      "Andowia",
      "Landawe",
      "Lasolo",
      "Lasolo Kepulauan",
      "Lemu",
      "Molawe",
      "Motui",
      "Oheo",
      "Sawa",
      "Wiwirano"
    ]
  },
  {
    "slug": "muna",
    "nama": "Kabupaten Muna",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Batalaiworu",
      "Batukara",
      "Barke",
      "Duruka",
      "Kabangka",
      "Kabawo",
      "Katobu",
      "Kontunaga",
      "Kusambi",
      "Lasalepa",
      "Lawa",
      "LOHIA",
      "Maligano",
      "Marobo",
      "Napabalano",
      "Pariwisata",
      "Pasir Putih",
      "Tongkuno",
      "Tongkuno Selatan",
      "Towea",
      "Wadaga",
      "Watopute"
    ]
  },
  {
    "slug": "muna-barat",
    "nama": "Kabupaten Muna Barat",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Barangka",
      "Kusambi",
      "Lawa",
      "Maginti",
      "Napano Kusambi",
      "Sawa",
      "Tiworo Selatan",
      "Tiworo Tengah",
      "Tiworo Utara",
      "Wadaga"
    ]
  },
  {
    "slug": "wakatobi",
    "nama": "Kabupaten Wakatobi",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Kaledupa",
      "Kaledupa Selatan",
      "Binongko",
      "Togo Binongko",
      "Tomia",
      "Tomia Timur",
      "Wangi-Wangi",
      "Wangi-Wangi Selatan"
    ]
  },
  {
    "slug": "banggai",
    "nama": "Kabupaten Banggai",
    "provinsi": "Provinsi Sulawesi Tengah",
    "kecamatan": [
      "Batam",
      "Balantak",
      "Balantak Selatan",
      "Balantak Utara",
      "Batui",
      "Batui Selatan",
      "Bunta",
      "Kintom",
      "Luwuk",
      "Luwuk Selatan",
      "Luwuk Timur",
      "Luwuk Utara",
      "Masama",
      "Moilong",
      "Nambo",
      "Nuhon",
      "Pagimana",
      "Simpang Raya",
      "Toili",
      "Toili Barat"
    ]
  },
  {
    "slug": "banggai-kepulauan",
    "nama": "Kabupaten Banggai Kepulauan",
    "provinsi": "Provinsi Sulawesi Tengah",
    "kecamatan": [
      "Buko",
      "Buko Selatan",
      "Bulagi",
      "Bulagi Selatan",
      "Bulagi Utara",
      "Liang",
      "Peleng Tengah",
      "Tinangkung",
      "Tinangkung Selatan",
      "Tinangkung Utara"
    ]
  },
  {
    "slug": "banggai-laut",
    "nama": "Kabupaten Banggai Laut",
    "provinsi": "Provinsi Sulawesi Tengah",
    "kecamatan": [
      "Banggai",
      "Banggai Selatan",
      "Banggai Tengah",
      "Banggai Utara",
      "Bangkurung",
      "Bokan Kepulauan",
      "Labobo"
    ]
  },
  {
    "slug": "buol",
    "nama": "Kabupaten Buol",
    "provinsi": "Provinsi Sulawesi Tengah",
    "kecamatan": [
      "Biau",
      "Bokat",
      "Buku",
      "Bunobogu",
      "Gadung",
      "Karamat",
      "Lakea",
      "Momunu",
      "Paleleh",
      "Paleleh Barat",
      "Tiloan"
    ]
  },
  {
    "slug": "donggala",
    "nama": "Kabupaten Donggala",
    "provinsi": "Provinsi Sulawesi Tengah",
    "kecamatan": [
      "Balaesang",
      "Balaesang Tanjung",
      "Banawa",
      "Banawa Selatan",
      "Banawa Tengah",
      "Dampelas",
      "Labuan",
      "Rio Pakava",
      "Sindue",
      "Sindue Tobata",
      "Sindue Tombusabora",
      "Sirenja",
      "Sojol",
      "Sojol Utara",
      "Tanantovea"
    ]
  },
  {
    "slug": "morowali",
    "nama": "Kabupaten Morowali",
    "provinsi": "Provinsi Sulawesi Tengah",
    "kecamatan": [
      "Bahodopi",
      "Bungku Barat",
      "Bungku Pesisir",
      "Bungku Selatan",
      "Bungku Tengah",
      "Bungku Timur",
      "Menui Kepulauan",
      "Petasia",
      "Wita Ponda"
    ]
  },
  {
    "slug": "morowali-utara",
    "nama": "Kabupaten Morowali Utara",
    "provinsi": "Provinsi Sulawesi Tengah",
    "kecamatan": [
      "Bungku Utara",
      "Lembo",
      "Lembo Raya",
      "Mamosalato",
      "Mori Atas",
      "Mori Utara",
      "Petasia",
      "Petasia Barat",
      "Petasia Timur",
      "Soyo Jaya"
    ]
  },
  {
    "slug": "parigi-moutong",
    "nama": "Kabupaten Parigi Moutong",
    "provinsi": "Provinsi Sulawesi Tengah",
    "kecamatan": [
      "Ampibabo",
      "Balinggi",
      "Bolano",
      "Bolano Lambunu",
      "Moutong",
      "Palasa",
      "Parigi",
      "Parigi Barat",
      "Parigi Selatan",
      "Parigi Tengah",
      "Parigi Utara",
      "Sausu",
      "Siniu",
      "Torue",
      "Tinombo",
      "Tinombo Selatan",
      "Tomini",
      "Toribulu"
    ]
  },
  {
    "slug": "poso",
    "nama": "Kabupaten Poso",
    "provinsi": "Provinsi Sulawesi Tengah",
    "kecamatan": [
      "Lage",
      "Lore Barat",
      "Lore Selatan",
      "Lore Tengah",
      "Lore Timur",
      "Lore Utara",
      "Lore Peore",
      "Pamona Barat",
      "Pamona Selatan",
      "Pamona Tenggara",
      "Pamona Timur",
      "Pamona Utara",
      "Pamona Pule",
      "Poso Pesisir",
      "Poso Pesisir Selatan",
      "Poso Pesisir Utara",
      "Poso Kota",
      "Poso Kota Selatan",
      "Poso Kota Utara"
    ]
  },
  {
    "slug": "sigi",
    "nama": "Kabupaten Sigi",
    "provinsi": "Provinsi Sulawesi Tengah",
    "kecamatan": [
      "Dolo",
      "Dolo Barat",
      "Dolo Selatan",
      "Gumbasa",
      "Kinovaro",
      "Kulawi",
      "Kulawi Selatan",
      "Lindu",
      "Marawola",
      "Marawola Barat",
      "Nokilalaki",
      "Palolo",
      "Pipikoro",
      "Sigi Biromaru",
      "Tanambulava"
    ]
  },
  {
    "slug": "tojo-una-una",
    "nama": "Kabupaten Tojo Una-Una",
    "provinsi": "Provinsi Sulawesi Tengah",
    "kecamatan": [
      "Ampana Kota",
      "Ampana Tete",
      "Batu Daka",
      "Togean",
      "Tojo",
      "Tojo Barat",
      "Ulubongka",
      "Una-Una",
      "Walea Besar",
      "Walea Kepulauan",
      "Talatako"
    ]
  },
  {
    "slug": "toli-toli",
    "nama": "Kabupaten Toli-Toli",
    "provinsi": "Provinsi Sulawesi Tengah",
    "kecamatan": [
      "Bolan",
      "Dampal Selatan",
      "Dampal Utara",
      "Dondo",
      "Galang",
      "Lampasio",
      "Ogodeide",
      "OYES",
      "Toli-Toli Utara",
      "Baolan"
    ]
  },
  {
    "slug": "bolaang-mongondow",
    "nama": "Kabupaten Bolaang Mongondow",
    "provinsi": "Provinsi Sulawesi Utara",
    "kecamatan": [
      "Bolaang",
      "Bolaang Timur",
      "Bilalang",
      "Dumoga",
      "Dumoga Barat",
      "Dumoga Tengah",
      "Dumoga Tenggara",
      "Dumoga Utara",
      "Lolak",
      "Lolian",
      "Passi Barat",
      "Passi Timur",
      "Poigar",
      "Sangtombolang"
    ]
  },
  {
    "slug": "bolaang-mongondow-selatan",
    "nama": "Kabupaten Bolaang Mongondow Selatan",
    "provinsi": "Provinsi Sulawesi Utara",
    "kecamatan": [
      "Bolaang Uki",
      "Helumo",
      "Pinolosian",
      "Pinolosian Tengah",
      "Pinolosian Timur",
      "Posigadan",
      "Tomini"
    ]
  },
  {
    "slug": "bolaang-mongondow-timur",
    "nama": "Kabupaten Bolaang Mongondow Timur",
    "provinsi": "Provinsi Sulawesi Utara",
    "kecamatan": [
      "Kotabunan",
      "Mooat",
      "Nuangan",
      "Modayag",
      "Modayag Barat",
      "Motongkad",
      "Tutuyan"
    ]
  },
  {
    "slug": "bolaang-mongondow-utara",
    "nama": "Kabupaten Bolaang Mongondow Utara",
    "provinsi": "Provinsi Sulawesi Utara",
    "kecamatan": [
      "Bintauna",
      "Boluang",
      "Kaidipang",
      "Pinogaluman",
      "Sangkub"
    ]
  },
  {
    "slug": "kepulauan-sangihe",
    "nama": "Kabupaten Kepulauan Sangihe",
    "provinsi": "Provinsi Sulawesi Utara",
    "kecamatan": [
      "Kenta",
      "Manganitu",
      "Manganitu Selatan",
      "Nusa Tabukan",
      "Tahuna",
      "Tahuna Barat",
      "Tahuna Timur",
      "Tamako",
      "Tatamatan",
      "Tabukan Selatan",
      "Tabukan Selatan Tengah",
      "Tabukan Selatan Tenggara",
      "Tabukan Tengah",
      "Tabukan Utara"
    ]
  },
  {
    "slug": "kepulauan-siau-tagulandang-biaro",
    "nama": "Kabupaten Kepulauan Siau Tagulandang Biaro",
    "provinsi": "Provinsi Sulawesi Utara",
    "kecamatan": [
      "Biaro",
      "Siau Barat",
      "Siau Barat Selatan",
      "Siau Barat Utara",
      "Siau Tengah",
      "Siau Timur",
      "Siau Timur Selatan",
      "Tagulandang",
      "Tagulandang Selatan",
      "Tagulandang Utara"
    ]
  },
  {
    "slug": "kepulauan-talaud",
    "nama": "Kabupaten Kepulauan Talaud",
    "provinsi": "Provinsi Sulawesi Utara",
    "kecamatan": [
      "Babar",
      "Beo",
      "Beo Selatan",
      "Beo Utara",
      "Damau",
      "Gemeh",
      "Kabaruang",
      "Kalongan",
      "Lirung",
      "Melonguane",
      "Melonguane Timur",
      "Miangas",
      "Nanusa",
      "Pulutan",
      "Rainis",
      "Salibabu",
      "Tampan' Amma"
    ]
  },
  {
    "slug": "minahasa",
    "nama": "Kabupaten Minahasa",
    "provinsi": "Provinsi Sulawesi Utara",
    "kecamatan": [
      "Eris",
      "Kakas",
      "Kakas Barat",
      "Kawangkoan",
      "Kawangkoan Barat",
      "Kawangkoan Utara",
      "Kombi",
      "Lembean Timur",
      "Mandolang",
      "Pineleng",
      "Remboken",
      "Sonder",
      "Tombariri",
      "Tombariri Timur",
      "Tombulu",
      "Tompaso",
      "Tompaso Barat",
      "Tondano Barat",
      "Tondano Selatan",
      "Tondano Timur",
      "Tondano Utara"
    ]
  },
  {
    "slug": "minahasa-selatan",
    "nama": "Kabupaten Minahasa Selatan",
    "provinsi": "Provinsi Sulawesi Utara",
    "kecamatan": [
      "Amurang",
      "Amurang Barat",
      "Amurang Timur",
      "Kumelembuai",
      "Maesaan",
      "Modoinding",
      "Motoling",
      "Motoling Barat",
      "Motoling Timur",
      "Ranoyapo",
      "Sinonsayang",
      "Sulangko",
      "Tatapaan",
      "Tenga",
      "Tompaso Baru",
      "Turan"
    ]
  },
  {
    "slug": "minahasa-tenggara",
    "nama": "Kabupaten Minahasa Tenggara",
    "provinsi": "Provinsi Sulawesi Utara",
    "kecamatan": [
      "Belang",
      "Pasan",
      "Pusomaen",
      "Ratahan",
      "Ratahan Timur",
      "Silian Raya",
      "Tombatu",
      "Tombatu Timur",
      "Tombatu Utara",
      "Touluaan",
      "Touluaan Selatan"
    ]
  },
  {
    "slug": "minahasa-utara",
    "nama": "Kabupaten Minahasa Utara",
    "provinsi": "Provinsi Sulawesi Utara",
    "kecamatan": [
      "Airmadidi",
      "Kalawat",
      "Kauditan",
      "Kema",
      "Likupang Barat",
      "Likupang Selatan",
      "Likupang Timur",
      "Talawaan",
      "Wori"
    ]
  },
  {
    "slug": "maluku-tenggara-barat",
    "nama": "Kabupaten Kepulauan Tanimbar",
    "provinsi": "Provinsi Maluku",
    "kecamatan": [
      "Kormomolin",
      "Molu Maru",
      "Nirunmas",
      "Selaru",
      "Tanimbar Selatan",
      "Tanimbar Utara",
      "Wer Maktian",
      "Wer Tamrian",
      "Wuar Labobar",
      "Yaru"
    ]
  },
  {
    "slug": "pulau-morotai",
    "nama": "Kabupaten Pulau Morotai",
    "provinsi": "Provinsi Maluku Utara",
    "kecamatan": [
      "Morotai Jaya",
      "Morotai Selatan",
      "Morotai Selatan Barat",
      "Morotai Timur",
      "Morotai Utara"
    ]
  },
  {
    "slug": "boven-digoel",
    "nama": "Kabupaten Boven Digoel",
    "provinsi": "Provinsi Papua Selatan",
    "kecamatan": [
      "Ambatkwi",
      "Arimop",
      "Bomakia",
      "Firiwage",
      "Iniyandit",
      "Jair",
      "Kawagit",
      "Ki",
      "Kombut",
      "Kombay",
      "Mandobo",
      "Mindiptana",
      "Ninati",
      "Sesnuk",
      "Subur",
      "Waropko"
    ]
  },
  {
    "slug": "mappi",
    "nama": "Kabupaten Mappi",
    "provinsi": "Provinsi Papua Selatan",
    "kecamatan": [
      "Bamgi",
      "Citak Mitak",
      "Edaada",
      "Halamok",
      "Kaibar",
      "Obaa",
      "Passue",
      "Passue Lower",
      "Syahcame",
      "Tihi",
      "Venaha",
      "Yaki"
    ]
  },
  {
    "slug": "paniai",
    "nama": "Kabupaten Paniai",
    "provinsi": "Provinsi Papua Tengah",
    "kecamatan": [
      "Aradide",
      "Bibida",
      "Bogobaida",
      "DUMADAMA",
      "Ekadide",
      "Kebo",
      "Muye",
      "Nakama",
      "Paniai Barat",
      "Paniai Timur",
      "Pugodagi",
      "Siriwo",
      "Teluk Dairi",
      "Yatamo"
    ]
  },
  {
    "slug": "simalungun",
    "nama": "Kabupaten Simalungun",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Bandar",
      "Bosar Maligas",
      "Dolok Batu Nanggar",
      "Dolok Silau",
      "Girsang Sipangan Bolon",
      "Gunung Malela",
      "Jawa Maraja Bah Jambi",
      "Panei",
      "Purba",
      "Raya",
      "Siantar",
      "Sidamanik",
      "Tanah Jawa",
      "Tapian Dolok"
    ]
  },
  {
    "slug": "labuhanbatu-selatan",
    "nama": "Kabupaten Labuhanbatu Selatan",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Kampung Rakyat",
      "Kotapinang",
      "Silangkitang",
      "Sungai Kanan",
      "Torgamba"
    ]
  },
  {
    "slug": "sabu-raijua",
    "nama": "Kabupaten Sabu Raijua",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Haikeru",
      "Raijua",
      "Sabu Barat",
      "Sabu Liae",
      "Sabu Tengah",
      "Sabu Timur"
    ]
  },
  {
    "slug": "malaka",
    "nama": "Kabupaten Malaka",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Botin Leobele",
      "Io Kufeu",
      "Kobanima",
      "Kobanima Timur",
      "Laenmanen",
      "Malaka Barat",
      "Malaka Tengah",
      "Malaka Timur",
      "Rinhat",
      "Sasitamean",
      "Wewiku",
      "Weliman"
    ]
  },
  {
    "slug": "sikka",
    "nama": "Kabupaten Sikka",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Alok",
      "Alok Barat",
      "Alok Timur",
      "Doreng",
      "Hewokloang",
      "Kangae",
      "Kewapante",
      "Lela",
      "Magepanda",
      "Mapitara",
      "Mego",
      "Nita",
      "Paga",
      "Palue",
      "Talibura",
      "Waigete"
    ]
  },
  {
    "slug": "sumba-barat-daya",
    "nama": "Kabupaten Sumba Barat Daya",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Kodi",
      "Kodi Bangedo",
      "Kodi Balaghar",
      "Kodi Utara",
      "Kota Tambolaka",
      "Loura",
      "Wewewa Barat",
      "Wewewa Selatan",
      "Wewewa Tengah",
      "Wewewa Timur",
      "Wewewa Utara"
    ]
  },
  {
    "slug": "sumba-tengah",
    "nama": "Kabupaten Sumba Tengah",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Katikutana",
      "Katikutana Selatan",
      "Mamboro",
      "Umbu Ratu Nggay",
      "Umbu Ratu Nggay Barat"
    ]
  },
  {
    "slug": "timor-tengah-selatan",
    "nama": "Kabupaten Timor Tengah Selatan",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Amanuban Barat",
      "Amanuban Selatan",
      "Amanuban Tengah",
      "Amanuban Timur",
      "Amanatun Selatan",
      "Amanatun Utara",
      "Batu Putih",
      "BOPON",
      "Fatukopa",
      "Fatumnasi",
      "Kualin",
      "Kuan Fatu",
      "Kuatnana",
      "Kolbano",
      "Kota Soe",
      "Mollo Barat",
      "Mollo Selatan",
      "Mollo Tengah",
      "Mollo Utara",
      "Noebana",
      "Noemuti",
      "Nunkolo",
      "Oenino",
      "Polen",
      "Santian",
      "Tobu",
      "Toianas"
    ]
  },
  {
    "slug": "timor-tengah-utara",
    "nama": "Kabupaten Timor Tengah Utara",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Biboki Anfeu",
      "Biboki Feotleu",
      "Biboki Moenleu",
      "Biboki Selatan",
      "Biboki Tan Pah",
      "Biboki Utara",
      "Insana",
      "Insana Barat",
      "Insana Fafinesu",
      "Insana Tengah",
      "Insana Utara",
      "Kota Kefamenanu",
      "Miomaffo Barat",
      "Miomaffo Tengah",
      "Miomaffo Timur",
      "Musu",
      "Noemuti",
      "Noemuti Timur",
      "Naibenu",
      " Bikomi Nilulat",
      "Bikomi Selatan",
      "Bikomi Tengah",
      "Bikomi Utara"
    ]
  },
  {
    "slug": "ngada",
    "nama": "Kabupaten Ngada",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Aimere",
      "Bajawa",
      "Bajawa Utara",
      "Golewa",
      "Golewa Barat",
      "Golewa Selatan",
      "Jerebuu",
      "Riung",
      "Riung Barat",
      "Soa"
    ]
  },
  {
    "slug": "nagekeo",
    "nama": "Kabupaten Nagekeo",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Boawae",
      "Aesesa",
      "Aesesa Selatan",
      "Mauponggo",
      "Nangaroro",
      "Wolowae"
    ]
  },
  {
    "slug": "lembeta",
    "nama": "Kabupaten Lembata",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Atadei",
      "Buyasuri",
      "Ile Ape",
      "Ile Ape Timur",
      "Lebatukan",
      "Nubatukan",
      "Omesuri",
      "Nagawutung",
      "Wulandoni"
    ]
  },
  {
    "slug": "roti-ndao",
    "nama": "Kabupaten Rote Ndao",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Landu Leko",
      "Loaholu",
      "Ndao Nuse",
      "Rote Barat",
      "Rote Barat Daya",
      "Rote Barat Laut",
      "Rote Selatan",
      "Rote Tengah",
      "Rote Timur"
    ]
  },
  {
    "slug": "luwu",
    "nama": "Kabupaten Luwu",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Bajo",
      "Bajo Barat",
      "Bastoem",
      "Belopa",
      "Belopa Utara",
      "Bua",
      "Bua Ponrang",
      "Kamanre",
      "Lamasi",
      "Lamasi Timur",
      "Larompong",
      "Larompong Selatan",
      "Latimojong",
      "Ponrang",
      "Ponrang Selatan",
      "Suli",
      "Suli Barat",
      "Walenrang",
      "Walenrang Barat",
      "Walenrang Timur",
      "Walenrang Utara"
    ]
  },
  {
    "slug": "luwu-timur",
    "nama": "Kabupaten Luwu Timur",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Burau",
      "Mangkutana",
      "Nuha",
      "Malili",
      "Kalaena",
      "Tomoni",
      "Tomoni Timur",
      "Towuti",
      "Wasuponda",
      "Wotu"
    ]
  },
  {
    "slug": "luwu-utara",
    "nama": "Kabupaten Luwu Utara",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Baan",
      "Bone-Bone",
      "Lampi",
      "Masamba",
      "Mazedan",
      "Malangke",
      "Malangke Barat",
      "Rampi",
      "Sabbang",
      "Sabbang Selatan",
      "Seketaris",
      "Suka Maju",
      "Suka Maju Selatan",
      "Tanalili"
    ]
  },
  {
    "slug": "pinrang",
    "nama": "Kabupaten Pinrang",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Batu Lappa",
      "Duampanua",
      "Lembang",
      "Mattiro Bulu",
      "Mattiro Sompe",
      "Paleteang",
      "Patampanua",
      "Suppa",
      "Tiroang",
      "Watang Sawitto"
    ]
  },
  {
    "slug": "sidenreng-rappang",
    "nama": "Kabupaten Sidenreng Rappang",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Baranti",
      "Dua Pitue",
      "Kulo",
      "Maritengngae",
      "Panca Lautang",
      "Panca Rijang",
      "Pitu Riase",
      "Pitu Riawa",
      "Tellu Limpoe",
      "Watang Pulu"
    ]
  },
  {
    "slug": "sinjai",
    "nama": "Kabupaten Sinjai",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Bulupoddo",
      "Pulau 9",
      "Sinjai Barat",
      "Sinjai Borong",
      "Sinjai Selatan",
      "Sinjai Tengah",
      "Sinjai Timur",
      "Sinjai Utara",
      "Tellu Limpoe"
    ]
  },
  {
    "slug": "soppeng",
    "nama": "Kabupaten Soppeng",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Citta",
      "Donri Donri",
      "Ganra",
      "Lalabata",
      "Lili Rilau",
      "Liliaja",
      "Marioriawa",
      "Marioriwawo"
    ]
  },
  {
    "slug": "takalar",
    "nama": "Kabupaten Takalar",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Galesong",
      "Galesong Selatan",
      "Galesong Utara",
      "Mangarabombang",
      "Mappakasunggu",
      "Pattallassang",
      "Polombangkeng Selatan",
      "Polombangkeng Utara",
      "Sanrobone"
    ]
  },
  {
    "slug": "tanatoraja",
    "nama": "Kabupaten Tana Toraja",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Bittuang",
      "Gandrangbatu",
      "Kurra",
      "Makale",
      "Makale Selatan",
      "Makale Utara",
      "Malimbong Balepe",
      "Mappak",
      "Mengkendek",
      "Rano",
      "Rantetayo",
      "Rembon",
      "Saluputi",
      "Sangalla",
      "Sangalla Selatan",
      "Sangalla Utara",
      "Simbuang"
    ]
  },
  {
    "slug": "toraja-utara",
    "nama": "Kabupaten Toraja Utara",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Awan Rante Karua",
      "Balusu",
      "Bangkelekila",
      "Buntu Pepasan",
      "Dena",
      "Kesu",
      "Rantepao",
      "Rindingallo",
      "Sa'dan",
      "Sanggalangi",
      "Sopai",
      "TALLUNGLIPU",
      "Tikala",
      "Tondon"
    ]
  },
  {
    "slug": "wajo",
    "nama": "Kabupaten Wajo",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Banasat",
      "Belawa",
      "Bola",
      "Gilireng",
      "Keera",
      "Majauleng",
      "Maniangpajo",
      "Pitumpanua",
      "Sabbangparu",
      "Sajoanging",
      "Takkalalla",
      "Tanasitolo",
      "Tempe",
      "Pammana"
    ]
  },
  {
    "slug": "jeneponto",
    "nama": "Kabupaten Jeneponto",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Arungkeke",
      "Bangkala",
      "Bangkala Barat",
      "Batang",
      "Binamu",
      "Bontoramba",
      "Kelara",
      "Rumbia",
      "Tamalatea",
      "Tarowang",
      "Turatea"
    ]
  },
  {
    "slug": "kepulauan-selayar",
    "nama": "Kabupaten Kepulauan Selayar",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Bentuang",
      "Bontoharu",
      "Bontomanai",
      "Bontomatene",
      "Bontosikuyu",
      "Pasilambena",
      "Pasimarannu",
      "Pasimasunggu",
      "Pasimasunggu Timur",
      "Takabonerate"
    ]
  },
  {
    "slug": "kepulauan-sula",
    "nama": "Kabupaten Kepulauan Sula",
    "provinsi": "Provinsi Maluku Utara",
    "kecamatan": [
      "Mangoli Barat",
      "Mangoli Selatan",
      "Mangoli Tengah",
      "Mangoli Timur",
      "Mangoli Utara",
      "Sanana",
      "Sulabesi Barat",
      "Sulabesi Selatan",
      "Sulabesi Timur"
    ]
  },
  {
    "slug": "mamberamo-tengah",
    "nama": "Kabupaten Mamberamo Tengah",
    "provinsi": "Provinsi Papua Pegunungan",
    "kecamatan": [
      "Eragayam",
      "Ilugwa",
      "Kelila",
      "Kobakma",
      "Megambilis"
    ]
  },
  {
    "slug": "nabire",
    "nama": "Kabupaten Nabire",
    "provinsi": "Provinsi Papua Tengah",
    "kecamatan": [
      "Dipa",
      "Makimi",
      "Menou",
      "Nabire",
      "Nabire Barat",
      "Napan",
      "Teluk Kimi",
      "Teluk Umar",
      "Uwapa",
      "Yaro",
      "Yaur"
    ]
  },
  {
    "slug": "teluk-bintuni",
    "nama": "Kabupaten Teluk Bintuni",
    "provinsi": "Provinsi Papua Barat",
    "kecamatan": [
      "Aranday",
      "Babo",
      "Bintuni",
      "Fafuwar",
      "Kaitaro",
      "Kamundan",
      "Kuri",
      "Manimeri",
      "Meyado",
      "Moskona Barat",
      "Moskona Selatan",
      "Sumuri",
      "Taro",
      "Tuhiba"
    ]
  },
  {
    "slug": "pegunungan-arfak",
    "nama": "Kabupaten Pegunungan Arfak",
    "provinsi": "Provinsi Papua Barat",
    "kecamatan": [
      "Anggi",
      "Anggi Gida",
      "Catubouw",
      "Didohu",
      "Hingk",
      "Membey",
      "Minyambouw",
      "Taige",
      "Testega"
    ]
  },
  {
    "slug": "south-sorong",
    "nama": "Kabupaten Sorong Selatan",
    "provinsi": "Provinsi Papua Barat Daya",
    "kecamatan": [
      "Inanwatan",
      "Kais",
      "Konda",
      "Kokoda",
      "Moswaren",
      "Saifi",
      "Seremuk",
      "Teminabuan",
      "Wayer"
    ]
  },
  {
    "slug": "raja-ampat",
    "nama": "Kabupaten Raja Ampat",
    "provinsi": "Provinsi Papua Barat Daya",
    "kecamatan": [
      "Ayau",
      "Kofiau",
      "Meos Mansar",
      "Misool Barat",
      "Misool Selatan",
      "Misool Timur",
      "Salawati Barat",
      "Waigeo Barat",
      "Waigeo Selatan",
      "Waigeo Timur",
      "Waigeo Utara"
    ]
  },
  {
    "slug": "tambrauw",
    "nama": "Kabupaten Tambrauw",
    "provinsi": "Provinsi Papua Barat Daya",
    "kecamatan": [
      "Abun",
      "Amberbaken",
      "Fef",
      "Kebar",
      "Miyah",
      "Moraid",
      "Sausapor",
      "Senopi",
      "Yembun"
    ]
  },
  {
    "slug": "maybrat",
    "nama": "Kabupaten Maybrat",
    "provinsi": "Provinsi Papua Barat Daya",
    "kecamatan": [
      "Aifat",
      "Aifat Timur",
      "Aifat Selatan",
      "Aitinyo",
      "Aitinyo Barat",
      "Ayamaru",
      "Ayamaru Jaya",
      "Ayamaru Selatan",
      "Mare"
    ]
  },
  {
    "slug": "bengkulu-selatan",
    "nama": "Kabupaten Bengkulu Selatan",
    "provinsi": "Provinsi Bengkulu",
    "kecamatan": [
      "Air Nipis",
      "Bunga Mas",
      "Kedurang",
      "Kedurang Ilir",
      "Kota Manna",
      "Manna",
      "Pino",
      "Pinoraya",
      "Seginim",
      "Ulu Manna"
    ]
  },
  {
    "slug": "bengkulu-tengah",
    "nama": "Kabupaten Bengkulu Tengah",
    "provinsi": "Provinsi Bengkulu",
    "kecamatan": [
      "Bang Haji",
      "Karang Tinggi",
      "Pondok Kelapa",
      "Pondok Kubang",
      "Pematang Tiga",
      "Semidang Lagan",
      "Talang Empat",
      "Taba Penanjung",
      "Merigi Kelindang",
      "Merigi Sakti"
    ]
  },
  {
    "slug": "bengkulu-utara",
    "nama": "Kabupaten Bengkulu Utara",
    "provinsi": "Provinsi Bengkulu",
    "kecamatan": [
      "Air Besi",
      "Air Napal",
      "Air Padang",
      "Arma Jaya",
      "Batik Nau",
      "Enggano",
      "Giri Mulya",
      "Hulu Palik",
      "Kerkap",
      "Ketahun",
      "Kota Arga Makmur",
      "Lais",
      "Marga Sakti Sebelat",
      "Napal Putih",
      "Padang Jaya",
      "Pinang Raya",
      "Putramuka",
      "Tanjung Agung Palik",
      "Ulok Kupai"
    ]
  },
  {
    "slug": "kaur",
    "nama": "Kabupaten Kaur",
    "provinsi": "Provinsi Bengkulu",
    "kecamatan": [
      "Kaur Selatan",
      "Kaur Tengah",
      "Kaur Utara",
      "Kelam Tengah",
      "Luas",
      "Muara Sahung",
      "Nasal",
      "Padang Guci Hilir",
      "Padang Guci Hulu",
      "Semidang Gumay",
      "Tetap",
      "Tanjung Kemuning",
      "Maje"
    ]
  },
  {
    "slug": "kepahiang",
    "nama": "Kabupaten Kepahiang",
    "provinsi": "Provinsi Bengkulu",
    "kecamatan": [
      "Bermani Ilir",
      "Kabawetan",
      "Kepahiang",
      "Merigi",
      "Muara Kemumu",
      "Seberang Musi",
      "Tebat Karai",
      "Ujan Mas"
    ]
  },
  {
    "slug": "lebong",
    "nama": "Kabupaten Lebong",
    "provinsi": "Provinsi Bengkulu",
    "kecamatan": [
      "Amen",
      "Bermani Jurukalang",
      "Bingin Kuning",
      "Lebong Atas",
      "Lebong Selatan",
      "Lebong Tengah",
      "Lebong Timur",
      "Lebong Utara",
      "Pinang Belapis",
      "Rimbo Pengadang",
      "Uram Jaya",
      "Topos"
    ]
  },
  {
    "slug": "mukomuko",
    "nama": "Kabupaten Mukomuko",
    "provinsi": "Provinsi Bengkulu",
    "kecamatan": [
      "Air Rami",
      "Air Dikit",
      "Air Manjunto",
      "Ipuh",
      "Kota Mukomuko",
      "Lubuk Pinang",
      "Malin Deman",
      "Penarik",
      "Pondok Suguh",
      "Selagan Raya",
      "Teramang Jaya",
      "Teras Terunjam",
      "V Koto",
      "XIV Koto"
    ]
  },
  {
    "slug": "rejang-lebong",
    "nama": "Kabupaten Rejang Lebong",
    "provinsi": "Provinsi Bengkulu",
    "kecamatan": [
      "Bermani Ulu",
      "Bermani Ulu Raya",
      "Curup",
      "Curup Selatan",
      "Curup Tengah",
      "Curup Timur",
      "Curup Utara",
      "Kota Padang",
      "Padang Ulak Tano",
      "Sindu Ketinggi",
      "Selupu Rejang"
    ]
  },
  {
    "slug": "seluma",
    "nama": "Kabupaten Seluma",
    "provinsi": "Provinsi Bengkulu",
    "kecamatan": [
      "Air Periukan",
      "Ilir Talo",
      "Lubuk Sandi",
      "Seluma",
      "Seluma Barat",
      "Seluma Selatan",
      "Seluma Timur",
      "Seluma Utara",
      "Semidang Alas",
      "Semidang Alas Maras",
      "Sukaraja",
      "Talo",
      "Talo Kecil"
    ]
  },
  {
    "slug": "bengkulu-kota",
    "nama": "Kota Bengkulu",
    "provinsi": "Provinsi Bengkulu",
    "kecamatan": [
      "Gading Cempaka",
      "Kampung Melayu",
      "Muara Bangka Hulu",
      "Ratu Agung",
      "Ratu Samban",
      "Selebar",
      "Singaran Pati",
      "Teluk Segara",
      "Sungai Serut"
    ]
  },
  {
    "slug": "bangka-barat",
    "nama": "Kabupaten Bangka Barat",
    "provinsi": "Provinsi Kepulauan Bangka Belitung",
    "kecamatan": [
      "Jepara",
      "Kelapa",
      "Muntok",
      "Parittiga",
      "Simpang Terbit",
      "Tempilang"
    ]
  },
  {
    "slug": "bangka-selatan",
    "nama": "Kabupaten Bangka Selatan",
    "provinsi": "Provinsi Kepulauan Bangka Belitung",
    "kecamatan": [
      "Airgegas",
      "Kepulauan Pongok",
      "Lepar Pongok",
      "Payung",
      "Simpang Rimba",
      "Toboali",
      "Tukak Sadai"
    ]
  },
  {
    "slug": "bangka-tengah",
    "nama": "Kabupaten Bangka Tengah",
    "provinsi": "Provinsi Kepulauan Bangka Belitung",
    "kecamatan": [
      "Koba",
      "Lubuk Besar",
      "Namang",
      "Pangkalan Baru",
      "Simpang Katis",
      "Sungai Selan"
    ]
  },
  {
    "slug": "bangka",
    "nama": "Kabupaten Bangka",
    "provinsi": "Provinsi Kepulauan Bangka Belitung",
    "kecamatan": [
      "Bakar",
      "Belinyu",
      "Mendo Barat",
      "Merawang",
      "Pemali",
      "Riau Silip",
      "Sungai Liat",
      "Pali"
    ]
  }
];

const kotaFilePath = path.join(__dirname, '../data/kota.json');
const kotaData = JSON.parse(fs.readFileSync(kotaFilePath, 'utf8'));

let newlyAddedCount = 0;
let preservedCount = 0;
let unmatchedCount = 0;

for (const inputItem of inputDataBatch2) {
  const inputNamaClean = inputItem.nama.toLowerCase().trim();
  
  let target = kotaData.find(k => k.nama.toLowerCase().trim() === inputNamaClean);
  
  if (!target) {
    target = kotaData.find(k => k.slug === inputItem.slug);
  }
  
  if (!target) {
    const shortName = inputNamaClean.replace(/^(kabupaten|kota|kota administrasi)\s+/i, '');
    target = kotaData.find(k => k.nama.toLowerCase().replace(/^(kabupaten|kota|kota administrasi)\s+/i, '') === shortName);
  }

  if (target) {
    // Only set if not already set (preserve existing data)
    if (!target.kecamatan || target.kecamatan.length === 0) {
      target.kecamatan = inputItem.kecamatan;
      newlyAddedCount++;
    } else {
      preservedCount++;
    }
  } else {
    unmatchedCount++;
  }
}

// Save updated data/kota.json
fs.writeFileSync(kotaFilePath, JSON.stringify(kotaData, null, 2), 'utf8');

// Audit remaining missing kecamatan
const missingKecamatanList = kotaData.filter(item => !item.kecamatan || item.kecamatan.length === 0);
const filledKecamatanCount = kotaData.length - missingKecamatanList.length;

console.log('--- RESULT SUMMARY ---');
console.log(`Newly added in this batch: ${newlyAddedCount}`);
console.log(`Preserved existing (unchanged): ${preservedCount}`);
console.log(`Total cities with kecamatan: ${filledKecamatanCount} / ${kotaData.length}`);
console.log(`Total cities STILL missing kecamatan: ${missingKecamatanList.length}`);
console.log('--- MISSING CITIES LIST ---');
console.log(missingKecamatanList.map(item => ({ slug: item.slug, nama: item.nama, provinsi: item.provinsi })));
