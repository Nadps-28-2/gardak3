import { Kota, Layanan } from "./data";

export interface ArticleContent {
  pendahuluan: string[];
  dasarRegulasi: { text: string[]; regulasiList: string[] };
  mengapaPenting: { text: string[]; poinRisiko: string[] };
  manfaatLengkap: { intro: string; poinManfaat: { judul: string; deskripsi: string }[] };
  siapaMembutuhkan: { intro: string; daftarPeran: string[]; penutup: string };
  materiSilabus: { intro: string; modul: { namaModul: string; topik: string[] }[] };
  persyaratanPeserta: { umum: string[]; dokumen: string[] };
  tahapanProses: { langkah: { langkah: number; judul: string; deskripsi: string }[] };
  durasiSkema: { durasi: string; skema: string[]; penjelasan: string };
  sertifikasiLegalitas: { penerbit: string; masaBerluku: string; detail: string[] };
  ilustrasiPenerapan: { konteks: string; skenario: string; solusi: string };
  tipsPenyelenggara: string[];
  faq: { q: string; a: string }[];
  kesimpulan: string;
}

export function generateFullArticle(item: Layanan, place: Kota): ArticleContent {
  const isPelatihan = item.kategori === "Pelatihan";
  const clusterName = place.cluster;
  const placeClean = place.nama.replace(/^(Kabupaten|Kota|Kota Administrasi)\s+/i, "");

  // Framing based on cluster
  let clusterContext = "";
  let clusterScenario = "";
  if (clusterName === "migas") {
    clusterContext = `Sebagai kawasan berorientasi eksplorasi, pengolahan, dan energi (migas & pertambangan), ${place.nama} memiliki standar keselamatan operasional berisiko tinggi.`;
    clusterScenario = `Di lingkungan operasional ${placeClean}, seperti area kilang, rig, fasilitas pemrosesan gas, atau tambang, penerapan kewaspadaan terhadap H2S, confined space, dan sistem Permit to Work menjadi pilar mutlak.`;
  } else if (clusterName === "manufaktur") {
    clusterContext = `Sebagai zona pertumbuhan manufaktur dan kawasan industri terpadu, ${place.nama} menuntut produktivitas tinggi yang wajib diimbangi dengan perlindungan ketenagakerjaan secara ketat.`;
    clusterScenario = `Di kawasan pabrik dan fasilitas manufaktur ${placeClean}, penggunaan alat angkat-angkut (forklift, crane), keselamatan instalasi listrik, serta manajemen bahan kimia berbahaya (B3) menjadi perhatian harian tim HSE.`;
  } else if (clusterName === "konstruksi") {
    clusterContext = `Sebagai wilayah dengan dinamika pembangunan infrastruktur, komersial, dan gedung bertingkat yang pesat, ${place.nama} menghadapi risiko keselamatan kerja di tempat tinggi dan konstruksi sipil.`;
    clusterScenario = `Pada proyek pembangunan di ${placeClean}, perancah (scaffolding), pekerjaan di ketinggian (TKBT/TKPK), pengoperasian alat berat, serta penerapan SMK3 Konstruksi menjadi fokus utama pencegahan kecelakaan kerja.`;
  } else {
    clusterContext = `Perkembangan sektor ekonomi, jasa, perdagangan, dan fasilitas publik di ${place.nama} membutuhkan kepatuhan standar K3 guna menciptakan lingkungan kerja yang aman dan berdaya saing.`;
    clusterScenario = `Di berbagai instansi, gedung perkantoran, fasilitas kesehatan, maupun usaha komersial di ${placeClean}, kesiapsiagaan tanggap darurat kebakaran, P3K, ergonomi, dan keandalan sarana gedung menjadi prioritas utama.`;
  }

  // Generate 14 detailed sections
  const pendahuluan = [
    `Implementasi ${item.nama} di ${place.nama} merupakan langkah strategis bagi pekerja dan manajemen perusahaan untuk menjamin kepatuhan keselamatan kerja serta meningkatkan standar operasional. ${clusterContext}`,
    `Seiring meningkatnya pengawasan ketenagakerjaan dan kesadaran akan risiko kerja, keahlian teknis serta penerapan sistem manajemen K3 yang terstruktur bukan lagi sekadar formalitas administrasi, melainkan kebutuhan dasar operasional. ${item.nama} memberikan landasan pengetahuan, keterampilan praktis, serta kerangka kerja yang selaras dengan regulasi nasional.`,
    `Melalui pendampingan dan skema yang tepat, para profesional di ${place.nama} dapat mengidentifikasi potensi bahaya sejak dini, meminimalkan potensi kegagalan operasional, serta memastikan seluruh personel bekerja dalam perlindungan standar yang teruji.`
  ];

  const dasarRegulasi = {
    text: [
      `Pelaksanaan ${item.nama} didasarkan pada peraturan perundang-undangan Republik Indonesia yang mengatur keselamatan, kesehatan kerja, serta perlindungan lingkungan hidup. Regulasi utama yang menjadi rujukan meliputi Undang-Undang No. 1 Tahun 1970 tentang Keselamatan Kerja dan PP No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen K3 (SMK3).`,
      `Selain itu, standar teknis dan skema kompeitensi disesuaikan dengan Keputusan Menteri Ketenagakerjaan (Kepmenaker), Peraturan Menteri Ketenagakerjaan (Permenaker), serta Peraturan Pemerintah sektor terkait. Patokan regulasi ini memastikan bahwa keluaran dari ${item.nama} dapat dipertanggungjawabkan secara hukum dan teknis di wilayah ${place.nama}.`
    ],
    regulasiList: [
      "Undang-Undang No. 1 Tahun 1970 tentang Keselamatan Kerja",
      "Undang-Undang No. 13 Tahun 2003 tentang Ketenagakerjaan",
      "Peraturan Pemerintah No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen K3 (SMK3)",
      "Permenaker No. PER.05/MEN/1996 & Permenaker No. 26 Tahun 2014 tentang Audit SMK3",
      "Peraturan Teknis Menteri Ketenagakerjaan RI sesuai bidang kewenangan alat/kompetensi",
      "Standar Kompetensi Kerja Nasional Indonesia (SKKNI) yang relevan"
    ]
  };

  const mengapaPenting = {
    text: [
      `Kecelakaan kerja dan bahaya operasional di area kerja ${place.nama} berpotensi menimbulkan kerugian finansial yang besar, kerusakan aset, serta gangguan kesehatan pekerja. Penerapan ${item.nama} secara tepat menjadi benteng pencegahan dari risiko tersebut.`,
      `Tanpa pembekalan dan kajian yang memadai, potensi bahaya dapat tidak terdeteksi hingga memicu insiden fatal. Investasi pada peningkatan kompetensi dan konsultasi K3 secara langsung meningkatkan reputasi serta keberlanjutan bisnis perusahaan di ${place.nama}.`
    ],
    poinRisiko: [
      "Risiko kecelakaan kerja akibat kesalahan manusia (human error) atau kegagalan peralatan teknis.",
      "Sanksi administratif hingga penghentian izin operasional akibat ketidakpatuhan terhadap hukum ketenagakerjaan.",
      "Kerugian materiil berupa kerusakan mesin, kerugian produksi, serta klaim asuransi yang membengkak.",
      "Penurunan moral dan produktivitas tim akibat lingkungan kerja yang kurang aman."
    ]
  };

  const manfaatLengkap = {
    intro: `Penerapan ${item.nama} memberikan nilai tambah yang konkret dan terukur bagi personel maupun organisasi di ${place.nama}:`,
    poinManfaat: [
      {
        judul: "Peningkatan Kepatuhan Hukum & Regulasi",
        deskripsi: `Memastikan seluruh aktivitas dan operasional di ${place.nama} memenuhi ketentuan perundang-undangan K3 yang berlaku, sehingga terhindar dari sanksi hukum.`
      },
      {
        judul: "Pencegahan Insiden & Kecelakaan Kerja",
        deskripsi: "Membangun pemahaman mendalam tentang identifikasi bahaya, penilaian risiko, serta penentuan langkah pengendalian yang efektif."
      },
      {
        judul: "Efisiensi Operasional & Asset Protection",
        deskripsi: "Mengurangi biaya tak terduga akibat kerusakan peralatan kerja, perawatan darurat, atau kerugian waktu proses (downtime)."
      },
      {
        judul: "Pengakuan Kualifikasi & Sertifikasi Resmi",
        deskripsi: "Memberikan bukti kompetensi sah berupa sertifikat resmi yang diakui oleh lembaga berwenang dan industri nasional."
      },
      {
        judul: "Penguatan Budaya Keselamatan (Safety Culture)",
        deskripsi: "Mendorong kepemimpinan K3 yang aktif di setiap tingkatan organisasi, dari staf teknis hingga manajemen puncak."
      }
    ]
  };

  const siapaMembutuhkan = {
    intro: `Program ${item.nama} ini dirancang khusus untuk berbagai peran kunci yang beroperasi di wilayah ${place.nama}:`,
    daftarPeran: [
      `Operator, Teknisi, dan Staf Lapangan di sektor ${clusterName === 'migas' ? 'migas & tambang' : clusterName === 'manufaktur' ? 'pabrik & industri' : clusterName === 'konstruksi' ? 'proyek & bangunan' : 'jasa & perkantoran'}.`,
      "Safety Officer, HSE Inspector, dan Anggota Panitia Pembina K3 (P2K3).",
      "Supervisor, Kepala Bagian, dan Site Manager yang bertanggung jawab atas pengawasan tim operasional.",
      "Manajemen Perusahaan & Pemilik Bisnis yang membutuhkan jaminan sistem kepatuhan K3 terpadu.",
      "Praktisi Independen & Konsultan K3 yang ingin memperkuat portofolio kualifikasi resmi."
    ],
    penutup: `Dengan pemetaan peserta yang tepat di ${place.nama}, materi dan pembahasan dapat difokuskan pada tantangan ril yang dialami sehari-hari.`
  };

  const materiSilabus = {
    intro: `Kurikulum dan kerangka pembahasan dalam ${item.nama} mencakup kombinasi pemahaman teori, regulasi, studi kasus, serta simulasi praktis:`,
    modul: [
      {
        namaModul: "Modul 1: Kebijakan, Hukum, dan Regulasi K3",
        topik: [
          "Kerangka perundang-undangan K3 di Indonesia",
          "Hak dan kewajiban tenaga kerja serta pengusaha",
          "Standar pengawasan ketenagakerjaan lokal & nasional"
        ]
      },
      {
        namaModul: "Modul 2: Identifikasi Bahaya & Penilaian Risiko (HIRADC / JSA)",
        topik: [
          "Teknik pemetaan potensi bahaya di tempat kerja",
          "Metodologi penilaian matriks peluang dan keparahan risiko",
          "Hierarki pengendalian risiko: Eliminasi, Subsitusi, Rekayasa, Administrasi, APD"
        ]
      },
      {
        namaModul: "Modul 3: Standar Teknis & Keselamatan Operasional",
        topik: [
          "Prosedur operasional standar (SOP) keselamatan teknis",
          "Penggunaan dan perawatan Alat Pelindung Diri (APD) berstandar",
          "Inspeksi rutin, pengujian alat, dan pencatatan logbook operasional"
        ]
      },
      {
        namaModul: "Modul 4: Tanggap Darurat & Investigasi Insiden",
        topik: [
          "Penyusunan rencana tanggap darurat (Emergency Response Plan)",
          "Simulasi evakuasi, First Aid, dan kesiapsiagaan kebakaran",
          "Teknik wawancara, analisis akar masalah (RCA), dan pembuatan laporan insiden"
        ]
      }
    ]
  };

  const persyaratanPeserta = {
    umum: [
      "Pendidikan minimal SMA/SMK/D3/S1 sesuai dengan ketetapan skema kualifikasi.",
      "Sehat jasmani dan rohani, dibuktikan dengan Surat Keterangan Sehat dari dokter/klinik.",
      "Memiliki pengalaman kerja relevan di bidangnya (untuk tingkat madya/utama/auditor).",
      "Bersedia mengikuti seluruh rangkaian sesi materi, evaluasi, dan ujian kompeitensi."
    ],
    dokumen: [
      "Fotokopi Ijazah Terakhir (1 lembar)",
      "Fotokopi KTP / Identitas Diri sah (1 lembar)",
      "Pasfoto terbaru background merah/biru (ukuran 2x3, 3x4, 4x6)",
      "Surat Utusan Perusahaan / Keterangan Kerja (bila dikirim oleh instansi/perusahaan)"
    ]
  };

  const tahapanProses = {
    langkah: [
      {
        langkah: 1,
        judul: "Konsultasi Kebutuhan & Evaluasi Awal",
        deskripsi: `Pendaftaran dan prapemetaan profil peserta atau ketersediaan sistem K3 di organisasi Anda di ${place.nama}.`
      },
      {
        langkah: 2,
        judul: "Verifikasi Berkas & Konfirmasi Jadwal",
        deskripsi: "Pemeriksaan kelengkapan dokumen persyaratan dan penetapan skema/jadwal pelaksanaan."
      },
      {
        langkah: 3,
        judul: "Pelaksanaan Sesi Pembelajaran / Pendampingan",
        deskripsi: "Penyampaian materi mendalam oleh instruktur berpengalaman/ahli K3 senior sesuai kurikulum."
      },
      {
        langkah: 4,
        judul: "Evaluasi, Asesmen & Ujian Kompetensi",
        deskripsi: "Pengujian pemahaman peserta melalui ujian tulis, wawancara, studi kasus, atau praktik langsung."
      },
      {
        langkah: 5,
        judul: "Penerbitan Sertifikat & Pelaporan Resmi",
        deskripsi: "Penerbitan sertifikat legalitas dan penyerahan laporan hasil kegiatan kepada peserta/manajemen."
      }
    ]
  };

  const durasiSkema = {
    durasi: isPelatihan ? "3 hingga 12 hari kerja (tergantung jenjang skema pelatihan)" : "1 hingga 4 minggu kerja (sesuai ruang lingkup kajian/audit)",
    skema: [
      "Public Class / Sesi Terjadwal (Offline di venue mitra / Daring via Zoom Meeting)",
      "In-House Training (Pelaksanaan langsung di fasilitas internal perusahaan)",
      "Blended Learning (Kombinasi teori daring dan evaluasi praktis tatap muka)"
    ],
    penjelasan: `Fleksibilitas waktu dan lokasi pelaksanaan di ${place.nama} dirancang untuk menyesuaikan dengan ritme kerja dan kebutuhan operasional perusahaan tanpa mengganggu produktivitas utama.`
  };

  const sertifikasiLegalitas = {
    penerbit: isPelatihan ? "Kementerian Ketenagakerjaan RI (Kemnaker) / Badan Nasional Sertifikasi Profesi (BNSP)" : "Laporan Hasil Audit / Kajian Resmi Terverifikasi PJK3",
    masaBerluku: "3 (tiga) tahun dan dapat diperpanjang sesuai ketentuan regulasi terbaru",
    detail: [
      "Sertifikat Resmi Kemnaker RI / BNSP bagi peserta yang dinyatakan kompeten.",
      "Surat Keputusan Penunjukan (SKP) & Kartu Tanda Kewenangan (Lisensi K3) sesuai jenjang.",
      "Modul materi lengkap, logbook teknis, dan sertifikat kepesertaan internal.",
      "Verifikasi keabsahan dokumen yang dapat divalidasi ke sistem resmi penerbit."
    ]
  };

  const ilustrasiPenerapan = {
    konteks: clusterScenario,
    skenario: `Sebagai contoh penerapan di ${placeClean}, tim operasional dilatih melakukan analisis bahaya sebelum memulai pengoperasian mesin atau pekerjaan ruang terbatas. Setiap tahapan dipatuhi menggunakan lembar kerja JSA dan checklist keselamatan.`,
    solusi: `Hasil dari implementasi ${item.nama} terbukti menekan angka resiko kecelakaan kerja hingga batas minimal, meningkatkan kepatuhan saat pengawasan inspeksi, serta memperlancar audit keselamatan tahunan.`
  };

  const tipsPenyelenggara = [
    "Pastikan Penyelenggara Memiliki Lisensi PJK3 Resmi yang Masih Berlaku dari Kemnaker RI.",
    "Periksa Kualifikasi Instruktur / Asesor: Wajib memiliki latar belakang praktisi dan lisensi resmi.",
    "Transparansi Skema & Sertifikat: Kejelasan mengenai institusi penerbit dan kemudahan verifikasi lisensi.",
    "Fasilitas Pembelajaran yang Memadai: Tersedia modul komprehensif, sarana praktik, dan dukungan purna-kegiatan.",
    "Reputasi & Pengalaman Pelayanan: Didukung ulasan positif dan pengalaman menangani berbagai industri di Indonesia."
  ];

  const faq = [
    {
      q: `Apakah jadwal ${item.nama} di ${place.nama} dapat disesuaikan dengan kebutuhan internal perusahaan?`,
      a: `Sangat bisa. Kami menyediakan skema In-House Training atau konsultasi khusus di ${place.nama} dengan jadwal, tempat, dan penyesuaian materi sesuai dinamika operasional perusahaan Anda.`
    },
    {
      q: `Bagaimana cara memastikan keabsahan sertifikat ${item.nama} yang diperoleh?`,
      a: `Sertifikat resmi diterbitkan oleh lembaga berwenang (Kemnaker RI / BNSP) dan dilengkapi barcode atau nomor registrasi yang dapat divalidasi secara langsung melalui portal resmi penerbit.`
    },
    {
      q: `Apakah peserta perseorangan (bukan utusan perusahaan) bisa mendaftar?`,
      a: `Bisa. Sesi Public Class terbuka bagi profesional independen, pencari kerja, maupun mahasiswa tingkat akhir yang ingin meningkatkan kualifikasi K3.`
    },
    {
      q: `Apa persyaratan utama untuk mengikuti ${item.nama}?`,
      a: `Secara umum meliputi ijazah pendidikan terakhir, KTP, pasfoto, dan surat keterangan sehat. Beberapa jenjang tingkat lanjut memerlukan bukti pengalaman kerja relevan.`
    },
    {
      q: `Apakah materi di ${place.nama} sudah disesuaikan dengan regulasi terbaru?`,
      a: `Ya. Seluruh materi diselaraskan dengan undang-undang, PP, dan Permenaker RI terkini serta memperhatikan karakteristik risiko lokal di ${place.nama}.`
    },
    {
      q: `Bagaimana skema pembayaran dan pendaftaran ${item.nama}?`,
      a: `Pendaftaran dapat dilakukan secara daring melalui formulir WhatsApp resmi. Pembayaran dilakukan transparan via rekening resmi instansi dengan invoice tertulis.`
    },
    {
      q: `Berapa lama masa berlaku sertifikat K3 ini?`,
      a: `Masa berlaku sertifikat dan lisensi kewenangan K3 umumnya adalah 3 (tiga) tahun, dan dapat diperpanjang melalui skema pembaharuan lisensi.`
    },
    {
      q: `Apakah tersedia pilihan sesi daring (online)?`,
      a: `Tersedia untuk pembekalan teori dalam skema Blended Learning. Namun untuk asesmen praktis dan ujian kompeitensi tetap dilaksanakan sesuai aturan lembaga pembina.`
    },
    {
      q: `Apakah penawaran harga sudah mencakup modul dan sertifikat?`,
      a: `Ya, biaya investasi sudah mencakup seluruh paket fasilitas: modul pembelajaran, sarana ujian, konsumsi (offline), serta penerbitan sertifikat resmi.`
    },
    {
      q: `Berapa jumlah minimal peserta untuk pelaksanaan In-House Training di ${place.nama}?`,
      a: `Jumlah peserta disesuaikan dengan efisiensi perusahaan, umumnya mulai dari 5 hingga 20 peserta per angkatan agar proses evaluasi berjalan optimal.`
    },
    {
      q: `Bagaimana jika peserta belum lulus dalam ujian kompetensi?`,
      a: `Tersedia sesi re-evaluasi atau remedial terstruktur sesuai dengan ketentuan acuan yang ditetapkan oleh tim asesor/lembaga penerbit.`
    },
    {
      q: `Mengapa memilih layanan kami untuk kebutuhan K3 di ${place.nama}?`,
      a: `Kami menghadirkan pengalaman pembelajaran yang praktis, dukungan administrasi yang transparan, serta instruktur praktisi yang memahami kebutuhan ril di lapangan.`
    }
  ];

  const kesimpulan = `Melalui pelaksanaan ${item.nama} yang terencana di ${place.nama}, kepatuhan standar K3 bukan hanya terpenuhi di atas kertas, tetapi mewujud menjadi perlindungan nyata bagi setiap pekerja dan aset organisasi. Hubungi tim konsultan kami via WhatsApp di 081399810272 untuk berdiskusi mengenai jadwal, estimasi investasi, dan penyesuaian kebutuhan tim Anda di ${place.nama}.`;

  return {
    pendahuluan,
    dasarRegulasi,
    mengapaPenting,
    manfaatLengkap,
    siapaMembutuhkan,
    materiSilabus,
    persyaratanPeserta,
    tahapanProses,
    durasiSkema,
    sertifikasiLegalitas,
    ilustrasiPenerapan,
    tipsPenyelenggara,
    faq,
    kesimpulan
  };
}
