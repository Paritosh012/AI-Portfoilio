export type TimelineEntry = {
  title: string;
  org: string;
  period?: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  label: string;
  items: string[];
};
