import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { KecamatanCoverage } from "@/components/KecamatanCoverage";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloatButton } from "@/components/WhatsAppFloatButton";
import { getKota, jasa } from "@/app/lib/data";

export const revalidate = 86400;
export const dynamicParams = true;

export default async function JasaListingPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const place = getKota((await params).slug);
  if (!place) notFound();

  const cityShort = place.nama.replace(/^(Kabupaten|Kota|Kota Administrasi)\s+/i, "");

  return (
    <>
      <Navbar place={place} />
      <main>
        <div className="shell">
          <Breadcrumb
            items={[
              { label: place.nama, href: `/kota/${place.slug}` },
              { label: "Jasa Konsultasi K3" }
            ]}
          />
          <section className="listing-hero">
            <span className="eyebrow">Layanan Konsultasi & Kajian · {place.provinsi}</span>
            <h1>
              Jasa & Konsultasi K3 di <em>{cityShort}</em>
            </h1>
            <p className="listing-lead">
              Pilihan {jasa.length} layanan jasa konsultasi, audit, perizinan, riksa uji, dan kajian
              K3/Lingkungan terpadu untuk organisasi di {place.nama}.
            </p>
          </section>

          <section className="section">
            <div className="listing-grid">
              {jasa.map((item, index) => (
                <Link
                  key={item.slug}
                  href={`/kota/${place.slug}/jasa/${item.slug}`}
                  className="listing-card"
                >
                  <span className="card-num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.nama}</h3>
                  <p>
                    Layanan {item.nama} profesional di {place.nama}. Pendampingan kepatuhan dan
                    dokumen resmi untuk industri {place.cluster}.
                  </p>
                  <span className="card-link">Lihat rincian & cakupan ↗</span>
                </Link>
              ))}
            </div>
          </section>

          <KecamatanCoverage place={place} titleSuffix="Jasa & Konsultasi K3" />

          <ContactCTA label={`Konsultasi jasa K3 & kajian lingkungan di ${place.nama}`} />
        </div>
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const place = getKota((await params).slug);
  if (!place) return {};

  return {
    title: `Jasa K3 & Konsultasi di ${place.nama} - Resmi & Terpercaya`,
    description: `Daftar 18 layanan jasa K3, audit, riksa uji, SLF, SLO, AMDAL, dan kajian teknis untuk perusahaan di ${place.nama}.`,
    alternates: {
      canonical: `/kota/${place.slug}/jasa`
    }
  };
}
