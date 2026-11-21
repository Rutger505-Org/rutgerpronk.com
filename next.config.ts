import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "standalone",
  // The nav labels ("./work", "./log", "./contact") look like URLs to crawlers;
  // send those to the matching section instead of a 404.
  async redirects() {
    return [
      {
        source: "/:section(work|log|contact)",
        destination: "/#:section",
        permanent: true,
      },
      {
        source: "/:locale(en|nl)/:section(work|log|contact)",
        destination: "/:locale#:section",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
