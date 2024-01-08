import { ReactElement } from "react";

interface ExperienceTimeProps {
  time: string;
  present?: boolean;
  children: ReactElement | ReactElement[];
}

export default function ExperienceTime({
  time,
  present = false,
  children,
}: Readonly<ExperienceTimeProps>) {
  return (
    <div className={"flex gap-x-10"}>
      {/* Red dot if present second dot with plink animation*/}
      <div>
        <div className={`mt-[6px] h-4 w-4 rounded-full bg-accent`} />

        {present ? (
          <div
            className={`-mt-4 h-4 w-4 animate-ping rounded-full bg-accent`}
          />
        ) : (
          ""
        )}
      </div>

      {/* Experiences */}
      <div>
        <h4
          className={`${
            present ? "!text-accent" : ""
          } text-xl text-textSecondary`}
        >
          {time} {present ? " - Present" : ""}
        </h4>
        <div className={"mt-5 flex flex-col  gap-y-6"}>
          {Array.isArray(children) ? children.map((child) => child) : children}
        </div>
      </div>
    </div>
  );
}
