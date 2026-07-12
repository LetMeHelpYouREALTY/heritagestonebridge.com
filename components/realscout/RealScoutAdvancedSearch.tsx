"use client";

import { getRealScoutAgentId } from "@/lib/realscout-config";

type RealScoutAdvancedSearchProps = {
  className?: string;
};

export default function RealScoutAdvancedSearch({
  className = "",
}: RealScoutAdvancedSearchProps) {
  const agentId = getRealScoutAgentId();

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: `<realscout-advanced-search agent-encoded-id="${agentId}"></realscout-advanced-search>`,
      }}
    />
  );
}
