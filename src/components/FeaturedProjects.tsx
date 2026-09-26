import { motion } from "framer-motion"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import {
  healthSenseArchitecture,
  healthSenseStack,
  projectAccents,
  projects,
} from "../data/projects"
import { Cpu, Sparkles } from "lucide-react"

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative bg-black/20">
      <div aria-hidden="true" className="absolute -top-20 -left-36 h-[30rem] w-[30rem] rounded-full bg-emerald-400/[0.07] blur-[140px] pointer-events-none" />
      <div aria-hidden="true" className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-cyan-400/[0.06] blur-[140px] pointer-events-none" />
      <div className="max-w-6xl mx-auto space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
            >
              Projects I&apos;ve Worked On
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              className="h-px mt-3 rounded-full bg-gradient-to-r from-emerald-300 via-white/80 to-cyan-300"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
              className="mt-3 text-[15px] text-gray-400 max-w-md leading-relaxed"
            >
              Web projects alongside my HealthSense embedded-systems capstone.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="overflow-hidden border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.008] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr]">
              <div className="relative overflow-hidden h-64 lg:h-auto min-h-[320px] rounded-[calc(var(--radius)+2px)] border border-white/10 bg-black">
                <motion.img
                  initial={{ scale: 1.08, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  src="/images/Healthsense.jpg"
                  alt="HealthSense kiosk"
                  className="w-full h-full object-contain"
                />

                <div className="absolute top-4 left-4 flex gap-2 pointer-events-none">
                  <motion.div initial={{ opacity: 0, y: -8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <Badge variant="success" className="text-[10px] font-mono px-2.5 py-1">
                      <Sparkles className="w-3 h-3 mr-1" />
                      CAPSTONE
                    </Badge>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: -8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
                    <Badge variant="accent" className="text-[10px] font-mono px-2.5 py-1">
                      DEFENDED · BATCH 2026
                    </Badge>
                  </motion.div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
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
                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                    HealthSense Kiosk
                  </h3>
                  <p className="text-[14.5px] text-gray-400 leading-relaxed">
                    Undergraduate Capstone Project (CIT-U 2026). A standalone,
                    self-service vital signs monitoring kiosk powered by Raspberry Pi
                    5. Integrates biometric sensors to capture heart rate, SpO2, body
                    temperature, and blood pressure through an intuitive touchscreen
                    interface for viewing health readings.
                  </p>
                </motion.div>

                <div className="space-y-3">
                  <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="text-[11px] font-mono uppercase tracking-[0.18em] text-gray-500">
                    Frontend
                  </motion.p>
                  <div className="grid grid-cols-2 gap-2">
                    {healthSenseArchitecture.map((arch, archIndex) => (
                      <motion.div
                        key={arch.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + archIndex * 0.08 }}
                        className="flex flex-col items-start gap-1 p-3 rounded-lg border border-white/[0.06] bg-white/[0.02]"
                      >
                        <div className="flex items-center gap-1.5">
                          <arch.icon className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                            {arch.label}
                          </span>
                        </div>
                        <span className="text-[12px] font-medium text-white leading-snug">
                          {arch.detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-[11px] font-mono uppercase tracking-[0.18em] text-gray-500">
                    Stack
                  </motion.p>
                  <div className="flex flex-wrap gap-1.5">
                    {healthSenseStack.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.9, y: 6 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.28 + tagIndex * 0.05 }}
                        whileHover={{ y: -2 }}
                      >
                        <Badge variant="secondary" className="text-[11px] font-mono px-2.5 py-1">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -4 }}
            >
              <Card className="group h-full flex flex-col overflow-hidden border-white/[0.06] bg-white/[0.015] transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.03]">
                <div
                  className="relative flex h-32 items-center justify-between overflow-hidden border-b border-white/[0.06] px-5"
                  style={{
                    background: `radial-gradient(ellipse at 80% 50%, ${projectAccents[project.accent].glow}, transparent 68%), linear-gradient(135deg, rgba(255,255,255,0.035), transparent 65%)`,
                  }}
                >
                  <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
                  <span className={`relative text-[10px] font-mono uppercase tracking-[0.16em] ${projectAccents[project.accent].label}`}>
                    {project.category}
                  </span>
                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className={`relative mr-3 ${projectAccents[project.accent].icon}`}
                  >
                    <project.icon size={54} strokeWidth={1.1} />
                  </motion.div>
                </div>
                <CardContent className="p-5 flex-1 flex flex-col space-y-4">
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 + index * 0.08 }} className="space-y-2">
                    <h4 className="text-[16px] font-semibold text-white tracking-tight group-hover:text-white transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-[13px] text-gray-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </motion.div>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.08 + index * 0.08 + tagIndex * 0.04 }}
                        whileHover={{ y: -2 }}
                      >
                        <Badge variant="muted" className="text-[10px] font-mono px-2 py-0.5 border-white/[0.05]">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
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

