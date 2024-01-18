import Custom404 from "@/app/[locale]/not-found";
import { getRequestConfig } from "next-intl/server";
import { locales } from "../i18n.config";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    Custom404();
  }

  return {
    messages: (await import(`/messages/${locale}.json`)).default,
  };
});
