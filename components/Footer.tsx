import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">GK3</span>
            <span>
              Garda K3
              <br />
              <small>Training & Konsultasi</small>
            </span>
          </div>
          <p>
            Program kompetensi K3 dan jasa konsultasi yang membantu organisasi bekerja lebih aman,
            tertib, dan siap menghadapi risiko industri.
          </p>
        </div>
        <div>
          <h3>Navigasi</h3>
          <Link href="/#layanan">Layanan</Link>
          <Link href="/#tentang">Tentang kami</Link>
          <Link href="/#pilih-kota">Pilih Kota</Link>
        </div>
        <div>
          <h3>Hubungi kami</h3>
          <p>Senin–Sabtu, 08.00–17.00 WIB</p>
          <a href="https://wa.me/6281399810272" target="_blank" rel="noreferrer">
            0813 9981 0272
          </a>
          <p className="muted">Melayani secara nasional di 482 kota & kabupaten seluruh Indonesia.</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        © 2026 Garda K3 <span>Area layanan: Indonesia</span>
      </div>
    </footer>
  );
}