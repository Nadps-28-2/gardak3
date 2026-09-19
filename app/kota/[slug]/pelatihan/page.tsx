import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { KecamatanCoverage } from "@/components/KecamatanCoverage";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloatButton } from "@/components/WhatsAppFloatButton";
import { getKota, pelatihan } from "@/app/lib/data";

export const revalidate = 86400;
export const dynamicParams = true;

export default async function PelatihanListingPage({
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
              { label: "Pelatihan K3" }
            ]}
          />
          <section className="listing-hero">
            <span className="eyebrow">Program Pelatihan · {place.provinsi}</span>
            <h1>
              Daftar Pelatihan K3 di <em>{cityShort}</em>
            </h1>
            <p className="listing-lead">
              Pilihan {pelatihan.length} program pelatihan & sertifikasi K3 resmi untuk tenaga kerja,
              operator, teknisi, dan pengawas di area {place.nama}.
            </p>
          </section>

          <section className="section">
            <div className="listing-grid">
              {pelatihan.map((item, index) => (
                <Link
                  key={item.slug}
                  href={`/kota/${place.slug}/pelatihan/${item.slug}`}
                  className="listing-card"
                >
                  <span className="card-num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.nama}</h3>
                  <p>
                    Pelatihan {item.nama} bersertifikat di {place.nama}. Pembekalan teori & praktik
                    sesuai standar industri {place.cluster}.
                  </p>
                  <span className="card-link">Lihat rincian & silabus ↗</span>
                </Link>
              ))}
            </div>
          </section>

          <KecamatanCoverage place={place} titleSuffix="Pelatihan K3" />

          <ContactCTA label={`Diskusi jadwal pelatihan K3 di ${place.nama}`} />
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
    title: `Pelatihan K3 di ${place.nama} - Sertifikasi Resmi`,
    description: `Daftar 168 program pelatihan K3 resmi bersertifikat Kemnaker/BNSP di ${place.nama}. Pelajari materi, persyaratan, dan jadwal pelatihan.`,
    alternates: {
      canonical: `/kota/${place.slug}/pelatihan`
    }
  };
}
