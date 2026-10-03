import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end web apps with React and Node.js, with real care for auth, payments and data that stays correct.",
    label: "Skills",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "REST APIs",
      "JWT auth",
      "Razorpay",
      "MongoDB",
      "Mongoose",
      "PostgreSQL (learning)",
    ],
  },
  {
    title: "Tools & AI",
    description:
      "Testing, CI and deployment to keep projects shippable, plus LLM agents that call real tools.",
    label: "Tools",
    items: [
      "Git & GitHub",
      "GitHub Actions",
      "Docker",
      "Jest",
      "Vercel",
      "Render",
      "Groq",
      "LangChain.js",
      "LangGraph",
    ],
  },
];
