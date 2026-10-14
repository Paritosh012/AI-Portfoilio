export type Project = {
  slug: string;
  title: string;
  category?: string;
  summary: string;
  description: string;
  highlights: string[];
  tech: string[];
  repo?: string;
  live?: string;
  image?: string;
};
