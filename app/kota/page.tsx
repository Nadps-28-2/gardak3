import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloatButton } from "@/components/WhatsAppFloatButton";
import { kota } from "@/app/lib/data";

export const revalidate = 86400;

export async function generateMetadata() {
  return {
    title: "Daftar Kota & Kabupaten Area Layanan K3 Indonesia",
    description: `Jelajahi ${kota.length} kota dan kabupaten area layanan pelatihan K3 dan konsultasi di seluruh Indonesia.`,
    alternates: {
      canonical: "/kota"
    }
  };
}

export default function KotaIndexPage() {
  // Group cities by province
  const grouped = kota.reduce((acc, place) => {
    const prov = place.provinsi || "Lainnya";
    if (!acc[prov]) {
      acc[prov] = [];
    }
    acc[prov].push(place);
    return acc;
  }, {} as Record<string, typeof kota>);

  const sortedProvinces = Object.keys(grouped).sort((a, b) => a.localeCompare(b));

  return (
    <>
      <Navbar />
      <main>
        <section className="listing-hero">
          <div className="shell">
            <Breadcrumb items={[{ label: "Kota & Kabupaten" }]} />
            <span className="eyebrow">Cakupan Wilayah · {kota.length} Kota & Kabupaten</span>
            <h1>
              Area Layanan Training & Konsultasi K3 <em>di Indonesia</em>
            </h1>
            <p className="listing-lead">
              Pilih kota atau kabupaten Anda untuk melihat program pelatihan K3, sertifikasi resmi,
              dan layanan konsultasi yang disesuaikan dengan karakter industri setempat.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="listing-head">
              <div>
                <span className="eyebrow">Seluruh Provinsi</span>
                <h2>
                  Daftar Wilayah <br />
                  <em>Jangkauan Layanan.</em>
                </h2>
              </div>
              <p className="copy-subtle">
                Total {kota.length} kota/kabupaten terdaftar dalam sistem jaringan layanan K3 kami.
              </p>
            </div>

            <div className="province-groups" style={{ marginTop: "2rem" }}>
              {sortedProvinces.map((prov) => (
                <div key={prov} className="province-block" style={{ marginBottom: "3rem" }}>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      borderBottom: "2px solid var(--border-color, #e5e7eb)",
                      paddingBottom: "0.5rem",
                      marginBottom: "1rem",
                      color: "var(--foreground, #111827)"
                    }}
                  >
                    {prov} <span style={{ fontSize: "0.9rem", opacity: 0.6 }}>({grouped[prov].length})</span>
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                      gap: "0.75rem"
                    }}
                  >
                    {grouped[prov].map((place) => (
                      <Link
                        key={place.slug}
                        href={`/kota/${place.slug}`}
                        className="city-chip"
                        style={{
                          display: "block",
                          padding: "0.6rem 0.85rem",
                          borderRadius: "8px",
                          border: "1px solid var(--border-color, #e2e8f0)",
                          background: "var(--card-bg, #ffffff)",
                          textDecoration: "none",
                          color: "inherit",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <strong style={{ display: "block", fontSize: "0.95rem" }}>{place.nama}</strong>
                        <span style={{ fontSize: "0.75rem", color: "var(--muted, #64748b)" }}>
                          {place.cluster} cluster
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="shell">
          <ContactCTA label="Kota Anda belum tercantum? Hubungi kami untuk koordinasi area" />
        </div>
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
