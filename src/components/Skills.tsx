import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Code2, Network } from "lucide-react"
import { hardwareSkills, softwareSkills, type Competency } from "../data/skills"

function MatrixCard({
  skill,
  index,
  tone,
}: {
  skill: Competency
  index: number
  tone: "hardware" | "software"
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Card className="group h-full border-white/[0.06] bg-white/[0.015] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.03]">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border transition-colors ${tone === "hardware" ? "border-emerald-300/10 bg-emerald-300/[0.045] group-hover:border-emerald-300/25" : "border-cyan-300/10 bg-cyan-300/[0.045] group-hover:border-cyan-300/25"}`}>
              <skill.icon
                className={`h-5 w-5 ${tone === "hardware" ? "text-emerald-100/70" : "text-cyan-100/70"}`}
                strokeWidth={1.8}
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-[15px] font-semibold text-white tracking-tight">
                {skill.name}
              </h3>
              <p className="text-[13px] text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Skills() {
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
              Practical Skills
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
              A mix of frontend development, embedded systems, networking, and hands-on IT support.
            </motion.p>
          </div>
        </motion.div>

        <div className="space-y-12">
          {/* Hardware & Network */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  className="p-1.5 rounded-md bg-amber-500/10 border border-amber-500/20"
                >
                  <Network className="w-4 h-4 text-emerald-200" />
                </motion.div>
                <div>
                  <h3 className="text-[17px] font-semibold text-white tracking-tight">
                    Hardware &amp; Network Infrastructure
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hardwareSkills.map((skill, i) => (
                <MatrixCard key={skill.name} skill={skill} index={i} tone="hardware" />
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Software Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 }}
                  className="p-1.5 rounded-md bg-blue-500/10 border border-blue-500/20"
                >
                  <Code2 className="w-4 h-4 text-cyan-200" />
                </motion.div>
                <div>
                  <h3 className="text-[17px] font-semibold text-white tracking-tight">
                    Software Development
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {softwareSkills.map((skill, i) => (
                <MatrixCard key={skill.name} skill={skill} index={i + 3} tone="software" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
