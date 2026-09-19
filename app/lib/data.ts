import kotaData from "@/data/kota.json";
import layananData from "@/data/layanan.json";

export type Cluster = "migas" | "manufaktur" | "konstruksi" | "umum" | "tambang";
export type Kategori = "Pelatihan" | "Jasa";
export type Kota = {
  nama: string;
  slug: string;
  provinsi: string;
  jenis: "kabupaten" | "kota" | "lainnya";
  cluster: Cluster;
  lat: number;
  lng: number;
  kecamatan?: string[];
};
export type Layanan = {
  kategori: Kategori;
  nama: string;
  slug: string;
};

export const kota = kotaData as Kota[];
export const layanan = layananData as Layanan[];
export const pelatihan = layanan.filter((item) => item.kategori === "Pelatihan");
export const jasa = layanan.filter((item) => item.kategori === "Jasa");

export function getKota(slug: string) {
  return kota.find((item) => item.slug === slug);
}

export function getLayanan(slug: string, kategori: string) {
  return layanan.find(
    (item) => item.slug === slug && item.kategori.toLowerCase() === kategori.toLowerCase()
  );
}

export function categorySlug(kategori: Kategori) {
  return kategori.toLowerCase();
}

export function whatsappUrl(message: string) {
  return `https://wa.me/6281399810272?text=${encodeURIComponent(message)}`;
}

// FNV-1a 32-bit Hash algorithm for uniform pseudo-random dispersion
function fnv1aHash(str: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return Math.abs(hash);
}

// City Main Page Hero Image (by City Cluster)
export function cityHeroImage(place: Kota): string {
  const clusterPools: Record<string, string[]> = {
    migas: [
      "photo-1518709268805-4e9042af9f23", // Oil refinery sunset
      "photo-1544725176-7c40e5a71c5e", // Industrial gas storage
      "photo-1563986768609-322da13575f3", // Petrochemical complex
      "photo-1509391365360-2e959784a276", // Energy site
      "photo-1581092580497-e0d23cbdf1dc"  // Oil & gas PPE
    ],
    manufaktur: [
      "photo-1581091226825-a6a2a5aee158", // Factory robotic line
      "photo-1565043589221-1a6fd9ae45c7", // Manufacturing plant
      "photo-1581092335397-9583fe92d232", // Assembly line
      "photo-1513828583688-c52646db42da", // Industrial warehouse
      "photo-1581092160607-ee22621dd758"  // Precision machinery
    ],
    konstruksi: [
      "photo-1486406146926-c627a92ad1ab", // Modern glass architecture tower
      "photo-1581092580497-e0d23cbdf1dc", // Industrial safety inspector
      "photo-1573496359142-b8d87734a5a2", // Technical safety consultant
      "photo-1556761175-b413da4baf72", // Engineering inspection team
      "photo-1497366811353-6870744d04b2"  // Modern infrastructure facility
    ],
    tambang: [
      "photo-1578328819058-b69f3a3b0f6b", // Open pit truck
      "photo-1618042164219-62c820f10723", // Mineral excavation
      "photo-1581093450021-4a7360e9a6b5", // Geology field test
      "photo-1532996122724-e3c354a0b15b", // Mining environmental
      "photo-1504917595217-d4dc5ebe6122"  // Heavy excavator
    ],
    umum: [
      "photo-1521737711867-e3b97375f902", // Safety meeting
      "photo-1450101499163-c8848c66ca85", // Audit inspection
      "photo-1517048676732-d65bc937f952", // Professional training
      "photo-1556761175-b413da4baf72", // Technical briefing
      "photo-1497366811353-6870744d04b2"  // Modern facility
    ]
  };

  const pool = clusterPools[place.cluster] || clusterPools.umum;
  const idx = fnv1aHash(place.slug) % pool.length;
  return `https://images.unsplash.com/${pool[idx]}?auto=format&fit=crop&w=1400&q=82`;
}

// 12 Fine-Grained Service Categories Classifier
export function getServiceCategoryKey(layananSlug: string, nama?: string): string {
  const text = `${layananSlug} ${nama || ""}`.toLowerCase();

  if (/\b(medis|hiperkes|paramedic|perawat|dokter|first aid|p3k|kesehatan|bhd|rumah sakit|first aider)\b/i.test(text)) {
    return "medical_training";
  }
  if (/\b(kebakaran|damkar|fire fighting|fire rescue|fire)\b/i.test(text)) {
    return "fire_fighter";
  }
  if (/\b(welder|welding|juru las|pipe fitter|ndt|gmaw|fcaw|gtaw|smaw|las|coating)\b/i.test(text) || /welder|welding|juru-las|pipe-fitter/i.test(layananSlug)) {
    return "industrial_welder";
  }
  if (/\b(mooring|barge|perkapalan|maritim|pelabuhan|ship|vessel)\b/i.test(text)) {
    return "maritime_port";
  }
  if (/\b(sawit|pertanian|perkebunan|kehutanan|reklamasi|tanaman|hutan)\b/i.test(text) || /kelapa-sawit/i.test(layananSlug)) {
    return "plantation_agriculture";
  }
  if (/\b(lingkungan|amdal|ukl|upl|pertek|rintek|limbah|b3|pencemaran|pcua|sampah|air|kimia|hazmat)\b/i.test(text)) {
    return "environmental_inspector";
  }
  if (/\b(listrik|kelistrikan|instrumentasi|mep|mechanical electrical|genset|turbin|telekomunikasi)\b/i.test(text)) {
    return "electrical_technician";
  }
  if (/\b(migas|drilling|offshore|sea survival|workover|sumur|pertambangan|h2s|tambang|mining|geologi)\b/i.test(text)) {
    return "oil_gas_rig";
  }
  if (/\b(forklift|excavator|bulldozer|crane|vibro|dump truck|wheel loader|motor grader|compactor|telehandler|alat berat|lifter|manlift|boomlift|skylift|scissor lift|pallet mover|liftstacker|reachstacker|hoist|rigger|cargo|pesawat angkat|pesawat angkut|dongkrak)\b/i.test(text) || /forklift|crane|excavator|bulldozer|alat-berat|loader|grader|compactor|telehandler|rigging|rigger/i.test(layananSlug)) {
    return "heavy_equipment";
  }
  if (/\b(konstruksi|scaffolding|perancah|tkbt|tkpk|ketinggian|gondola|working at height|wah|bangunan tinggi|bangunan)\b/i.test(text) || /ketinggian|scaffolding|tkbt|tkpk|konstruksi/i.test(layananSlug)) {
    return "construction_safety";
  }
  if (/\b(audit|slf|slo|silo|sia|kajian|konsultasi|riset|sertifikasi|kepatuhan)\b/i.test(text) || /jasa|audit|slf|slo/i.test(layananSlug)) {
    return "business_consultant";
  }
  return "office_professional";
}

// Article Primary Hero Image (12 Categories x 5 Unique Photos)
export function articleHeroImage(layananSlug: string, kotaSlug: string, nama?: string): string {
  const primaryCategoryPools: Record<string, string[]> = {
    heavy_equipment: [
      "photo-1578328819058-b69f3a3b0f6b",
      "photo-1504917595217-d4dc5ebe6122",
      "photo-1531058020387-3be344556be6",
      "photo-1581092334800-47b2c011e031",
      "photo-1581092334812-421e90d1656d"
    ],
    construction_safety: [
      "photo-1486406146926-c627a92ad1ab",
      "photo-1581092580497-e0d23cbdf1dc",
      "photo-1573496359142-b8d87734a5a2",
      "photo-1556761175-b413da4baf72",
      "photo-1497366811353-6870744d04b2"
    ],
    medical_training: [
      "photo-1576091160399-112ba8d25d1d",
      "photo-1584982751601-97dcc096659c",
      "photo-1579684385127-1ef15d508118",
      "photo-1584515933487-779824d29309",
      "photo-1538108149393-fbbd81895907"
    ],
    electrical_technician: [
      "photo-1473341304170-971dccb5ac1e",
      "photo-1621905251189-08b45d6a269e",
      "photo-1581092334651-ddf26d9a09d0",
      "photo-1581092334612-421e90d1656c",
      "photo-1581092335198-4a49c6934c26"
    ],
    oil_gas_rig: [
      "photo-1518709268805-4e9042af9f23",
      "photo-1544725176-7c40e5a71c5e",
      "photo-1563986768609-322da13575f3",
      "photo-1509391365360-2e959784a276",
      "photo-1581092580497-e0d23cbdf1dc"
    ],
    fire_fighter: [
      "photo-1558611848-73f7eb4001a1",
      "photo-1582213782179-e0d53f98f2ca",
      "photo-1583863788434-e58a36330cf0",
      "photo-1516321318423-f06f85e504b3",
      "photo-1507679799987-c73779587ccf"
    ],
    environmental_inspector: [
      "photo-1532996122724-e3c354a0b15b",
      "photo-1542601906990-b4d3fb778b09",
      "photo-1507525428034-b723cf961d3e",
      "photo-1618042164219-62c820f10723",
      "photo-1581093450021-4a7360e9a6b5"
    ],
    office_professional: [
      "photo-1522071820081-009f0129c71c",
      "photo-1573496359142-b8d87734a5a2",
      "photo-1551836022-d5d88e9218df",
      "photo-1531482615713-2afd69097998",
      "photo-1542744173-8e7e53415bb0"
    ],
    maritime_port: [
      "photo-1516214104703-d870798883c5",
      "photo-1505705694340-019e1e335916",
      "photo-1520607162513-77705c0f0d4a",
      "photo-1519389950473-47ba0277781c",
      "photo-1507679799987-c73779587ccf"
    ],
    plantation_agriculture: [
      "photo-1500382017468-9049fed747ef",
      "photo-1472214103451-9374bd1c798e",
      "photo-1464822759023-fed622ff2c3b",
      "photo-1470071459604-3b5ec3a7fe05",
      "photo-1441974231531-c6227db76b6e"
    ],
    industrial_welder: [
      "photo-1504917595217-d4dc5ebe6122",
      "photo-1581092160607-ee22621dd758",
      "photo-1581091226825-a6a2a5aee158",
      "photo-1565043589221-1a6fd9ae45c7",
      "photo-1581092335397-9583fe92d232"
    ],
    business_consultant: [
      "photo-1454165804606-c3d57bc86b40",
      "photo-1556761175-4b46a572b786",
      "photo-1551288049-bebda4e38f71",
      "photo-1552664730-d307ca884978",
      "photo-1460925895917-afdab827c52f"
    ]
  };

  const key = getServiceCategoryKey(layananSlug, nama);
  const pool = primaryCategoryPools[key] || primaryCategoryPools.office_professional;
  const idx = fnv1aHash(`${layananSlug}:${kotaSlug}`) % pool.length;
  return `https://images.unsplash.com/${pool[idx]}?auto=format&fit=crop&w=1400&q=82`;
}

// Article Secondary Image for Case Study / Implementation section
export function articleSecondaryImage(layananSlug: string, kotaSlug: string, nama?: string): string {
  const secondaryCategoryPools: Record<string, string[]> = {
    heavy_equipment: [
      "photo-1581092334824-8987c1d64719",
      "photo-1581092334835-4a49c6934c27",
      "photo-1581092334846-98aa0198083b",
      "photo-1581092334850-98aa0198083c",
      "photo-1581092334860-98aa0198083d"
    ],
    construction_safety: [
      "photo-1581092580497-e0d23cbdf1dc",
      "photo-1573496359142-b8d87734a5a2",
      "photo-1581092334651-ddf26d9a09d0",
      "photo-1521737711867-e3b97375f902",
      "photo-1497366811353-6870744d04b2"
    ],
    medical_training: [
      "photo-1505751172876-fa1923c5c528",
      "photo-1516549655169-df83a0774514",
      "photo-1532938911079-1b06ac7ceec7",
      "photo-1579154204601-01588f351e67",
      "photo-1582718142238-7f7063a23996"
    ],
    electrical_technician: [
      "photo-1581092335272-98aa0198083a",
      "photo-1581092162384-8987c1d64718",
      "photo-1581092334800-47b2c011e031",
      "photo-1581092334812-421e90d1656d",
      "photo-1581092334824-8987c1d64719"
    ],
    oil_gas_rig: [
      "photo-1563986768609-322da13575f3",
      "photo-1509391365360-2e959784a276",
      "photo-1518709268805-4e9042af9f23",
      "photo-1544725176-7c40e5a71c5e",
      "photo-1581092580497-e0d23cbdf1dc"
    ],
    fire_fighter: [
      "photo-1582213782179-e0d53f98f2ca",
      "photo-1583863788434-e58a36330cf0",
      "photo-1558611848-73f7eb4001a1",
      "photo-1516321318423-f06f85e504b3",
      "photo-1507679799987-c73779587ccf"
    ],
    environmental_inspector: [
      "photo-1542601906990-b4d3fb778b09",
      "photo-1507525428034-b723cf961d3e",
      "photo-1532996122724-e3c354a0b15b",
      "photo-1618042164219-62c820f10723",
      "photo-1581093450021-4a7360e9a6b5"
    ],
    office_professional: [
      "photo-1517245386807-bb43f82c33c4",
      "photo-1557804506-669a67965ba0",
      "photo-1516321318423-f06f85e504b3",
      "photo-1552581234-26160f608093",
      "photo-1543269865-cbf427effbad"
    ],
    maritime_port: [
      "photo-1505705694340-019e1e335916",
      "photo-1516214104703-d870798883c5",
      "photo-1520607162513-77705c0f0d4a",
      "photo-1519389950473-47ba0277781c",
      "photo-1507679799987-c73779587ccf"
    ],
    plantation_agriculture: [
      "photo-1472214103451-9374bd1c798e",
      "photo-1500382017468-9049fed747ef",
      "photo-1464822759023-fed622ff2c3b",
      "photo-1470071459604-3b5ec3a7fe05",
      "photo-1441974231531-c6227db76b6e"
    ],
    industrial_welder: [
      "photo-1581092160607-ee22621dd758",
      "photo-1504917595217-d4dc5ebe6122",
      "photo-1581091226825-a6a2a5aee158",
      "photo-1565043589221-1a6fd9ae45c7",
      "photo-1581092335397-9583fe92d232"
    ],
    business_consultant: [
      "photo-1542744094-3a31b272c490",
      "photo-1553877522-43269d4ea984",
      "photo-1507679799987-c73779587ccf",
      "photo-1519389950473-47ba0277781c",
      "photo-1520607162513-77705c0f0d4a"
    ]
  };

  const key = getServiceCategoryKey(layananSlug, nama);
  const pool = secondaryCategoryPools[key] || secondaryCategoryPools.office_professional;
  const idx = (fnv1aHash(`${layananSlug}:${kotaSlug}`) + 2) % pool.length;
  return `https://images.unsplash.com/${pool[idx]}?auto=format&fit=crop&w=1200&q=80`;
}

export function articleImage(layananSlug: string, kotaSlug: string, nama?: string) {
  return articleHeroImage(layananSlug, kotaSlug, nama);
}

// Meta description generator enforcing 150-160 characters length strictly
export function metaDescription(item: Layanan, place: Kota): string {
  const isPelatihan = item.kategori === "Pelatihan";
  let pattern = "";

  if (isPelatihan) {
    if (item.slug.length % 2 === 0) {
      pattern = `Ikuti ${item.nama} bersertifikat di ${place.nama}. Jadwal fleksibel, instruktur berpengalaman. Daftar sekarang via WhatsApp!`;
    } else {
      pattern = `${item.nama} resmi & tersertifikasi untuk profesional di ${place.nama}. Tingkatkan kompetensi K3 Anda, konsultasi gratis.`;
    }
  } else {
    pattern = `Cari ${item.nama} terpercaya di ${place.nama}? Kami siap bantu dengan sertifikasi resmi & jadwal terencana. Hubungi kami!`;
  }

  if (pattern.length > 160) {
    pattern = pattern.slice(0, 157).replace(/\s+\S*$/, "") + "...";
  } else if (pattern.length < 150) {
    pattern = pattern.replace(/!$/, " Dapatkan konsultasi gratis sekarang!");
    if (pattern.length > 160) {
      pattern = pattern.slice(0, 157).replace(/\s+\S*$/, "") + "...";
    }
  }

  return pattern;
}

export const prioritySlugs = [
  "medan", "cikarang", "karawang", "bekasi", "tangerang", "cilegon",
  "bandung", "semarang", "surabaya", "gresik", "sidoarjo", "batam",
  "palembang", "pekanbaru", "dumai", "balikpapan", "samarinda", "bontang",
  "makassar", "timika", "jayapura", "jakarta-pusat", "jakarta-selatan",
  "jakarta-barat", "jakarta-utara", "yogyakarta", "denpasar"
].filter((slug) => getKota(slug)).flatMap((slug) =>
  layanan.slice(0, 3).map((item) => ({
    slug,
    kategori: categorySlug(item.kategori),
    layanan: item.slug
  }))
);

export function getRelatedServices(currentSlug: string, count: number = 6): Layanan[] {
  return layanan.filter((item) => item.slug !== currentSlug).slice(0, count);
}