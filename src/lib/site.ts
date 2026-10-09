import { routing } from "@/i18n/routing";

export const SITE_URL = "https://rutgerpronk.com";
export const SITE_HOST = new URL(SITE_URL).host;

export const SOCIAL_LINKS = {
  github: "https://github.com/Rutger505",
  linkedin: "https://www.linkedin.com/in/rutger-pronk-585149273/",
};

export const SKILLS = [
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Kubernetes",
  "Terraform",
];

export const OPEN_GRAPH_LOCALES: Record<string, string> = {
  en: "en_US",
  nl: "nl_NL",
};

export function localeAlternates() {
  return {
    ...Object.fromEntries(routing.locales.map((l) => [l, `/${l}`])),
    "x-default": "/",
  };
}
