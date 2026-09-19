import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { KecamatanCoverage } from "@/components/KecamatanCoverage";
import { MapEmbed } from "@/components/MapEmbed";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloatButton } from "@/components/WhatsAppFloatButton";
import { cityHeroImage, getKota, kota } from "@/app/lib/data";

export const revalidate = 86400;
export const dynamicParams = true;

export function generateStaticParams() {
  return kota.slice(0, 10).map((place) => ({ slug: place.slug }));
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = getKota(slug);
  if (!place) notFound();

  const cityShort = place.nama.replace(/^(Kabupaten|Kota|Kota Administrasi)\s+/i, "");
  const heroImgUrl = cityHeroImage(place);

  return (
    <>
      <Navbar place={place} />
      <main>
        {/* City Hero Section */}
        <section className="city-hero">
          <div className="shell">
            <Breadcrumb items={[{ label: place.nama }]} />
            <div className="city-hero-grid" style={{ alignItems: "center" }}>
              <div>
                <span className="eyebrow">
                  Area Layanan Garda K3 · {place.provinsi}
                </span>
                <h1>
                  Training K3 & Konsultasi
                  <br />
                  <em>di {cityShort}</em>
                </h1>
                <p>
                  Program kompetensi resmi dan jasa konsultasi K3 untuk organisasi di {place.nama},
                  disusun khusus agar relevan dengan karakter kawasan industri <strong>{place.cluster}</strong> dan
                  potensi risiko di {place.nama}.
                </p>
                <div className="hero-actions">
                  <Link className="button button-dark" href={`/kota/${place.slug}/pelatihan`}>
                    Lihat Pelatihan K3 <span>↗</span>
                  </Link>
                  <Link className="button button-outline" href={`/kota/${place.slug}/jasa`}>
                    Lihat Jasa Konsultasi
                  </Link>
                </div>
              </div>

              {/* City Hero Image Visual */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "340px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid var(--line, #d8ddd5)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
                  }}
                >
                  <Image
                    src={heroImgUrl}
                    alt={`Karakter industri cluster ${place.cluster} di ${place.nama}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(23,33,31,0.85) 0%, transparent 60%)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "20px",
                      color: "#ffffff"
                    }}
                  >
                    <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--lime, #d6e96b)" }}>
                      CLUSTER UTAMA
                    </span>
                    <strong style={{ fontSize: "22px", textTransform: "capitalize" }}>
                      Sektor {place.cluster}
                    </strong>
                    <span style={{ fontSize: "13px", opacity: 0.85 }}>
                      {place.jenis} · {place.provinsi}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2 Navigation Cards */}
        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Dua Jalur Dukungan</span>
                <h2>
                  Pilih Layanan K3 <br />
                  <em>di {place.nama}.</em>
                </h2>
              </div>
              <p>
                Mulai dari kebutuhan pembekalan kompetensi personal atau minta pendampingan teknis & perizinan
                untuk sistem organisasi Anda.
              </p>
            </div>

            <div className="city-links">
              <Link href={`/kota/${place.slug}/pelatihan`}>
                <span>01</span>
                <div>
                  <h3>Pelatihan K3 di {cityShort}</h3>
                  <p>168 program operator, teknisi, manajerial, dan spesialis bersertifikat resmi.</p>
                </div>
                <b>↗</b>
              </Link>
              <Link href={`/kota/${place.slug}/jasa`}>
                <span>02</span>
                <div>
                  <h3>Jasa K3 & Konsultasi di {cityShort}</h3>
                  <p>18 layanan kajian teknis, audit SMK3, riksa uji alat, perizinan SLF/SLO, & lingkungan.</p>
                </div>
                <b>↗</b>
              </Link>
            </div>
          </div>
        </section>

        {/* Kecamatan Coverage Section */}
        <KecamatanCoverage place={place} />

        {/* Location & Map Section */}
        <section className="section section-tint">
          <div className="shell location-grid">
            <div>
              <span className="eyebrow">Titik Layanan Wilayah</span>
              <h2>
                {place.nama}
                <br />
                <em>di Peta Indonesia.</em>
              </h2>
              <p>
                Penanda ini menunjukkan titik geografis {place.nama} untuk konteks jangkauan area layanan
                Garda K3 di {place.provinsi}.
              </p>
            </div>
            <MapEmbed place={place} />
          </div>
        </section>

        <div className="shell">
          <ContactCTA label={`Siap membangun budaya keselamatan kerja di ${place.nama}?`} />
        </div>
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = getKota(slug);
  return {
    title: place ? `Training K3 & Konsultasi di ${place.nama}` : "Area Layanan Garda K3",
    description: place
      ? `Pelatihan K3 resmi dan jasa konsultasi untuk organisasi di ${place.nama} (${place.provinsi}).`
      : undefined,
    alternates: {
      canonical: place ? `/kota/${place.slug}` : "/"
    }
  };
}
