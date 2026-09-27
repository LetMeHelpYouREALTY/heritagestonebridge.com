import { component$ } from "@builder.io/qwik";
import type { RealScoutContentConfig } from "../../types/real-estate-content";
import { DynamicRealScoutBlock } from "./DynamicRealScoutBlock";

export interface DynamicRealScoutGridProps {
  config: RealScoutContentConfig;
}

export const DynamicRealScoutGrid = component$<DynamicRealScoutGridProps>(({ config }) => {
  const containerClasses = [
    "max-w-7xl mx-auto px-4 py-12",
    config.layout?.background ? `bg-${config.layout.background}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const getGridClasses = (columns: number) => {
    switch (columns) {
      case 1:
        return "grid grid-cols-1 gap-8";
      case 2:
        return "grid grid-cols-1 lg:grid-cols-2 gap-8";
      default:
        return "grid grid-cols-1 lg:grid-cols-2 gap-8";
    }
  };

  // Group blocks by layout columns
  const groupedBlocks = config.blocks.reduce(
    (groups, block) => {
      const columns = block.layout?.columns || 1;
      if (!groups[columns]) {
        groups[columns] = [];
      }
      groups[columns].push(block);
      return groups;
    },
    {} as Record<number, typeof config.blocks>
  );

  return (
    <div class={containerClasses}>
      {Object.entries(groupedBlocks).map(([columns, blocks]) => (
        <div key={`grid-${columns}`} class={`${getGridClasses(Number(columns))} mb-16`}>
          {blocks.map((block) => (
            <DynamicRealScoutBlock key={block.id} block={block} />
          ))}
        </div>
      ))}
    </div>
  );
});
