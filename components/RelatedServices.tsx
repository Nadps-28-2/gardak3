import Link from "next/link";
import { Kota, Layanan } from "@/app/lib/data";

export function RelatedServices({
  place,
  services,
  title
}: {
  place: Kota;
  services: Layanan[];
  title?: string;
}) {
  return (
    <section className="article-section related-services">
      <h2>{title || `Layanan K3 Terkait di ${place.nama}`}</h2>
      <div className="related-grid">
        {services.map((svc) => (
          <Link
            key={svc.slug}
            href={`/kota/${place.slug}/${svc.kategori.toLowerCase()}/${svc.slug}`}
            className="related-card"
          >
            <span className="badge">{svc.kategori}</span>
            <h3>{svc.nama}</h3>
            <p>Konsultasi & jadwal layanan untuk area {place.nama.replace(/^(Kabupaten|Kota) /, "")} ↗</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
