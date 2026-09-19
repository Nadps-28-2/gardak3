import { Kota } from "@/app/lib/data";

export function MapEmbed({ place }: { place: Kota }) {
  const query = encodeURIComponent(`${place.nama}, ${place.provinsi}, Indonesia`);
  const src = `https://maps.google.com/maps?q=${query}&t=&z=11&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="map-wrap">
      <iframe
        title={`Peta lokasi area ${place.nama}, ${place.provinsi}`}
        src={src}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}