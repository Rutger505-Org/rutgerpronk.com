import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "nl"],
  defaultLocale: "en",
  // Always send / to the default locale: a language-dependent redirect makes
  // Google pick / as canonical instead of /en.
  localeDetection: false,
  // hreflang comes from page metadata; the middleware's Link header would add
  // a conflicting x-default → /.
  alternateLinks: false,
});
