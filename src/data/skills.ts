import {
  Code2,
  Cpu,
  Headphones,
  Layers,
  Network,
  Router,
  Server,
  Settings,
  ShoppingCart,
  Terminal,
  type LucideIcon,
} from "lucide-react"

export interface Competency {
  name: string
  icon: LucideIcon
  description: string
}

export const hardwareSkills: Competency[] = [
  {
    name: "Network Troubleshooting",
    icon: Network,
    description:
      "Diagnose and resolve network connectivity issues across wired and wireless topologies.",
  },
  {
    name: "POS Systems",
    icon: ShoppingCart,
    description:
      "Deploy, configure, and maintain retail point-of-sale hardware and software stacks.",
  },
  {
    name: "Network Configuration",
    icon: Settings,
    description:
      "Design and implement LAN/WAN configurations, VLANs, and access control policies.",
  },
  {
    name: "Router Configuration",
    icon: Router,
    description:
      "Setup and manage enterprise-grade routers, firewalls, and static/dynamic routing.",
  },
  {
    name: "Technical Support",
    icon: Headphones,
    description:
      "End-to-end hardware/software support, ticketing, and escalation management.",
  },
  {
    name: "System Deployment",
    icon: Server,
    description:
      "Bare-metal and virtualized OS deployment, driver management, and imaging.",
  },
]

export const softwareSkills: Competency[] = [
  {
    name: "Frontend Development",
    icon: Code2,
    description:
      "Building responsive, accessible web interfaces with modern frontend tools.",
  },
  {
    name: "Embedded Systems",
    icon: Cpu,
    description:
      "Arduino and microcontroller programming with sensor and actuator integration.",
  },
  {
    name: "Frontend Systems",
    icon: Layers,
    description:
      "React and Next.js interfaces with a focus on usability and accessibility.",
  },
  {
    name: "DevOps Fundamentals",
    icon: Terminal,
    description:
      "CI/CD pipelines, Vercel/Netlify deployments, and environment provisioning.",
  },
  {
    name: "AI & Workflow Automation",
    icon: Layers,
    description:
      "Activepieces workflow orchestration and no-code automation for business process automation.",
  },
]