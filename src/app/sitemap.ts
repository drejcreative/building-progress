import { MetadataRoute } from "next";
import { routing } from "../i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://proinvest.rs";

  // Static routes for both languages
  const staticRoutes = [
    "",
    "/get-started",
    "/use-cases",
    "/use-cases/apartment-details",
    "/coming-soon",
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Generate sitemap entries for each locale and route
  routing.locales.forEach((locale) => {
    staticRoutes.forEach((route) => {
      const url = route === "" ? `/${locale}` : `/${locale}${route}`;

      sitemap.push({
        url: `${baseUrl}${url}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route === "" ? "" : route}`,
            sr: `${baseUrl}/rs${route === "" ? "" : route}`,
          },
        },
      });
    });
  });

  // Add default locale routes (without /en prefix)
  staticRoutes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${route === "" ? "" : route}`,
          sr: `${baseUrl}/rs${route === "" ? "" : route}`,
        },
      },
    });
  });

  return sitemap;
}
