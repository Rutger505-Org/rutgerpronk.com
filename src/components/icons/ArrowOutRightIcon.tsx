import { IconProps } from "@/components/icons/IconProps";

export default function ArrowOutRightIcon({ className }: Readonly<IconProps>) {
  return (
    <svg
      className={`${className}`}
      viewBox="3 3 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 13.887l5-5V8.18l-5-5-.707.707 4.146 4.147H2v1h10.44L8.292 13.18l.707.707z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
