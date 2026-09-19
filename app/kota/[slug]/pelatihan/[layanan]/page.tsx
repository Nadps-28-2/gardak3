import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactCTA } from "@/components/ContactCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { KecamatanCoverage } from "@/components/KecamatanCoverage";
import { MapEmbed } from "@/components/MapEmbed";
import { Navbar } from "@/components/Navbar";
import { RelatedServices } from "@/components/RelatedServices";
import { WhatsAppFloatButton } from "@/components/WhatsAppFloatButton";
import {
  articleHeroImage,
  articleSecondaryImage,
  getKota,
  getLayanan,
  getRelatedServices,
  metaDescription,
  pelatihan,
  whatsappUrl
} from "@/app/lib/data";
import { generateFullArticle } from "@/app/lib/content-generator";

export const revalidate = 86400;
export const dynamicParams = true;

const priorityCities = [
  "medan", "cikarang", "karawang", "bekasi", "tangerang", "cilegon",
  "bandung", "semarang", "surabaya", "gresik", "sidoarjo", "batam",
  "palembang", "pekanbaru", "dumai", "balikpapan", "samarinda", "bontang",
  "makassar", "timika", "jayapura", "jakarta-pusat", "jakarta-selatan",
  "jakarta-barat", "jakarta-utara", "yogyakarta", "denpasar"
];

export async function generateStaticParams() {
  return priorityCities
    .filter((slug) => getKota(slug))
    .flatMap((slug) =>
      pelatihan.slice(0, 3).map((item) => ({
        slug,
        layanan: item.slug
      }))
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="article-section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default async function PelatihanDetailPage({
  params
}: {
  params: Promise<{ slug: string; layanan: string }>;
}) {
  const { slug, layanan: layananSlug } = await params;
  const place = getKota(slug);
  const item = getLayanan(layananSlug, "Pelatihan");

  if (!place || !item) notFound();

  const article = generateFullArticle(item, place);
  const backUrl = `/kota/${place.slug}/pelatihan`;
  const relatedList = getRelatedServices(item.slug, 6);
  const primaryImgUrl = articleHeroImage(item.slug, place.slug, item.nama);
  const secondaryImgUrl = articleSecondaryImage(item.slug, place.slug, item.nama);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Garda K3",
    "url": "https://gardak3.id",
    "logo": "https://gardak3.id/favicon.ico",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+6281399810272",
      "contactType": "customer service",
      "availableLanguage": "Indonesian"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": place.nama
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${item.kategori} K3`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `${item.nama} ${place.nama}`
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar place={place} />
      <main>
        <article className="article">
          <div className="shell">
            <Breadcrumb
              items={[
                { label: place.nama, href: `/kota/${place.slug}` },
                { label: "Pelatihan", href: backUrl },
                { label: item.nama }
              ]}
            />
            <header className="article-header">
              <span className="eyebrow">
                Pelatihan K3 · {place.nama} ({place.cluster})
              </span>
              <h1>{item.nama} di {place.nama}</h1>
              <p className="lead">
                Program pelatihan K3 resmi bersertifikat untuk mendukung keselamatan dan kompetensi kerja di {place.nama}.
              </p>
            </header>

            {/* Primary Featured Image using next/image */}
            <div className="article-featured-image">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "440px",
                  borderRadius: "12px",
                  overflow: "hidden"
                }}
              >
                <Image
                  src={primaryImgUrl}
                  alt={`Pelatihan ${item.nama} bersertifikat di ${place.nama}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1160px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span className="image-caption">
                Kegiatan & fasilitas pendukung pembekalan pelatihan {item.nama} untuk area {place.nama}.
              </span>
            </div>

            <div className="article-layout">
              <div className="article-main">
                <Section title={`1. Pendahuluan & Gambaran Umum di ${place.nama}`}>
                  {article.pendahuluan.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </Section>

                <Section title={`2. Dasar Hukum & Payung Regulasi (${place.nama})`}>
                  {article.dasarRegulasi.text.map((t, idx) => (
                    <p key={idx}>{t}</p>
                  ))}
                  <ul>
                    {article.dasarRegulasi.regulasiList.map((reg, idx) => (
                      <li key={idx}>
                        <strong>{reg}</strong>
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section title={`3. Urgensi & Manajemen Risiko Sektor ${place.cluster}`}>
                  {article.mengapaPenting.text.map((t, idx) => (
                    <p key={idx}>{t}</p>
                  ))}
                  <ul>
                    {article.mengapaPenting.poinRisiko.map((risk, idx) => (
                      <li key={idx}>{risk}</li>
                    ))}
                  </ul>
                </Section>

                <Section title="4. Manfaat Pembekalan untuk Tenaga Kerja & Industri">
                  <p>{article.manfaatLengkap.intro}</p>
                  <ul>
                    {article.manfaatLengkap.poinManfaat.map((m, idx) => (
                      <li key={idx}>
                        <strong>{m.judul}:</strong> {m.deskripsi}
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section title="5. Sasaran Peserta & Kualifikasi Peran">
                  <p>{article.siapaMembutuhkan.intro}</p>
                  <ul>
                    {article.siapaMembutuhkan.daftarPeran.map((role, idx) => (
                      <li key={idx}>{role}</li>
                    ))}
                  </ul>
                  <p>{article.siapaMembutuhkan.penutup}</p>
                </Section>

                <Section title="6. Modul & Materi Silabus Pembekalan">
                  <p>{article.materiSilabus.intro}</p>
                  <ul>
                    {article.materiSilabus.modul.map((mod, idx) => (
                      <li key={idx}>
                        <strong>{mod.namaModul}:</strong> {mod.topik.join(", ")}
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section title="7. Persyaratan Peserta & Kelengkapan Dokumen">
                  <p><strong>Persyaratan Umum:</strong></p>
                  <ul>
                    {article.persyaratanPeserta.umum.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                  <p><strong>Dokumen Administrasi:</strong></p>
                  <ul>
                    {article.persyaratanPeserta.dokumen.map((doc, idx) => (
                      <li key={idx}>{doc}</li>
                    ))}
                  </ul>
                </Section>

                <Section title={`8. Tahapan Pelaksanaan & Durasi Training di ${place.nama}`}>
                  <p><strong>Durasi & Skema:</strong> {article.durasiSkema.durasi}</p>
                  <p>{article.durasiSkema.penjelasan}</p>
                  <ol>
                    {article.tahapanProses.langkah.map((st, idx) => (
                      <li key={idx}>
                        <strong>{st.judul}:</strong> {st.deskripsi}
                      </li>
                    ))}
                  </ol>
                </Section>

                <Section title="9. Sertifikasi & Legalitas Keluaran">
                  <p><strong>Penerbit Sertifikat:</strong> {article.sertifikasiLegalitas.penerbit}</p>
                  <p><strong>Masa Berlaku:</strong> {article.sertifikasiLegalitas.masaBerluku}</p>
                  <ul>
                    {article.sertifikasiLegalitas.detail.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                </Section>

                {/* Section 10 with SECOND Image for Implementation Case Study */}
                <Section title={`10. Studi Kasus & Penerapan Praktis di Area ${place.nama}`}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "320px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      margin: "1.5rem 0 1rem"
                    }}
                  >
                    <Image
                      src={secondaryImgUrl}
                      alt={`Ilustrasi skenario penerapan K3 ${item.nama} pada fasilitas industri di ${place.nama}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 768px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <span
                    style={{
                      display: "block",
                      fontSize: "12px",
                      color: "var(--muted)",
                      marginBottom: "1.5rem",
                      fontStyle: "italic"
                    }}
                  >
                    Ilustrasi implementasi & pengendalian risiko {item.nama} di sektor {place.cluster} {place.nama}.
                  </span>
                  <p><strong>Konteks Wilayah:</strong> {article.ilustrasiPenerapan.konteks}</p>
                  <p><strong>Skenario Lapangan:</strong> {article.ilustrasiPenerapan.skenario}</p>
                  <p><strong>Solusi K3:</strong> {article.ilustrasiPenerapan.solusi}</p>
                </Section>

                <Section title="11. Pertanyaan Umum (FAQ)">
                  <FAQ items={article.faq} />
                </Section>

                <Section title={`12. Titik Koordinat & Konteks Layanan Area ${place.nama}`}>
                  <p>
                    Layanan pelatihan {item.nama} ini menjangkau seluruh area perusahaan & industri di{" "}
                    {place.nama} ({place.provinsi}).
                  </p>
                  <MapEmbed place={place} />
                </Section>
              </div>

              <aside className="article-sidebar">
                <div className="sidebar-card primary">
                  <span className="eyebrow">Konsultasi Garda K3</span>
                  <h3>Pendaftaran & Jadwal</h3>
                  <p>Dapatkan informasi jadwal terdekat, silabus lengkap, dan penawaran in-house training.</p>
                  <a
                    className="button button-dark full-width"
                    href={whatsappUrl(`Halo Garda K3, saya ingin bertanya info pelatihan ${item.nama} di ${place.nama}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat via WhatsApp ↗
                  </a>
                </div>

                <div className="sidebar-card">
                  <h4>Ringkasan Program</h4>
                  <ul className="sidebar-meta">
                    <li>
                      <span>Kategori</span>
                      <strong>Pelatihan K3</strong>
                    </li>
                    <li>
                      <span>Area</span>
                      <strong>{place.nama}</strong>
                    </li>
                    <li>
                      <span>Karakter Industri</span>
                      <strong>{place.cluster}</strong>
                    </li>
                    <li>
                      <span>Sertifikasi</span>
                      <strong>Kemnaker / BNSP</strong>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>

            <KecamatanCoverage place={place} titleSuffix={item.nama} />

            <RelatedServices
              place={place}
              services={relatedList}
              title={`Pelatihan & Jasa K3 Lainnya di ${place.nama}`}
            />

            <ContactCTA
              label={`Siap mengikuti pelatihan ${item.nama} di ${place.nama}?`}
            />
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string; layanan: string }>;
}) {
  const { slug, layanan: layananSlug } = await params;
  const place = getKota(slug);
  const item = getLayanan(layananSlug, "Pelatihan");

  if (!place || !item) return {};

  return {
    title: `${item.nama} di ${place.nama} - Sertifikasi Resmi`,
    description: metaDescription(item, place),
    alternates: {
      canonical: `/kota/${place.slug}/pelatihan/${item.slug}`
    }
  };
}
