import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Previews (pr-<N>) are kept out of search results by an X-Robots-Tag: noindex
// header set in deploy/main.tf. Don't Disallow them here: Google has to crawl a
// page to see its noindex.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
