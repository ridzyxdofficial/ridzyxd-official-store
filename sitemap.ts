import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ridzyxd-official-store.vercel.app",
      priority: 1,
    },
    {
      url: "https://ridzyxd-official-store.vercel.app/products",
    },
    {
      url: "https://ridzyxd-official-store.vercel.app/about",
    },
    {
      url: "https://ridzyxd-official-store.vercel.app/contact",
    },
  ];
}