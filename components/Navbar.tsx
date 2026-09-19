"use client";

import { useState } from "react";
import Link from "next/link";
import { Kota } from "@/app/lib/data";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Navbar({ place }: { place?: Kota }) {
  const [isOpen, setIsOpen] = useState(false);
  const root = place ? `/kota/${place.slug}` : "/";

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="shell nav-inner">
          <Link href={root} className="brand" onClick={closeMenu}>
            <span className="brand-mark">GK3</span>
            <span>
              Garda K3
              <br />
              <small>Training & Konsultasi</small>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link href={place ? `${root}/pelatihan` : "/#layanan"}>Pelatihan</Link>
            <Link href={place ? `${root}/jasa` : "/#layanan"}>Jasa K3</Link>
            <Link href="/#tentang">Tentang kami</Link>
          </nav>

          <a
            className="nav-cta desktop-cta"
            href="https://wa.me/6281399810272"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={16} fill="#25d366" /> Konsultasi <span>↗</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu Navigasi"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="mobile-drawer-backdrop" onClick={closeMenu}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <Link href={root} className="brand" onClick={closeMenu}>
                <span className="brand-mark">GK3</span>
                <span>
                  Garda K3
                  <br />
                  <small>Training & Konsultasi</small>
                </span>
              </Link>
              <button className="drawer-close-btn" onClick={closeMenu} aria-label="Tutup Menu">
                ✕
              </button>
            </div>

            <nav className="drawer-nav">
              <Link href={root} onClick={closeMenu}>
                Beranda
              </Link>
              <Link href={place ? `${root}/pelatihan` : "/#layanan"} onClick={closeMenu}>
                Pelatihan K3
              </Link>
              <Link href={place ? `${root}/jasa` : "/#layanan"} onClick={closeMenu}>
                Jasa K3 & Konsultasi
              </Link>
              <Link href="/kota" onClick={closeMenu}>
                Pilih Kota (482 Area)
              </Link>
              <Link href="/#tentang" onClick={closeMenu}>
                Tentang Kami
              </Link>
            </nav>

            <div className="drawer-footer">
              <a
                className="button button-dark button-full"
                href="https://wa.me/6281399810272"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                <WhatsAppIcon size={18} fill="#25d366" /> Konsultasi WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}