import { ReactElement } from "react";

interface ExperienceTreeBaseProps {
  className?: string;
  children: ReactElement | ReactElement[];
}

export default function ExperienceTreeBase({
  children,
  className = "",
}: Readonly<ExperienceTreeBaseProps>) {
  return (
    <div className={`flex ${className}`}>
      <div className="-mr-3 w-2 rounded-full bg-secondary" />
      <div className={"my-1 flex flex-col gap-y-14"}>
        {Array.isArray(children) ? children.map((child) => child) : children}
      </div>
    </div>
  );
}
