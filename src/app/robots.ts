import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

// Required for static export
export const dynamic = "force-static";
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${SITE_INFO.url}/sitemap.xml`,
  };
}
