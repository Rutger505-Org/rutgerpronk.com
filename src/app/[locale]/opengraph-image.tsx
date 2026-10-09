import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SKILLS } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Rutger Pronk - Software Developer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "landingSection" });
  const photo = await readFile(join(process.cwd(), "src/assets/og-photo.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        background: "#121125",
        borderBottom: "12px solid #FF365A",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: 640 }}>
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#FF365A" }}>
          {"</> SOFTWARE DEVELOPER"}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1,
            color: "#EDEDED",
          }}
        >
          Rutger Pronk
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            lineHeight: 1.35,
            color: "#CAC8DC",
          }}
        >
          {t("subtitle")}
        </div>
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 36 }}
        >
          {SKILLS.map((skill) => (
            <div
              key={skill}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                border: "2px solid rgba(255,255,255,0.15)",
                fontSize: 22,
                color: "#EDEDED",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <img
        src={photoSrc}
        width={380}
        height={380}
        alt=""
        style={{ borderRadius: 999, border: "8px solid #FF365A" }}
      />
    </div>,
    size,
  );
}
