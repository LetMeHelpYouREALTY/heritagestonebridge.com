"use client";

import { getRealScoutAgentId } from "@/lib/realscout-config";

type RealScoutSimpleSearchProps = {
  className?: string;
};

export default function RealScoutSimpleSearch({
  className = "realscout-wrapper",
}: RealScoutSimpleSearchProps) {
  const agentId = getRealScoutAgentId();

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: `<realscout-simple-search agent-encoded-id="${agentId}"></realscout-simple-search>`,
      }}
    />
  );
}
