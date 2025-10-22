import { IconProps } from "@/components/icons/IconProps";

export default function ArrowDownIcon({ className }: Readonly<IconProps>) {
  return (
    <svg
      className={className}
      viewBox="0 -960 960 960"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M479-240 238-481l42-43 170 167v-400h60v402l168-168 42 42-241 241Z"
        fill={"currentColor"}
      />
    </svg>
  );
}
