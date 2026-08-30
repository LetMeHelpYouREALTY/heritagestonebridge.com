import Image from "next/image";
import {
  AGENT_PHOTO_ALT,
  agentPhotoUrl,
  isCloudflareImagesEnabled,
} from "@/lib/agent-assets";
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
  const fromCloudflare = isCloudflareImagesEnabled();

  return (
    <Image
      src={agentPhotoUrl(px)}
      alt={AGENT_PHOTO_ALT}
      width={px}
      height={px}
      sizes={`${px}px`}
      priority={priority}
      unoptimized={fromCloudflare}
      className={cn("rounded-full object-cover", className)}
    />
  );
}
