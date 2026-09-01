export type ItemType = "Tool" | "Skill" | "Agent" | "Workflow" | "Resource";

export type CategorySlug =
  | "coding"
  | "ai"
  | "design"
  | "automation"
  | "data"
  | "productivity"
  | "business"
  | "research";

export type ItemStatus = "Discovered" | "Testing" | "Approved" | "Archived";

export type Source =
  | "GitHub"
  | "YouTube"
  | "Claude Code"
  | "ChatGPT"
  | "Reddit"
  | "Discord"
  | "LinkedIn"
  | "Blog"
  | "Indicação";

export interface Relationship {
  label: string;
  itemSlug: string;
  itemName: string;
}

export interface Item {
  id: string;
  name: string;
  slug: string;
  description: string;
  type: ItemType;
  category: CategorySlug;
  source: Source;
  repositoryUrl?: string;
  websiteUrl?: string;
  documentationUrl?: string;
  notes: string;
  rating: number;
  status: ItemStatus;
  tags: string[];
  favorite: boolean;
  relationships: Relationship[];
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
}
