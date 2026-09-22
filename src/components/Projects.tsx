import { motion } from "framer-motion"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Github, ExternalLink, Sparkles, Cpu, Globe, Layers } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  architecture: { label: string; icon: any }[]
  image: string
  repo?: string
  demo?: string
  highlight?: boolean
  status?: string
  statusVariant?: "success" | "accent" | "muted"
}

const projects: Project[] = [
  {
    title: "Gym Management System",
    description:
      "A comprehensive gym management platform with member tracking, class scheduling, and integrated payment processing to streamline operations.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    architecture: [
      { label: "SPA", icon: Layers },
      { label: "REST API", icon: Globe },
    ],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    repo: "#",
    demo: "#",
    statusVariant: "success",
  },
  {
    title: "Petify",
    description:
      "A pet adoption and community platform connecting pet lovers with animals in need. Features real-time community chat and listing services.",
    tags: ["React", "Firebase", "Tailwind", "WebSocket"],
    architecture: [
      { label: "SPA", icon: Layers },
      { label: "Realtime", icon: Globe },
    ],
    image:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1586&auto=format&fit=crop",
    repo: "#",
    demo: "#",
    statusVariant: "success",
  },
  {
    title: "Bidbay",
    description:
      "A live auction platform with real-time bidding, user authentication, and secure Stripe payment processing for high-trust transactions.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "WebSocket"],
    architecture: [
      { label: "SSR", icon: Layers },
      { label: "Realtime", icon: Globe },
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop",
    repo: "#",
    demo: "#",
    statusVariant: "success",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative bg-black/20">
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
                02 / Projects
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Featured Work
            </h2>
            <p className="mt-3 text-[15px] text-gray-400 max-w-md leading-relaxed">
              A selection of projects spanning web platforms, embedded hardware, 
              and real-time distributed systems.
            </p>
          </div>
          <Badge variant="muted" className="w-fit font-mono text-[11px]">
            {projects.length + 1} selected
          </Badge>
        </motion.div>

        {/* Flagship Project */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.008] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr]">
              <div className="relative overflow-hidden group h-64 lg:h-auto min-h-[280px]">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173bdb999ef?q=80&w=1470&auto=format&fit=crop"
                    alt="HealthSense Kiosk"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-black/20 to-transparent" />
                </div>

                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="success" className="text-[10px] font-mono px-2.5 py-1">
                    <Sparkles className="w-3 h-3 mr-1" />
                    CAPSTONE
                  </Badge>
                  <Badge variant="accent" className="text-[10px] font-mono px-2.5 py-1">
                    IN PROGRESS
                  </Badge>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-black/50 backdrop-blur-sm border border-white/10">
                      <Cpu className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">
                        Category
                      </p>
                      <p className="text-[12px] font-semibold text-white">
                        IoT + Embedded Systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-7 lg:p-9 space-y-6 flex flex-col justify-center">
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                      HealthSense Kiosk
                    </h3>
                  </div>
                  <p className="text-[14.5px] text-gray-400 leading-relaxed">
                    Undergraduate thesis project. An IoT-based health monitoring kiosk 
                    capable of capturing real-time vital signs (heart rate, SpO2, 
                    temperature, blood pressure) through integrated sensors, with a 
                    cloud-connected dashboard for historical data analytics and 
                    reporting for medical professionals.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-gray-500">
                    Architecture
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Hardware", icon: Cpu, detail: "Arduino" },
                      { label: "Frontend", icon: Layers, detail: "React SPA" },
                      { label: "Backend", icon: Globe, detail: "Node.js API" },
                    ].map((arch) => (
                      <div
                        key={arch.label}
                        className="flex flex-col items-start gap-1 p-3 rounded-lg border border-white/[0.06] bg-white/[0.02]"
                      >
                        <div className="flex items-center gap-1.5">
                          <arch.icon className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                            {arch.label}
                          </span>
                        </div>
                        <span className="text-[12px] font-medium text-white">
                          {arch.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-gray-500">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["IoT", "React", "Node.js", "Arduino", "MongoDB", "REST", "MQTT"].map(
                      (tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[11px] font-mono px-2.5 py-1"
                        >
                          {tag}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Button size="sm" className="h-9">
                    <ExternalLink className="w-4 h-4" />
                    View Documentation
                  </Button>
                  <Button variant="outline" size="sm" className="h-9">
                    <Github className="w-4 h-4" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Card className="group overflow-hidden h-full flex flex-col border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.12] transition-all duration-300">
                <div className="h-44 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-black/10 to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                    <div className="flex gap-1.5">
                      {project.architecture.map((a) => (
                        <div
                          key={a.label}
                          className="p-1.5 rounded-md bg-black/40 backdrop-blur-sm border border-white/10"
                          title={a.label}
                        >
                          <a.icon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                        </div>
                      ))}
                    </div>
                    {project.statusVariant && (
                      <Badge
                        variant={project.statusVariant}
                        className="text-[10px] font-mono px-2 py-0.5"
                      >
                        SHIPPED
                      </Badge>
                    )}
                  </div>
                </div>

                <CardContent className="p-5 flex-1 flex flex-col space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-[16px] font-semibold text-white tracking-tight group-hover:text-white transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-[13px] text-gray-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="muted"
                        className="text-[10px] font-mono px-2 py-0.5 border-white/[0.05]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-2 mt-auto flex gap-2">
                    {project.repo && (
                      <Button variant="outline" size="sm" className="flex-1 h-8 text-[12px]">
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="flex-1 h-8 text-[12px]">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
