import Link from "next/link";
import { Kota } from "@/app/lib/data";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

interface HeroProps {
  place?: Kota;
  title?: string;
  subtitle?: string;
}

export function Hero({ place, title, subtitle }: HeroProps) {
  const root = place ? `/kota/${place.slug}` : "/";
  const placeName = place ? place.nama : "Seluruh Indonesia";

  return (
    <section className="hero">
      <div className="shell hero-grid">
        <div>
          <span className="eyebrow">
            {place ? `Layanan K3 Terpadu · Area ${placeName}` : "Kompetensi yang Melindungi Pekerjaan"}
          </span>
          <h1>
            {title ? (
              title
            ) : place ? (
              <>
                Pelatihan & Jasa Konsultasi K3 Resmi di <em>{placeName}</em>
              </>
            ) : (
              <>
                Kerja aman dimulai dari <em>keahlian</em> yang tepat.
              </>
            )}
          </h1>
          <p className="hero-copy">
            {subtitle
              ? subtitle
              : `Solusi peningkatan kompetensi K3, sertifikasi Kemnaker/BNSP, serta konsultasi K3 terarah untuk organisasi dan profesional di ${placeName}.`}
          </p>
          <div className="hero-actions">
            <a
              className="button button-dark"
              href={`https://wa.me/6281399810272?text=${encodeURIComponent(
                `Halo, saya ingin bertanya layanan K3 untuk area ${placeName}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} fill="#25d366" /> Konsultasi WhatsApp <span>↗</span>
            </a>
            <Link className="text-link" href={place ? `${root}/pelatihan` : "#layanan"}>
              Jelajahi Program K3 ↘
            </Link>
          </div>
        </div>
        <div className="hero-note">
          <span>01 / K3</span>
          <strong>
            Belajar yang relevan.
            <br />
            Bekerja lebih siap.
          </strong>
          <p>
            Pendampingan untuk operator, teknisi, pengawas, hingga sistem manajemen organisasi di {placeName}.
          </p>
        </div>
      </div>
    </section>
  );
}
