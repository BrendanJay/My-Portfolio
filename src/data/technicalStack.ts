import {
  Activity,
  Blocks,
  Code2,
  Cpu,
  Globe,
  Headphones,
  Layout,
  Router,
  ShoppingCart,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react"

export interface TechGroup {
  name: string
  items: {
    name: string
    icon: LucideIcon
  }[]
}

export const techGroups: TechGroup[] = [
  {
    name: "Frontend & Web Technologies",
    items: [
      { name: "TypeScript", icon: Code2 },
      { name: "React", icon: Blocks },
      { name: "SvelteKit", icon: Blocks },
      { name: "Next.js", icon: Layout },
      { name: "Tailwind CSS", icon: Wind },
      { name: "Vite", icon: Zap },
      { name: "REST API Integration (Client-Side)", icon: Globe },
    ],
  },
  {
    name: "Systems, Hardware & Infrastructure (Computer Engineering)",
    items: [
      { name: "Raspberry Pi 5 & Embedded Linux", icon: Cpu },
      { name: "Biometric Sensor Integration", icon: Activity },
      { name: "Point of Sale (POS) Hardware & Deployment", icon: ShoppingCart },
      { name: "Network & Router Configuration", icon: Router },
      { name: "Hardware Diagnostics & Technical Support", icon: Headphones },
    ],
  },
]