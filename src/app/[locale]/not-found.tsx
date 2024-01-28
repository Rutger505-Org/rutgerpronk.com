import AnimatedButton from "@/components/AnimatedButton";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className={"flex h-screen w-screen items-center justify-center p-6"}>
      <div className={"flex flex-col items-center"}>
        <div className={"flex items-center gap-x-4"}>
          <h1 className={"text-2xl font-medium text-textPrimary"}>404</h1>
          <div className={"h-10 border-l border-textSecondary opacity-70"} />
          <p className={"text-textSecondary"}>This page could not be found.</p>
        </div>
        <Link href={"/"} className={"mt-10"}>
          <AnimatedButton text={"Go Home"} />
        </Link>
      </div>
    </div>
  );
}
