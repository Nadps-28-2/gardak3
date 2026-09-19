import { MetadataRoute } from "next";
import { kota, layanan } from "@/app/lib/data";

const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "https://gardak3.com/";

export async function generateSitemaps() {
  // Split into 3 sitemap files to stay under Google's 50,000 URL limit per file
  return [{ id: 0 }, { id: 1 }, { id: 2 }];
}

export default async function sitemap({
  id
}: {
  id: Promise<{ id: number }>;
}): Promise<MetadataRoute.Sitemap> {
  const sitemapId = (await id).id;
  const urls: MetadataRoute.Sitemap = [];

  if (sitemapId === 0) {
    // Main pages & City Overview Pages
    urls.push({
      url: domain,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0
    });
    urls.push({
      url: `${domain}/kota`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    });

    kota.forEach((place) => {
      urls.push({
        url: `${domain}/kota/${place.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8
      });
      urls.push({
        url: `${domain}/kota/${place.slug}/pelatihan`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7
      });
      urls.push({
        url: `${domain}/kota/${place.slug}/jasa`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7
      });
    });
  } else if (sitemapId === 1) {
    // Pelatihan Services (first half of services x cities)
    const pelatihanList = layanan.filter((i) => i.kategori === "Pelatihan");
    const half = Math.ceil(pelatihanList.length / 2);
    const chunk = pelatihanList.slice(0, half);

    chunk.forEach((item) => {
      kota.forEach((place) => {
        urls.push({
          url: `${domain}/kota/${place.slug}/${item.kategori.toLowerCase()}/${item.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.6
        });
      });
    });
  } else if (sitemapId === 2) {
    // Remaining Pelatihan & Jasa Services
    const pelatihanList = layanan.filter((i) => i.kategori === "Pelatihan");
    const jasaList = layanan.filter((i) => i.kategori === "Jasa");
    const half = Math.ceil(pelatihanList.length / 2);
    const remainingPelatihan = pelatihanList.slice(half);
    const allRemaining = [...remainingPelatihan, ...jasaList];

    allRemaining.forEach((item) => {
      kota.forEach((place) => {
        urls.push({
          url: `${domain}/kota/${place.slug}/${item.kategori.toLowerCase()}/${item.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.6
        });
      });
    });
  }

  return urls;
}