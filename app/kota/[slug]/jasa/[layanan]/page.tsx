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
  jasa,
  metaDescription,
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
      jasa.slice(0, 3).map((item) => ({
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

export default async function JasaDetailPage({
  params
}: {
  params: Promise<{ slug: string; layanan: string }>;
}) {
  const { slug, layanan: layananSlug } = await params;
  const place = getKota(slug);
  const item = getLayanan(layananSlug, "Jasa");

  if (!place || !item) notFound();

  const article = generateFullArticle(item, place);
  const backUrl = `/kota/${place.slug}/jasa`;
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
                { label: "Jasa", href: backUrl },
                { label: item.nama }
              ]}
            />
            <header className="article-header">
              <span className="eyebrow">
                Jasa Konsultasi K3 · {place.nama} ({place.cluster})
              </span>
              <h1>{item.nama} di {place.nama}</h1>
              <p className="lead">
                Layanan konsultasi, audit, dan kajian teknis K3 profesional untuk organisasi di {place.nama}.
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
                  alt={`Layanan ${item.nama} profesional di ${place.nama}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1160px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span className="image-caption">
                Dokumentasi & aktivitas pendampingan teknis {item.nama} untuk organisasi di {place.nama}.
              </span>
            </div>

            <div className="article-layout">
              <div className="article-main">
                <Section title={`1. Pendahuluan & Gambaran Umum di ${place.nama}`}>
                  {article.pendahuluan.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </Section>

                <Section title={`2. Dasar Hukum & Standar Regulasi Kepatuhan (${place.nama})`}>
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

                <Section title="4. Manfaat Strategis untuk Organisasi & Industri">
                  <p>{article.manfaatLengkap.intro}</p>
                  <ul>
                    {article.manfaatLengkap.poinManfaat.map((m, idx) => (
                      <li key={idx}>
                        <strong>{m.judul}:</strong> {m.deskripsi}
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section title="5. Sasaran Organisasi & Penerima Layanan">
                  <p>{article.siapaMembutuhkan.intro}</p>
                  <ul>
                    {article.siapaMembutuhkan.daftarPeran.map((role, idx) => (
                      <li key={idx}>{role}</li>
                    ))}
                  </ul>
                  <p>{article.siapaMembutuhkan.penutup}</p>
                </Section>

                <Section title="6. Ruang Lingkup & Metodologi Konsultasi">
                  <p>{article.materiSilabus.intro}</p>
                  <ul>
                    {article.materiSilabus.modul.map((mod, idx) => (
                      <li key={idx}>
                        <strong>{mod.namaModul}:</strong> {mod.topik.join(", ")}
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section title="7. Dokumen Pendukung & Prasyarat Pelaksanaan">
                  <p><strong>Persyaratan Umum:</strong></p>
                  <ul>
                    {article.persyaratanPeserta.umum.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                  <p><strong>Dokumen Administrasi Perusahaan:</strong></p>
                  <ul>
                    {article.persyaratanPeserta.dokumen.map((doc, idx) => (
                      <li key={idx}>{doc}</li>
                    ))}
                  </ul>
                </Section>

                <Section title={`8. Tahapan Pelaksanaan & Skema Layanan di ${place.nama}`}>
                  <p><strong>Durasi & Waktu Pelaksanaan:</strong> {article.durasiSkema.durasi}</p>
                  <p>{article.durasiSkema.penjelasan}</p>
                  <ol>
                    {article.tahapanProses.langkah.map((st, idx) => (
                      <li key={idx}>
                        <strong>{st.judul}:</strong> {st.deskripsi}
                      </li>
                    ))}
                  </ol>
                </Section>

                <Section title="9. Output & Legalitas Dokumen Hasil">
                  <p><strong>Penerbit / Institusi Penanggung Jawab:</strong> {article.sertifikasiLegalitas.penerbit}</p>
                  <p><strong>Masa Berlaku Legalitas:</strong> {article.sertifikasiLegalitas.masaBerluku}</p>
                  <ul>
                    {article.sertifikasiLegalitas.detail.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                </Section>

                {/* Section 10 with SECOND Image for Implementation Case Study */}
                <Section title={`10. Studi Kasus & Pendampingan Lapangan di Area ${place.nama}`}>
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
                      alt={`Ilustrasi audit & pendampingan teknis ${item.nama} pada perusahaan di ${place.nama}`}
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
                    Ilustrasi audit & pendampingan teknis {item.nama} pada sektor {place.cluster} di {place.nama}.
                  </span>
                  <p><strong>Konteks Wilayah:</strong> {article.ilustrasiPenerapan.konteks}</p>
                  <p><strong>Skenario Tantangan:</strong> {article.ilustrasiPenerapan.skenario}</p>
                  <p><strong>Solusi K3:</strong> {article.ilustrasiPenerapan.solusi}</p>
                </Section>

                <Section title="11. Pertanyaan Umum (FAQ)">
                  <FAQ items={article.faq} />
                </Section>

                <Section title={`12. Pemetaan Wilayah & Titik Layanan Organisasi ${place.nama}`}>
                  <p>
                    Layanan jasa {item.nama} ini melayani perusahaan, pabrik, dan organisasi di{" "}
                    {place.nama} ({place.provinsi}).
                  </p>
                  <MapEmbed place={place} />
                </Section>
              </div>

              <aside className="article-sidebar">
                <div className="sidebar-card primary">
                  <span className="eyebrow">Konsultasi Garda K3</span>
                  <h3>Pengajuan Layanan</h3>
                  <p>Konsultasikan kebutuhan audit, kajian, atau perizinan organisasi Anda.</p>
                  <a
                    className="button button-dark full-width"
                    href={whatsappUrl(`Halo Garda K3, saya ingin berkonsultasi jasa ${item.nama} di ${place.nama}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat via WhatsApp ↗
                  </a>
                </div>

                <div className="sidebar-card">
                  <h4>Ringkasan Layanan</h4>
                  <ul className="sidebar-meta">
                    <li>
                      <span>Kategori</span>
                      <strong>Jasa K3</strong>
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
                      <span>Standar Legal</span>
                      <strong>Kemnaker / KLHK / Terkait</strong>
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
              label={`Siap mengajukan layanan ${item.nama} di ${place.nama}?`}
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
  const item = getLayanan(layananSlug, "Jasa");

  if (!place || !item) return {};

  return {
    title: `${item.nama} di ${place.nama} - Resmi & Terpercaya`,
    description: metaDescription(item, place),
    alternates: {
      canonical: `/kota/${place.slug}/jasa/${item.slug}`
    }
  };
}
