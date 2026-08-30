import Image from "next/image";
import { AGENT_PHOTO_ALT, AGENT_PHOTO_GIT_BACKUP } from "@/lib/agent-assets";
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

/**
 * Always points at the git-backup path. When Cloudflare Images is enabled at
 * build time, next.config uses the custom loader so this src is optimized on
 * imagedelivery.net (WebP/AVIF, sized variants).
 */
export default function AgentPhoto({
  size = "md",
  className,
  priority = false,
}: AgentPhotoProps) {
  const px = SIZES[size];

  return (
    <Image
      src={AGENT_PHOTO_GIT_BACKUP}
      alt={AGENT_PHOTO_ALT}
      width={px}
      height={px}
      sizes={`${px}px`}
      quality={85}
      priority={priority}
      className={cn("rounded-full object-cover", className)}
    />
  );
}
