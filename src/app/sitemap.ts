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
    "/consultation",
    // Service pages
    "/property-marketing",
    "/virtual-tours",
    "/legal-support",
    "/sales-management",
    "/progress-tracking",
    // Legal pages
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
    "/gdpr",
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Generate sitemap entries for each locale and route
  routing.locales.forEach((locale) => {
    staticRoutes.forEach((route) => {
      const url = route === "" ? `/${locale}` : `/${locale}${route}`;

      // Determine priority and change frequency based on page type
      let priority = 0.8;
      let changeFrequency:
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never" = "monthly";

      if (route === "") {
        priority = 1.0;
        changeFrequency = "weekly";
      } else if (route === "/get-started" || route === "/consultation") {
        priority = 0.9;
        changeFrequency = "weekly";
      } else if (route.startsWith("/use-cases")) {
        priority = 0.8;
        changeFrequency = "monthly";
      } else if (
        route.startsWith("/property-marketing") ||
        route.startsWith("/virtual-tours") ||
        route.startsWith("/legal-support") ||
        route.startsWith("/sales-management") ||
        route.startsWith("/progress-tracking")
      ) {
        priority = 0.7;
        changeFrequency = "monthly";
      } else if (
        route.startsWith("/privacy-policy") ||
        route.startsWith("/terms-of-service") ||
        route.startsWith("/cookie-policy") ||
        route.startsWith("/gdpr")
      ) {
        priority = 0.3;
        changeFrequency = "yearly";
      } else if (route === "/coming-soon") {
        priority = 0.5;
        changeFrequency = "monthly";
      }

      sitemap.push({
        url: `${baseUrl}${url}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
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
    // Determine priority and change frequency based on page type
    let priority = 0.8;
    let changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never" = "monthly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "weekly";
    } else if (route === "/get-started" || route === "/consultation") {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (route.startsWith("/use-cases")) {
      priority = 0.8;
      changeFrequency = "monthly";
    } else if (
      route.startsWith("/property-marketing") ||
      route.startsWith("/virtual-tours") ||
      route.startsWith("/legal-support") ||
      route.startsWith("/sales-management") ||
      route.startsWith("/progress-tracking")
    ) {
      priority = 0.7;
      changeFrequency = "monthly";
    } else if (
      route.startsWith("/privacy-policy") ||
      route.startsWith("/terms-of-service") ||
      route.startsWith("/cookie-policy") ||
      route.startsWith("/gdpr")
    ) {
      priority = 0.3;
      changeFrequency = "yearly";
    } else if (route === "/coming-soon") {
      priority = 0.5;
      changeFrequency = "monthly";
    }

    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
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
