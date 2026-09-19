"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Kota, kota } from "@/app/lib/data";

export function CitySelector() {
  const [search, setSearch] = useState("");
  const [selectedProvince, setSelectedProvince] = useState<string>("Semua");

  const provinces = useMemo(() => {
    const set = new Set<string>();
    kota.forEach((k) => {
      if (k.provinsi) set.add(k.provinsi);
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const filteredKota = useMemo(() => {
    const query = search.toLowerCase().trim();
    return kota.filter((k) => {
      const matchQuery =
        !query ||
        k.nama.toLowerCase().includes(query) ||
        k.provinsi.toLowerCase().includes(query) ||
        k.cluster.toLowerCase().includes(query);

      const matchProv =
        selectedProvince === "Semua" || k.provinsi === selectedProvince;

      return matchQuery && matchProv;
    });
  }, [search, selectedProvince]);

  const priorityCities = useMemo(() => {
    const popularSlugs = [
      "medan", "cikarang", "karawang", "bekasi", "tangerang", "cilegon",
      "bandung", "semarang", "surabaya", "gresik", "sidoarjo", "batam",
      "palembang", "pekanbaru", "balikpapan", "samarinda", "bontang",
      "makassar", "timika", "jayapura", "jakarta-pusat", "jakarta-selatan",
      "jakarta-barat", "jakarta-utara", "yogyakarta", "denpasar"
    ];
    return popularSlugs
      .map((slug) => kota.find((item) => item.slug === slug))
      .filter((item): item is Kota => Boolean(item));
  }, []);

  const isSearching = search.trim().length > 0 || selectedProvince !== "Semua";

  return (
    <section className="section section-tint" id="pilih-kota">
      <div className="shell">
        <div className="location-grid" style={{ marginBottom: "3rem", alignItems: "center" }}>
          <div>
            <span className="eyebrow">Area Jangkauan Nasional</span>
            <h2>
              Pilih Kota Anda<br />
              <em>untuk Detail Layanan K3.</em>
            </h2>
            <p style={{ marginTop: "1rem" }}>
              Cari atau pilih salah satu dari <strong>{kota.length} kota & kabupaten</strong> area
              layanan pelatihan K3 dan konsultasi Garda K3 di seluruh Indonesia.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid var(--line, #d8ddd5)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)"
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
              alt="Peta dan sebaran wilayah industri Garda K3 Indonesia"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(23,33,31,0.7) 0%, transparent 60%)",
                display: "flex",
                alignItems: "flex-end",
                padding: "16px",
                color: "#ffffff"
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.05em" }}>
                📍 482 Titik Layanan Kota & Kabupaten Se-Indonesia
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar & Filter */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              alignItems: "center",
              marginBottom: "1rem"
            }}
          >
            <div style={{ flex: "1 1 300px", position: "relative" }}>
              <input
                type="text"
                placeholder="🔍 Ketik nama kota, kabupaten, atau provinsi..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "8px",
                  border: "2px solid var(--line, #d8ddd5)",
                  background: "#ffffff",
                  fontSize: "15px",
                  fontWeight: 600,
                  outline: "none",
                  color: "var(--foreground)"
                }}
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  style={{
                    position: "absolute",
                    right: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                    color: "var(--muted)"
                  }}
                  aria-label="Hapus pencarian"
                >
                  ✕
                </button>
              )}
            </div>

            <select
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
              style={{
                padding: "14px 18px",
                borderRadius: "8px",
                border: "2px solid var(--line, #d8ddd5)",
                background: "#ffffff",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                outline: "none",
                color: "var(--foreground)"
              }}
            >
              <option value="Semua">Semua Provinsi ({provinces.length})</option>
              {provinces.map((prov) => (
                <option key={prov} value={prov}>
                  {prov}
                </option>
              ))}
            </select>
          </div>

          {isSearching && (
            <div style={{ fontSize: "14px", color: "var(--muted)", fontWeight: 600 }}>
              Menampilkan {filteredKota.length} dari {kota.length} kota & kabupaten
            </div>
          )}
        </div>

        {/* City Grid */}
        {isSearching ? (
          <div>
            {filteredKota.length > 0 ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: "1rem"
                }}
              >
                {filteredKota.slice(0, 60).map((place) => (
                  <Link
                    key={place.slug}
                    href={`/kota/${place.slug}`}
                    style={{
                      display: "block",
                      padding: "16px 20px",
                      borderRadius: "8px",
                      background: "#ffffff",
                      border: "1px solid var(--line, #d8ddd5)",
                      textDecoration: "none",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <strong style={{ display: "block", fontSize: "15px", color: "var(--foreground)" }}>
                      {place.nama}
                    </strong>
                    <span style={{ fontSize: "12px", color: "var(--muted)", display: "block", marginTop: "4px" }}>
                      {place.provinsi} · {place.cluster}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div style={{ padding: "40px", textAlign: "center", background: "#ffffff", borderRadius: "8px" }}>
                <p style={{ margin: 0, fontSize: "15px", color: "var(--muted)" }}>
                  Kota &quot;<strong>{search}</strong>&quot; tidak ditemukan.
                </p>
                <Link href="/kota" style={{ display: "inline-block", marginTop: "12px" }} className="text-link">
                  Lihat daftar lengkap 482 kota ↗
                </Link>
              </div>
            )}
            {filteredKota.length > 60 && (
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <Link href="/kota" className="button button-dark">
                  Lihat seluruh {filteredKota.length} hasil di Index Kota ↗
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: "1.25rem" }}>
              <span className="eyebrow">Kota Populer & Industri Utama</span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "1rem",
                marginBottom: "2.5rem"
              }}
            >
              {priorityCities.map((place) => (
                <Link
                  key={place.slug}
                  href={`/kota/${place.slug}`}
                  style={{
                    display: "block",
                    padding: "18px 22px",
                    borderRadius: "8px",
                    background: "#ffffff",
                    border: "1px solid var(--line, #d8ddd5)",
                    textDecoration: "none",
                    transition: "all 0.2s ease"
                  }}
                >
                  <strong style={{ display: "block", fontSize: "16px", color: "var(--foreground)" }}>
                    {place.nama}
                  </strong>
                  <span style={{ fontSize: "12px", color: "var(--muted)", display: "block", marginTop: "4px" }}>
                    {place.provinsi} · {place.cluster}
                  </span>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: "center", paddingTop: "1rem" }}>
              <Link href="/kota" className="button button-dark button-lg">
                Jelajahi Semua {kota.length} Kota / Kabupaten ↗
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
