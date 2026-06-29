import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variant === "primary" &&
          "bg-accent text-white shadow-[0_0_35px_rgba(255,107,0,0.38)] hover:bg-[#ff7d1f]",
        variant === "secondary" &&
          "border border-white/15 bg-white/8 text-white backdrop-blur-xl hover:border-accent/60 hover:bg-accent/10",
        variant === "ghost" && "text-white/78 hover:text-white",
        className,
      )}
      {...props}
    />
  );
}
