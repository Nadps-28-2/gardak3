import Image from "next/image";
import Link from "next/link";
import { CitySelector } from "@/components/CitySelector";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloatButton } from "@/components/WhatsAppFloatButton";
import { jasa, kota, pelatihan } from "@/app/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="shell hero-grid">
            <div>
              <span className="eyebrow">Kompetensi Keselamatan Kerja Nasional</span>
              <h1>
                Kerja aman dimulai dari <em>keahlian</em> yang tepat.
              </h1>
              <p className="hero-copy">
                Garda K3 menghadirkan program pelatihan kompetensi K3 resmi dan jasa konsultasi teknis
                yang dirancang untuk kebutuhan nyata di lapangan, di 482 kota & kabupaten se-Indonesia.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#pilih-kota">
                  Pilih Kota Anda ↘
                </a>
                <Link className="button button-outline" href="/kota">
                  Lihat {kota.length} Kota & Kabupaten ↗
                </Link>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "380px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                  border: "1px solid var(--line, #d8ddd5)"
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=82"
                  alt="Inspektur & Tim K3 Garda K3 di area industri"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="hero-note" style={{ marginTop: "20px" }}>
                <span>01 / GARDA K3 INDONESIA</span>
                <strong>
                  Belajar yang relevan.
                  <br />
                  Bekerja lebih siap.
                </strong>
                <p>
                  Program untuk operator, pengawas, tim HSE, hingga manajemen organisasi yang ingin
                  memperkuat budaya keselamatan kerja.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="stats">
          <div className="shell stat-grid">
            <div>
              <strong>{pelatihan.length}</strong>
              <span>program pelatihan</span>
            </div>
            <div>
              <strong>{jasa.length}</strong>
              <span>layanan konsultasi</span>
            </div>
            <div>
              <strong>{kota.length}</strong>
              <span>area layanan terdata</span>
            </div>
            <div>
              <strong>01</strong>
              <span>partner Garda K3 Anda</span>
            </div>
          </div>
        </section>

        {/* Informational Services Overview */}
        <section className="section" id="layanan">
          <div className="shell">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Ruang Lingkup Layanan</span>
                <h2>
                  Solusi K3 Terpadu <br />
                  <em>untuk Berbagai Industri.</em>
                </h2>
              </div>
              <p>
                Dari sertifikasi personal hingga kajian teknis organisasi. Pilih kota Anda untuk melihat
                rincian lengkap program untuk wilayah tempat Anda bekerja.
              </p>
            </div>

            <div className="service-columns">
              <div className="service-panel training" style={{ cursor: "default" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span className="panel-number">01 / PELATIHAN K3</span>
                  <div style={{ width: "60px", height: "60px", position: "relative", borderRadius: "8px", overflow: "hidden" }}>
                    <Image
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=200&q=80"
                      alt="Ikon Pelatihan K3 Garda K3"
                      fill
                      sizes="60px"
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
                  </div>
                </div>

                <h3>
                  Pelatihan <br />
                  <em>& Sertifikasi</em>
                </h3>
                <p>
                  Bangun kompetensi teknis dan perilaku aman untuk tim Anda. Terdiri dari{" "}
                  <strong>{pelatihan.length} program pelatihan & sertifikasi resmi</strong> Kemnaker / BNSP.
                </p>
                <div
                  style={{
                    marginTop: "1.5rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(0,0,0,0.15)",
                    fontSize: "13px"
                  }}
                >
                  <strong>Cakupan Utama:</strong> Ahli K3 Umum, Confined Space, Operator Heavy Equipment,
                  Forklift, Scaffolding, Auditor SMK3, P3K, Pengawas K3, dsb.
                </div>
              </div>

              <div className="service-panel consulting" style={{ cursor: "default" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span className="panel-number">02 / JASA KONSULTASI</span>
                  <div style={{ width: "60px", height: "60px", position: "relative", borderRadius: "8px", overflow: "hidden" }}>
                    <Image
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=200&q=80"
                      alt="Ikon Jasa Konsultasi K3 Garda K3"
                      fill
                      sizes="60px"
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
                  </div>
                </div>

                <h3>
                  Jasa <br />
                  <em>Konsultasi & Audit</em>
                </h3>
                <p>
                  Dapatkan pendampingan yang terarah untuk kepatuhan, perizinan, dan risiko organisasi.
                  Terdiri dari <strong>{jasa.length} layanan jasa & kajian teknis</strong> terpadu.
                </p>
                <div
                  style={{
                    marginTop: "1.5rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(255,255,255,0.2)",
                    fontSize: "13px"
                  }}
                >
                  <strong>Cakupan Utama:</strong> Riksa Uji Alat, Audit SMK3, Pengurusan SLF & SLO,
                  Kajian AMDAL / UKL-UPL, Dokumen Pertek & Rintek, dsb.
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "2.5rem",
                padding: "24px 32px",
                background: "var(--card-bg, #eef1e6)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                flexWrap: "wrap"
              }}
            >
              <div>
                <strong style={{ fontSize: "18px", display: "block" }}>
                  Siap melihat detail program di area Anda?
                </strong>
                <span style={{ fontSize: "14px", color: "var(--muted)" }}>
                  Setiap kota memiliki karakter industri (Migas, Manufaktur, Konstruksi, Tambang, Umum) dan silabus
                  layanan tersendiri.
                </span>
              </div>
              <a href="#pilih-kota" className="button button-dark">
                Pilih Kota Anda Sekarang ↘
              </a>
            </div>
          </div>
        </section>

        {/* Section Pilih Kota Anda */}
        <CitySelector />

        {/* Section About */}
        <section className="section" id="tentang">
          <div className="shell about-grid">
            <div>
              <span className="eyebrow">Cara Garda K3 bekerja</span>
              <h2>
                Praktis, relevan,
                <br />
                <em>tidak mengawang.</em>
              </h2>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                K3 bukan sekadar dokumen kepatuhan. Ia hadir dalam keputusan kecil, alat yang digunakan,
                dan cara tim pulang dengan selamat setiap hari.
              </p>
              <p>
                Garda K3 menyusun proses belajar dan konsultasi dengan bahasa yang mudah dibawa ke lapangan,
                tanpa mengklaim alamat kantor lokal atau hasil yang tidak bisa diverifikasi.
              </p>
            </div>
          </div>
        </section>

        <div className="shell">
          <ContactCTA label="Siap memperkuat budaya keselamatan kerja di perusahaan Anda?" />
        </div>
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
