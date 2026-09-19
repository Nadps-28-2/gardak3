const fs = require('fs');
const path = require('path');

const inputDataBatch3 = [
  {
    "slug": "batang",
    "nama": "Kabupaten Batang",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Batang",
      "BanyUPUTIH",
      "Bawang",
      "Blado",
      "Gringsing",
      "Kandeman",
      "Limpasu",
      "Limpung",
      "Pecalungan",
      "Reban",
      "Subah",
      "Tersono",
      "Tulis",
      "Warungasem",
      "Wonotunggal"
    ]
  },
  {
    "slug": "blora",
    "nama": "Kabupaten Blora",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Banjarejo",
      "Blora",
      "Bogorejo",
      "Ceper",
      "Japon",
      "Jati",
      "Jepon",
      "Jiken",
      "Kedungtuban",
      "Kradenan",
      "Kunduran",
      "Ngawen",
      "Randublatung",
      "Sambong",
      "Todanan",
      "Tunjungan"
    ]
  },
  {
    "slug": "boyolali",
    "nama": "Kabupaten Boyolali",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Ampel",
      "Andong",
      "Banyudono",
      "Boyolali",
      "Cepit",
      "Gladagsari",
      "Juwangi",
      "Karanggede",
      "Kemusu",
      "Klego",
      "Mojosongo",
      "Musuk",
      "Ngemplak",
      "Nogosari",
      "Selo",
      "Simo",
      "Teras",
      "Wonosegoro",
      "Wonosamodro"
    ]
  },
  {
    "slug": "brebes",
    "nama": "Kabupaten Brebes",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Banjarharjo",
      "Bantarkawung",
      "Brebes",
      "Bumiayu",
      "Jatibarang",
      "Kersana",
      "Ketanggungan",
      "Larangan",
      "Losari",
      "Paguyangan",
      "Salem",
      "Sirampog",
      "Songgom",
      "Tanjung",
      "Tonjong",
      "Wanasari"
    ]
  },
  {
    "slug": "cilacap",
    "nama": "Kabupaten Cilacap",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Adipala",
      "Bantarsari",
      "Cilacap Selatan",
      "Cilacap Tengah",
      "Cilacap Utara",
      "Cimanggu",
      "Cipari",
      "Dayeuhluhur",
      "Gandrungmangu",
      "Jeruklegi",
      "Kampung Laut",
      "Karangpucung",
      "Kedungreja",
      "Kesugihan",
      "Kroya",
      "Majenang",
      "Maos",
      "Nusawungu",
      "Patimuan",
      "Sampang",
      "Sidareja",
      "Wanareja"
    ]
  },
  {
    "slug": "demak",
    "nama": "Kabupaten Demak",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Bonang",
      "Demak",
      "Dempet",
      "Gajah",
      "Guntur",
      "Karanganyar",
      "Karangawen",
      "Karangtengah",
      "Kebonagung",
      "Mijen",
      "Mranggen",
      "Sayung",
      "Wedung"
    ]
  },
  {
    "slug": "grobogan",
    "nama": "Kabupaten Grobogan",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Banggorejo",
      "Brati",
      "Gabus",
      "Geyer",
      "Godong",
      "Grobogan",
      "Karangrayung",
      "Kedungjati",
      "Kradenan",
      "Ngaringan",
      "Penawangan",
      "Pulokulon",
      "Purwodadi",
      "Tanggungharjo",
      "Tawangharjo",
      "Tegowanu",
      "Toroh",
      "Wirosari"
    ]
  },
  {
    "slug": "jepara",
    "nama": "Kabupaten Jepara",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Batealit",
      "Donorojo",
      "Jepara",
      "Kalinyamatan",
      "Karimunjawa",
      "Kedung",
      "Keling",
      "Kembang",
      "Mayong",
      "Mlonggo",
      "Nalumsari",
      "Pakis Aji",
      "Pecangaan",
      "Tahunan",
      "Welahan"
    ]
  },
  {
    "slug": "karanganyar",
    "nama": "Kabupaten Karanganyar",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Colomadu",
      "Gondangrejo",
      "Jaten",
      "Jatipuro",
      "Jatiyoso",
      "Jenawi",
      "Jumapolo",
      "Jumantono",
      "Karanganyar",
      "Karangpandan",
      "Kebakkramat",
      "Kerjo",
      "Matesih",
      "Ngargoyoso",
      "Tasikmadu",
      "Tawangmangu"
    ]
  },
  {
    "slug": "kebumen",
    "nama": "Kabupaten Kebumen",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Adimulyo",
      "Alian",
      "Ambal",
      "Ayah",
      "Bonorowo",
      "Buayan",
      "Buluspesantren",
      "Karanganyar",
      "Karanggayam",
      "Karangsambung",
      "Kebumen",
      "Kutowinangun",
      "Kuwarasan",
      "Mirit",
      "Padureso",
      "Pejagoan",
      "Petanahan",
      "Poncowarno",
      "Prembun",
      "Puring",
      "Rowokele",
      "Sadang",
      "Sempor",
      "Sruweng"
    ]
  },
  {
    "slug": "kendal",
    "nama": "Kabupaten Kendal",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Boja",
      "Brangsong",
      "Cepiring",
      "Gemuh",
      "Kaliwungu",
      "Kaliwungu Selatan",
      "Kangkung",
      "Kendal",
      "Limbangan",
      "Ngampel",
      "Patean",
      "Patebon",
      "Pegandon",
      "Plantungan",
      "Ringinarum",
      "Rowosari",
      "Singorojo",
      "Sukorejo",
      "Weleri"
    ]
  },
  {
    "slug": "klaten",
    "nama": "Kabupaten Klaten",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Bayat",
      "Cawas",
      "Ceper",
      "Delanggu",
      "Gantiwarno",
      "Jatinom",
      "Jogonalan",
      "Juwiring",
      "Kalikotes",
      "Karanganom",
      "Karangdowo",
      "Karangnongko",
      "Kebonarum",
      "Kemalang",
      "Klaten Selatan",
      "Klaten Tengah",
      "Klaten Utara",
      "Manisrenggo",
      "Ngawen",
      "Pedan",
      "Polanharjo",
      "Prambanan",
      "Trucuk",
      "Tulung",
      "Wedi",
      "Wonosari"
    ]
  },
  {
    "slug": "kudus",
    "nama": "Kabupaten Kudus",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Bae",
      "Dawe",
      "Gebog",
      "Jati",
      "Jekuulo",
      "Kaliwungu",
      "Kudus Kota",
      "Mejobo",
      "Undaan"
    ]
  },
  {
    "slug": "magelang",
    "nama": "Kabupaten Magelang",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Bandongan",
      "Borobudur",
      "Candimulyo",
      "Dukun",
      "Grabag",
      "Kajoran",
      "Kaliangkrik",
      "Muntilan",
      "Ngablak",
      "Ngluwar",
      "Salam",
      "Salaman",
      "Sawangan",
      "Secang",
      "Srumbung",
      "Tegalrejo",
      "Tempuran",
      "Windusari"
    ]
  },
  {
    "slug": "pati",
    "nama": "Kabupaten Pati",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Batangan",
      "Cluwak",
      "Dukuhseti",
      "Gabus",
      "Gembong",
      "Gunungwungkal",
      "Jaken",
      "Jakenan",
      "Juwana",
      "Kayen",
      "Margorejo",
      "Margoyoso",
      "Pati",
      "Pucakwangi",
      "Sukolilo",
      "Tambakromo",
      "Tayu",
      "Tlogowungu",
      "Trangkil",
      "Wedarijaksa",
      "Winong"
    ]
  },
  {
    "slug": "pekalongan",
    "nama": "Kabupaten Pekalongan",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Bojong",
      "Buaran",
      "Doro",
      "Kajen",
      "Kandangserang",
      "Karanganyar",
      "Karangdadap",
      "Kedungwuni",
      "Kesesi",
      "Lebakbarang",
      "Paninggaran",
      "Petungkriyono",
      "Siwalan",
      "Sragi",
      "Tirto",
      "Wiradesa",
      "Wonokerto",
      "Wonopringgo"
    ]
  },
  {
    "slug": "pemalang",
    "nama": "Kabupaten Pemalang",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Ampelgading",
      "Bantarbolang",
      "Belik",
      "Bodeh",
      "Comal",
      "Moga",
      "Pemalang",
      "Petarukan",
      "Pulosari",
      "Randudongkal",
      "Taman",
      "Ulujami",
      "Warungpring",
      "Watukumpul"
    ]
  },
  {
    "slug": "purbalingga",
    "nama": "Kabupaten Purbalingga",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Bobotsari",
      "Bojongsari",
      "Bukateja",
      "Kaligondang",
      "Kalimanah",
      "Karanganyar",
      "Karangjambu",
      "Karangmoncol",
      "Karangreja",
      "Kejobong",
      "Kemangkon",
      "Kutasari",
      "Mrebet",
      "Padamara",
      "Pengadegan",
      "Purbalingga",
      "Rembang"
    ]
  },
  {
    "slug": "purworejo",
    "nama": "Kabupaten Purworejo",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Bagelen",
      "Banyuasin",
      "Bayan",
      "Bener",
      "Bruno",
      "Gebang",
      "Grabag",
      "Kaligesing",
      "Kemiri",
      "Kutoarjo",
      "Ngombol",
      "Pituruh",
      "Purwodadi",
      "Purworejo"
    ]
  },
  {
    "slug": "rembang",
    "nama": "Kabupaten Rembang",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Bulan",
      "Kaliori",
      "Kragan",
      "Lasem",
      "Pamotan",
      "Pancur",
      "Rembang",
      "Salez",
      "Sarang",
      "Seda",
      "Sluke",
      "Sulang"
    ]
  },
  {
    "slug": "semarang",
    "nama": "Kabupaten Semarang",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Ambarawa",
      "Banyubiru",
      "Bawen",
      "Bergas",
      "Beringin",
      "Getasan",
      "Jambu",
      "Kaliwungu",
      "Pabelan",
      "Pringapus",
      "Sumowono",
      "Suruh",
      "Susukan",
      "Tengaran",
      "Tuntang",
      "Ungaran Barat",
      "Ungaran Timur"
    ]
  },
  {
    "slug": "sragen",
    "nama": "Kabupaten Sragen",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Gesi",
      "Gondang",
      "Jenar",
      "Kalijambe",
      "Karangmalang",
      "Kedawung",
      "Masaran",
      "Miri",
      "Ngrampal",
      "Plupuh",
      "Sambirejo",
      "Sambungmacan",
      "Sragen",
      "Sukodono",
      "Sumberlawang",
      "Tangen",
      "Tanon"
    ]
  },
  {
    "slug": "sukoharjo",
    "nama": "Kabupaten Sukoharjo",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Baki",
      "Bendosari",
      "Gatak",
      "Grogol",
      "Kartasura",
      "Mojolaban",
      "Nguter",
      "Polokarto",
      "Sukoharjo",
      "Tawangsari"
    ]
  },
  {
    "slug": "tegal",
    "nama": "Kabupaten Tegal",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Adiwerna",
      "Balapulang",
      "Bumijawa",
      "Dukuhturi",
      "Dukuhwaru",
      "Jatinegara",
      "Kedungbanteng",
      "Kramat",
      "Lebaksiu",
      "Margasari",
      "Pagerbarang",
      "Pangkah",
      "Slawi",
      "Suradadi",
      "Talang",
      "Tarub",
      "Warureja"
    ]
  },
  {
    "slug": "temanggung",
    "nama": "Kabupaten Temanggung",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Bansari",
      "Bejen",
      "Bulu",
      "Candiroto",
      "Kledung",
      "Kranggan",
      "Ngadirejo",
      "Parakan",
      "Pringsurat",
      "Selopamioro",
      "Temanggung",
      "Tembarak",
      "Tlogomulyo",
      "Tretep"
    ]
  },
  {
    "slug": "wonogiri",
    "nama": "Kabupaten Wonogiri",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Baturetno",
      "Batuwarno",
      "Bulu",
      "Giriwoyo",
      "Giratontro",
      "Jatipurno",
      "Jatiroto",
      "Jatisrono",
      "Karangtengah",
      "Kismantoro",
      "Manyaran",
      "Ngadirojo",
      "Nguntoronadi",
      "Paranggupito",
      "Pracimantoro",
      "Purwantoro",
      "Selogiri",
      "Sidoharjo",
      "Slogohimo",
      "Tirtomoyo",
      "Wonogiri",
      "Wuryantoro"
    ]
  },
  {
    "slug": "wonosobo",
    "nama": "Kabupaten Wonosobo",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Garung",
      "Kalibawang",
      "Kalikajar",
      "Kaliwiro",
      "Kejajar",
      "Kepil",
      "Kertek",
      "Leksono",
      "Mojotengah",
      "Sapuran",
      "Selomerto",
      "Sukoharjo",
      "Wadaslintang",
      "Wonosobo"
    ]
  },
  {
    "slug": "kota-magelang",
    "nama": "Kota Magelang",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Magelang Selatan",
      "Magelang Tengah",
      "Magelang Utara"
    ]
  },
  {
    "slug": "kota-pekalongan",
    "nama": "Kota Pekalongan",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Pekalongan Barat",
      "Pekalongan Selatan",
      "Pekalongan Timur",
      "Pekalongan Utara"
    ]
  },
  {
    "slug": "salatiga",
    "nama": "Kota Salatiga",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Argomulyo",
      "Sidomukti",
      "Sidorejo",
      "Tingkir"
    ]
  },
  {
    "slug": "kota-tegal",
    "nama": "Kota Tegal",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Margadana",
      "Tegal Barat",
      "Tegal Selatan",
      "Tegal Timur"
    ]
  },
  {
    "slug": "cepu",
    "nama": "Kota Cepu",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Cepu"
    ]
  },
  {
    "slug": "kota-banjarnegara",
    "nama": "Kota Banjarnegara",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Banjarnegara",
      "Banjarmangu",
      "Batur",
      "Bawang",
      "Kalibening",
      "Karangkobar",
      "Madukara",
      "Mandiraja",
      "Pejawaran",
      "Punggelan",
      "Purwanegara",
      "Purwareja Klampok",
      "Rakit",
      "Sigaluh",
      "Pagentan",
      "Wanadadi",
      "Wanayasa"
    ]
  },
  {
    "slug": "purwokerto",
    "nama": "Kota Purwokerto",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Purwokerto Barat",
      "Purwokerto Selatan",
      "Purwokerto Timur",
      "Purwokerto Utara"
    ]
  },
  {
    "slug": "kota-batang",
    "nama": "Kota Batang",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Batang"
    ]
  },
  {
    "slug": "kota-blora",
    "nama": "Kota Blora",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Blora"
    ]
  },
  {
    "slug": "kota-boyolali",
    "nama": "Kota Boyolali",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Boyolali"
    ]
  },
  {
    "slug": "kota-brebes",
    "nama": "Kota Brebes",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Brebes"
    ]
  },
  {
    "slug": "kota-cilacap",
    "nama": "Kota Cilacap",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Cilacap Selatan",
      "Cilacap Tengah",
      "Cilacap Utara"
    ]
  },
  {
    "slug": "kota-demak",
    "nama": "Kota Demak",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Demak"
    ]
  },
  {
    "slug": "kota-grobogan",
    "nama": "Kota Grobogan",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Purwodadi",
      "Grobogan"
    ]
  },
  {
    "slug": "kota-jepara",
    "nama": "Kota Jepara",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Jepara"
    ]
  },
  {
    "slug": "kota-karanganyar",
    "nama": "Kota Karanganyar",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Karanganyar"
    ]
  },
  {
    "slug": "kota-kebumen",
    "nama": "Kota Kebumen",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Kebumen"
    ]
  },
  {
    "slug": "kota-kendal",
    "nama": "Kota Kendal",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Kendal"
    ]
  },
  {
    "slug": "kota-klaten",
    "nama": "Kota Klaten",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Klaten Selatan",
      "Klaten Tengah",
      "Klaten Utara"
    ]
  },
  {
    "slug": "kota-kudus",
    "nama": "Kota Kudus",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Kudus Kota"
    ]
  },
  {
    "slug": "kota-pati",
    "nama": "Kota Pati",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Pati"
    ]
  },
  {
    "slug": "kota-pemalang",
    "nama": "Kota Pemalang",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Pemalang"
    ]
  },
  {
    "slug": "kota-purbalingga",
    "nama": "Kota Purbalingga",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Purbalingga"
    ]
  },
  {
    "slug": "kota-purworejo",
    "nama": "Kota Purworejo",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Purworejo"
    ]
  },
  {
    "slug": "kota-rembang",
    "nama": "Kota Rembang",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Rembang"
    ]
  },
  {
    "slug": "kota-sragen",
    "nama": "Kota Sragen",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Sragen"
    ]
  },
  {
    "slug": "kota-temanggung",
    "nama": "Kota Temanggung",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Temanggung"
    ]
  },
  {
    "slug": "kota-wonogiri",
    "nama": "Kota Wonogiri",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Wonogiri"
    ]
  },
  {
    "slug": "kota-wonosobo",
    "nama": "Kota Wonosobo",
    "provinsi": "Provinsi Jawa Tengah",
    "kecamatan": [
      "Wonosobo"
    ]
  },
  {
    "slug": "ciamis",
    "nama": "Kabupaten Ciamis",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Banjaranyar",
      "Banjarsari",
      "Baregbeg",
      "Ciamis",
      "Cidolog",
      "Cihaurbeuti",
      "Cijeungjing",
      "Cikoneng",
      "Cimaragas",
      "Cipaku",
      "Cisaga",
      "Jatinagara",
      "Kawali",
      "Lakbok",
      "Lumbung",
      "Pamarican",
      "Panawangan",
      "Panjalu",
      "Panumbangan",
      "Purwadadi",
      "Rajadesa",
      "Rancah",
      "Sadananya",
      "Sukatani",
      "Tambaksari"
    ]
  },
  {
    "slug": "cianjur",
    "nama": "Kabupaten Cianjur",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Agrabinta",
      "Bojongpicung",
      "Campaka",
      "Campaka Mulya",
      "Cianjur",
      "Cibeber",
      "Cibinong",
      "Cidaun",
      "Cijati",
      "Cikadu",
      "Cikalongkulon",
      "Cilaku",
      "Cipanas",
      "Ciranjang",
      "Cugenang",
      "Gekbrong",
      "Haurwangi",
      "Kadupandak",
      "Karangtengah",
      "Leles",
      "Mande",
      "Naringgul",
      "Pacet",
      "Pagelaran",
      "Pasirjambe",
      "Sukaluyu",
      "Sukanagara",
      "Sukaresmi",
      "Takokak",
      "Tanggeung"
    ]
  },
  {
    "slug": "cirebon",
    "nama": "Kabupaten Cirebon",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Arjawinangun",
      "Astanajapura",
      "Babakan",
      "Beber",
      "Ciledug",
      "Ciwaringin",
      "Depok",
      "Dukuhtuntang",
      "Gebang",
      "Gegesik",
      "Gempol",
      "Grebeg",
      "Gunung Jati",
      "Jamblang",
      "Jatiwangi",
      "Kapas",
      "Karangwareng",
      "Karangsembung",
      "Kedawung",
      "Klangenan",
      "Lemahabang",
      "Losari",
      "Mundu",
      "Pabuaran",
      "Palimanan",
      "Pangenan",
      "Panguragan",
      "Pasaleman",
      "Plered",
      "Plumbon",
      "Sedong",
      "Sumber",
      "Suranenggala",
      "Susukan",
      "Susukan Lebak",
      "Talun",
      "Tengahtani",
      "Waled",
      "Weru"
    ]
  },
  {
    "slug": "garut",
    "nama": "Kabupaten Garut",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Banjarwangi",
      "Banyuresmi",
      "Bayongbong",
      "Blubur Limbangan",
      "Bungbulang",
      "Caringin",
      "Cibalong",
      "Cibatu",
      "Cibiuk",
      "Cigedug",
      "Cikelet",
      "Cikajang",
      "Cilawu",
      "Cisewu",
      "Cisompet",
      "Cisurupan",
      "Garut Kota",
      "Kadungora",
      "Karangpawitan",
      "Karangtengah",
      "Kersamanah",
      "Leles",
      "Leuwigoong",
      "Malangbong",
      "Mekarmukti",
      "Pakenjeng",
      "Pameungpeuk",
      "Pamulihan",
      "Pangatikan",
      "Pasirwangi",
      "Peundeuy",
      "Samarang",
      "Selaawi",
      "Singajaya",
      "Sukawening",
      "Sukaresmi",
      "Talegong",
      "Tarogong Kaler",
      "Tarogong Kidul",
      "Wanaraja"
    ]
  },
  {
    "slug": "indramayu",
    "nama": "Kabupaten Indramayu",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Anjatan",
      "Arahan",
      "Balongan",
      "Banggadua",
      "Bongas",
      "Canted",
      "Cikedung",
      "Gabusewetan",
      "Gantar",
      "Indramayu",
      "Jatibarang",
      "Juntinyuat",
      "Kandanghaur",
      "Karangampel",
      "Kedokan Bunder",
      "Kertasemaya",
      "Krangkeng",
      "Kroya",
      "Lelea",
      "Lohbener",
      "Losarang",
      "Pasekan",
      "Patrol",
      "Sliyeg",
      "Sukagumiwang",
      "Sukra",
      "Terisi",
      "Tukdana",
      "Widasari"
    ]
  },
  {
    "slug": "karawang",
    "nama": "Kabupaten Karawang",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Banyusari",
      "Batujaya",
      "Ciampel",
      "Cibuaya",
      "Cikampek",
      "Cilamaya Wetan",
      "Cilamaya Kulon",
      "Cilebar",
      "Jatisari",
      "Karawang Barat",
      "Karawang Timur",
      "Klari",
      "Kota Baru",
      "Kutawaluya",
      "Lemahabang",
      "Majalaya",
      "Papakmanggu",
      "Pedes",
      "Purwasari",
      "Rawamerta",
      "Rengasdengklok",
      "Tegalwaru",
      "Telagasari",
      "Telukjambe Barat",
      "Telukjambe Timur",
      "Tempuran",
      "Tirtajaya",
      "Tirtamulya"
    ]
  },
  {
    "slug": "kuningan",
    "nama": "Kabupaten Kuningan",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Bantarujeg",
      "Ciwaru",
      "Cibingbin",
      "Cidahu",
      "Cigandamekar",
      "Cigugur",
      "Cilebak",
      "Cilimus",
      "Cingambul",
      "Cipicung",
      "Ciwaru",
      "Darma",
      "Garawangi",
      "Hantara",
      "Jalaksana",
      "Japara",
      "Kadugede",
      "Kalimanggis",
      "Karangkancana",
      "Kramatmulya",
      "Kuningan",
      "Lebakwangi",
      "Luragung",
      "Maleber",
      "Mandirancan",
      "Nusaherang",
      "Pancalang",
      "Pasawahan",
      "Selajambe",
      "Subang",
      "Sindangagung"
    ]
  },
  {
    "slug": "majalengka",
    "nama": "Kabupaten Majalengka",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Argapura",
      "Banjaran",
      "Bantarujeg",
      "Cigasong",
      "Cingambul",
      "Dawuan",
      "Jatitujuh",
      "Jatiwangi",
      "Kadipaten",
      "Kasokandel",
      "Kertajati",
      "Lemahsugih",
      "Leuwimunding",
      "Ligung",
      "Maja",
      "Majalengka",
      "Malausma",
      "Panyingkiran",
      "Rajagaluh",
      "Sukahaji",
      "Sumberjaya",
      "Talaga",
      "Sindangwangi"
    ]
  },
  {
    "slug": "pangandaran",
    "nama": "Kabupaten Pangandaran",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Cigugur",
      "Cijulang",
      "Cimerak",
      "Kalipucang",
      "Langkaplancar",
      "Mangunjaya",
      "Padaherang",
      "Pangandaran",
      "Parigi",
      "Sidamulih"
    ]
  },
  {
    "slug": "purwakarta",
    "nama": "Kabupaten Purwakarta",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Babakancikao",
      "Bojong",
      "Bungursari",
      "Campaka",
      "Cibatu",
      "Jatiluhur",
      "Kiarapedes",
      "Maniis",
      "Pasawahan",
      "Plered",
      "Pondoksalam",
      "Purwakarta",
      "Sukasari",
      "Sukatani",
      "Tegalwaru",
      "Wanayasa"
    ]
  },
  {
    "slug": "subang",
    "nama": "Kabupaten Subang",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Binong",
      "Blanakan",
      "Ciasem",
      "Ciater",
      "Cibogo",
      "Cijambe",
      "Cipunagara",
      "Cisalak",
      "Compreng",
      "Dawuan",
      "Jalanforka",
      "Kalijati",
      "Kasomalang",
      "Legonkulon",
      "Pabuaran",
      "Pagaden",
      "Pagaden Barat",
      "Pamanukan",
      "Patokbeusi",
      "Purwadadi",
      "Pusakajaya",
      "Pusakanagara",
      "Sagalaherang",
      "Serangpanjang",
      "Subang",
      "Sukasari",
      "Tambakdahan",
      "Tanjungsiang"
    ]
  },
  {
    "slug": "sukabumi",
    "nama": "Kabupaten Sukabumi",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Bantargadung",
      "Bojonggenteng",
      "Caringin",
      "Ciambar",
      "Cibadak",
      "Cibitung",
      "Cicantayan",
      "Cicurug",
      "Cidadap",
      "Cidahu",
      "Cidolog",
      "Ciemas",
      "Cikakak",
      "Cikidang",
      "Cimanggu",
      "Cireunghas",
      "Cisaat",
      "Cisolok",
      "Curugkembar",
      "Gegerbitung",
      "Gunungguruh",
      "Jampang Tengah",
      "Jampang Kulon",
      "Kabandungan",
      "Kadudampit",
      "Kalapanunggal",
      "Kalibunder",
      "Kebonpedes",
      "Lengkong",
      "Nagrak",
      "Parakansalak",
      "Parungkuda",
      "Pelabuhanratu",
      "Purabaya",
      "Sagaranten",
      "Sukabumi",
      "Sukalarang",
      "Sukaraja",
      "Surade",
      "Tegalbuleud",
      "Waluran"
    ]
  },
  {
    "slug": "sumedang",
    "nama": "Kabupaten Sumedang",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Buahdua",
      "Cibugel",
      "Cimalaka",
      "Cimanggung",
      "Cisarua",
      "Cisitu",
      "Ganeas",
      "Jatigede",
      "Jatinangor",
      "Jatinunggal",
      "Kandanghaur",
      "Paseh",
      "Rancakalong",
      "Situraja",
      "Sukasari",
      "Sumedang Selatan",
      "Sumedang Utara",
      "Surian",
      "Tanjungkerta",
      "Tanjungsari",
      "Tanjungmedar",
      "Tomo",
      "Wado"
    ]
  },
  {
    "slug": "tasikmalaya",
    "nama": "Kabupaten Tasikmalaya",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Kadipaten",
      "Ciawi",
      "Jamanis",
      "Sukahening",
      "Rajapolah",
      "Cisayong",
      "Sinaragung",
      "Sukaresik",
      "Jabalrahmah",
      "Tarikolot",
      "Mangunreja",
      "Singaparna",
      "Sukarame",
      "Cigalontang",
      "Leuwisari",
      "Padakembang",
      "Sariwangi",
      "Sukaratu",
      "Salawu",
      "Tanjungjaya",
      "Sukaraja",
      "Salopa",
      "Jatiwaras",
      "Cineam",
      "Karangjaya",
      "Manonjaya",
      "Gunungtanjung",
      "Pancatengah",
      "Cikatomas",
      "Cibalong",
      "Parungponteng",
      "Bantarkalong",
      "Bojongasih",
      "Culamega",
      "Cipatujah",
      "Karangnunggal",
      "Cikalong"
    ]
  },
  {
    "slug": "banjar",
    "nama": "Kota Banjar",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Banjar",
      "Langgensari",
      "Pataruman",
      "Purwaharju"
    ]
  },
  {
    "slug": "cimahi",
    "nama": "Kota Cimahi",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Cimahi Selatan",
      "Cimahi Tengah",
      "Cimahi Utara"
    ]
  },
  {
    "slug": "kota-cirebon",
    "nama": "Kota Cirebon",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Harjamukti",
      "Kejaksaan",
      "Kesambi",
      "Lemahwungkuk",
      "Pekalipan"
    ]
  },
  {
    "slug": "kota-sukabumi",
    "nama": "Kota Sukabumi",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Baros",
      "Cibeureum",
      "Cikole",
      "Citamiang",
      "Gunungpuyuh",
      "Lembursitu",
      "Warudoyong"
    ]
  },
  {
    "slug": "kota-tasikmalaya",
    "nama": "Kota Tasikmalaya",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Bungursari",
      "Cibeureum",
      "Cihideung",
      "Cipedes",
      "Indihiang",
      "Kawalu",
      "Mangkubumi",
      "Purbaratu",
      "Tamansari",
      "Tawang"
    ]
  },
  {
    "slug": "cikarang",
    "nama": "Kota Cikarang",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Cikarang Barat",
      "Cikarang Pusat",
      "Cikarang Selatan",
      "Cikarang Timur",
      "Cikarang Utara"
    ]
  },
  {
    "slug": "kota-karawang",
    "nama": "Kota Karawang",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Karawang Barat",
      "Karawang Timur"
    ]
  },
  {
    "slug": "cikampek",
    "nama": "Kota Cikampek",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Cikampek"
    ]
  },
  {
    "slug": "kota-ciamis",
    "nama": "Kota Ciamis",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Ciamis"
    ]
  },
  {
    "slug": "kota-cianjur",
    "nama": "Kota Cianjur",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Cianjur"
    ]
  },
  {
    "slug": "kota-garut",
    "nama": "Kota Garut",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Garut Kota",
      "Tarogong Kaler",
      "Tarogong Kidul"
    ]
  },
  {
    "slug": "kota-indramayu",
    "nama": "Kota Indramayu",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Indramayu"
    ]
  },
  {
    "slug": "kota-kuningan",
    "nama": "Kota Kuningan",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Kuningan"
    ]
  },
  {
    "slug": "kota-majalengka",
    "nama": "Kota Majalengka",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Majalengka"
    ]
  },
  {
    "slug": "kota-pangandaran",
    "nama": "Kota Pangandaran",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Pangandaran"
    ]
  },
  {
    "slug": "kota-purwakarta",
    "nama": "Kota Purwakarta",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Purwakarta"
    ]
  },
  {
    "slug": "kota-subang",
    "nama": "Kota Subang",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Subang"
    ]
  },
  {
    "slug": "kota-sumedang",
    "nama": "Kota Sumedang",
    "provinsi": "Provinsi Jawa Barat",
    "kecamatan": [
      "Sumedang Selatan",
      "Sumedang Utara"
    ]
  },
  {
    "slug": "madura",
    "nama": "Madura",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Bangkalan",
      "Blega",
      "Burneh",
      "Kamal",
      "Kota Pamekasan",
      "Pademawu",
      "Sampang",
      "Torjun",
      "Kota Sumenep",
      "Kalianget"
    ]
  },
  {
    "slug": "blitar",
    "nama": "Kabupaten Blitar",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Bakung",
      "Binangun",
      "Doko",
      "Gandusari",
      "Garum",
      "Kademangan",
      "Kanigoro",
      "Kesamben",
      "Nglegok",
      "Panggungrejo",
      "Ponggok",
      "Sanankulon",
      "Selopuro",
      "Selorejo",
      "Sutojayan",
      "Talun",
      "Udanawu",
      "Wates",
      "Wlingi",
      "Wonodadi",
      "Wonotirto"
    ]
  },
  {
    "slug": "bojonegoro",
    "nama": "Kabupaten Bojonegoro",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Balen",
      "Baan",
      "Bojonegoro",
      "Bubulan",
      "Dander",
      "Gondang",
      "Kalitidu",
      "Kapas",
      "Kasiman",
      "Kedewan",
      "Kedungadem",
      "Kepohbaru",
      "Malo",
      "Margomulyo",
      "Ngambon",
      "Ngapra",
      "Ngraho",
      "Padangan",
      "Purwosari",
      "Sekar",
      "Sumberejo",
      "Tambakrejo",
      "Trucuk"
    ]
  },
  {
    "slug": "bondowoso",
    "nama": "Kabupaten Bondowoso",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Bondowoso",
      "Botolinggo",
      "Cermee",
      "Curahdami",
      "Grujugan",
      "Jambesari Darus Sholah",
      "Klabang",
      "Maesan",
      "Pakem",
      "Prajekan",
      "Pujer",
      "Sempol",
      "Sukosari",
      "Tamanan",
      "Tapen",
      "Tegalampel",
      "Tenggarang",
      "Tlogosari",
      "Wringin"
    ]
  },
  {
    "slug": "gresik",
    "nama": "Kabupaten Gresik",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Balongpanggang",
      "Benjeng",
      "Bungah",
      "Cerme",
      "Driyorejo",
      "Duduksampeyan",
      "Dukun",
      "Gresik",
      "Kebomas",
      "Kedamean",
      "Manyar",
      "Menganti",
      "Panceng",
      "Sangkapura",
      "Sidayu",
      "Tambak",
      "Ujungpangkah",
      "Wringinanom"
    ]
  },
  {
    "slug": "jember",
    "nama": "Kabupaten Jember",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Ajung",
      "Ambulu",
      "Arjasa",
      "Balung",
      "Bangsalsari",
      "Gumuk Mas",
      "Jelbuk",
      "Jenggawah",
      "Jombang",
      "Kalisat",
      "Kaliwates",
      "Kencong",
      "Ledokombo",
      "Mayang",
      "Mumbulsari",
      "Panti",
      "Patrang",
      "Puger",
      "Rambipuji",
      "Semboro",
      "Silo",
      "Sukorambi",
      "Sukowono",
      "Sumberbaru",
      "Sumbersari",
      "Tanggul",
      "Tempurejo",
      "Umbulsari",
      "Wuluhan"
    ]
  },
  {
    "slug": "jombang",
    "nama": "Kabupaten Jombang",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Bandarkedungmulyo",
      "Bareng",
      "Diwek",
      "Gudo",
      "Jogoroto",
      "Jombang",
      "Kabuh",
      "Kesamben",
      "Kudu",
      "Mojoagung",
      "Mojowarno",
      "Ngoro",
      "Ngusikan",
      "Perak",
      "Peterongan",
      "Ploso",
      "Sumobito",
      "Tembelang",
      "Wonosalam"
    ]
  },
  {
    "slug": "kediri",
    "nama": "Kabupaten Kediri",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Badas",
      "Banyakan",
      "Gampengrejo",
      "Grogol",
      "Gurah",
      "Kandangan",
      "Kandat",
      "Kayen Kidul",
      "Kepung",
      "Kras",
      "Kunjang",
      "Ngadiluwih",
      "Ngancar",
      "Ngasem",
      "Pagu",
      "Papar",
      "Pare",
      "Plemahan",
      "Plosoklaten",
      "Puncu",
      "Purwoasri",
      "Ringinrejo",
      "Semen",
      "Tarokan",
      "Wates"
    ]
  },
  {
    "slug": "lamongan",
    "nama": "Kabupaten Lamongan",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Babat",
      "Bluluk",
      "Brondong",
      "Deket",
      "Glabag",
      "Kalitengah",
      "Karangbinangun",
      "Karanggeneng",
      "Kedungpring",
      "Kembangbahu",
      "Lamongan",
      "Laren",
      "Maduran",
      "Mantup",
      "Modo",
      "Ngimbang",
      "Paciran",
      "Pucuk",
      "Sambeng",
      "Sarirejo",
      "Sekaran",
      "Solokuro",
      "Sugio",
      "Sukodadi",
      "Sukorame",
      "Turi"
    ]
  },
  {
    "slug": "lumajang",
    "nama": "Kabupaten Lumajang",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Candipuro",
      "Gucialit",
      "Jatiroto",
      "Kedungjajang",
      "Klakah",
      "Kunir",
      "Lumajang",
      "Padang",
      "Pasirian",
      "Pasrujambe",
      "Pronojiwo",
      "Randuagung",
      "Ranuyoso",
      "Rowokangkung",
      "Senduro",
      "Sukodono",
      "Sumbersuko",
      "Tekung",
      "Tempeh",
      "Tempursari",
      "Yosowilangun"
    ]
  },
  {
    "slug": "madiun",
    "nama": "Kabupaten Madiun",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Balerejo",
      "Dagangan",
      "Dolopo",
      "Geger",
      "Gemarang",
      "Jiwan",
      "Karangrejo",
      "Kare",
      "Madiun",
      "Mejayan",
      "Pilangkenceng",
      "Saradan",
      "Sawahan",
      "Wonoasri",
      "Wungu"
    ]
  },
  {
    "slug": "magetan",
    "nama": "Kabupaten Magetan",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Barat",
      "Bendo",
      "Karangrejo",
      "Karas",
      "Kartoharjo",
      "Kawedanan",
      "Lembeyan",
      "Magetan",
      "Maospati",
      "Ngariboyo",
      "Nguntoronadi",
      "Panekan",
      "Parang",
      "Plaosan",
      "Poncol",
      "Sidorejo",
      "Sukomoro"
    ]
  },
  {
    "slug": "malang",
    "nama": "Kabupaten Malang",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Ampelgading",
      "Bantur",
      "Bululawang",
      "Dampit",
      "Dau",
      "Dono Mulyo",
      "Gedangan",
      "Gondanglegi",
      "Jabung",
      "Kalipare",
      "Karangploso",
      "Kasembon",
      "Kepanjen",
      "Kromengan",
      "Lawang",
      "Ngajum",
      "Ngantang",
      "Pagak",
      "Pagelaran",
      "Pakis",
      "Pakisaji",
      "Poncokusumo",
      "Pujon",
      "Singosari",
      "Tajinan",
      "Tirtoyudo",
      "Tumpang",
      "Turen",
      "Wagir",
      "Wajak",
      "Wonosari"
    ]
  },
  {
    "slug": "mojokerto",
    "nama": "Kabupaten Mojokerto",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Bangsal",
      "Dlanggu",
      "Gedeg",
      "Gondang",
      "Jatirejo",
      "Jetis",
      "Kemlagi",
      "Mojoanyar",
      "Mojosari",
      "Ngoro",
      "Pacing",
      "Pungging",
      "Puri",
      "Trawas",
      "Trowulan",
      "Sooko"
    ]
  },
  {
    "slug": "nganjuk",
    "nama": "Kabupaten Nganjuk",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Bagan",
      "Baron",
      "Berbek",
      "Gondang",
      "Jatikalen",
      "Kertosono",
      "Lengkong",
      "Loceret",
      "Nganjuk",
      "Ngetos",
      "Ngluyu",
      "Ngronggot",
      "Pace",
      "Patianrowo",
      "Prambon",
      "Rejoso",
      "Sawahan",
      "Tanjunganom",
      "Wilangan"
    ]
  },
  {
    "slug": "ngawi",
    "nama": "Kabupaten Ngawi",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Bringin",
      "Geneng",
      "Jogorogo",
      "Karanganyar",
      "Karangjati",
      "Kendal",
      "Kwadungan",
      "Mantingan",
      "Ngawi",
      "Ngrambe",
      "Padas",
      "Pangkur",
      "Pititu",
      "Sine",
      "Widodaren"
    ]
  },
  {
    "slug": "pacitan",
    "nama": "Kabupaten Pacitan",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Arjosari",
      "Bandar",
      "Donorojo",
      "Kebonagung",
      "Nawangan",
      "Ngadirojo",
      "Pacitan",
      "Punung",
      "Ringinrejo",
      "Sudimoro",
      "Tegalombo",
      "Tulakan"
    ]
  },
  {
    "slug": "pasuruan",
    "nama": "Kabupaten Pasuruan",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Bangil",
      "Beji",
      "Gempol",
      "Gondang Wetan",
      "Grati",
      "Kejayan",
      "Kraton",
      "Lekok",
      "Lumbang",
      "Nguling",
      "Pandaan",
      "Pasrepan",
      "Prigen",
      "Puspo",
      "Rejoso",
      "Rembang",
      "Sukorejo",
      "Tosari",
      "Tutur",
      "Winongan",
      "Wonorejo"
    ]
  },
  {
    "slug": "ponorogo",
    "nama": "Kabupaten Ponorogo",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Babadan",
      "Badegan",
      "Balong",
      "Bungkal",
      "Jambon",
      "Jenangan",
      "Jetis",
      "Kauman",
      "Marak",
      "Ngebel",
      "Ngrayun",
      "Pudak",
      "Pulung",
      "Sambit",
      "Sampung",
      "Sawoo",
      "Siman",
      "Slahung",
      "Sooko",
      "Sukorejo"
    ]
  },
  {
    "slug": "probolinggo",
    "nama": "Kabupaten Probolinggo",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Bantaran",
      "Banyuanyar",
      "Besuk",
      "Dringu",
      "Gading",
      "Gending",
      "Kotaanyar",
      "Kraksaan",
      "Krucil",
      "Kuripan",
      "Lumbang",
      "Maron",
      "Paiton",
      "Pajarakan",
      "Pakuniran",
      "Sukapura",
      "Sumber",
      "Sumberasih",
      "Tegalsiwalan",
      "Tiris",
      "Tongas",
      "Wonomerto"
    ]
  },
  {
    "slug": "situbondo",
    "nama": "Kabupaten Situbondo",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Arjasa",
      "Asembagus",
      "Banyuglugur",
      "Banyuputih",
      "Besuki",
      "Jangkar",
      "Jatibarang",
      "Kapongan",
      "Kendit",
      "Mangaran",
      "Panarukan",
      "Panji",
      "Situbondo",
      "Suboh",
      "Sumbermalang"
    ]
  },
  {
    "slug": "sumenep",
    "nama": "Kabupaten Sumenep",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Ambunten",
      "Arjasa",
      "Batang Batang",
      "Batuputih",
      "Bluto",
      "Dasuk",
      "Dungkek",
      "Gading",
      "Gayam",
      "Gili Ginting",
      "Gulik-Gulik",
      "Kalianget",
      "Kangayan",
      "Kota Sumenep",
      "Lenteng",
      "Mandan",
      "Nonggunong",
      "Pasongsongan",
      "Pragaan",
      "Raas",
      "Rubaru",
      "Sapeken",
      "Saronggi",
      "Talango"
    ]
  },
  {
    "slug": "trenggalek",
    "nama": "Kabupaten Trenggalek",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Bendemungan",
      "Dongko",
      "Durenan",
      "Kampak",
      "Karangan",
      "Munjungan",
      "Panggul",
      "Pogalan",
      "Pule",
      "Suruh",
      "Tering",
      "Trenggalek",
      "Watulimo"
    ]
  },
  {
    "slug": "tuban",
    "nama": "Kabupaten Tuban",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Bancar",
      "Bangilan",
      "Grabagan",
      "Jatirogo",
      "Jenu",
      "Kenduruan",
      "Kerek",
      "Merakurak",
      "Montong",
      "Palang",
      "Parengan",
      "Planden",
      "Rengel",
      "Semanding",
      "Senori",
      "Singgahan",
      "Soko",
      "Tuban",
      "Widang"
    ]
  },
  {
    "slug": "tulungagung",
    "nama": "Kabupaten Tulungagung",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Besuki",
      "Bandung",
      "Boyolangu",
      "Campurdarat",
      "Kedungwaru",
      "Karangrejo",
      "Kauman",
      "Gondang",
      "Kalianget",
      "Ngunut",
      "Pagerwojo",
      "Pakel",
      "Pasir",
      "Rejotangan",
      "Sendang",
      "Sumbergempol",
      "Tanggung Gunung",
      "Tulungagung"
    ]
  },
  {
    "slug": "batu",
    "nama": "Kota Batu",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Batu",
      "Bumiaji",
      "Junrejo"
    ]
  },
  {
    "slug": "kota-blitar",
    "nama": "Kota Blitar",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Kepanjenkidul",
      "Sananwetan",
      "Sukorejo"
    ]
  },
  {
    "slug": "kota-kediri",
    "nama": "Kota Kediri",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Kediri Kota",
      "Mojoroto",
      "Pesantren"
    ]
  },
  {
    "slug": "kota-madiun",
    "nama": "Kota Madiun",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Kartoharjo",
      "Manguharjo",
      "Taman"
    ]
  },
  {
    "slug": "kota-malang",
    "nama": "Kota Malang",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Blimbing",
      "Kedungkandang",
      "Klojen",
      "Lowokwaru",
      "Sukun"
    ]
  },
  {
    "slug": "kota-mojokerto",
    "nama": "Kota Mojokerto",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Kranggan",
      "Magersari",
      "Prajurit Kulon"
    ]
  },
  {
    "slug": "kota-pasuruan",
    "nama": "Kota Pasuruan",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Bugul Kidul",
      "Gadingrejo",
      "Panggungrejo",
      "Purworejo"
    ]
  },
  {
    "slug": "kota-probolinggo",
    "nama": "Kota Probolinggo",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Kademangan",
      "Kedopok",
      "Mayangan",
      "Kanigaran",
      "Wonoasih"
    ]
  },
  {
    "slug": "kota-gresik",
    "nama": "Kota Gresik",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Gresik",
      "Kebomas",
      "Manyar"
    ]
  },
  {
    "slug": "kota-bojonegoro",
    "nama": "Kota Bojonegoro",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Bojonegoro"
    ]
  },
  {
    "slug": "kota-pacitan",
    "nama": "Kota Pacitan",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Pacitan"
    ]
  },
  {
    "slug": "kota-tulungagung",
    "nama": "Kota Tulungagung",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Tulungagung"
    ]
  },
  {
    "slug": "mojoagung",
    "nama": "Kota Mojoagung",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Mojoagung"
    ]
  },
  {
    "slug": "kota-ngawi",
    "nama": "Kota Ngawi",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Ngawi"
    ]
  },
  {
    "slug": "kota-nganjuk",
    "nama": "Kota Nganjuk",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Nganjuk"
    ]
  },
  {
    "slug": "kota-sidoarjo",
    "nama": "Kota Sidoarjo",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Sidoarjo",
      "Buduran",
      "Candi",
      "Gedangan",
      "Krian",
      "Sukodono",
      "Taman",
      "Waru"
    ]
  },
  {
    "slug": "kota-lumajang",
    "nama": "Kota Lumajang",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Lumajang"
    ]
  },
  {
    "slug": "kota-jombang",
    "nama": "Kota Jombang",
    "provinsi": "Provinsi Jawa Timur",
    "kecamatan": [
      "Jombang"
    ]
  },
  {
    "slug": "bangli",
    "nama": "Kabupaten Bangli",
    "provinsi": "Provinsi Bali",
    "kecamatan": [
      "Bangli",
      "Baturiti",
      "Kintamani",
      "Susut",
      "Tembuku"
    ]
  },
  {
    "slug": "buleleng",
    "nama": "Kabupaten Buleleng",
    "provinsi": "Provinsi Bali",
    "kecamatan": [
      "Banjar",
      "Buleleng",
      "Busungbiu",
      "Gerokgak",
      "Kubutambahan",
      "Sawan",
      "Seririt",
      "Sukasada",
      "Tejakula"
    ]
  },
  {
    "slug": "gianyar",
    "nama": "Kabupaten Gianyar",
    "provinsi": "Provinsi Bali",
    "kecamatan": [
      "Blahbatuh",
      "Gianyar",
      "Payangan",
      "Saba",
      "Sukawati",
      "Tampaksiring",
      "Tegallalang",
      "Ubud"
    ]
  },
  {
    "slug": "jembrana",
    "nama": "Kabupaten Jembrana",
    "provinsi": "Provinsi Bali",
    "kecamatan": [
      "Jembrana",
      "Melaya",
      "Mendoyo",
      "Pekutatan",
      "Negara"
    ]
  },
  {
    "slug": "karangasem",
    "nama": "Kabupaten Karangasem",
    "provinsi": "Provinsi Bali",
    "kecamatan": [
      "Abang",
      "Bebandem",
      "Karangasem",
      "Kubu",
      "Manggis",
      "Rendang",
      "Selat",
      "Sidemen"
    ]
  },
  {
    "slug": "klungkung",
    "nama": "Kabupaten Klungkung",
    "provinsi": "Provinsi Bali",
    "kecamatan": [
      "Banjarangkan",
      "Dawan",
      "Klungkung",
      "Nusa Penida"
    ]
  },
  {
    "slug": "tabanan",
    "nama": "Kabupaten Tabanan",
    "provinsi": "Provinsi Bali",
    "kecamatan": [
      "Baturiti",
      "Kediri",
      "Kerambitan",
      "Marga",
      "Penebel",
      "Pupuan",
      "Selemadeg",
      "Selemadeg Barat",
      "Selemadeg Timur",
      "Tabanan"
    ]
  },
  {
    "slug": "pulau-dompu",
    "nama": "Pulau Dompu",
    "provinsi": "Provinsi Nusa Tenggara Barat",
    "kecamatan": [
      "Dompu",
      "Hu'u",
      "Kempo",
      "Kilo",
      "Manggelewa",
      "Pajo",
      "Pekat",
      "Woja"
    ]
  },
  {
    "slug": "lombok",
    "nama": "Kabupaten Lombok",
    "provinsi": "Provinsi Nusa Tenggara Barat",
    "kecamatan": [
      "Gerung",
      "Kediri",
      "Narmada",
      "Praya",
      "Pujut",
      "Selong",
      "Aikmel",
      "Tanjung",
      "Bayan"
    ]
  },
  {
    "slug": "sumbawa",
    "nama": "Kabupaten Sumbawa",
    "provinsi": "Provinsi Nusa Tenggara Barat",
    "kecamatan": [
      "Alas",
      "Alas Barat",
      "Batu Lanteh",
      "Buer",
      "Empang",
      "Lape",
      "Lopok",
      "Lunyuk",
      "Maronge",
      "Moyo Hilir",
      "Moyo Utara",
      "Moyo Hulu",
      "Orong Telu",
      "Plampang",
      "Rhee",
      "Ropang",
      "Sumbawa",
      "Tarano",
      "Unter Iwes",
      "Utan"
    ]
  },
  {
    "slug": "sumbawa-barat",
    "nama": "Kabupaten Sumbawa Barat",
    "provinsi": "Provinsi Nusa Tenggara Barat",
    "kecamatan": [
      "Brang Ene",
      "Brang Rea",
      "Jereweh",
      "Maluk",
      "Poto Tano",
      "Seteluk",
      "Sekongkang",
      "Taliwang"
    ]
  },
  {
    "slug": "kota-bima",
    "nama": "Kota Bima",
    "provinsi": "Provinsi Nusa Tenggara Barat",
    "kecamatan": [
      "Asakota",
      "Mpunda",
      "Raba",
      "Rasanae Barat",
      "Rasanae Timur"
    ]
  },
  {
    "slug": "belu",
    "nama": "Kabupaten Belu",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Atambua Barat",
      "Atambua Selatan",
      "Atambua Kota",
      "Kakuluk Mesak",
      "Lasiolat",
      "Lamaknen",
      "Lamaknen Selatan",
      "Nanaet Duabesi",
      "Raihat",
      "Raimanuk",
      "Tasifeto Barat",
      "Tasifeto Timur"
    ]
  },
  {
    "slug": "ende",
    "nama": "Kabupaten Ende",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Detusoko",
      "Ende",
      "Ende Barat",
      "Ende Selatan",
      "Ende Timur",
      "Ende Utara",
      "Kelu Mutu",
      "Kotabaru",
      "Lepembuso Kelisoke",
      "Maukaro",
      "Maurole",
      "Nangapanda",
      "Ndona",
      "Ndona Timur",
      "Ndori",
      "Pulau Ende",
      "Wewaria",
      "Wolojita"
    ]
  },
  {
    "slug": "flores-timur",
    "nama": "Kabupaten Flores Timur",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Adonara",
      "Adonara Barat",
      "Adonara Tengah",
      "Adonara Timur",
      "Demon Pagong",
      "Ile Boleng",
      "Ile Mandiri",
      "Ile Bura",
      "Larantuka",
      "Lebra",
      "Solor Barat",
      "Solor Selatan",
      "Solor Timur",
      "Titehena",
      "Wulanggitang"
    ]
  },
  {
    "slug": "kupang",
    "nama": "Kabupaten Kupang",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Amarasi",
      "Amarasi Barat",
      "Amarasi Selatan",
      "Amarasi Timur",
      "Amfoang Barat Daya",
      "Amfoang Barat Laut",
      "Amfoang Selatan",
      "Amfoang Tengah",
      "Amfoang Timur",
      "Amfoang Utara",
      "Fatuleu",
      "Fatuleu Barat",
      "Fatuleu Tengah",
      "Kupang Barat",
      "Kupang Tengah",
      "Kupang Timur",
      "Necames",
      "Semau",
      "Semau Selatan",
      "Sulamu",
      "Taebenu"
    ]
  },
  {
    "slug": "manggarai",
    "nama": "Kabupaten Manggarai",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Cabal",
      "Cibal Barat",
      "Lelak",
      "Langke Rembong",
      "Poco Ranaka",
      "Reok",
      "Reok Barat",
      "Ruteng",
      "Satar Mese",
      "Satar Mese Barat",
      "Satar Mese Utara",
      "Wae Rii"
    ]
  },
  {
    "slug": "sumba",
    "nama": "Kabupaten Sumba",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Kota Waikabubak",
      "Kota Waingapu",
      "Kambera",
      "Lewa",
      "Loli",
      "Wanokaka"
    ]
  },
  {
    "slug": "timor",
    "nama": "Kabupaten Timor",
    "provinsi": "Provinsi Nusa Tenggara Timur",
    "kecamatan": [
      "Kota Soe",
      "Kota Kefamenanu",
      "Amanuban Barat",
      "Insana",
      "Mollo Utara"
    ]
  },
  {
    "slug": "bengkayang",
    "nama": "Kabupaten Bengkayang",
    "provinsi": "Provinsi Kalimantan Barat",
    "kecamatan": [
      "Bengkayang",
      "Capkala",
      "Jagos Bayang",
      "Ledo",
      "Lumar",
      "Monterado",
      "Samalantan",
      "Sanggau Ledo",
      "Selasir",
      "Siding",
      "Sunge Raya",
      "Sunge Raya Kepulauan",
      "Suti Semarang",
      "Teriak",
      "Tujuh Belas"
    ]
  },
  {
    "slug": "kapuas-hulu",
    "nama": "Kabupaten Kapuas Hulu",
    "provinsi": "Provinsi Kalimantan Barat",
    "kecamatan": [
      "Badau",
      "Batu Ampar",
      "Boyan Tanjung",
      "Bunut Hilir",
      "Bunut Hulu",
      "Embaloh Hilir",
      "Embaloh Hulu",
      "Empanang",
      "Hulu Gurung",
      "Kalis",
      "Pengkadan",
      "Puring Kencana",
      "Putussibau Selatan",
      "Putussibau Utara",
      "Seberuang",
      "Semitau",
      "Silat Hilir",
      "Silat Hulu",
      "Suhaid"
    ]
  },
  {
    "slug": "kayong-utara",
    "nama": "Kabupaten Kayong Utara",
    "provinsi": "Provinsi Kalimantan Barat",
    "kecamatan": [
      "Kepulauan Karimata",
      "Pulau Maya",
      "Seponti",
      "Simpang Hilir",
      "Sukadana",
      "Teluk Batang"
    ]
  },
  {
    "slug": "ketapang",
    "nama": "Kabupaten Ketapang",
    "provinsi": "Provinsi Kalimantan Barat",
    "kecamatan": [
      "Air Upas",
      "Benua Kayong",
      "Delta Pawan",
      "Hulu Sungai",
      "Jelai Hulu",
      "Kendawangan",
      "Marau",
      "Matan Hilir Selatan",
      "Matan Hilir Utara",
      "Muara Pawan",
      "Nanga Tayap",
      "Pemahan",
      "Simpang Dua",
      "Simpang Hulu",
      "Singkup",
      "Sungai Melayu Rayak",
      "Tumbang Titi"
    ]
  },
  {
    "slug": "kubu-raya",
    "nama": "Kabupaten Kubu Raya",
    "provinsi": "Provinsi Kalimantan Barat",
    "kecamatan": [
      "Batu Ampar",
      "Kuala Mandor B",
      "Kubu",
      "Rasau Jaya",
      "Sungai Ambawang",
      "Sungai Kakap",
      "Sungai Raya",
      "Teluk Pakedai",
      "Terentang"
    ]
  },
  {
    "slug": "landak",
    "nama": "Kabupaten Landak",
    "provinsi": "Provinsi Kalimantan Barat",
    "kecamatan": [
      "Air Besar",
      "Banyuke Hulu",
      "Jelimpo",
      "Kuala Behe",
      "Mandor",
      "Mempawah Hulu",
      "Menjalin",
      "Menyuke",
      "Ngabang",
      "Sebangki",
      "Sompak"
    ]
  },
  {
    "slug": "melawi",
    "nama": "Kabupaten Melawi",
    "provinsi": "Provinsi Kalimantan Barat",
    "kecamatan": [
      "Belimbing",
      "Belimbing Hulu",
      "Ella Hilir",
      "Menukung",
      "Nanga Pinoh",
      "Pinoh Selatan",
      "Pinoh Utara",
      "Sayan",
      "Sokan",
      "Tanah Pinoh",
      "Tanah Pinoh Barat"
    ]
  },
  {
    "slug": "mempawah",
    "nama": "Kabupaten Mempawah",
    "provinsi": "Provinsi Kalimantan Barat",
    "kecamatan": [
      "Anjongan",
      "Mempawah Hilir",
      "Mempawah Timur",
      "Sadaniang",
      "Segedong",
      "Siantan",
      "Sungai Pinyuh",
      "Toho"
    ]
  },
  {
    "slug": "sambas",
    "nama": "Kabupaten Sambas",
    "provinsi": "Provinsi Kalimantan Barat",
    "kecamatan": [
      "Galing",
      "Jawai",
      "Jawai Selatan",
      "Paloh",
      "Pemangkat",
      "Sajad",
      "Sajingan Besar",
      "Salatiga",
      "Sambas",
      "Sebawi",
      "Sejangkung",
      "Selakau",
      "Selakau Timur",
      "Semparuk",
      "Subah",
      "Tangaran",
      "Tebas",
      "Tekarang",
      "Teluk Keramat"
    ]
  },
  {
    "slug": "sanggau",
    "nama": "Kabupaten Sanggau",
    "provinsi": "Provinsi Kalimantan Barat",
    "kecamatan": [
      "Bedi",
      "Bonti",
      "Entikong",
      "Jangkang",
      "Kembayan",
      "Mukai",
      "Noyan",
      "Parindu",
      "Sanggau Kota",
      "Sekayam",
      "Tayan Hilir",
      "Tayan Hulu",
      "Toba"
    ]
  },
  {
    "slug": "sekadau",
    "nama": "Kabupaten Sekadau",
    "provinsi": "Provinsi Kalimantan Barat",
    "kecamatan": [
      "Belitang",
      "Belitang Hilir",
      "Belitang Hulu",
      "Nanga Mahap",
      "Nanga Taman",
      "Sekadau Hilir",
      "Sekadau Hulu"
    ]
  },
  {
    "slug": "sintang",
    "nama": "Kabupaten Sintang",
    "provinsi": "Provinsi Kalimantan Barat",
    "kecamatan": [
      "Ambalau",
      "Binjai Hulu",
      "Dedai",
      "Kayan Hilir",
      "Kayan Hulu",
      "Kelam Permai",
      "Ketungau Hilir",
      "Ketungau Tengah",
      "Ketungau Hulu",
      "Sepauk",
      "Serawai",
      "Sintang",
      "Tempunak",
      "Sungai Tebelian"
    ]
  },
  {
    "slug": "singkawang",
    "nama": "Kota Singkawang",
    "provinsi": "Provinsi Kalimantan Barat",
    "kecamatan": [
      "Singkawang Barat",
      "Singkawang Selatan",
      "Singkawang Tengah",
      "Singkawang Timur",
      "Singkawang Utara"
    ]
  },
  {
    "slug": "balangan",
    "nama": "Kabupaten Balangan",
    "provinsi": "Provinsi Kalimantan Selatan",
    "kecamatan": [
      "Awayan",
      "Batu Mandi",
      "Halong",
      "Juai",
      "Lampihong",
      "Paringin",
      "Paringin Selatan",
      "Tebing Tinggi"
    ]
  },
  {
    "slug": "kab-banjar",
    "nama": "Kabupaten Banjar",
    "provinsi": "Provinsi Kalimantan Selatan",
    "kecamatan": [
      "Aluh-Aluh",
      "Astambul",
      "Beruntung Baru",
      "Gambut",
      "Karang Intan",
      "Kertak Hanyar",
      "Martapura",
      "Martapura Barat",
      "Martapura Timur",
      "Mataraman",
      "Pengaron",
      "Sambung Makmur",
      "Simpang Empat",
      "Sungai Pinang",
      "Telaga Bauntung"
    ]
  },
  {
    "slug": "barito-kuala",
    "nama": "Kabupaten Barito Kuala",
    "provinsi": "Provinsi Kalimantan Selatan",
    "kecamatan": [
      "Anjir Muara",
      "Anjir Pasar",
      "Bakumpai",
      "Barambai",
      "Belawang",
      "Cerbon",
      "Kuripan",
      "Mandastana",
      "Marabahan",
      "Mekar Sari",
      "Rantau Badauh",
      "Tabukan",
      "Tabunganen",
      "Tamban",
      "Wanaraya"
    ]
  },
  {
    "slug": "hulu-sungai-selatan",
    "nama": "Kabupaten Hulu Sungai Selatan",
    "provinsi": "Provinsi Kalimantan Selatan",
    "kecamatan": [
      "Angkinang",
      "Daha Selatan",
      "Daha Utara",
      "Daha Barat",
      "Kalidani",
      "Kandangan",
      "Loksado",
      "Padang Batung",
      "Simpur",
      "Telaga Langsat",
      "Talas"
    ]
  },
  {
    "slug": "hulu-sungai-tengah",
    "nama": "Kabupaten Hulu Sungai Tengah",
    "provinsi": "Provinsi Kalimantan Selatan",
    "kecamatan": [
      "Barabai",
      "Batang Alai Selatan",
      "Batang Alai Timur",
      "Batang Alai Utara",
      "Batu Benawa",
      "Hantakan",
      "Haruyan",
      "Labuan Amas Selatan",
      "Labuan Amas Utara",
      "Limbangan",
      "Pandawan"
    ]
  },
  {
    "slug": "hulu-sungai-utara",
    "nama": "Kabupaten Hulu Sungai Utara",
    "provinsi": "Provinsi Kalimantan Selatan",
    "kecamatan": [
      "Amuntai Selatan",
      "Amuntai Tengah",
      "Amuntai Utara",
      "Babirik",
      "Banjang",
      "Danau Panggang",
      "Haur Gading",
      "Paminggir",
      "Sungai Pandan",
      "Sungai Tabukan"
    ]
  },
  {
    "slug": "kotabaru",
    "nama": "Kabupaten Kotabaru",
    "provinsi": "Provinsi Kalimantan Selatan",
    "kecamatan": [
      "Hambalang",
      "Kelumpang Barat",
      "Kelumpang Hilir",
      "Kelumpang Hulu",
      "Kelumpang Selatan",
      "Kelumpang Tengah",
      "Kelumpang Utara",
      "Pamukan Barat",
      "Pamukan Selatan",
      "Pamukan Utara",
      "Pulau Laut Barat",
      "Pulau Laut Kepulauan",
      "Pulau Laut Selatan",
      "Pulau Laut Tanjung Selayar",
      "Pulau Laut Tengah",
      "Pulau Laut Timur",
      "Pulau Laut Utara",
      "Pulau Sebuku",
      "Sampanahan",
      "Pulaulaut Sigam"
    ]
  },
  {
    "slug": "tabalong",
    "nama": "Kabupaten Tabalong",
    "provinsi": "Provinsi Kalimantan Selatan",
    "kecamatan": [
      "Banua Lawas",
      "Bintang Ara",
      "Haruai",
      "Jaro",
      "Kelua",
      "Kua",
      "Murung Pudak",
      "Muara Harus",
      "Muara Uya",
      "Pugaan",
      "Tanta",
      "Tanjung"
    ]
  },
  {
    "slug": "tanah-bumbu",
    "nama": "Kabupaten Tanah Bumbu",
    "provinsi": "Provinsi Kalimantan Selatan",
    "kecamatan": [
      "Batulicin",
      "Kusan Hilir",
      "Kusan Hulu",
      "Kuranji",
      "Mentewe",
      "Satui",
      "Simpang Empat",
      "Sungai Loban",
      "Teluk Kepayang"
    ]
  },
  {
    "slug": "tanah-laut",
    "nama": "Kabupaten Tanah Laut",
    "provinsi": "Provinsi Kalimantan Selatan",
    "kecamatan": [
      "Bati-Bati",
      "Batu Ampar",
      "Bumi Makmur",
      "Jorong",
      "Kintap",
      "Kurau",
      "Panyipatan",
      "Pelaihari",
      "Takisung",
      "Tambang Ulang"
    ]
  },
  {
    "slug": "tapin",
    "nama": "Kabupaten Tapin",
    "provinsi": "Provinsi Kalimantan Selatan",
    "kecamatan": [
      "Bakarangan",
      "Binuang",
      "Bungur",
      "Candi Laras Selatan",
      "Candi Laras Utara",
      "Hatungan",
      "Lokpaikat",
      "Piani",
      "Salam Babaris",
      "Tapin Selatan",
      "Tapin Tengah",
      "Tapin Utara"
    ]
  },
  {
    "slug": "banjarbaru",
    "nama": "Kota Banjarbaru",
    "provinsi": "Provinsi Kalimantan Selatan",
    "kecamatan": [
      "Banjarbaru Selatan",
      "Banjarbaru Utara",
      "Cempaka",
      "Landasan Ulin",
      "Liang Anggang"
    ]
  },
  {
    "slug": "bantaeng",
    "nama": "Kabupaten Bantaeng",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Bantaeng",
      "Bissappu",
      "Eremerasa",
      "Gantarang Keke",
      "Pajukukang",
      "Sino",
      "Tompobulu",
      "Uluere"
    ]
  },
  {
    "slug": "barru",
    "nama": "Kabupaten Barru",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Balusu",
      "Barru",
      "Mallusetasi",
      "Pujananting",
      "Soppeng Riaja",
      "Tanete Rilau",
      "Tanete Riaja"
    ]
  },
  {
    "slug": "bone",
    "nama": "Kabupaten Bone",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Ajangale",
      "Amali",
      "Awangpone",
      "Barebbo",
      "Bontocani",
      "Cenrana",
      "Cina",
      "Dua Boccoe",
      "Kahu",
      "Kajuara",
      "Lamuru",
      "Lappariaja",
      "Libureng",
      "Mare",
      "Palakka",
      "Patimpeng",
      "Ponre",
      "Salomekko",
      "Sibulue",
      "Tanete Riattang",
      "Tanete Riattang Barat",
      "Tanete Riattang Timur",
      "Tellu Limpoe",
      "Tellu Siattinge",
      "Tonra",
      "Ulaweng"
    ]
  },
  {
    "slug": "bulukumba",
    "nama": "Kabupaten Bulukumba",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Bonto Bahari",
      "Bontotiro",
      "Bulukumpa",
      "Gantarang",
      "Hero Lange-Lange",
      "Kajang",
      "Kindang",
      "Rilau Ale",
      "Ujung Bulu",
      "Ujung Loe"
    ]
  },
  {
    "slug": "enrekang",
    "nama": "Kabupaten Enrekang",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Alla",
      "Baraka",
      "Baroko",
      "Buntu Batu",
      "Cendana",
      "Curio",
      "Enrekang",
      "Maiwa",
      "Malua",
      "Masalle",
      "Maiwa Barat",
      "Manting"
    ]
  },
  {
    "slug": "gowa",
    "nama": "Kabupaten Gowa",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Bajeng",
      "Bajeng Barat",
      "Barombong",
      "Biringbulu",
      "Bontolempangan",
      "Bontomarannu",
      "Bontonompo",
      "Bontonompo Selatan",
      "Bungaya",
      "Manuju",
      "Parangloe",
      "Pattallassang",
      "Somba Opu",
      "Tinggimoncong",
      "Tompobulu",
      "Tombolo Pao"
    ]
  },
  {
    "slug": "maros",
    "nama": "Kabupaten Maros",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Bantimurung",
      "Bontoa",
      "Cambu",
      "Cenrana",
      "Lau",
      "Mallawa",
      "Maros Baru",
      "Marusu",
      "Moncongloe",
      "Mandai",
      "Simbang",
      "Tanralili",
      "Tompobulu",
      "Turikale"
    ]
  },
  {
    "slug": "pangkajene-dan-kepulauan",
    "nama": "Kabupaten Pangkajene dan Kepulauan",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Balocci",
      "Bungoro",
      "Labakkang",
      "Liukang Tangaya",
      "Liukang Kalmas",
      "Liukang Tupabbiring",
      "Liukang Tupabbiring Utara",
      "Mandalle",
      "Ma'rang",
      "Minasatene",
      "Pangkajene",
      "Segeri",
      "Tondong Tallasa"
    ]
  },
  {
    "slug": "palopo",
    "nama": "Kota Palopo",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Bara",
      "Muting",
      "Sendana",
      "Tellu Wanua",
      "Wara",
      "Wara Barat",
      "Wara Selatan",
      "Wara Timur",
      "Wara Utara"
    ]
  },
  {
    "slug": "parepare",
    "nama": "Kota Parepare",
    "provinsi": "Provinsi Sulawesi Selatan",
    "kecamatan": [
      "Bacukiki",
      "Bacukiki Barat",
      "Soreang",
      "Ujung"
    ]
  },
  {
    "slug": "berau",
    "nama": "Kabupaten Berau",
    "provinsi": "Provinsi Kalimantan Timur",
    "kecamatan": [
      "Batu Putih",
      "Biatan",
      "Biduk-Biduk",
      "Gunung Tabur",
      "Kelay",
      "Maratua",
      "Muara Lesan",
      "Pulau Derawan",
      "Sambaliung",
      "Segah",
      "Talisayan",
      "Tanjung Redeb",
      "Teluk Bayur"
    ]
  },
  {
    "slug": "kutai-barat",
    "nama": "Kabupaten Kutai Barat",
    "provinsi": "Provinsi Kalimantan Timur",
    "kecamatan": [
      "Bongan",
      "Damai",
      "Jempang",
      "Linggang Bigung",
      "Long Iram",
      "Melak",
      "Muara Lawa",
      "Muara Pahu",
      "Nyuatan",
      "Penyinggahan",
      "Sekolaq Darat",
      "Siluq Ngurai",
      "Tering"
    ]
  },
  {
    "slug": "kutai-kartanegara",
    "nama": "Kabupaten Kutai Kartanegara",
    "provinsi": "Provinsi Kalimantan Timur",
    "kecamatan": [
      "Anggana",
      "Kembang Janggut",
      "Kenohan",
      "Kota Bangun",
      "Loa Janan",
      "Loa Kulu",
      "Marang Kayu",
      "Muara Badak",
      "Muara Jawa",
      "Muara Kaman",
      "Muara Muntai",
      "Muara Wis",
      "Samboja",
      "Sanga-Sanga",
      "Sebulu",
      "Tabang",
      "Tenggarong",
      "Tenggarong Seberang"
    ]
  },
  {
    "slug": "kutai-timur",
    "nama": "Kabupaten Kutai Timur",
    "provinsi": "Provinsi Kalimantan Timur",
    "kecamatan": [
      "Batu Ampar",
      "Bengalon",
      "Busang",
      "Kaliorang",
      "Karangan",
      "Kaubun",
      "Kongbeng",
      "Long Mesangat",
      "Muara Ancalong",
      "Muara Bengkal",
      "Muara Wahau",
      "Rantau Pulung",
      "Sandaran",
      "Sangatta Selatan",
      "Sangatta Utara",
      "Sangkulirang",
      "Telen",
      "Teluk Pandan"
    ]
  },
  {
    "slug": "penajam-paser-utara",
    "nama": "Kabupaten Penajam Paser Utara",
    "provinsi": "Provinsi Kalimantan Timur",
    "kecamatan": [
      "Babulu",
      "Penajam",
      "Sepaku",
      "Warung"
    ]
  },
  {
    "slug": "bontang",
    "nama": "Kota Bontang",
    "provinsi": "Provinsi Kalimantan Timur",
    "kecamatan": [
      "Bontang Barat",
      "Bontang Selatan",
      "Bontang Utara"
    ]
  },
  {
    "slug": "melak",
    "nama": "Melak",
    "provinsi": "Provinsi Kalimantan Timur",
    "kecamatan": [
      "Melak"
    ]
  },
  {
    "slug": "barito-selatan",
    "nama": "Kabupaten Barito Selatan",
    "provinsi": "Provinsi Kalimantan Tengah",
    "kecamatan": [
      "Dusun Hilir",
      "Dusun Selatan",
      "Dusun Utara",
      "Karau Kuala",
      "Gunung Bintang Awai",
      "Jenamas"
    ]
  },
  {
    "slug": "barito-timur",
    "nama": "Kabupaten Barito Timur",
    "provinsi": "Provinsi Kalimantan Tengah",
    "kecamatan": [
      "Awang",
      "Benua Lima",
      "Dusun Tengah",
      "Dusun Timur",
      "Karusen Janang",
      "Paju Epat",
      "Paku",
      "Patangkep Tutui",
      "Raren Batuah",
      "Pematang Karau"
    ]
  },
  {
    "slug": "barito-utara",
    "nama": "Kabupaten Barito Utara",
    "provinsi": "Provinsi Kalimantan Tengah",
    "kecamatan": [
      "Gunung Purei",
      "Gunung Timang",
      "Lahei",
      "Lahei Barat",
      "Montallat",
      "Muara Lahei",
      "Muara Teweh Baru",
      "Muara Teweh Selatan",
      "Teweh Tengah",
      "Teweh Timur"
    ]
  },
  {
    "slug": "kapuas",
    "nama": "Kabupaten Kapuas",
    "provinsi": "Provinsi Kalimantan Tengah",
    "kecamatan": [
      "Basarang",
      "Bataguh",
      "Dadahup",
      "Kapuas Barat",
      "Kapuas Hilir",
      "Kapuas Hulu",
      "Kapuas Kuala",
      "Kapuas Murung",
      "Kapuas Murung Barat",
      "Kapuas Tengah",
      "Kapuas Timur",
      "Mandau Talawang",
      "Mantangai",
      "Pasak Talawang",
      "Pulau Petak",
      "Selat",
      "Tambo Catur"
    ]
  },
  {
    "slug": "kotawaringin-barat",
    "nama": "Kabupaten Kotawaringin Barat",
    "provinsi": "Provinsi Kalimantan Tengah",
    "kecamatan": [
      "Arut Selatan",
      "Arut Utara",
      "Kotawaringin Lama",
      "Kuntai",
      "Pangkalan Lada",
      "Pangkalan Banteng"
    ]
  },
  {
    "slug": "kotawaringin-timur",
    "nama": "Kabupaten Kotawaringin Timur",
    "provinsi": "Provinsi Kalimantan Tengah",
    "kecamatan": [
      "Baamang",
      "Bukit Santuai",
      "Cempaga",
      "Cempaga Hulu",
      "Mentawa Baru Ketapang",
      "Mentaya Hilir Selatan",
      "Mentaya Hilir Utara",
      "Mentaya Hulu",
      "Parenggean",
      "Pulau Hanaut",
      "Seranau",
      "Telaga Antang",
      "Teluk Sampit",
      "Tualan Hulu"
    ]
  },
  {
    "slug": "kisaran",
    "nama": "Kota Kisaran",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Kota Kisaran Barat",
      "Kota Kisaran Timur"
    ]
  },
  {
    "slug": "rantau-prapat",
    "nama": "Kota Rantau Prapat",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Rantau Selatan",
      "Rantau Utara"
    ]
  },
  {
    "slug": "sei-semangkei",
    "nama": "Sei Semangkei",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Bosar Maligas"
    ]
  },
  {
    "slug": "stabat",
    "nama": "Kota Stabat",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Stabat"
    ]
  },
  {
    "slug": "pangkalan-brandan",
    "nama": "Kota Pangkalan Brandan",
    "provinsi": "Provinsi Sumatera Utara",
    "kecamatan": [
      "Babalan",
      "Brandan Barat",
      "Sei Lepan"
    ]
  },
  {
    "slug": "bitung",
    "nama": "Kota Bitung",
    "provinsi": "Provinsi Sulawesi Utara",
    "kecamatan": [
      "Aertembaga",
      "Girian",
      "Lembeh Selatan",
      "Lembeh Utara",
      "Madidir",
      "Maesa",
      "Matuari",
      "Ranowulu"
    ]
  },
  {
    "slug": "kotamobagu",
    "nama": "Kota Kotamobagu",
    "provinsi": "Provinsi Sulawesi Utara",
    "kecamatan": [
      "Kotamobagu Barat",
      "Kotamobagu Selatan",
      "Kotamobagu Timur",
      "Kotamobagu Utara"
    ]
  },
  {
    "slug": "tomohon",
    "nama": "Kota Tomohon",
    "provinsi": "Provinsi Sulawesi Utara",
    "kecamatan": [
      "Tomohon Barat",
      "Tomohon Selatan",
      "Tomohon Tengah",
      "Tomohon Timur",
      "Tomohon Utara"
    ]
  },
  {
    "slug": "tondano",
    "nama": "Kota Tondano",
    "provinsi": "Provinsi Sulawesi Utara",
    "kecamatan": [
      "Tondano Barat",
      "Tondano Selatan",
      "Tondano Timur",
      "Tondano Utara"
    ]
  },
  {
    "slug": "gunungkidul",
    "nama": "Kabupaten Gunungkidul",
    "provinsi": "D.I. Yogyakarta",
    "kecamatan": [
      "Gedangsari",
      "Girisubo",
      "Karangmojo",
      "Ngawen",
      "Nglipar",
      "Paliyan",
      "Panggang",
      "Patuk",
      "Playen",
      "Ponjong",
      "Purwosari",
      "Rongkop",
      "Saptosari",
      "Semanu",
      "Semin",
      "Tanjungsari",
      "Tepus",
      "Wonosari"
    ]
  },
  {
    "slug": "kulon-progo",
    "nama": "Kabupaten Kulon Progo",
    "provinsi": "D.I. Yogyakarta",
    "kecamatan": [
      "Galur",
      "Girimulyo",
      "Kalibawang",
      "Kokap",
      "Lendah",
      "Nanggulan",
      "Panjatan",
      "Pengasih",
      "Samigaluh",
      "Sentolo",
      "Temon",
      "Wates"
    ]
  },
  {
    "slug": "bungku-tengah",
    "nama": "Bungku Tengah",
    "provinsi": "Provinsi Sulawesi Tengah",
    "kecamatan": [
      "Bungku Tengah"
    ]
  },
  {
    "slug": "kolonodale",
    "nama": "Kolonodale",
    "provinsi": "Provinsi Sulawesi Tengah",
    "kecamatan": [
      "Petasia"
    ]
  },
  {
    "slug": "seram",
    "nama": "Kabupaten Seram",
    "provinsi": "Provinsi Maluku",
    "kecamatan": [
      "Bula",
      "Kairatu",
      "Seram Barat",
      "Seram Timur",
      "Seram Utara"
    ]
  },
  {
    "slug": "tual",
    "nama": "Kota Tual",
    "provinsi": "Provinsi Maluku",
    "kecamatan": [
      "Pulau Dullah Selatan",
      "Pulau Dullah Utara",
      "Pulau Tayando Tam",
      "Pulau-Pulau Kur",
      "Kur Selatan"
    ]
  },
  {
    "slug": "mamuju",
    "nama": "Kabupaten Mamuju",
    "provinsi": "Provinsi Sulawesi Barat",
    "kecamatan": [
      "Bonehau",
      "Kalukku",
      "Kalumbu",
      "Kepulauan Bala-Balakang",
      "Mamuju",
      "Papalang",
      "Sampaga",
      "Simboro dan Kepulauan",
      "Tapalang",
      "Tapalang Barat",
      "Tommo"
    ]
  },
  {
    "slug": "bau-bau",
    "nama": "Kota Bau-Bau",
    "provinsi": "Provinsi Sulawesi Tenggara",
    "kecamatan": [
      "Betoambari",
      "Bungi",
      "Kocana",
      "Lea-Lea",
      "Murhum",
      "Sorawolio",
      "Wolio"
    ]
  }
];

const kotaFilePath = path.join(__dirname, '../data/kota.json');
const kotaData = JSON.parse(fs.readFileSync(kotaFilePath, 'utf8'));

let newlyAddedCount = 0;
let preservedCount = 0;
let unmatchedCount = 0;

for (const inputItem of inputDataBatch3) {
  const inputNamaClean = inputItem.nama.toLowerCase().trim();
  
  // Match 1: exact nama
  let target = kotaData.find(k => k.nama.toLowerCase().trim() === inputNamaClean);
  
  // Match 2: slug
  if (!target) {
    target = kotaData.find(k => k.slug === inputItem.slug);
  }
  
  // Match 3: short name match
  if (!target) {
    const shortName = inputNamaClean.replace(/^(kabupaten|kota|kota administrasi)\s+/i, '');
    target = kotaData.find(k => k.nama.toLowerCase().replace(/^(kabupaten|kota|kota administrasi)\s+/i, '') === shortName);
  }

  if (target) {
    // Only set if not already present or empty! Preserve existing data!
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

// Write back to data/kota.json
fs.writeFileSync(kotaFilePath, JSON.stringify(kotaData, null, 2), 'utf8');

// Calculate total completeness
const missingKecamatanList = kotaData.filter(item => !item.kecamatan || item.kecamatan.length === 0);
const filledKecamatanCount = kotaData.length - missingKecamatanList.length;

console.log('=== MERGE BATCH 3 SUMMARY ===');
console.log(`Newly Added in Batch 3: ${newlyAddedCount}`);
console.log(`Preserved (Already Existed): ${preservedCount}`);
console.log(`Unmatched Input Items: ${unmatchedCount}`);
console.log(`----------------------------------------`);
console.log(`TOTAL DAERAH WITH KECAMATAN: ${filledKecamatanCount} / ${kotaData.length} (${((filledKecamatanCount / kotaData.length) * 100).toFixed(1)}%)`);
console.log(`TOTAL DAERAH STILL MISSING KECAMATAN: ${missingKecamatanList.length} (${((missingKecamatanList.length / kotaData.length) * 100).toFixed(1)}%)`);

if (missingKecamatanList.length > 0) {
  console.log('\n--- LIST OF STILL MISSING CITIES ---');
  console.log(missingKecamatanList.map(item => ({ slug: item.slug, nama: item.nama, provinsi: item.provinsi })));
}
