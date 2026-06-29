import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Dersimli Nakliyat"
      width={1536}
      height={1024}
      className={cn("w-auto object-contain", className)}
      priority
    />
  );
}
