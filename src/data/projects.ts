import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "makemytrip",
    title: "MakeMyTrip",
    summary:
      "Multi-tenant travel booking platform with payments, role-based access and race-safe seat booking.",
    description:
      "A travel booking platform where hosts list trips and users book seats. Built during my Cybrom internship and hardened afterwards with a full security pass.",
    highlights: [
      "Razorpay payments with server-side HMAC signature verification",
      "JWT in httpOnly cookies with rotating refresh tokens and reuse detection",
      "Role-based access for users, hosts and super admins",
      "MongoDB transactions to stop two users booking the same seat",
      "19-test integration suite covering auth and authorization",
    ],
    tech: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
    ],
    repo: "https://github.com/Paritosh012/makemytrip",
    live: "https://makemytrip-frontend-kvdy.onrender.com",
  },
  {
    slug: "yatri",
    title: "Yatri",
    summary:
      "CLI travel companion with a hand-built ReAct agent that calls weather, currency and time tools.",
    description:
      "An AI travel assistant in the terminal, built over a 14-day self-directed sprint. I wrote the agent loop by hand first, then migrated it to LangGraph.",
    highlights: [
      "Hand-written ReAct loop with tool calling, later moved to LangGraph",
      "Persistent memory that extracts facts about the user from conversations",
      "Fixed geocoding ambiguity (Manali, TN vs Manali, HP) and a shallow-copy mutation bug",
    ],
    tech: ["Node.js", "Groq", "Llama 3.3", "LangChain.js", "Open-Meteo"],
    // TODO: repo push karke link daalo
  },
  {
    slug: "ai-portfolio-agent",
    title: "AI Portfolio Agent",
    summary:
      "Express and Mongoose backend with a ReAct orchestrator on Groq that answers questions about my work.",
    description:
      "A backend agent that can answer questions about my projects using three tools.",
    highlights: [
      "ReAct orchestrator on Groq",
      "Three tools backed by MongoDB data",
    ],
    tech: ["Express", "Mongoose", "Groq"],
    // TODO: repo link
  },
];
