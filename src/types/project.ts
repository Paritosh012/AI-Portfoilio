export type Project = {
  slug: string; // URL ke liye: /projects/makemytrip
  title: string;
  summary: string; // card par 1-2 line
  description: string; // detail page ka paragraph
  highlights: string[]; // detail page ke bullets
  tech: string[];
  repo?: string; // ? = optional, har project ka live link nahi hota
  live?: string;
  image?: string; // public/projects/ ke andar ka path
};
