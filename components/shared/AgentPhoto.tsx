import Image from "next/image";
import { AGENT_PHOTO } from "@/lib/agent-assets";
import { cn } from "@/lib/utils";

type AgentPhotoSize = "xs" | "sm" | "md" | "lg" | "xl";

const SIZES: Record<AgentPhotoSize, number> = {
  xs: 40,
  sm: 56,
  md: 80,
  lg: 128,
  xl: 176,
};

type AgentPhotoProps = {
  size?: AgentPhotoSize;
  className?: string;
  priority?: boolean;
};

export default function AgentPhoto({
  size = "md",
  className,
  priority = false,
}: AgentPhotoProps) {
  const px = SIZES[size];

  return (
    <Image
      src={AGENT_PHOTO.src}
      alt={AGENT_PHOTO.alt}
      width={px}
      height={px}
      sizes={`${px}px`}
      priority={priority}
      className={cn("rounded-full object-cover", className)}
    />
  );
}
