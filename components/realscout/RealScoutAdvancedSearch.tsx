import { getRealScoutAdvancedSearchMarkup } from "@/lib/realscout-config";

type RealScoutAdvancedSearchProps = {
  className?: string;
};

export default function RealScoutAdvancedSearch({
  className = "",
}: RealScoutAdvancedSearchProps) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: getRealScoutAdvancedSearchMarkup(),
      }}
    />
  );
}
