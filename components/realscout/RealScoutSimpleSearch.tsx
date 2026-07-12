import { getRealScoutSimpleSearchMarkup } from "@/lib/realscout-config";

type RealScoutSimpleSearchProps = {
  className?: string;
};

export default function RealScoutSimpleSearch({
  className = "realscout-wrapper",
}: RealScoutSimpleSearchProps) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: getRealScoutSimpleSearchMarkup(),
      }}
    />
  );
}
