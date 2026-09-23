import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import {
  Network,
  ShoppingCart,
  Settings,
  Router,
  Headphones,
  Server,
  Cpu,
  Code2,
  Database,
  Globe,
  Layers,
  Terminal,
  CheckCircle2,
} from "lucide-react"
import { Badge } from "./ui/badge"

interface Competency {
  name: string
  icon: any
  description: string
  proficiency: "Expert" | "Advanced" | "Intermediate"
}

const hardwareMatrix: Competency[] = [
  {
    name: "Network Troubleshooting",
    icon: Network,
    description:
      "Diagnose and resolve network connectivity issues across wired and wireless topologies.",
    proficiency: "Expert",
  },
  {
    name: "POS Systems",
    icon: ShoppingCart,
    description:
      "Deploy, configure, and maintain retail point-of-sale hardware and software stacks.",
    proficiency: "Expert",
  },
  {
    name: "Network Configuration",
    icon: Settings,
    description:
      "Design and implement LAN/WAN configurations, VLANs, and access control policies.",
    proficiency: "Advanced",
  },
  {
    name: "Router Configuration",
    icon: Router,
    description:
      "Setup and manage enterprise-grade routers, firewalls, and static/dynamic routing.",
    proficiency: "Advanced",
  },
  {
    name: "Technical Support",
    icon: Headphones,
    description:
      "End-to-end hardware/software support, ticketing, and escalation management.",
    proficiency: "Expert",
  },
  {
    name: "System Deployment",
    icon: Server,
    description:
      "Bare-metal and virtualized OS deployment, driver management, and imaging.",
    proficiency: "Advanced",
  },
]

const softwareMatrix: Competency[] = [
  {
    name: "Full-Stack Development",
    icon: Code2,
    description:
      "End-to-end web app delivery from database schema design to production UI.",
    proficiency: "Expert",
  },
  {
    name: "Embedded Systems",
    icon: Cpu,
    description:
      "Arduino and microcontroller programming with sensor and actuator integration.",
    proficiency: "Advanced",
  },
  {
    name: "Database Design",
    icon: Database,
    description:
      "Schema design, indexing, and query optimization in SQL and NoSQL systems.",
    proficiency: "Advanced",
  },
  {
    name: "API Architecture",
    icon: Globe,
    description:
      "REST and realtime WebSocket APIs with authentication, rate limiting, and caching.",
    proficiency: "Advanced",
  },
  {
    name: "Frontend Systems",
    icon: Layers,
    description:
      "Design-system driven UI in React/Next.js, prioritizing accessibility and DX.",
    proficiency: "Expert",
  },
  {
    name: "DevOps Fundamentals",
    icon: Terminal,
    description:
      "CI/CD pipelines, Vercel/Netlify deployments, and environment provisioning.",
    proficiency: "Intermediate",
  },
  {
    name: "AI & Workflow Automation",
    icon: Layers,
    description:
      "Activepieces workflow orchestration, API integrations, and no-code automation architecture for business process automation.",
    proficiency: "Advanced",
  },
]

const proficiencyStyles: Record<string, string> = {
  Expert: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Advanced: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/20",
}

function MatrixCard({
  skill,
  index,
}: {
  skill: Competency
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="h-full border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.12] transition-all duration-300">
        <CardContent className="p-5 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="w-10 h-10 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center flex-shrink-0">
              <skill.icon
                className="w-5 h-5 text-gray-300"
                strokeWidth={1.8}
              />
            </div>
            <Badge
              variant="outline"
              className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 ${proficiencyStyles[skill.proficiency]} border`}
            >
              {skill.proficiency}
            </Badge>
          </div>

          <div className="space-y-2">
            <h3 className="text-[15px] font-semibold text-white tracking-tight">
              {skill.name}
            </h3>
            <p className="text-[13px] text-gray-400 leading-relaxed">
              {skill.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Skills() {
  const total = hardwareMatrix.length + softwareMatrix.length

  return (
    <section
      id="competencies"
      className="py-24 px-4 sm:px-6 relative"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-white/20" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-500">
                03 / Competencies
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Technical Matrix
            </h2>
            <p className="mt-3 text-[15px] text-gray-400 max-w-md leading-relaxed">
              Structured overview of domain expertise across hardware, network 
              infrastructure, and modern software engineering practices.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span className="text-[12px] font-mono text-gray-400">
              {total} verified competencies
            </span>
          </div>
        </motion.div>

        <div className="space-y-12">
          {/* Hardware & Network */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-md bg-amber-500/10 border border-amber-500/20">
                  <Network className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-white tracking-tight">
                    Hardware &amp; Network Infrastructure
                  </h3>
                  <p className="text-[12px] text-gray-500 font-mono uppercase tracking-wider">
                    {hardwareMatrix.length} skills
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hardwareMatrix.map((skill, i) => (
                <MatrixCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Software Development */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-md bg-blue-500/10 border border-blue-500/20">
                  <Code2 className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-white tracking-tight">
                    Software Development
                  </h3>
                  <p className="text-[12px] text-gray-500 font-mono uppercase tracking-wider">
                    {softwareMatrix.length} skills
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {softwareMatrix.map((skill, i) => (
                <MatrixCard key={skill.name} skill={skill} index={i + 3} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
