import type { RealScoutContentBlock, RealScoutContentConfig } from "../types/real-estate-content";

export class ContentManager {
  private config: RealScoutContentConfig;

  constructor(config: RealScoutContentConfig) {
    this.config = config;
  }

  // Get all blocks
  getAllBlocks(): RealScoutContentBlock[] {
    return this.config.blocks;
  }

  // Get blocks by type
  getBlocksByType(type: RealScoutContentBlock["type"]): RealScoutContentBlock[] {
    return this.config.blocks.filter((block) => block.type === type);
  }

  // Get blocks by layout columns
  getBlocksByColumns(columns: number): RealScoutContentBlock[] {
    return this.config.blocks.filter((block) => block.layout?.columns === columns);
  }

  // Get a specific block by ID
  getBlockById(id: string): RealScoutContentBlock | undefined {
    return this.config.blocks.find((block) => block.id === id);
  }

  // Add a new block
  addBlock(block: RealScoutContentBlock): void {
    this.config.blocks.push(block);
  }

  // Update a block
  updateBlock(id: string, updates: Partial<RealScoutContentBlock>): boolean {
    const index = this.config.blocks.findIndex((block) => block.id === id);
    if (index !== -1) {
      this.config.blocks[index] = { ...this.config.blocks[index], ...updates };
      return true;
    }
    return false;
  }

  // Remove a block
  removeBlock(id: string): boolean {
    const index = this.config.blocks.findIndex((block) => block.id === id);
    if (index !== -1) {
      this.config.blocks.splice(index, 1);
      return true;
    }
    return false;
  }

  // Reorder blocks
  reorderBlocks(blockIds: string[]): void {
    const orderedBlocks = blockIds
      .map((id) => this.config.blocks.find((block) => block.id === id))
      .filter(Boolean) as RealScoutContentBlock[];

    this.config.blocks = orderedBlocks;
  }

  // Get configuration
  getConfig(): RealScoutContentConfig {
    return this.config;
  }

  // Update configuration
  updateConfig(updates: Partial<RealScoutContentConfig>): void {
    this.config = { ...this.config, ...updates };
  }

  // Create a new block with defaults
  createBlock(
    id: string,
    type: RealScoutContentBlock["type"],
    title: string,
    description: string,
    agentEncodedId: string,
    overrides: Partial<RealScoutContentBlock> = {}
  ): RealScoutContentBlock {
    const defaultBlock: RealScoutContentBlock = {
      id,
      type,
      title,
      description,
      agentEncodedId,
      className: "min-h-[400px]",
      layout: {
        columns: 1,
        height: "400px",
        backgroundColor: "white",
        borderRadius: "lg",
        shadow: true,
      },
      content: {
        features: [],
        badges: [],
      },
    };

    return { ...defaultBlock, ...overrides };
  }

  // Validate configuration
  validateConfig(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Check for duplicate IDs
    const ids = this.config.blocks.map((block) => block.id);
    const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
    if (duplicateIds.length > 0) {
      errors.push(`Duplicate block IDs found: ${duplicateIds.join(", ")}`);
    }

    // Check required fields
    this.config.blocks.forEach((block, index) => {
      if (!block.id) {
        errors.push(`Block at index ${index} is missing required field: id`);
      }
      if (!block.type) {
        errors.push(`Block at index ${index} is missing required field: type`);
      }
      if (!block.title) {
        errors.push(`Block at index ${index} is missing required field: title`);
      }
      if (!block.description) {
        errors.push(`Block at index ${index} is missing required field: description`);
      }
      if (!block.agentEncodedId) {
        errors.push(`Block at index ${index} is missing required field: agentEncodedId`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}

// Utility functions for common operations
export const createSearchBlock = (
  id: string,
  title: string,
  description: string,
  agentEncodedId: string,
  type: "simple-search" | "advanced-search" = "simple-search"
): RealScoutContentBlock => ({
  id,
  type,
  title,
  description,
  agentEncodedId,
  className: type === "advanced-search" ? "min-h-[600px]" : "min-h-[400px]",
  layout: {
    columns: 1,
    height: type === "advanced-search" ? "600px" : "400px",
    backgroundColor: "white",
    borderRadius: "lg",
    shadow: true,
  },
  content: {
    features:
      type === "advanced-search"
        ? ["Detailed Filters", "Map Search"]
        : ["Quick Search", "Basic Filters"],
    badges: ["MLS Connected"],
  },
});

export const createListingsBlock = (
  id: string,
  title: string,
  description: string,
  agentEncodedId: string,
  widgetProps: RealScoutContentBlock["widgetProps"] = {}
): RealScoutContentBlock => ({
  id,
  type: "office-listings",
  title,
  description,
  agentEncodedId,
  className: "min-h-[480px]",
  widgetProps: {
    sortOrder: "STATUS_AND_SIGNIFICANT_CHANGE",
    listingStatus: "For Sale",
    propertyTypes: "SFR,MF",
    priceMin: 500000,
    priceMax: 2000000,
    ...widgetProps,
  },
  layout: {
    columns: 1,
    height: "480px",
    backgroundColor: "white",
    borderRadius: "lg",
    shadow: true,
  },
  content: {
    features: ["Curated Listings", "Real-time Updates"],
    badges: ["Featured"],
  },
});

export const createHomeValueBlock = (
  id: string,
  title: string,
  description: string,
  agentEncodedId: string
): RealScoutContentBlock => ({
  id,
  type: "home-value",
  title,
  description,
  agentEncodedId,
  className: "min-h-[500px]",
  layout: {
    columns: 1,
    height: "500px",
    backgroundColor: "white",
    borderRadius: "lg",
    shadow: true,
  },
  content: {
    features: ["Instant Valuation", "Market Analysis"],
    badges: ["Free Report", "No Obligation"],
    ctaText: "Get Detailed Report",
    ctaLink: "/home-valuation",
  },
});
