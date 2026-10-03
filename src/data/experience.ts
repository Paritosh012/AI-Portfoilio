import type { TimelineEntry } from "@/types/content";

// TODO(Paritosh): descriptions apne shabdon mein likho. Jo saal pakka pata ho wahi daalo.
export const experience: TimelineEntry[] = [
  {
    title: "Full Stack Developer Intern",
    org: "Cybrom Technology",
    period: "Feb – Apr 2026",
    description:
      "Built the first version of MakeMyTrip, a multi-tenant travel booking platform, using React, Redux Toolkit, Node.js, Express and MongoDB.",
  },
  {
    title: "AI Agent Projects",
    org: "Independent",
    description:
      "Built Yatri, a CLI travel companion with a hand-written ReAct agent later moved to LangGraph, and an Express + Groq agent that answers questions about my work.",
  },
];

export const education: TimelineEntry[] = [
  {
    title: "B.Tech, Computer Science & Engineering",
    org: "Radharaman Engineering College, Bhopal",
    period: "2026",
    description:
      "Bachelor's degree in Computer Science and Engineering from a college affiliated to RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya).",
  },
  {
    title: "Advanced MERN Stack Certification",
    org: "E&ICT Academy, IIT Guwahati",
    // TODO(Paritosh): certification ka saal daalo
    description:
      "Certification programme under MeitY, Government of India, covering MongoDB, Express, React and Node.js.",
  },
];
