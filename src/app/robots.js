import { SITE_URL } from "./site-url";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
