import { useTranslations } from "next-intl";
import LoadingCircle from "@/components/icons/LoadingCircle";

export default function SubmitButton({
  sending,
}: Readonly<{ sending: boolean }>) {
  const t = useTranslations("contact.form");

  return (
    <button
      type="submit"
      disabled={sending}
      className="interactive lift inline-flex min-h-12 items-center gap-2.5 self-start rounded-[10px] bg-accent px-[22px] text-[15px] font-semibold text-accent-foreground disabled:cursor-wait disabled:opacity-70"
    >
      {sending && <LoadingCircle className="h-4 w-4" />}
      {sending ? t("sending") : t("submit")}
    </button>
  );
}
