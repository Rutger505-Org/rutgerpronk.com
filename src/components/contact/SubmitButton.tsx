import { useEffect, useRef, useState } from "react";
import ArrowOutRightIcon from "@/components/icons/ArrowOutRightIcon";
import { useTranslations } from "next-intl";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import LoadingCircle from "@/components/icons/LoadingCircle";

interface SubmitButtonProps {
  sending: boolean;
  sent: boolean;
}

export default function SubmitButton({
  sending,
  sent,
}: Readonly<SubmitButtonProps>) {
  const t = useTranslations("contact.form");
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [buttonWidth, setButtonWidth] = useState<number | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, []);

  let buttonContent;

  if (sending) {
    buttonContent = <LoadingCircle className={"m-auto"} />;
  } else if (sent) {
    buttonContent = <CheckMarkIcon className={"m-auto"} />;
  } else {
    buttonContent = (
      <>
        {t("submit")}
        <ArrowOutRightIcon
          className={
            "ml-2 h-4 -rotate-45 duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          }
        />
      </>
    );
  }

  return (
    <button
      ref={buttonRef}
      className={
        "group relative z-10 flex w-fit items-center overflow-hidden rounded border border-accent bg-none px-3 py-1 text-textSecondary before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-0 before:bg-accent before:duration-200 hover:text-textPrimary before:hover:w-full"
      }
      style={{ minWidth: buttonWidth ? `${buttonWidth}px` : "auto" }}
      disabled={sending || sent}
    >
      {buttonContent}
    </button>
  );
}
