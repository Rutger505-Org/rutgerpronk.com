import ArrowOutRightIcon from "@/components/icons/ArrowOutRightIcon";
import { ButtonHTMLAttributes } from "react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function AnimatedButton({
  text,
  className = "",
  ...all
}: Readonly<AnimatedButtonProps>) {
  return (
    <button
      className={`${className} group relative z-10 flex items-center overflow-hidden rounded border border-accent bg-none px-3 py-1 text-textSecondary before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-0 before:bg-accent before:duration-200 hover:text-textPrimary before:hover:w-full`}
       {...all}
    >
      {text}
      <ArrowOutRightIcon
        className={
          "ml-2 h-4 -rotate-45 duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        }
      />
    </button>
  );
}
