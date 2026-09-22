import { motion } from "framer-motion"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { cn } from "../lib/utils"
import { 
  Code2, 
  Terminal, 
  Wind, 
  Database, 
  Layout, 
  Blocks,
  Server,
  FileCode
} from "lucide-react"

interface TechItem {
  name: string
  level: number
  category: "frontend" | "backend" | "database" | "framework" | "language"
  icon: any
}

const techStack: TechItem[] = [
  { 
    name: "React", 
    level: 95, 
    category: "frontend",
    icon: Blocks,
  },
  { 
    name: "TypeScript", 
    level: 90, 
    category: "language",
    icon: Code2,
  },
  { 
    name: "Tailwind CSS", 
    level: 92, 
    category: "frontend",
    icon: Wind,
  },
  { 
    name: "Node.js", 
    level: 88, 
    category: "backend",
    icon: Server,
  },
  { 
    name: "PostgreSQL", 
    level: 85, 
    category: "database",
    icon: Database,
  },
  { 
    name: "Next.js", 
    level: 90, 
    category: "framework",
    icon: Layout,
  },
  { 
    name: "Express", 
    level: 86, 
    category: "framework",
    icon: Terminal,
  },
  { 
    name: "MongoDB", 
    level: 82, 
    category: "database",
    icon: FileCode,
  },
]

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  framework: "Framework",
  language: "Language",
}

export function Equipment() {
  return (
    <section id="systems" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-white/20" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-500">
                01 / Systems
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Technical Stack
            </h2>
            <p className="mt-3 text-[15px] text-gray-400 max-w-md leading-relaxed">
              Core technologies and frameworks I use to architect, build, and 
              ship production-grade applications.
            </p>
          </div>
          <Badge variant="muted" className="w-fit font-mono text-[11px]">
            {techStack.length} primary systems
          </Badge>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techStack.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.12]">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-5 space-y-5 relative">
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center group-hover:border-white/[0.16] transition-colors">
                        <Icon className="w-5 h-5 text-gray-300" strokeWidth={1.8} />
                      </div>
                      <Badge 
                        variant="muted" 
                        className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5"
                      >
                        {categoryLabels[tech.category]}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-[15px] font-semibold text-white tracking-tight">
                        {tech.name}
                      </h3>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-end">
                          <span className="text-[11px] text-gray-500 font-medium">
                            Proficiency
                          </span>
                          <span className="text-[12px] font-mono text-gray-300">
                            {tech.level}%
                          </span>
                        </div>
                        
                        <div className="h-1 w-full bg-white/[0.06] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 + index * 0.05 }}
                            className="h-full bg-gradient-to-r from-white/70 via-white to-white/80 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
