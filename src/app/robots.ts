import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/", "/presentation/mmontstroj/"],
    },
    sitemap: "https://proinvest.rs/sitemap.xml",
    host: "https://proinvest.rs",
  };
}
