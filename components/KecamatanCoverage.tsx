import { Kota } from "@/app/lib/data";

export function KecamatanCoverage({
  place,
  titleSuffix
}: {
  place: Kota;
  titleSuffix?: string;
}) {
  if (!place.kecamatan || place.kecamatan.length === 0) return null;

  const cityShort = place.nama.replace(/^(Kabupaten|Kota|Kota Administrasi)\s+/i, "");

  return (
    <section className="section" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <div className="shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Jangkauan Wilayah & Kecamatan</span>
            <h2>
              Cakupan Layanan K3 {titleSuffix ? `(${titleSuffix})` : ""}<br />
              <em>di Seluruh Kecamatan {cityShort}.</em>
            </h2>
          </div>
          <p>
            Layanan pelatihan dan konsultasi K3 Garda K3 menjangkau seluruh kecamatan di {place.nama},
            termasuk kawasan industri, area operasional perusahaan, dan proyek konstruksi lokal.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
          {place.kecamatan.map((kec) => (
            <span
              key={kec}
              style={{
                padding: "6px 14px",
                borderRadius: "20px",
                background: "var(--tint, #f4f6f3)",
                border: "1px solid var(--line, #d8ddd5)",
                fontSize: "13px",
                fontWeight: 500,
                color: "var(--ink, #17211f)"
              }}
            >
              📍 {kec}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
