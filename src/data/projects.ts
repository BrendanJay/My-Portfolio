import {
  Cpu,
  Dumbbell,
  Gavel,
  Layers,
  PawPrint,
  type LucideIcon,
} from "lucide-react"

export interface Project {
  title: string
  description: string
  tags: string[]
  category: string
  icon: LucideIcon
  accent: "emerald" | "cyan" | "rose"
}

export const projects: Project[] = [
  {
    title: "Gym Management System",
    description:
      "A gym management interface that brings member overviews, class schedules, and payment summaries into a clear, easy-to-use dashboard.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    category: "Fitness management",
    icon: Dumbbell,
    accent: "emerald",
  },
  {
    title: "Petify",
    description:
      "A pet adoption interface for browsing animals, exploring adoption listings, and discovering community updates, with a focus on a welcoming and intuitive experience.",
    tags: ["React", "Tailwind CSS"],
    category: "Pet adoption",
    icon: PawPrint,
    accent: "rose",
  },
  {
    title: "Bidbay",
    description:
      "A live auction experience focused on clear product listings, real-time bid updates, and an engaging interface for following active auctions.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Live auctions",
    icon: Gavel,
    accent: "cyan",
  },
]

export const projectAccents = {
  emerald: {
    glow: "rgba(52, 211, 153, 0.12)",
    icon: "text-emerald-100/55",
    label: "text-emerald-200/75",
  },
  cyan: {
    glow: "rgba(34, 211, 238, 0.12)",
    icon: "text-cyan-100/55",
    label: "text-cyan-200/75",
  },
  rose: {
    glow: "rgba(251, 113, 133, 0.1)",
    icon: "text-rose-100/50",
    label: "text-rose-200/75",
  },
}

export const healthSenseArchitecture = [
  {
    label: "Hardware",
    icon: Cpu,
    detail: "Raspberry Pi 5 + Biometric Sensors",
  },
  {
    label: "Frontend",
    icon: Layers,
    detail: "SvelteKit & Tailwind CSS",
  },
]

export const healthSenseStack = [
  "Raspberry Pi 5",
  "Biometrics",
  "IoT",
  "SvelteKit",
  "TypeScript",
  "Tailwind CSS",
  "Hardware Prototyping",
]