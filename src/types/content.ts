// Experience/Education timeline ki ek entry
export type TimelineEntry = {
  title: string;
  org: string;
  period?: string; // optional: pakka pata na ho to khaali chhodo, galat saal mat likho
  description: string;
};

// "What I offer" section ka ek card
export type SkillGroup = {
  title: string;
  description: string;
  label: string; // chips ke upar ka chhota heading
  items: string[];
};
