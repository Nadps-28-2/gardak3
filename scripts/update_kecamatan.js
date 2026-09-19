const fs = require('fs');
const path = require('path');

const inputData = [
  {
    "slug": "aceh-barat",
    "nama": "Kabupaten Aceh Barat",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Arongan Lambalek",
      "Bubon",
      "Johan Pahlawan",
      "Kaway XVI",
      "Meureubo",
      "Pantai Ceureumen",
      "Pante Ceureumen",
      "Samatiga",
      "Sungai Mas",
      "Woyla",
      "Woyla Barat",
      "Woyla Timur"
    ]
  },
  {
    "slug": "aceh-besar",
    "nama": "Kabupaten Aceh Besar",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Baitussalam",
      "Darul Imarah",
      "Darul Kamal",
      "Darul Hikmah",
      "Ingin Jaya",
      "Indrapuri",
      "Kuta Baro",
      "Kuta Cot Glie",
      "Kuta Malaka",
      "Lhoong",
      "Lhoknga",
      "Lembah Seulawah",
      "Mesjid Raya",
      "Montasik",
      "Peukan Bada",
      "Pulo Aceh",
      "Seulimeum",
      "Simpang Tiga",
      "Sukamakmur"
    ]
  },
  {
    "slug": "aceh-jaya",
    "nama": "Kabupaten Aceh Jaya",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Darul Hikmah",
      "Indra Jaya",
      "Jaya",
      "Keude Panga",
      "Krueng Sabee",
      "Panga",
      "Pasie Raya",
      "Sampoiniet",
      "Setia Bakti"
    ]
  },
  {
    "slug": "aceh-selatan",
    "nama": "Kabupaten Aceh Selatan",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Bakongan",
      "Bakongan Timur",
      "Kluet Utara",
      "Kluet Selatan",
      "Kluet Tengah",
      "Kluet Timur",
      "Kota Baharu",
      "Labuhan Haji",
      "Labuhan Haji Barat",
      "Labuhan Haji Timur",
      "Meukek",
      "Pasie Raja",
      "Sama Dua",
      "Sawang",
      "Tapak Tuan",
      "Trumon",
      "Trumon Tengah",
      "Trumon Timur"
    ]
  },
  {
    "slug": "aceh-singkil",
    "nama": "Kabupaten Aceh Singkil",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Danau Paris",
      "Gunung Meriah",
      "Kota Baharu",
      "Kuala Baru",
      "Pulau Banyak",
      "Pulau Banyak Barat",
      "Simpang Kanan",
      "Singkil",
      "Singkil Utara",
      "Singkohor",
      "Suro Makmur"
    ]
  },
  {
    "slug": "aceh-tamiang",
    "nama": "Kabupaten Aceh Tamiang",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Banda Mulia",
      "Bandar Pusaka",
      "Karang Baru",
      "Kejuruan Muda",
      "Kota Kuala Simpang",
      "Manyak Payed",
      "Rantau",
      "Sekerak",
      "Seruway",
      "Tamiang Hulu",
      "Tenggulun",
      "Rantau Selamat"
    ]
  },
  {
    "slug": "aceh-tengah",
    "nama": "Kabupaten Aceh Tengah",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Atu Lintang",
      "Bebesen",
      "Bies",
      "Bintang",
      "Celala",
      "Jagong Jeget",
      "Kebayakan",
      "Kuta Panang",
      "Lingen",
      "Lut Tawar",
      "Pegasing",
      "Rusip Antara",
      "Silih Nara",
      "Sutera"
    ]
  },
  {
    "slug": "aceh-tenggara",
    "nama": "Kabupaten Aceh Tenggara",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Babul Rahmah",
      "Babul Makmur",
      "Babussalam",
      "Bambel",
      "Bukit Tusam",
      "Darul Hasanah",
      "Deleng Pokhkisen",
      "Lawe Alas",
      "Lawe Bulan",
      "Lawe Sumur",
      "Leuser",
      "Semadam",
      "Tanoh Alas"
    ]
  },
  {
    "slug": "aceh-timur",
    "nama": "Kabupaten Aceh Timur",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Banda Alam",
      "Birem Bayeun",
      "Darul Aman",
      "Darul Ihsan",
      "Idi Rayeuk",
      "Idi Timur",
      "Idi Tunong",
      "Indra Makmu",
      "Julok",
      "Madat",
      "Nurussalam",
      "Pante Bidari",
      "Peudawa",
      "Peureulak",
      "Peureulak Barat",
      "Peureulak Timur",
      "Ranto Peureulak",
      "Rantau Selamat",
      "Serba Jadi",
      "Simpang Jernih",
      "Simpang Ulim",
      "Sungai Raya"
    ]
  },
  {
    "slug": "aceh-utara",
    "nama": "Kabupaten Aceh Utara",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Baktiya",
      "Baktiya Barat",
      "Banda Baro",
      "Cot Girek",
      "Dewantara",
      "Geuredong Pase",
      "Kuta Makmur",
      "Lhoksukon",
      "Matangkuli",
      "Meurah Mulia",
      "Muara Batu",
      "Nibong",
      "Nisam",
      "Nisam Antara",
      "Paya Bakta",
      "Pirak Timur",
      "Samudera",
      "Sawang",
      "Seunuddon",
      "Simpang Keuramat",
      "Syamtalira Bayu",
      "Syamtalira Aron",
      "Tanah Jambo Aye",
      "Tanah Luas",
      "Tanah Pasir"
    ]
  },
  {
    "slug": "bener-meriah",
    "nama": "Kabupaten Bener Meriah",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Bandar",
      "Bener Kelipah",
      "Bukit",
      "Gajah Putih",
      "Pintu Rime Gayo",
      "Permata",
      "Syiah Utama",
      "Timang Gajah",
      "Wih Pesam"
    ]
  },
  {
    "slug": "bireuen",
    "nama": "Kabupaten Bireuen",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Gandapura",
      "Jangka",
      "Jeumpa",
      "Jeunieb",
      "Juli",
      "Kota Juang",
      "Kuala",
      "Kuta Blang",
      "Makmur",
      "Pandrah",
      "Peudada",
      "Peulimbang",
      "Peusangan",
      "Peusangan Selatan",
      "Peusangan Siblah Krueng",
      "Samalanga",
      "Simpang Mamplam"
    ]
  },
  {
    "slug": "gayo-lues",
    "nama": "Kabupaten Gayo Lues",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Blang Jerango",
      "Blang Kejeren",
      "Blang Pegayon",
      "Dabun Gelang",
      "Kuta Panjang",
      "Pining",
      "Rikit Gaib",
      "Terangun",
      "Tripe Jaya"
    ]
  },
  {
    "slug": "nagan-raya",
    "nama": "Kabupaten Nagan Raya",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Beutong",
      "Beutong Ateuh Banggalang",
      "Darul Makmur",
      "Kuala",
      "Kuala Pesisir",
      "Seunagan",
      "Seunagan Timur",
      "Suka Makmue",
      "Tadu Raya",
      "Tripa Makmur"
    ]
  },
  {
    "slug": "pidie",
    "nama": "Kabupaten Pidie",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Batee",
      "Delima",
      "Geucheu",
      "Geulumpang Baro",
      "Glumpang Tiga",
      "Indrajaya",
      "Kembang Tanjong",
      "Kota Sigli",
      "Mane",
      "Mila",
      "Muara Tiga",
      "Mutiara",
      "Mutiara Timur",
      "Padang Tiji",
      "Peukan Baro",
      "Pidie",
      "Sakti",
      "Simpang Tiga",
      "Tangse",
      "Tiro/Truseb",
      "Keumala"
    ]
  },
  {
    "slug": "pidie-jaya",
    "nama": "Kabupaten Pidie Jaya",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Bandar Baru",
      "Bandar Dua",
      "Jangka Buya",
      "Meureudu",
      "Meurah Dua",
      "Panteraja",
      "Trienggadeng",
      "Ulim"
    ]
  },
  {
    "slug": "banda-aceh",
    "nama": "Kota Banda Aceh",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Baiturrahman",
      "Banda Raya",
      "Jaya Baru",
      "Kuta Alam",
      "Kuta Raja",
      "Lueng Bata",
      "Meuraxa",
      "Syiah Kuala",
      "Ulee Kareng"
    ]
  },
  {
    "slug": "langsa",
    "nama": "Kota Langsa",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Langsa Barat",
      "Langsa Kota",
      "Langsa Lama",
      "Langsa Baro",
      "Langsa Timur"
    ]
  },
  {
    "slug": "lhokseumawe",
    "nama": "Kota Lhokseumawe",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Banda Sakti",
      "Blang Mangat",
      "Muara Dua",
      "Muara Satu"
    ]
  },
  {
    "slug": "sabang",
    "nama": "Kota Sabang",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Sukakarya",
      "Sukajaya",
      "Sukamakmue"
    ]
  },
  {
    "slug": "subulussalam",
    "nama": "Kota Subulussalam",
    "provinsi": "Provinsi Aceh",
    "kecamatan": [
      "Longkib",
      "Penanggalan",
      "Rundeng",
      "Simpang Kiri",
      "Sultan Daulat"
    ]
  },
  {
    "slug": "asahan",
    "nama": "Kabupaten Asahan",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Aek Ledong",
      "Aek Kuasan",
      "Aek Songsongan",
      "Air Joman",
      "Bandar Pasir Mandoge",
      "Bandar Pulau",
      "Buntu Pane",
      "Kota Kisaran Barat",
      "Kota Kisaran Timur",
      "Meranti",
      "Pulo Bandring",
      "Rahuning",
      "Rawang Panca Arga",
      "Sei Kepayang",
      "Sei Kepayang Barat",
      "Sei Kepayang Timur",
      "Sei Dadap",
      "Silau Laut",
      "Simpang Empat",
      "Tinggi Raja",
      "Tanjung Balai",
      "Teluk Dalam",
      "Tinggi Raja"
    ]
  },
  {
    "slug": "batubara",
    "nama": "Kabupaten Batubara",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Air Putih",
      "Datuk Lima Puluh",
      "Datuk Tanah Datar",
      "Laut Tador",
      "Lima Puluh",
      "Lima Puluh Pesisir",
      "Medang Deras",
      "NIBUNG HANGUS",
      "Sei Balai",
      "Sei Suka",
      "Tanjung Tiram",
      "Talawi"
    ]
  },
  {
    "slug": "dairi",
    "nama": "Kabupaten Dairi",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Berampu",
      "Gunung Sitember",
      "Lae Parira",
      "Parbuluan",
      "Pegagan Hilir",
      "Sidikalang",
      "Sitinjo",
      "Siempat Nempu",
      "Siempat Nempu Hilir",
      "Siempat Nempu Hulu",
      "Silima Pungga Pungga",
      "Silahi Sabungan",
      "Tanah Pinem",
      "Tigalingga"
    ]
  },
  {
    "slug": "deli-serdang",
    "nama": "Kabupaten Deli Serdang",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Bangun Purba",
      "Batang Kuis",
      "Beringin",
      "Biru-Biru",
      "Delitua",
      "Galang",
      "Gunung Meriah",
      "Hamparan Perak",
      "Kutalimbaru",
      "Labuhan Deli",
      "Lubuk Pakam",
      "Namorambe",
      "Pagar Merbau",
      "Pancur Batu",
      "Pantai Cermin",
      "Percut Sei Tuan",
      "Petumbak",
      "Sunggal",
      "Tanjung Morawa",
      "Sunggal",
      "Sibolangit",
      "Sinembah Tanjung Muda Hulu",
      "Sinembah Tanjung Muda Hilir"
    ]
  },
  {
    "slug": "humbang-hasundutan",
    "nama": "Kabupaten Humbang Hasundutan",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Baktiraja",
      "Dolok Sanggul",
      "Lintong Nihuta",
      "Onan Ganjang",
      "Pakkat",
      "Paranginan",
      "Pollung",
      "Sijoam Polang",
      "Tara Bintang"
    ]
  },
  {
    "slug": "karo",
    "nama": "Kabupaten Karo",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Barusjahe",
      "Berastagi",
      "Jabi-Jabi",
      "Kabanjahe",
      "Kuta Buluh",
      "Laubaleng",
      "Mardingding",
      "Merdeka",
      "Merek",
      "Munte",
      "Naman Teran",
      "Payung",
      "Simpang Empat",
      "Tigabinanga",
      "Tiganderket",
      "Tigapanah"
    ]
  },
  {
    "slug": "labuhanbatu",
    "nama": "Kabupaten Labuhanbatu",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Bilah Barat",
      "Bilah Hilir",
      "Bilah Hulu",
      "Pangkatan",
      "Rantau Selatan",
      "Rantau Utara",
      "Panai Tengah",
      "Panai Hilir",
      "Panai Hulu"
    ]
  },
  {
    "slug": "labuhanbatu-selatan",
    "nama": "Kabupaten Labuhanbatu Selatan",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Kampung Rakyat",
      "Kotapinang",
      "Sungai Kanan",
      "Silangkitang",
      "Torgamba"
    ]
  },
  {
    "slug": "labuhanbatu-utara",
    "nama": "Kabupaten Labuhanbatu Utara",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Aek Kuo",
      "Aek Natas",
      "Kualuh Selatan",
      "Kualuh Hilir",
      "Kualuh Hulu",
      "Kualuh Leidong",
      "Marbau",
      "Na IX-X"
    ]
  },
  {
    "slug": "langkat",
    "nama": "Kabupaten Langkat",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Babalan",
      "Batang Serangan",
      "Brandan Barat",
      "Besitang",
      "Binjai",
      "Bohorok",
      "Gebang",
      "Hinai",
      "Kuala",
      "Karang Organization",
      "Kutambaru",
      "Padang Tualang",
      "Pangkalan Susu",
      "Pematang Jaya",
      "Salapian",
      "Sawit Seberang",
      "Secanggang",
      "Sei Bingai",
      "Sei Lepan",
      "Selesai",
      "Stabat",
      "Tanjung Pura",
      "Wampu"
    ]
  },
  {
    "slug": "mandailing-natal",
    "nama": "Kabupaten Mandailing Natal",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Batahan",
      "Batang Natal",
      "Bukit Malintang",
      "Huta Bargot",
      "Kotanopan",
      "Lembah Sorik Marapi",
      "Lingga Bayu",
      "Muara Batang Gadis",
      "Muara Sipongi",
      "Naga Juang",
      "Natal",
      "Pakantan",
      "Panyabungan",
      "Panyabungan Barat",
      "Panyabungan Kota",
      "Panyabungan Selatan",
      "Panyabungan Timur",
      "Panyabungan Utara",
      "Puncak Sorik Marapi",
      "Ranto Baek",
      "Siabu",
      "Sinunukan",
      "Tambangan"
    ]
  },
  {
    "slug": "nias",
    "nama": "Kabupaten Nias",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Bawolato",
      "Botomuzoi",
      "Gido",
      "Hiliduho",
      "Hiliserangkai",
      "Idanogawo",
      "Ma'u",
      "Sogae'adu",
      "Somolo-molo"
    ]
  },
  {
    "slug": "medan",
    "nama": "Kota Medan",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Medan Amplas",
      "Medan Area",
      "Medan Barat",
      "Medan Baru",
      "Medan Belawan",
      "Medan Deli",
      "Medan Denai",
      "Medan Helvetia",
      "Medan Johor",
      "Medan Kota",
      "Medan Labuhan",
      "Medan Maimun",
      "Medan Marelan",
      "Medan Perjuangan",
      "Medan Petisah",
      "Medan Polonia",
      "Medan Selayang",
      "Medan Sunggal",
      "Medan Tembung",
      "Medan Tuntungan",
      "Medan Timur"
    ]
  },
  {
    "slug": "binjai",
    "nama": "Kota Binjai",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Binjai Barat",
      "Binjai Kota",
      "Binjai Selatan",
      "Binjai Timur",
      "Binjai Utara"
    ]
  },
  {
    "slug": "pematangsiantar",
    "nama": "Kota Pematangsiantar",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Siantar Barat",
      "Siantar Marihat",
      "Siantar Martoba",
      "Siantar Selatan",
      "Siantar Sitalasari",
      "Siantar Timur",
      "Siantar Utara"
    ]
  },
  {
    "slug": "tanjungbalai",
    "nama": "Kota Tanjungbalai",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Datuk Bandar",
      "Datuk Bandar Timur",
      "Sei Tualang Raso",
      "Tanjungbalai Selatan",
      "Tanjungbalai Utara",
      "Teluk Nibung"
    ]
  },
  {
    "slug": "tebing-tinggi",
    "nama": "Kota Tebing Tinggi",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Bajenis",
      "Padang Hilir",
      "Padang Hulu",
      "Rambutan",
      "Tebing Tinggi Kota"
    ]
  },
  {
    "slug": "padangsidimpuan",
    "nama": "Kota Padangsidimpuan",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Padangsidimpuan Batunadua",
      "Padangsidimpuan Hutaimbaru",
      "Padangsidimpuan Selatan",
      "Padangsidimpuan Tenggara",
      "Padangsidimpuan Utara"
    ]
  },
  {
    "slug": "sibolga",
    "nama": "Kota Sibolga",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Sibolga Kota",
      "Sibolga Sambas",
      "Sibolga Selatan",
      "Sibolga Utara"
    ]
  },
  {
    "slug": "agam",
    "nama": "Kabupaten Agam",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "Ampek Nagari",
      "Banuhampu",
      "Baso",
      "Canduang",
      "IV Angkat",
      "IV Koto",
      "Kamang Magek",
      "Lubuak Basung",
      "Malalak",
      "Matur",
      "Palembayan",
      "Palupuh",
      "Sungai Pua",
      "Tanjung Raya",
      "Tilatang Kamang"
    ]
  },
  {
    "slug": "dharmasraya",
    "nama": "Kabupaten Dharmasraya",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "Asam Jujuhan",
      "Koto Baru",
      "Koto Besar",
      "Koto Salak",
      "Padang Laweh",
      "Pulau Punjung",
      "Sembilan Koto",
      "Sitiung",
      "Sungaibumi",
      "Timpeh",
      "Tiumang"
    ]
  },
  {
    "slug": "lima-puluh-kota",
    "nama": "Kabupaten Lima Puluh Kota",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "Akabiluru",
      "Bukik Barisan",
      "Guguak",
      "Gunuang Omeh",
      "Harau",
      "Kapur IX",
      "Lareh Sago Halaban",
      "Luak",
      "Mungka",
      "Pangkalan Koto Baru",
      "Payakumbuh",
      "Situjuah Limo Nagari",
      "Suliki"
    ]
  },
  {
    "slug": "padang-pariaman",
    "nama": "Kabupaten Padang Pariaman",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "2x11 Enam Lingkung",
      "2x11 Kayu Tanam",
      "IV Koto Aur Malintang",
      "V Koto Kampung Dalam",
      "V Koto Timur",
      "VII Koto Sungai Sarik",
      "Batang Anai",
      "Batang Gasan",
      "Enam Lingkung",
      "Lubuak Alung",
      "Nan Sabaris",
      "Padang Sago",
      "Patamuan",
      "Sintuk Toboh Gadang",
      "Sungai Geringging",
      "Sungai Limau",
      "Ulakan Tapakis"
    ]
  },
  {
    "slug": "pasaman",
    "nama": "Kabupaten Pasaman",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "Bonjol",
      "Dua Koto",
      "Lubuk Sikaping",
      "Mapat Tunggul",
      "Mapat Tunggul Selatan",
      "Padang Gelugur",
      "Panti",
      "Rao",
      "Rao Selatan",
      "Rao Utara",
      "Simpang Alahan Mati",
      "Tigo Nagari"
    ]
  },
  {
    "slug": "pasaman-barat",
    "nama": "Kabupaten Pasaman Barat",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "Balam Umpu",
      "Gunung Tuleh",
      "Kinali",
      "Koto Balingka",
      "Lembah Melintang",
      "Luhak Nan Duo",
      "Pasaman",
      "Ranah Batahan",
      "Sasak Ranah Pasisie",
      "Sungai Aur",
      "Sungai Beremas",
      "Talamau"
    ]
  },
  {
    "slug": "pesisir-selatan",
    "nama": "Kabupaten Pesisir Selatan",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "Batam Kapas",
      "Bayang",
      "Bayang Utara",
      "Koto XI Tarusan",
      "Lengayang",
      "Linggo Sari Baganti",
      "Lunang",
      "Pancung Soal",
      "Ranah Ampek Tapan",
      "Ranah Pesisir",
      "Silaut",
      "Sutera",
      "IV Jurai",
      "Tapan"
    ]
  },
  {
    "slug": "sijunjung",
    "nama": "Kabupaten Sijunjung",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "IV Nagari",
      "Kamang Baru",
      "Koto VII",
      "Kupitan",
      "Lubuk Tarok",
      "Sijunjung",
      "Sumpur Kudus",
      "Tanjung Gadang"
    ]
  },
  {
    "slug": "solok",
    "nama": "Kabupaten Solok",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "IX Koto Sungai Lasi",
      "Bukit Sundi",
      "Danau Kembar",
      "Gunung Talang",
      "Hiliran Gumanti",
      "Lembah Gumanti",
      "Lembang Jaya",
      "Kubung",
      "Junjung Sirih",
      "Payung Sekaki",
      "Pantai Cermin",
      "Tigo Lurah",
      "X Koto Diatas",
      "X Koto Singkarak"
    ]
  },
  {
    "slug": "solok-selatan",
    "nama": "Kabupaten Solok Selatan",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "Koto Parik Gadang Diateh",
      "Sangir",
      "Sangir Balai Janggo",
      "Sangir Batang Hari",
      "Sangir Jujuan",
      "Sungai Pagu",
      "Pauah Duo"
    ]
  },
  {
    "slug": "tanah-datar",
    "nama": "Kabupaten Tanah Datar",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "Batipuh",
      "Batipuh Selatan",
      "Lintau Buo",
      "Limo Kaum",
      "Pariangan",
      "Rambatan",
      "Salimpauang",
      "Sungai Tarab",
      "Sungayang",
      "Tanjung Emas",
      "Tanjung Baru",
      "Terapu",
      "X Koto"
    ]
  },
  {
    "slug": "bukittinggi",
    "nama": "Kota Bukittinggi",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "Guguk Panjang",
      "Mandiangin Koto Selayan",
      "Aur Birugo Tigo Baleh"
    ]
  },
  {
    "slug": "padang",
    "nama": "Kota Padang",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "Bungus Teluk Kabung",
      "Koto Tangah",
      "Kuranji",
      "Lubuk Begalung",
      "Lubuk Kilangan",
      "Nanggalo",
      "Padang Barat",
      "Padang Selatan",
      "Padang Timur",
      "Padang Utara",
      "Pauh"
    ]
  },
  {
    "slug": "padang-panjang",
    "nama": "Kota Padang Panjang",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "Padang Panjang Barat",
      "Padang Panjang Timur"
    ]
  },
  {
    "slug": "pariaman",
    "nama": "Kota Pariaman",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "Pariaman Selatan",
      "Pariaman Tengah",
      "Pariaman Timur",
      "Pariaman Utara"
    ]
  },
  {
    "slug": "payakumbuh",
    "nama": "Kota Payakumbuh",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "Payakumbuh Barat",
      "Payakumbuh Selatan",
      "Payakumbuh Timur",
      "Payakumbuh Utara",
      "Lamposi Tigo Nagori"
    ]
  },
  {
    "slug": "sawahlunto",
    "nama": "Kota Sawahlunto",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "Barangin",
      "Lembah Segar",
      "Silungkang",
      "Talawi"
    ]
  },
  {
    "slug": "solok",
    "nama": "Kota Solok",
    "provinsi": "Provinsi Sumatera Barat",
    "kecamatan": [
      "Lubuk Sikarah",
      "Tanjung Harapan"
    ]
  },
  {
    "slug": "bengkalis",
    "nama": "Kabupaten Bengkalis",
    "provinsi": "Provinsi Riau",
    "kecamatan": [
      "Bengkalis",
      "Bantan",
      "Bukit Batu",
      "Mandau",
      "Ruppat",
      "Ruppat Utara",
      "Siak Kecil",
      "Pinggir",
      "Bandar Laksamana",
      "Talang Muandau",
      "Bathin Solapan"
    ]
  },
  {
    "slug": "indragiri-hilir",
    "nama": "Kabupaten Indragiri Hilir",
    "provinsi": "Provinsi Riau",
    "kecamatan": [
      "Batang Tuaka",
      "Concong",
      "Gaung",
      "Gaung Anak Serka",
      "Kateman",
      "Kuala Indragiri",
      "Kemuning",
      "Keritang",
      "Kempas",
      "Mandah",
      "Pelangiran",
      "Reteh",
      "Sungai Batang",
      "Tanah Merah",
      "Teluk Belengkong",
      "Tembilahan",
      "Tembilahan Hulu",
      "Tempuling"
    ]
  },
  {
    "slug": "indragiri-hulu",
    "nama": "Kabupaten Indragiri Hulu",
    "provinsi": "Provinsi Riau",
    "kecamatan": [
      "Batang Cenaku",
      "Batang Gansal",
      "Batang Peranap",
      "Batu Gajah",
      "Kuala Cenaku",
      "Lirik",
      "Lubuk Batu Jaya",
      "Pasir Penyu",
      "Peranap",
      "Rengat",
      "Rengat Barat",
      "Seberida",
      "Sungai Lala"
    ]
  },
  {
    "slug": "kampar",
    "nama": "Kabupaten Kampar",
    "provinsi": "Provinsi Riau",
    "kecamatan": [
      "Bangkinang",
      "Bangkinang Kota",
      "Gunung Sailan",
      "Kampar",
      "Kampar Kiri",
      "Kampar Kiri Hilir",
      "Kampar Kiri Hulu",
      "Kampar Kiri Tengah",
      "Kampar Utara",
      "Kampa",
      "Koto Kampar Hulu",
      "Kuok",
      "Perhentian Raja",
      "Rumbio Jaya",
      "Sali",
      "Siak Hulu",
      "Tambang",
      "Tapung",
      "Tapung Hilir",
      "Tapung Hulu",
      "XIII Koto Kampar"
    ]
  },
  {
    "slug": "kepulauan-meranti",
    "nama": "Kabupaten Kepulauan Meranti",
    "provinsi": "Provinsi Riau",
    "kecamatan": [
      "Merbau",
      "Rangsang",
      "Rangsang Barat",
      "Rangsang Pesisir",
      "Tebing Tinggi",
      "Tebing Tinggi Barat",
      "Tebing Tinggi Timur",
      "Tasik Putri Puyu",
      "Pulau Merbau"
    ]
  },
  {
    "slug": "kuantan-singingi",
    "nama": "Kabupaten Kuantan Singingi",
    "provinsi": "Provinsi Riau",
    "kecamatan": [
      "Benai",
      "Cerenti",
      "Gunung Toar",
      "Hulu Kuantan",
      "Inuman",
      "Kuantan Hilir",
      "Kuantan Hilir Seberang",
      "Kuantan Mudik",
      "Kuantan Tengah",
      "Logas Tanah Darat",
      "Pangean",
      "Pucuk Rantau",
      "Singingi",
      "Singingi Hilir"
    ]
  },
  {
    "slug": "pelalawan",
    "nama": "Kabupaten Pelalawan",
    "provinsi": "Provinsi Riau",
    "kecamatan": [
      "Bandar Petalangan",
      "Bandar Seikijang",
      "Buning",
      "Kuala Kampar",
      "Pangkalan Kerinci",
      "Pangkalan Kuras",
      "Pangkalan Lesung",
      "Pelalawan",
      "Teluk Meranti",
      "Ukui"
    ]
  },
  {
    "slug": "rokan-hilir",
    "nama": "Kabupaten Rokan Hilir",
    "provinsi": "Provinsi Riau",
    "kecamatan": [
      "Bagan Sinembah",
      "Bagan Sinembah Raya",
      "Bangko",
      "Bangko Pusako",
      "Batu Hampar",
      "Kubu",
      "Kubu Babussalam",
      "Pasir Limau Kapas",
      "Pekaitan",
      "Pujud",
      "Rantau Kopar",
      "Rimba Melintang",
      "Simpang Kanan",
      "Sinaboi",
      "Tanah Putih",
      "Tanah Putih Tanjung Melawan",
      "Tanjung Medan"
    ]
  },
  {
    "slug": "rokan-hulu",
    "nama": "Kabupaten Rokan Hulu",
    "provinsi": "Provinsi Riau",
    "kecamatan": [
      "Bangun Purba",
      "Bonai Darussalam",
      "Kabun",
      "Kepenuhan",
      "Kepenuhan Hulu",
      "Kunto Darussalam",
      "PAGARAN TAPAH DARUSSALAM",
      "Pendalian IV Koto",
      "Rambah",
      "Rambah Hilir",
      "Rambah Samo",
      "Rokan IV Koto",
      "Tambo Susah",
      "Tandun",
      "Ujung Batu"
    ]
  },
  {
    "slug": "siak",
    "nama": "Kabupaten Siak",
    "provinsi": "Provinsi Riau",
    "kecamatan": [
      "Bunga Raya",
      "Kandis",
      "Kerinci Kanan",
      "Koto Gasib",
      "Lubis Dalam",
      "Mempura",
      "Minas",
      "Pusako",
      "Sabak Auh",
      "Sayak",
      "Siak",
      "Sungai Apit",
      "Sungai Mandau",
      "Tualang"
    ]
  },
  {
    "slug": "dumai",
    "nama": "Kota Dumai",
    "provinsi": "Provinsi Riau",
    "kecamatan": [
      "Bukit Kapur",
      "Dumai Barat",
      "Dumai Kota",
      "Dumai Selatan",
      "Dumai Timur",
      "Medang Kampai",
      "Sungai Sembilan"
    ]
  },
  {
    "slug": "pekanbaru",
    "nama": "Kota Pekanbaru",
    "provinsi": "Provinsi Riau",
    "kecamatan": [
      "Bina Widya",
      "Bukit Raya",
      "Kulim",
      "Lima Puluh",
      "Marpoyan Damai",
      "Payung Sekaki",
      "Pekanbaru Kota",
      "Rumbai",
      "Rumbai Barat",
      "Rumbai Timur",
      "Sail",
      "Senapelan",
      "Sukajadi",
      "Tuah Madani",
      "Tenayan Raya"
    ]
  },
  {
    "slug": "bintan",
    "nama": "Kabupaten Bintan",
    "provinsi": "Provinsi Kepulauan Riau",
    "kecamatan": [
      "Bintan Pesisir",
      "Bintan Timur",
      "Bintan Utara",
      "Gunung Kijang",
      "Mantang",
      "Seri Kuala Lobam",
      "Tambelan",
      "Teluk Bintan",
      "Teluk Sebong",
      "Toapaya"
    ]
  },
  {
    "slug": "karimun",
    "nama": "Kabupaten Karimun",
    "provinsi": "Provinsi Kepulauan Riau",
    "kecamatan": [
      "Belat",
      "Buru",
      "Durai",
      "Karimun",
      "Kundur",
      "Kundur Barat",
      "Kundur Utara",
      "Meral",
      "Meral Barat",
      "Moro",
      "Tebing",
      "Ungar"
    ]
  },
  {
    "slug": "kepulauan-anambas",
    "nama": "Kabupaten Kepulauan Anambas",
    "provinsi": "Provinsi Kepulauan Riau",
    "kecamatan": [
      "Jemaja",
      "Jemaja Barat",
      "Jemaja Timur",
      "Kute Siantan",
      "Palmatak",
      "Siantan",
      "Siantan Selatan",
      "Siantan Tengah",
      "Siantan Timur"
    ]
  },
  {
    "slug": "lingga",
    "nama": "Kabupaten Lingga",
    "provinsi": "Provinsi Kepulauan Riau",
    "kecamatan": [
      "Kepulauan Posek",
      "Lingga",
      "Lingga Utara",
      "Lingga Timur",
      "Selayar",
      "Singkep",
      "Singkep Barat",
      "Singkep Pesisir",
      "Singkep Selatan",
      "Senayang"
    ]
  },
  {
    "slug": "natuna",
    "nama": "Kabupaten Natuna",
    "provinsi": "Provinsi Kepulauan Riau",
    "kecamatan": [
      "Bunguran Barat",
      "Bunguran Batubi",
      "Bunguran Selatan",
      "Bunguran Tengah",
      "Bunguran Timur",
      "Bunguran Timur Laut",
      "Bunguran Utara",
      "Midai",
      "Pulau Laut",
      "Pulau Tiga",
      "Serasan",
      "Serasan Timur",
      "Subi"
    ]
  },
  {
    "slug": "batam",
    "nama": "Kota Batam",
    "provinsi": "Provinsi Kepulauan Riau",
    "kecamatan": [
      "Batam Kota",
      "Batu Aji",
      "Batu Ampar",
      "Belakang Padang",
      "Bengkong",
      "Bulang",
      "Galang",
      "Lubuk Baja",
      "Nongsa",
      "Sagulung",
      "Sei Beduk",
      "Sekupang"
    ]
  },
  {
    "slug": "tanjungpinang",
    "nama": "Kota Tanjungpinang",
    "provinsi": "Provinsi Kepulauan Riau",
    "kecamatan": [
      "Bukit Bestari",
      "Tanjungpinang Barat",
      "Tanjungpinang Kota",
      "Tanjungpinang Timur"
    ]
  },
  {
    "slug": "batanghari",
    "nama": "Kabupaten Batanghari",
    "provinsi": "Provinsi Jambi",
    "kecamatan": [
      "Bajubang",
      "Batin XXIV",
      "Maro Sebo Ilir",
      "Maro Sebo Ulu",
      "Muara Tembesi",
      "Muara Bulian",
      "Pemayung",
      "Mersam"
    ]
  },
  {
    "slug": "bungo",
    "nama": "Kabupaten Bungo",
    "provinsi": "Provinsi Jambi",
    "kecamatan": [
      "Babin",
      "Baths III Ulu",
      "Bungo Dani",
      "Jujuhan",
      "Jujuhan Ilir",
      "Limbur Lubuk Mengkuang",
      "Muko-Muko Bathin VII",
      "Passir Limau Kapas",
      "Pelepat",
      "Pelepat Ilir",
      "Rantau Ikil",
      "Rimbo Tengah",
      "Tanah Sepotong",
      "Tanah Tumbuh"
    ]
  },
  {
    "slug": "kerinci",
    "nama": "Kabupaten Kerinci",
    "provinsi": "Provinsi Jambi",
    "kecamatan": [
      "Air Hangat",
      "Air Hangat Barat",
      "Air Hangat Timur",
      "Batang Merangin",
      "Bukit Kerman",
      "Danau Kerinci",
      "Danau Kerinci Barat",
      "Depati VII",
      "Gunung Kerinci",
      "Gunung Raya",
      "Kayu Aro",
      "Kayu Aro Barat",
      "Keliling Danau",
      "Siulak",
      "Siulak Mukai",
      "Sitinjau Laut"
    ]
  },
  {
    "slug": "merangin",
    "nama": "Kabupaten Merangin",
    "provinsi": "Provinsi Jambi",
    "kecamatan": [
      "Bangko",
      "Bangko Barat",
      "Batang Masumai",
      "Jangkat",
      "Jangkat Timur",
      "Lembah Masurai",
      "Margo Tabir",
      "Muara Siau",
      "Pamenang",
      "Pamenang Barat",
      "Pamenang Selatan",
      "Renah Pembarap",
      "Renah Pamenang",
      "Tabir",
      "Tabir Barat",
      "Tabir Lintas",
      "Tabir Selatan",
      "Tabir Timur",
      "Tabir Ulu"
    ]
  },
  {
    "slug": "muaro-jambi",
    "nama": "Kabupaten Muaro Jambi",
    "provinsi": "Provinsi Jambi",
    "kecamatan": [
      "Bahar Selatan",
      "Bahar Utara",
      "Jambi Luar Kota",
      "Kumpeh",
      "Kumpeh Ulu",
      "Maro Sebo",
      "Mestong",
      "Sekernan",
      "Sungai Bahar",
      "Sungai Gelam",
      "Taman Rajo"
    ]
  },
  {
    "slug": "sarolangun",
    "nama": "Kabupaten Sarolangun",
    "provinsi": "Provinsi Jambi",
    "kecamatan": [
      "Air Hitam",
      "Batang Asai",
      "Cermin Nan Gedang",
      "Limun",
      "Mandiangin",
      "Pelawan",
      "Pauh",
      "Sarolangun",
      "Singkut"
    ]
  },
  {
    "slug": "tanjung-jabung-barat",
    "nama": "Kabupaten Tanjung Jabung Barat",
    "provinsi": "Provinsi Jambi",
    "kecamatan": [
      "Batang Asam",
      "Bram Itam",
      "Betara",
      "Kuala Betara",
      "Muara Papalik",
      "Pengabuan",
      "Renah Mendaluh",
      "Seberang Kota",
      "Senyerang",
      "Tebing Tinggi",
      "Tungkal Ilir",
      "Tungkal Ulu"
    ]
  },
  {
    "slug": "tanjung-jabung-timur",
    "nama": "Kabupaten Tanjung Jabung Timur",
    "provinsi": "Provinsi Jambi",
    "kecamatan": [
      "Berbak",
      "Dendang",
      "Geragai",
      "Kuala Jambi",
      "Mendahara",
      "Mendahara Ulu",
      "Muara Sabak Barat",
      "Muara Sabak Timur",
      "Rantau Rasau",
      "Sadu"
    ]
  },
  {
    "slug": "tebo",
    "nama": "Kabupaten Tebo",
    "provinsi": "Provinsi Jambi",
    "kecamatan": [
      "Muara Tabir",
      "Rimboo Ilir",
      "Rimbo Bujang",
      "Rimbo Ulu",
      "Sumay",
      "Tebo Ilir",
      "Tebo Tengah",
      "Tebo Ulu",
      "Tengah Ilir",
      "VII Koto",
      "VII Koto Ilir"
    ]
  },
  {
    "slug": "jambi",
    "nama": "Kota Jambi",
    "provinsi": "Provinsi Jambi",
    "kecamatan": [
      "Alam Barajo",
      "Danau Sipin",
      "Danau Teluk",
      "Jambi Selatan",
      "Jambi Timur",
      "Jelutung",
      "Kota Baru",
      "Paal Merah",
      "Pasar Jambi",
      "Pelayangan",
      "Telanaipura"
    ]
  },
  {
    "slug": "sungai-penuh",
    "nama": "Kota Sungai Penuh",
    "provinsi": "Provinsi Jambi",
    "kecamatan": [
      "Hamparan Rawang",
      "Koto Baru",
      "Kumun Debai",
      "Pesisir Bukit",
      "Pondok Tinggi",
      "Sungai Bungkal",
      "Sungai Penuh",
      "Tanah Kampung"
    ]
  },
  {
    "slug": "bengkulu",
    "nama": "Kabupaten Bengkulu",
    "provinsi": "Provinsi Bengkulu",
    "kecamatan": [
      "Air Napal",
      "Giri Mulya",
      "Enggano",
      "Kerkerk",
      "Ketahun",
      "Kota Arga Makmur",
      "Lais",
      "Marga Sakti Sebelat",
      "Padang Jaya",
      "Pinang Raya",
      "Rama Agung",
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
      "Lungkang Kule",
      "Muara Sahung",
      "Padang Guci Hilir",
      "Padang Guci Hulu",
      "Semidang Gumay",
      "Tanjung Kemuning",
      "Tetap"
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
      "Lebong Utara",
      "Pelabai",
      "Rimbo Pengadang",
      "Uram Jaya"
    ]
  },
  {
    "slug": "mukomuko",
    "nama": "Kabupaten Mukomuko",
    "provinsi": "Provinsi Bengkulu",
    "kecamatan": [
      "Air Dikit",
      "Air Majunto",
      "Air Rami",
      "Ipuh",
      "Kota Mukomuko",
      "Lubuk Pinang",
      "Malin Deman",
      "Penarik",
      "Pondok Suguh",
      "Selagan Raya",
      "Teramang Jaya",
      "Teras Terunjam"
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
      "Selupu Rejang",
      "Sindang Dataran",
      "Sindang Kelingi"
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
      "Selo Barat",
      "Seluma",
      "Seluma Selatan",
      "Seluma Timur",
      "Seluma Utara",
      "Semanjung",
      "Talo",
      "Talo Kecil"
    ]
  },
  {
    "slug": "bengkulu",
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
    "slug": "curup",
    "nama": "Kota Curup",
    "provinsi": "Provinsi Bengkulu",
    "kecamatan": [
      "Curup Pusat",
      "Curup Utara",
      "Curup Selatan"
    ]
  },
  {
    "slug": "banyuasin",
    "nama": "Kabupaten Banyuasin",
    "provinsi": "Provinsi Sumatera Selatan",
    "kecamatan": [
      "Air Salek",
      "Banyuasin I",
      "Banyuasin II",
      "Banyuasin III",
      "Betung",
      "Karang Agung Ilir",
      "Makarti Jaya",
      "Muara Padang",
      "Muara Sugihan",
      "Muara Telang",
      "Pangkalan Balai",
      "Rambutan",
      "Rantau Bayur",
      "Sembawa",
      "Suak Tapeh",
      "Tanjung Lago"
    ]
  },
  {
    "slug": "empat-lawang",
    "nama": "Kabupaten Empat Lawang",
    "provinsi": "Provinsi Sumatera Selatan",
    "kecamatan": [
      "Lintang Kanan",
      "Muara Pinang",
      "Pendopo",
      "Pendopo Barat",
      "Pasemah Air Keroh",
      "Saling",
      "Sekerak",
      "Tebing Tinggi",
      "Talang Padang"
    ]
  },
  {
    "slug": "lahat",
    "nama": "Kabupaten Lahat",
    "provinsi": "Provinsi Sumatera Selatan",
    "kecamatan": [
      "Gumay Talang",
      "Gumay Ulu",
      "Jarai",
      "Kikim Barat",
      "Kikim Selatan",
      "Kikim Tengah",
      "Kikim Timur",
      "Kota Agung",
      "Lahat",
      "Lahat Selatan",
      "Merapi Barat",
      "Merapi Selatan",
      "Merapi Timur",
      "Mulak Ulu",
      "Pagar Gunung",
      "Pseksu",
      "Tanjung Sakti Pumu",
      "Tanjung Sakti Pumi"
    ]
  },
  {
    "slug": "muara-enim",
    "nama": "Kabupaten Muara Enim",
    "provinsi": "Provinsi Sumatera Selatan",
    "kecamatan": [
      "Benakat",
      "Gelumbang",
      "Gunung Megang",
      "Kelekar",
      "Lawang Kidul",
      "Lembak",
      "Lubai",
      "Muara Enim",
      "Muara Belida",
      "Rembang Niru",
      "Semende Darat Laut",
      "Semende Darat Tengah",
      "Semende Darat Ulu",
      "Sungai Rotan",
      "Tanjung Agung",
      "Ujan Mas"
    ]
  },
  {
    "slug": "musi-banyuasin",
    "nama": "Kabupaten Musi Banyuasin",
    "provinsi": "Provinsi Sumatera Selatan",
    "kecamatan": [
      "Babat Toman",
      "Babat Supat",
      "Bayung Lencir",
      "Batanghari Leko",
      "Keluang",
      "Lais",
      "Lalan",
      "Lawang Wetan",
      "Plakat Tinggi",
      "Sanga Desa",
      "Sekayu",
      "Sungai Lilin",
      "Tungkal Jaya"
    ]
  },
  {
    "slug": "musi-rawas",
    "nama": "Kabupaten Musi Rawas",
    "provinsi": "Provinsi Sumatera Selatan",
    "kecamatan": [
      "Bulu Taba",
      "Bulla Tengah",
      "Bulla Timur",
      "Jayaloka",
      "Megang Sakti",
      "Muara Beliti",
      "Muara Keti",
      "Muara Lakitan",
      "Purwodadi",
      "Selangit",
      "Suku Tengah Lakitan Ulu Terawas",
      "Sumber Harta",
      "Tugumulyo"
    ]
  },
  {
    "slug": "musi-rawas-utara",
    "nama": "Kabupaten Musi Rawas Utara",
    "provinsi": "Provinsi Sumatera Selatan",
    "kecamatan": [
      "Karang Dapo",
      "Karang Jaya",
      "Nibung",
      "Rawas Ilir",
      "Rawas Ulu",
      "Rupit",
      "Ulu Rawas"
    ]
  },
  {
    "slug": "ogan-ilir",
    "nama": "Kabupaten Ogan Ilir",
    "provinsi": "Provinsi Sumatera Selatan",
    "kecamatan": [
      "Indralaya",
      "Indralaya Selatan",
      "Indralaya Utara",
      "Kandis",
      "Lubuk Keliat",
      "Muara Kuang",
      "Pemulutan",
      "Pemulutan Selatan",
      "Pemulutan Barat",
      "Rantau Alai",
      "Rantau Panjang",
      "Sungai Pinang",
      "Tanjung Batu",
      "Tanjung Raja"
    ]
  },
  {
    "slug": "ogan-komering",
    "nama": "Kabupaten Ogan Komering",
    "provinsi": "Provinsi Sumatera Selatan",
    "kecamatan": [
      "Air Sugihan",
      "Cengal",
      "Jejawi",
      "Kayu Agung",
      "Lempuing",
      "Lempuing Jaya",
      "Mesuji",
      "Mesuji Makmur",
      "Mesuji Raya",
      "Pedamaran",
      "Pedamaran Timur",
      "Sirah Pulau Padang",
      "Sungai Menang",
      "Tanjung Lubuk",
      "Teluk Gelam"
    ]
  },
  {
    "slug": "penukal-abab-lematang-ilir",
    "nama": "Kabupaten Penukal Abab Lematang Ilir",
    "provinsi": "Provinsi Sumatera Selatan",
    "kecamatan": [
      "Abab",
      "Penukal",
      "Penukal Utara",
      "Talang Ubi",
      "Tanah Abang"
    ]
  },
  {
    "slug": "lubuklinggau",
    "nama": "Kota Lubuklinggau",
    "provinsi": "Provinsi Sumatera Selatan",
    "kecamatan": [
      "Lubuklinggau Barat I",
      "Lubuklinggau Barat II",
      "Lubuklinggau Selatan I",
      "Lubuklinggau Selatan II",
      "Lubuklinggau Timur I",
      "Lubuklinggau Timur II",
      "Lubuklinggau Utara I",
      "Lubuklinggau Utara II"
    ]
  },
  {
    "slug": "pagar-alam",
    "nama": "Kota Pagar Alam",
    "provinsi": "Provinsi Sumatera Selatan",
    "kecamatan": [
      "Dempo Selatan",
      "Dempo Tengah",
      "Dempo Utara",
      "Pagar Alam Selatan",
      "Pagar Alam Utara"
    ]
  },
  {
    "slug": "palembang",
    "nama": "Kota Palembang",
    "provinsi": "Provinsi Sumatera Selatan",
    "kecamatan": [
      "Alang-Alang Lebar",
      "Bukit Kecil",
      "Gandus",
      "Ilir Barat I",
      "Ilir Barat II",
      "Ilir Timur I",
      "Ilir Timur II",
      "Ilir Timur III",
      "Kalidoni",
      "Kemuning",
      "Kertapati",
      "Plaju",
      "Sako",
      "Seberang Ulu I",
      "Seberang Ulu II",
      "Sematang Borang",
      "Sukamaju",
      "Sukarami"
    ]
  },
  {
    "slug": "prabumulih",
    "nama": "Kota Prabumulih",
    "provinsi": "Provinsi Sumatera Selatan",
    "kecamatan": [
      "Cambai",
      "Prabumulih Barat",
      "Prabumulih Selatan",
      "Prabumulih Timur",
      "Prabumulih Utara",
      "RKT (Rambang Kapas Tengah)"
    ]
  },
  {
    "slug": "sekayu",
    "nama": "Kota Sekayu",
    "provinsi": "Provinsi Sumatera Selatan",
    "kecamatan": [
      "Sekayu Kota",
      "Sekayu Timur",
      "Sekayu Selatan"
    ]
  },
  {
    "slug": "bangka",
    "nama": "Kabupaten Bangka",
    "provinsi": "Provinsi Bangka Belitung",
    "kecamatan": [
      "Bakar",
      "Belinyu",
      "Mendo Barat",
      "Merawang",
      "Pemali",
      "Riau Silip",
      "Sungai Liat",
      "Puding Besar"
    ]
  },
  {
    "slug": "bangka-barat",
    "nama": "Kabupaten Bangka Barat",
    "provinsi": "Provinsi Bangka Belitung",
    "kecamatan": [
      "Jebus",
      "Kelapa",
      "Muntok",
      "Parittiga",
      "Simpang Teritip",
      "Tempilang"
    ]
  },
  {
    "slug": "bangka-selatan",
    "nama": "Kabupaten Bangka Selatan",
    "provinsi": "Provinsi Bangka Belitung",
    "kecamatan": [
      "Air Gegas",
      "Lepar Pongok",
      "Payung",
      "Pulau Besar",
      "Simpang Rimba",
      "Toboali",
      "Tukak Sadai"
    ]
  },
  {
    "slug": "bangka-tengah",
    "nama": "Kabupaten Bangka Tengah",
    "provinsi": "Provinsi Bangka Belitung",
    "kecamatan": [
      "Koba",
      "Lubuk Besar",
      "Pangkalan Baru",
      "Simpang Katis",
      "Sungai Selan",
      "Namang"
    ]
  },
  {
    "slug": "belitung",
    "nama": "Kabupaten Belitung",
    "provinsi": "Provinsi Bangka Belitung",
    "kecamatan": [
      "Badau",
      "Membalong",
      "Sijuk",
      "Tanjung Pandan",
      "Selat Nasik"
    ]
  },
  {
    "slug": "belitung-timur",
    "nama": "Kabupaten Belitung Timur",
    "provinsi": "Provinsi Bangka Belitung",
    "kecamatan": [
      "Damar",
      "Gantung",
      "Kelapa Kampit",
      "Manggar",
      "Simpang Pesak",
      "Simpang Rengiang",
      "Dendang"
    ]
  },
  {
    "slug": "pangkal-pinang",
    "nama": "Kota Pangkal Pinang",
    "provinsi": "Provinsi Bangka Belitung",
    "kecamatan": [
      "Bukit Intan",
      "Gabek",
      "Gerunggang",
      "Girimaya",
      "Pangkal Balam",
      "Ramin",
      "Taman Sari"
    ]
  },
  {
    "slug": "lampung-barat",
    "nama": "Kabupaten Lampung Barat",
    "provinsi": "Provinsi Lampung",
    "kecamatan": [
      "Air Hitam",
      "Balik Bukit",
      "Bandar Negeri Suoh",
      "Batu Brak",
      "Batu Ketulis",
      "Belalau",
      "Gedung Surian",
      "Kebun Tebu",
      "Lumbok Seminung",
      "Pagar Dewa",
      "Sekincau",
      "Sukau",
      "Suoh",
      "Sumber Jaya",
      "Way Tenong"
    ]
  },
  {
    "slug": "lampung-selatan",
    "nama": "Kabupaten Lampung Selatan",
    "provinsi": "Provinsi Lampung",
    "kecamatan": [
      "Bakauheni",
      "Candipuro",
      "Jati Agung",
      "Kalianda",
      "Katibung",
      "Ketapang",
      "Merbau Mataram",
      "Natar",
      "Palas",
      "Penengahan",
      "Rajabasa",
      "Sidomulyo",
      "Sragi",
      "Tanjung Bintang",
      "Tanjungsari",
      "Way Sulan"
    ]
  },
  {
    "slug": "lampung-tengah",
    "nama": "Kabupaten Lampung Tengah",
    "provinsi": "Provinsi Lampung",
    "kecamatan": [
      "Anak Tuha",
      "Bandar Mataram",
      "Bandar Surabaya",
      "Bangun Rejo",
      "Bumi Nabung",
      "Bumi Ratu Nuban",
      "Gunung Sugih",
      "Kalirejo",
      "Kota Gajah",
      "Padang Ratu",
      "Pubian",
      "Punggur",
      "Rumbia",
      "Seputih Agung",
      "Seputih Banyak",
      "Seputih Mataram",
      "Seputih Raman",
      "Seputih Surabaya",
      "Terbanggi Besar",
      "Terusan Nunyai",
      "Way Pengubuan"
    ]
  },
  {
    "slug": "lampung-timur",
    "nama": "Kabupaten Lampung Timur",
    "provinsi": "Provinsi Lampung",
    "kecamatan": [
      "Bandar Sribhawono",
      "Batanghari",
      "Batanghari Nuban",
      "Braja Selebah",
      "Bumi Agung",
      "Gunung Pelindung",
      "Jabung",
      "Labuhan Maringgai",
      "Labuhan Ratu",
      "Marga Sekampung",
      "Marga Tiga",
      "Mataram Baru",
      "Melinting",
      "Metro Kampong",
      "Pasir Sakti",
      "Pekalongan",
      "Purbolinggo",
      "Raman Utara",
      "Sukadana",
      "Sekampung",
      "Sekampung Udik",
      "Waway Karya"
    ]
  },
  {
    "slug": "lampung-utara",
    "nama": "Kabupaten Lampung Utara",
    "provinsi": "Provinsi Lampung",
    "kecamatan": [
      "Abung Barat",
      "Abung Kunang",
      "Abung Selatan",
      "Abung Semuli",
      "Abung Surakarta",
      "Abung Tengah",
      "Abung Timur",
      "Abung Tinggi",
      "Blambangan Pagar",
      "Bukit Kemuning",
      "Bunga Mayang",
      "Kotabumi",
      "Kotabumi Selatan",
      "Kotabumi Utara",
      "Muara Sungkai",
      "Sungkai Barat",
      "Sungkai Jaya",
      "Sungkai Selatan",
      "Sungkai Utara",
      "Tanjung Raja"
    ]
  },
  {
    "slug": "mesuji",
    "nama": "Kabupaten Mesuji",
    "provinsi": "Provinsi Lampung",
    "kecamatan": [
      "Mesuji",
      "Mesuji Timur",
      "Panca Jaya",
      "Rawa Jitu Utara",
      "Simpang Pematang",
      "Tanjung Raya",
      "Way Serdang"
    ]
  },
  {
    "slug": "pesawaran",
    "nama": "Kabupaten Pesawaran",
    "provinsi": "Provinsi Lampung",
    "kecamatan": [
      "Gedong Tataan",
      "Kedondong",
      "Marga Punduh",
      "Negeri Katon",
      "Padang Cermin",
      "Punduh Pedada",
      "Tegineneng",
      "Teluk Pandan",
      "Way Lima",
      "Way Ratai"
    ]
  },
  {
    "slug": "pesisir-barat",
    "nama": "Kabupaten Pesisir Barat",
    "provinsi": "Provinsi Lampung",
    "kecamatan": [
      "Bangkunat",
      "Karyapenggawa",
      "Lemong",
      "Ngambur",
      "Ngaras",
      "Pesisir Selatan",
      "Pesisir Tengah",
      "Pesisir Utara",
      "Pulau Pisang",
      "Way Krui"
    ]
  },
  {
    "slug": "pringsewu",
    "nama": "Kabupaten Pringsewu",
    "provinsi": "Provinsi Lampung",
    "kecamatan": [
      "Ambarawa",
      "Banyumas",
      "Gading Rejo",
      "Pardasuka",
      "Pagelaran",
      "Pagelaran Utara",
      "Pringsewu",
      "Sukoharjo"
    ]
  },
  {
    "slug": "tanggamus",
    "nama": "Kabupaten Tanggamus",
    "provinsi": "Provinsi Lampung",
    "kecamatan": [
      "Air Naningan",
      "Bandar Negeri Semuong",
      "Bulok",
      "Cukuh Balak",
      "Gisting",
      "Gunung Alip",
      "Klapagading",
      "Kota Agung",
      "Kota Agung Barat",
      "Kota Agung Timur",
      "Limau",
      "Pematang Sawa",
      "Pugung",
      "Pulau Panggung",
      "Semaka",
      "Sumberejo",
      "Talang Padang",
      "Ulubelu",
      "Wonosobo"
    ]
  },
  {
    "slug": "tulang-bawang",
    "nama": "Kabupaten Tulang Bawang",
    "provinsi": "Provinsi Lampung",
    "kecamatan": [
      "Banjar Agung",
      "Banjar Margo",
      "Banjar Baru",
      "Dente Teladas",
      "Gedung Asem",
      "Gedung Meneng",
      "Menggala",
      "Menggala Timur",
      "Penawar Aji",
      "Penawar Tama",
      "Rawa Jitu Selatan",
      "Rawa Jitu Timur",
      "Rawapitu"
    ]
  },
  {
    "slug": "way-kanan",
    "nama": "Kabupaten Way Kanan",
    "provinsi": "Provinsi Lampung",
    "kecamatan": [
      "Bahuga",
      "Banjit",
      "Baradatu",
      "Buay Bahuga",
      "Bumi Agung",
      "Gunung Labuhan",
      "Kasui",
      "Negeri Agung",
      "Negeri Besar",
      "Pakuan Ratu",
      "Rebang Tangkas",
      "Way Tuba"
    ]
  },
  {
    "slug": "bandar-lampung",
    "nama": "Kota Bandar Lampung",
    "provinsi": "Provinsi Lampung",
    "kecamatan": [
      "Bumi Waras",
      "Enggal",
      "Kedamaian",
      "Kedaton",
      "Kemiling",
      "Labuhan Ratu",
      "Langkapura",
      "Panjang",
      "Rajabasa",
      "Tanjung Senang",
      "Tanjungkarang Barat",
      "Tanjungkarang Pusat",
      "Tanjungkarang Timur",
      "Telukbetung Barat",
      "Telukbetung Selatan",
      "Telukbetung Timur",
      "Telukbetung Utara",
      "Way Halim"
    ]
  },
  {
    "slug": "metro",
    "nama": "Kota Metro",
    "provinsi": "Provinsi Lampung",
    "kecamatan": [
      "Metro Barat",
      "Metro Pusat",
      "Metro Selatan",
      "Metro Timur",
      "Metro Utara"
    ]
  },
  {
    "slug": "lebak",
    "nama": "Kabupaten Lebak",
    "provinsi": "Provinsi Banten",
    "kecamatan": [
      "Banjarsari",
      "Bayah",
      "Bojongmanik",
      "Cibadak",
      "Cibeber",
      "Cigemblong",
      "Cihara",
      "Cijaku",
      "Cikulur",
      "Cileles",
      "Cilograng",
      "Cimargi",
      "Cipanas",
      "Cirinten",
      "Curugbitung",
      "Gunungkencana",
      "Kalanganyar",
      "Lebakgedong",
      "Leuwidamar",
      "Maja",
      "Malingping",
      "Muncang",
      "Panggarangan",
      "Rangkasbitung",
      "Sajira",
      "Sobang",
      "Wanasalam"
    ]
  },
  {
    "slug": "pandeglang",
    "nama": "Kabupaten Pandeglang",
    "provinsi": "Provinsi Banten",
    "kecamatan": [
      "Angsana",
      "Banjar",
      "Boong",
      "Cadasari",
      "Carita",
      "Cibaliung",
      "Cikeusik",
      "Cikedal",
      "Cimanuk",
      "Cipeucang",
      "Cisata",
      "Jenes",
      "Kaduheung",
      "Karang Tanjung",
      "Koroncong",
      "Labuan",
      "Majasari",
      "Mandalawangi",
      "Menes",
      "Munjul",
      "Pagelaran",
      "Pandeglang",
      "Panimbang",
      "Patia",
      "Picung",
      "Pulosari",
      "Saketi",
      "Sukaresmi",
      "Sumur"
    ]
  },
  {
    "slug": "serang",
    "nama": "Kabupaten Serang",
    "provinsi": "Provinsi Banten",
    "kecamatan": [
      "Anyar",
      "Bandung",
      "Baros",
      "Binuang",
      "Bojonegara",
      "Carenang",
      "Cikande",
      "Cikeusal",
      "Cinangka",
      "Ciomas",
      "Ciruas",
      "Gunungsari",
      "Jawilan",
      "Kragilan",
      "Kramatwatu",
      "Kopo",
      "Mancak",
      "Pabuaran",
      "Padarincang",
      "Pamarayan",
      "Petir",
      "Pontang",
      "Pulo Ampel",
      "Tanara",
      "Tirtayasa",
      "Tunjung Teja",
      "Waringinkurung"
    ]
  },
  {
    "slug": "tangerang",
    "nama": "Kabupaten Tangerang",
    "provinsi": "Provinsi Banten",
    "kecamatan": [
      "Balaraja",
      "Cikupa",
      "Cisauk",
      "Cisoka",
      "Curug",
      "Gunung Kaler",
      "Jambe",
      "Jayanti",
      "Kelapa Dua",
      "Kemiri",
      "Kresek",
      "Kronjo",
      "Kosambi",
      "Legok",
      "Mauk",
      "Mekar Baru",
      "Pagedangan",
      "Pakuhaji",
      "Panongan",
      "Pasar Kemis",
      "Rajeg",
      "Sepatan",
      "Sepatan Timur",
      "Solear",
      "Sukadiri",
      "Sukamulya",
      "Teluknaga",
      "Tigaraksa"
    ]
  },
  {
    "slug": "cilegon",
    "nama": "Kota Cilegon",
    "provinsi": "Provinsi Banten",
    "kecamatan": [
      "Cibeber",
      "Cilegon",
      "Citangkil",
      "Ciwandan",
      "Grogol",
      "Jombang",
      "Pulo Merak",
      "Purwakarta"
    ]
  },
  {
    "slug": "serang",
    "nama": "Kota Serang",
    "provinsi": "Provinsi Banten",
    "kecamatan": [
      "Cipocok Jaya",
      "Curug",
      "Kasemen",
      "Serang",
      "Taktakan",
      "Walantaka"
    ]
  },
  {
    "slug": "tangerang",
    "nama": "Kota Tangerang",
    "provinsi": "Provinsi Banten",
    "kecamatan": [
      "Batuceper",
      "Benda",
      "Cibodas",
      "Ciledug",
      "Cipondoh",
      "Jatiuwung",
      "Karangtengah",
      "Karawaci",
      "Larangan",
      "Neglasari",
      "Periuk",
      "Pinang",
      "Tangerang"
    ]
  },
  {
    "slug": "tangerang-selatan",
    "nama": "Kota Tangerang Selatan",
    "provinsi": "Provinsi Banten",
    "kecamatan": [
      "Ciputat",
      "Ciputat Timur",
      "Pamulang",
      "Pondok Aren",
      "Serpong",
      "Serpong Utara",
      "Setu"
    ]
  },
  {
    "slug": "jakarta-barat",
    "nama": "Kota Administrasi Jakarta Barat",
    "provinsi": "Provinsi DKI Jakarta",
    "kecamatan": [
      "Cengkareng",
      "Grogol Petamburan",
      "Kalideres",
      "Kebon Jeruk",
      "Kembangan",
      "Palmerah",
      "Taman Sari",
      "Tambora"
    ]
  },
  {
    "slug": "jakarta-pusat",
    "nama": "Kota Administrasi Jakarta Pusat",
    "provinsi": "Provinsi DKI Jakarta",
    "kecamatan": [
      "Cempaka Putih",
      "Gambir",
      "Johar Baru",
      "Kemayoran",
      "Menteng",
      "Sawah Besar",
      "Senen",
      "Tanah Abang"
    ]
  },
  {
    "slug": "jakarta-selatan",
    "nama": "Kota Administrasi Jakarta Selatan",
    "provinsi": "Provinsi DKI Jakarta",
    "kecamatan": [
      "Cilandak",
      "Jagakarsa",
      "Kebayoran Baru",
      "Kebayoran Lama",
      "Mampang Prapatan",
      "Pancoran",
      "Pasar Minggu",
      "Pesanggrahan",
      "Setiabudi",
      "Tebet"
    ]
  },
  {
    "slug": "jakarta-timur",
    "nama": "Kota Administrasi Jakarta Timur",
    "provinsi": "Provinsi DKI Jakarta",
    "kecamatan": [
      "Cakung",
      "Cipayung",
      "Ciracas",
      "Duren Sawit",
      "Jatinegara",
      "Kramat Jati",
      "Makasar",
      "Matraman",
      "Pasar Rebo",
      "Pulo Gadung"
    ]
  },
  {
    "slug": "jakarta-utara",
    "nama": "Kota Administrasi Jakarta Utara",
    "provinsi": "Provinsi DKI Jakarta",
    "kecamatan": [
      "Cilincing",
      "Kelapa Gading",
      "Koja",
      "Pademangan",
      "Penjaringan",
      "Tanjung Priok"
    ]
  },
  {
    "slug": "bandung",
    "nama": "Kabupaten Bandung",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Arjasari",
      "Baleendah",
      "Banjaran",
      "Boongsoang",
      "Cangkuang",
      "Cicalengka",
      "meuleus",
      "Cikancung",
      "Cilengkrang",
      "Cileunyi",
      "Cimaung",
      "Cimenyan",
      "Ciparay",
      "Ciwidey",
      "Dayeuhkolot",
      "Ibun",
      "Katapang",
      "Kertasari",
      "Kutawaringin",
      "Majalaya",
      "Margahayu",
      "Margaasih",
      "Nagreg",
      "Pacet",
      "Pameungpeuk",
      "Pangalengan",
      "Paseh",
      "Pasirjambu",
      "Rancaekek",
      "Rancabali",
      "Solokan Jeruk",
      "Soreang"
    ]
  },
  {
    "slug": "bandung-barat",
    "nama": "Kabupaten Bandung Barat",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Batujajar",
      "Cihampelas",
      "Cikalongwetan",
      "Cililin",
      "Cipatat",
      "Cipeundeuy",
      "Cipongkor",
      "Cisarua",
      "Gununghalu",
      "Lembang",
      "Ngamprah",
      "Padalarang",
      "Parongpong",
      "Rongga",
      "Saguling",
      "Sindangkerta"
    ]
  },
  {
    "slug": "bekasi",
    "nama": "Kabupaten Bekasi",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Babelan",
      "Bojongmangu",
      "Cabangbungin",
      "Cibarusah",
      "Cibitung",
      "Cikarang Barat",
      "Cikarang Pusat",
      "Cikarang Selatan",
      "Cikarang Timur",
      "Cikarang Utara",
      "Karangbahagia",
      "Kedungwaringin",
      "Muara Gintung",
      "Pebayuran",
      "Serang Baru",
      "Setu",
      "Sukakarya",
      "Sukatani",
      "Sukawangi",
      "Tambun Selatan",
      "Tambun Utara",
      "Tarumajaya"
    ]
  },
  {
    "slug": "bogor",
    "nama": "Kabupaten Bogor",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Babakan Madang",
      "Boonggede",
      "Caringin",
      "Cariu",
      "Ciampea",
      "Ciawi",
      "Cibinong",
      "Cibungbulang",
      "Cigombong",
      "Cigudeg",
      "Cijeruk",
      "Cileungsi",
      "Ciomas",
      "Cisarua",
      "Ciseeng",
      "Citeureup",
      "Dramaga",
      "Gunung Putri",
      "Gunung Sindur",
      "Jasinga",
      "Jonggol",
      "Kemang",
      "Klapanunggal",
      "Leuwiliang",
      "Leuwisadeng",
      "Megamendung",
      "Nanggung",
      "Pamijahan",
      "Parung",
      "Parung Panjang",
      "Ranca Bungur",
      "Rumpin",
      "Sukajaya",
      "Sukamakmur",
      "Sukaraja",
      "Tajurhalang",
      "Tamansari",
      "Tanjungsari",
      "Tenjo",
      "Tenjolaya"
    ]
  },
  {
    "slug": "bandung",
    "nama": "Kota Bandung",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Andir",
      "Astana Anyar",
      "Antapani",
      "Arcamanik",
      "Babakan Ciparay",
      "Bandung Kidul",
      "Bandung Kulon",
      "Bandung Wetan",
      "Batununggal",
      "Boongtoa",
      "Cibeunying Kaler",
      "Cibeunying Kidul",
      "Cibiru",
      "Cicendo",
      "Cidadap",
      "Cinambo",
      "Coblong",
      "Gedebage",
      "Kiaracondong",
      "Lengkong",
      "Mandalajati",
      "Panyileukan",
      "Rancasari",
      "Regol",
      "Sukajadi",
      "Sukasari",
      "Sumur Bandung",
      "Ujungberung"
    ]
  },
  {
    "slug": "bekasi",
    "nama": "Kota Bekasi",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Bantar Gebang",
      "Bekasi Barat",
      "Bekasi Selatan",
      "Bekasi Timur",
      "Bekasi Utara",
      "Jatiasih",
      "Jatisampurna",
      "Medan Satria",
      "Mustika Jaya",
      "Pondok Gede",
      "Pondok Melati",
      "Rawalumbu"
    ]
  },
  {
    "slug": "bogor",
    "nama": "Kota Bogor",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Bogor Barat",
      "Bogor Selatan",
      "Bogor Tengah",
      "Bogor Timur",
      "Bogor Utara",
      "Tanah Sareal"
    ]
  },
  {
    "slug": "depok",
    "nama": "Kota Depok",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Beji",
      "Bojongsari",
      "Cilodong",
      "Cimanggis",
      "Cinere",
      "Cipayung",
      "Limo",
      "Pancoran Mas",
      "Sawangan",
      "Sukmajaya",
      "Tapos"
    ]
  },
  {
    "slug": "banjarnegara",
    "nama": "Kabupaten Banjarnegara",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Banjarmangu",
      "Banjarnegara",
      "Batur",
      "Bawang",
      "Kalibening",
      "Karangkobar",
      "Madukara",
      "Mandiraja",
      "Pagentan",
      "Pejawaran",
      "Punggelan",
      "Purwanegara",
      "Purwareja Klampok",
      "Rakit",
      "Sigaluh",
      "Susukan",
      "Wanadadi",
      "Wanayasa"
    ]
  },
  {
    "slug": "banyumas",
    "nama": "Kabupaten Banyumas",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Ajibarang",
      "Banyumas",
      "Baturraden",
      "Cilongok",
      "Gumelar",
      "Kalibagor",
      "Karanglewas",
      "Kebasen",
      "Kedungbanteng",
      "Kembaran",
      "Kemranjen",
      "Jatilawang",
      "Lumbir",
      "Patikraja",
      "Pekuncen",
      "Purwojati",
      "Purwokerto Barat",
      "Purwokerto Selatan",
      "Purwokerto Timur",
      "Purwokerto Utara",
      "Rawalo",
      "Sokaraja",
      "Somagede",
      "Sumbang",
      "Sumpiuh",
      "Tambak",
      "Wangon"
    ]
  },
  {
    "slug": "semarang",
    "nama": "Kota Semarang",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Banyumanik",
      "Candisari",
      "Gajahmungkur",
      "Gayamsari",
      "Genuk",
      "Gunungpati",
      "Mijen",
      "Ngaliyan",
      "Pedurungan",
      "Semarang Barat",
      "Semarang Selatan",
      "Semarang Tengah",
      "Semarang Timur",
      "Semarang Utara",
      "Tembalang",
      "Tugu"
    ]
  },
  {
    "slug": "surakarta",
    "nama": "Kota Surakarta",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Banjarsari",
      "Jebres",
      "Laweyan",
      "Pasar Kliwon",
      "Serengan"
    ]
  },
  {
    "slug": "bantul",
    "nama": "Kabupaten Bantul",
    "provinsi": "Provinsi Daerah Istimewa Yogyakarta",
    "kecamatan": [
      "Bambanglipuro",
      "Banguntapan",
      "Bantul",
      "Dlingo",
      "Imogiri",
      "Jetis",
      "Kasihan",
      "Kretek",
      "Pajangan",
      "Pandak",
      "Piyungan",
      "Pleret",
      "Pundong",
      "Sanden",
      "Sedes",
      "Sewa",
      "Srandakan"
    ]
  },
  {
    "slug": "sleman",
    "nama": "Kabupaten Sleman",
    "provinsi": "Provinsi Daerah Istimewa Yogyakarta",
    "kecamatan": [
      "Berbah",
      "Cangkringan",
      "Depok",
      "Gamping",
      "Godean",
      "Kalasan",
      "Minggir",
      "Mlati",
      "Moyudan",
      "Ngaglik",
      "Ngemplak",
      "Pakem",
      "Prambanan",
      "Seyegan",
      "Sleman",
      "Tempel",
      "Turi"
    ]
  },
  {
    "slug": "yogyakarta",
    "nama": "Kota Yogyakarta",
    "provinsi": "Provinsi Daerah Istimewa Yogyakarta",
    "kecamatan": [
      "Danurejan",
      "Gedongtengen",
      "Gondokusuman",
      "Gondomanan",
      "Jetis",
      "Kotagede",
      "Kraton",
      "Mantrijeron",
      "Mergangsan",
      "Ngampilan",
      "Pakualaman",
      "Tegalrejo",
      "Umbulharjo",
      "Wirobrajan"
    ]
  },
  {
    "slug": "banyuwangi",
    "nama": "Kabupaten Banyuwangi",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Banggorejo",
      "Banyuwangi",
      "Blimbingsari",
      "Cluring",
      "Gambiran",
      "Genteng",
      "Giri",
      "Glagah",
      "Glenmore",
      "Kabat",
      "Kalibaru",
      "Kalipuro",
      "Licin",
      "Muncar",
      "Pesanggaran",
      "Purwoharjo",
      "Rogojampi",
      "Sembulung",
      "Singojuruh",
      "Songgon",
      "Srono",
      "Tegaldlimo",
      "Tegalsari",
      "Wongsorejo"
    ]
  },
  {
    "slug": "sidoarjo",
    "nama": "Kabupaten Sidoarjo",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Balongbendo",
      "Buduran",
      "Candi",
      "Gedangan",
      "Jabon",
      "Krembung",
      "Krian",
      "Prambon",
      "Porong",
      "Sedati",
      "Sidoarjo",
      "Sukodono",
      "Taman",
      "Tanggulangin",
      "Tarik",
      "Tulangan",
      "Waru",
      "Wonoayu"
    ]
  },
  {
    "slug": "surabaya",
    "nama": "Kota Surabaya",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Asemrowo",
      "Benowo",
      "Bubutan",
      "Bulak",
      "Dukuh Pakis",
      "Gayungan",
      "Genteng",
      "Gubeng",
      "Gunung Anyar",
      "Jambangan",
      "Karang Pilang",
      "Kenjeran",
      "Krembangan",
      "Lakarsantri",
      "Mulyorejo",
      "Pabean Cantian",
      "Pakal",
      "Rungkut",
      "Sambikerep",
      "Sawahan",
      "Semampir",
      "Simokerto",
      "Sukolilo",
      "Sukomanunggal",
      "Tambaksari",
      "Tandes",
      "Tegalsari",
      "Tenggilis Mejoyo",
      "Wiyung",
      "Wonocolo",
      "Wonokromo"
    ]
  },
  {
    "slug": "badung",
    "nama": "Kabupaten Badung",
    "provinsi": "Provinsi Bali",
    "kecamatan": [
      "Abiansemal",
      "Kuta",
      "Kuta Selatan",
      "Kuta Utara",
      "Mengwi",
      "Petang"
    ]
  },
  {
    "slug": "denpasar",
    "nama": "Kota Denpasar",
    "provinsi": "Provinsi Bali",
    "kecamatan": [
      "Denpasar Barat",
      "Denpasar Selatan",
      "Denpasar Timur",
      "Denpasar Utara"
    ]
  },
  {
    "slug": "bima",
    "nama": "Kabupaten Bima",
    "provinsi": "Provinsi Nusa Tenggara Barat",
    "kecamatan": [
      "Ambalawi",
      "Belo",
      "Bollu",
      "Donggo",
      "Lambu",
      "Langgudu",
      "Mada Pangga",
      "Monta",
      "Palibelo",
      "Parado",
      "Sape",
      "Soromandi",
      "Tambora",
      "Wawo",
      "Woha"
    ]
  },
  {
    "slug": "mataram",
    "nama": "Kota Mataram",
    "provinsi": "Provinsi Nusa Tenggara Barat",
    "kecamatan": [
      "Ampenan",
      "Cakranegara",
      "Mataram",
      "Pebenang",
      "Sandubaya",
      "Sekarbela"
    ]
  },
  {
    "slug": "alor",
    "nama": "Kabupaten Alor",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Abad",
      "Alor Barat Daya",
      "Alor Barat Laut",
      "Alor Selatan",
      "Alor Tengah Utara",
      "Alor Timur",
      "Alor Timur Laut",
      "Kabola",
      "Lembur",
      "Mataru",
      "Pantar",
      "Pantar Barat",
      "Pantar Barat Laut",
      "Pantar Tengah",
      "Pantar Timur",
      "Teluk Mutiara"
    ]
  },
  {
    "slug": "kupang",
    "nama": "Kota Kupang",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Alak",
      "Kelapa Lima",
      "Kota Raja",
      "Kota Sejahtera",
      "Maulafa",
      "Oebobo"
    ]
  },
  {
    "slug": "pontianak",
    "nama": "Kota Pontianak",
    "provinsi": "Provinsi Kalimantan Barat",
    "kecamatan": [
      "Pontianak Barat",
      "Pontianak Kota",
      "Pontianak Selatan",
      "Pontianak Tenggara",
      "Pontianak Timur",
      "Pontianak Utara"
    ]
  },
  {
    "slug": "banjarmasin",
    "nama": "Kota Banjarmasin",
    "provinsi": "Provinsi Kalimantan Selatan",
    "kecamatan": [
      "Banjarmasin Barat",
      "Banjarmasin Selatan",
      "Banjarmasin Tengah",
      "Banjarmasin Timur",
      "Banjarmasin Utara"
    ]
  },
  {
    "slug": "palangka-raya",
    "nama": "Kota Palangka Raya",
    "provinsi": "Provinsi Kalimantan Tengah",
    "kecamatan": [
      "Bukit Batu",
      "Jekan Raya",
      "Pahangut",
      "Rakumpit",
      "Sebangau"
    ]
  },
  {
    "slug": "balikpapan",
    "nama": "Kota Balikpapan",
    "provinsi": "Provinsi Kalimantan Timur",
    "kecamatan": [
      "Balikpapan Barat",
      "Balikpapan Kota",
      "Balikpapan Selatan",
      "Balikpapan Tengah",
      "Balikpapan Timur",
      "Balikpapan Utara"
    ]
  },
  {
    "slug": "samarinda",
    "nama": "Kota Samarinda",
    "provinsi": "Provinsi Kalimantan Timur",
    "kecamatan": [
      "Loa Janan Ilir",
      "Palaran",
      "Samarinda Ilir",
      "Samarinda Kota",
      "Samarinda Seberang",
      "Samarinda Utara",
      "Sambutan",
      "Sungai Kunjang",
      "Sungai Pinang"
    ]
  },
  {
    "slug": "tarakan",
    "nama": "Kota Tarakan",
    "provinsi": "Provinsi Kalimantan Utara",
    "kecamatan": [
      "Tarakan Barat",
      "Tarakan Central",
      "Tarakan Timur",
      "Tarakan Utara"
    ]
  },
  {
    "slug": "gorontalo",
    "nama": "Kota Gorontalo",
    "provinsi": "Provinsi Gorontalo",
    "kecamatan": [
      "Dumbo Raya",
      "Dungingi",
      "Kota Barat",
      "Kota Selatan",
      "Kota Tengah",
      "Kota Timur",
      "Kota Utara",
      "Hulonthalangi",
      "Sipatan"
    ]
  },
  {
    "slug": "makassar",
    "nama": "Kota Makassar",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Biringkanaya",
      "Bontoala",
      "Kepulauan Sangkarrang",
      "Makassar",
      "Mamajang",
      "Manggala",
      "Mariso",
      "Panakkukang",
      "Rappocini",
      "Tallo",
      "Tamalanrea",
      "Tamalate",
      "Ujung Pandang",
      "Ujung Tanah",
      "Wajo"
    ]
  },
  {
    "slug": "kendari",
    "nama": "Kota Kendari",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Abeli",
      "Baruga",
      "Kambu",
      "Kendari",
      "Kendari Barat",
      "Kadia",
      "Mandonga",
      "Nambo",
      "Puuwatu",
      "Wua-Wua"
    ]
  },
  {
    "slug": "palu",
    "nama": "Kota Palu",
    "provinsi": "Provinsi Sulawesi Tengah",
    "kecamatan": [
      "Mantikulore",
      "Palu Barat",
      "Palu Selatan",
      "Palu Timur",
      "Palu Utara",
      "Tatanga",
      "Tawaeli",
      "Ulujadi"
    ]
  },
  {
    "slug": "manado",
    "nama": "Kota Manado",
    "provinsi": "Provinsi Sulawesi Utara",
    "kecamatan": [
      "Bunaken",
      "Bunaken Kepulauan",
      "Malalayang",
      "Mapanget",
      "Paal Dua",
      "Sario",
      "Singkil",
      "Tikala",
      "Tuminting",
      "Wanea",
      "Wenang"
    ]
  },
  {
    "slug": "mamuju",
    "nama": "Kota Mamuju",
    "provinsi": "Provinsi Sulawesi Barat",
    "kecamatan": [
      "Bonehau",
      "Kalukku",
      "Kalukku Barat",
      "Mamuju",
      "Papalang",
      "Simboro dan Kepulauan",
      "Tapalang",
      "Tapalang Barat"
    ]
  },
  {
    "slug": "ambon",
    "nama": "Kota Ambon",
    "provinsi": "Provinsi Maluku",
    "kecamatan": [
      "Baguala",
      "Leitimur Selatan",
      "Nusaniwe",
      "Sirimau",
      "Teluk Ambon"
    ]
  },
  {
    "slug": "halmahera-barat",
    "nama": "Kabupaten Halmahera Barat",
    "provinsi": "Provinsi Maluku Utara",
    "kecamatan": [
      "Ibu",
      "Ibu Selatan",
      "Ibu Utara",
      "Jailolo",
      "Jailolo Selatan",
      "Lolu",
      "Sahu",
      "Sahu Timur",
      "Tabaru"
    ]
  },
  {
    "slug": "halmahera-tengah",
    "nama": "Kabupaten Halmahera Tengah",
    "provinsi": "Provinsi Maluku Utara",
    "kecamatan": [
      "Patani",
      "Patani Barat",
      "Patani Timur",
      "Patani Utara",
      "Weda",
      "Weda Selatan",
      "Weda Tengah",
      "Weda Timur",
      "Weda Utara"
    ]
  },
  {
    "slug": "halmahera-utara",
    "nama": "Kabupaten Halmahera Utara",
    "provinsi": "Provinsi Maluku Utara",
    "kecamatan": [
      "Galela",
      "Galela Barat",
      "Galela Selatan",
      "Galela Utara",
      "Kao",
      "Kao Barat",
      "Kao Teluk",
      "Kao Utara",
      "Loloda Utara",
      "Malifut",
      "Tobelo",
      "Tobelo Barat",
      "Tobelo Selatan",
      "Tobelo Tengah",
      "Tobelo Timur",
      "Tobelo Utara"
    ]
  },
  {
    "slug": "halmahera-selatan",
    "nama": "Kabupaten Halmahera Selatan",
    "provinsi": "Provinsi Maluku Utara",
    "kecamatan": [
      "Bacan",
      "Bacan Barat",
      "Bacan Barat Utara",
      "Bacan Selatan",
      "Bacan Timur",
      "Bacan Timur Selatan",
      "Bacan Timur Tengah",
      "Gane Barat",
      "Gane Barat Selatan",
      "Gane Barat Utara",
      "Gane Timur",
      "Gane Timur Selatan",
      "Gane Timur Tengah",
      "Kasiruta Barat",
      "Kasiruta Timur",
      "Kayoa",
      "Kayoa Barat",
      "Kayoa Selatan",
      "Kayoa Utara",
      "Mandioli Selatan",
      "Mandioli Utara",
      "Obi",
      "Obi Barat",
      "Obi Selatan",
      "Obi Timur",
      "Obi Utara"
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
      "Mangoli Utara Timur",
      "Sanana",
      "Sanana Utara",
      "Sulabesi Barat",
      "Sulabesi Selatan",
      "Sulabesi Timur",
      "Sulabesi Tengah"
    ]
  },
  {
    "slug": "halmahera-timur",
    "nama": "Kabupaten Halmahera Timur",
    "provinsi": "Provinsi Maluku Utara",
    "kecamatan": [
      "Maba",
      "Maba Selatan",
      "Maba Tengah",
      "Maba Utara",
      "Kota Maba",
      "Wasile",
      "Wasile Selatan",
      "Wasile Tengah",
      "Wasile Timur",
      "Wasile Utara"
    ]
  },
  {
    "slug": "pulau-morotai",
    "nama": "Kabupaten Pulau Morotai",
    "provinsi": "Provinsi Maluku Utara",
    "kecamatan": [
      "Morotai Selatan",
      "Morotai Selatan Barat",
      "Morotai Jaya",
      "Morotai Timur",
      "Morotai Utara"
    ]
  },
  {
    "slug": "pulau-taliabu",
    "nama": "Kabupaten Pulau Taliabu",
    "provinsi": "Provinsi Maluku Utara",
    "kecamatan": [
      "Lede",
      "Taliabu Barat",
      "Taliabu Barat Laut",
      "Taliabu Selatan",
      "Taliabu Timur",
      "Taliabu Timur Selatan",
      "Taliabu Utara",
      "Tabona"
    ]
  },
  {
    "slug": "ternate",
    "nama": "Kota Ternate",
    "provinsi": "Provinsi Maluku Utara",
    "kecamatan": [
      "Pulau Ternate",
      "Ternate Barat",
      "Ternate Selatan",
      "Ternate Tengah",
      "Ternate Utara",
      "Moti",
      "Batang Dua"
    ]
  },
  {
    "slug": "tidore-kepulauan",
    "nama": "Kota Tidore Kepulauan",
    "provinsi": "Provinsi Maluku Utara",
    "kecamatan": [
      "Oba",
      "Oba Selatan",
      "Oba Tengah",
      "Oba Utara",
      "Tidore",
      "Tidore Selatan",
      "Tidore Utara",
      "Tidore Timur"
    ]
  },
  {
    "slug": "jailolo",
    "nama": "Kota Jailolo",
    "provinsi": "Provinsi Maluku Utara",
    "kecamatan": [
      "Jailolo Kota",
      "Jailolo Selatan"
    ]
  },
  {
    "slug": "weda",
    "nama": "Kota Weda",
    "provinsi": "Provinsi Maluku Utara",
    "kecamatan": [
      "Weda Kota",
      "Weda Tengah"
    ]
  },
  {
    "slug": "jayapura",
    "nama": "Kabupaten Jayapura",
    "provinsi": "Provinsi Papua",
    "kecamatan": [
      "Airu",
      "Demta",
      "Depapre",
      "Ebungfau",
      "Gresi Selatan",
      "Kaureh",
      "Kemtuk",
      "Kemtuk Gresi",
      "Namblong",
      "Nimbokrang",
      "Nimboran",
      "Raveni Rara",
      "Sentani",
      "Sentani Barat",
      "Sentani Timur",
      "Unurum Guay",
      "Waibu",
      "Yapsi",
      "Yokari"
    ]
  },
  {
    "slug": "merauke",
    "nama": "Kabupaten Merauke",
    "provinsi": "Provinsi Papua",
    "kecamatan": [
      "Elikobel",
      "Jeni",
      "Kaptel",
      "Kimaam",
      "Kurik",
      "Malind",
      "Merauke",
      "Muting",
      "Naukenjerai",
      "Ngguti",
      "Okaba",
      "Semangga",
      "Sota",
      "Tabonji",
      "Tanah Miring",
      "Tubang",
      "Ulilin",
      "Waan"
    ]
  },
  {
    "slug": "mimika",
    "nama": "Kabupaten Mimika",
    "provinsi": "Provinsi Papua",
    "kecamatan": [
      "Agimuga",
      "Amar",
      "Jila",
      "Jita",
      "Kuala Kencana",
      "Mimika Barat",
      "Mimika Barat Jauh",
      "Mimika Barat Tengah",
      "Mimika Baru",
      "Mimika Timur",
      "Mimika Timur Jauh",
      "Mimika Timur Tengah",
      "Tembagapura",
      "Wania"
    ]
  },
  {
    "slug": "nabire",
    "nama": "Kabupaten Nabire",
    "provinsi": "Provinsi Papua",
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
    "slug": "jayapura",
    "nama": "Kota Jayapura",
    "provinsi": "Provinsi Papua",
    "kecamatan": [
      "Abepura",
      "Heram",
      "Jayapura Selatan",
      "Jayapura Utara",
      "Muara Tami"
    ]
  },
  {
    "slug": "timika",
    "nama": "Kota Timika",
    "provinsi": "Provinsi Papua",
    "kecamatan": [
      "Mimika Baru",
      "Wania",
      "Kuala Kencana"
    ]
  },
  {
    "slug": "manokwari",
    "nama": "Kabupaten Manokwari",
    "provinsi": "Provinsi Papua Barat",
    "kecamatan": [
      "Manokwari Barat",
      "Manokwari Selatan",
      "Manokwari Timur",
      "Manokwari Utara",
      "Masni",
      "Prafi",
      "Sidey",
      "Tanah Rubuh"
    ]
  },
  {
    "slug": "sorong",
    "nama": "Kabupaten Sorong",
    "provinsi": "Provinsi Papua Barat",
    "kecamatan": [
      "Aimas",
      "Bagun",
      "Beraur",
      "Botain",
      "Hobard",
      "Klamono",
      "Klasso",
      "Klawak",
      "Klayili",
      "Kono",
      "Makatbon",
      "Mayamuk",
      "Moisegen",
      "Salawati",
      "Salawati Selatan",
      "Salawati Tengah",
      "Sayosa",
      "Sayosa Timur",
      "Seget",
      "Sorong",
      "Sunook"
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
      "Bintuni Barat",
      "Fafuwar",
      "Kaitaro",
      "Kamundan",
      "Kuri",
      "Manimeri",
      "Meyado",
      "Moskona Barat",
      "Moskona Selatan",
      "Moskona Timur",
      "Moskona Utara",
      "Sumuri",
      "Taro",
      "Toby",
      "Tuhiba",
      "Wamesa"
    ]
  }
];

const kotaFilePath = path.join(__dirname, '../data/kota.json');
const kotaData = JSON.parse(fs.readFileSync(kotaFilePath, 'utf8'));

let matchedCount = 0;
let unmatchedList = [];

for (const inputItem of inputData) {
  // Normalize names for matching
  const inputNamaClean = inputItem.nama.toLowerCase().trim();
  
  // Try 1: match by exact nama (case insensitive)
  let target = kotaData.find(k => k.nama.toLowerCase().trim() === inputNamaClean);
  
  // Try 2: match by slug
  if (!target) {
    target = kotaData.find(k => k.slug === inputItem.slug);
  }
  
  // Try 3: match by name without "Kabupaten " or "Kota "
  if (!target) {
    const shortName = inputNamaClean.replace(/^(kabupaten|kota|kota administrasi)\s+/i, '');
    target = kotaData.find(k => k.nama.toLowerCase().replace(/^(kabupaten|kota|kota administrasi)\s+/i, '') === shortName);
  }

  if (target) {
    target.kecamatan = inputItem.kecamatan;
    matchedCount++;
  } else {
    unmatchedList.push(inputItem);
  }
}

console.log(`Matched: ${matchedCount} / ${inputData.length}`);
if (unmatchedList.length > 0) {
  console.log('Unmatched items:', unmatchedList.map(u => ({ slug: u.slug, nama: u.nama })));
}

// Write back updated data/kota.json
fs.writeFileSync(kotaFilePath, JSON.stringify(kotaData, null, 2), 'utf8');
console.log('Successfully updated data/kota.json!');
