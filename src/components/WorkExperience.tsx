import { motion } from "framer-motion"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Building2,
  MapPin,
  Clock,
  GraduationCap,
  Workflow,
} from "lucide-react"
import { timeline } from "../data/experience"

export function WorkExperience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative">
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
              Work &amp; Training
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
              My internship and technical training in IT support, networking, and automation.
            </motion.p>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/[0.06] to-transparent hidden sm:block" />

          <div className="space-y-8">
            {timeline.map((entry, entryIndex) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: entryIndex * 0.08, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute left-4 md:left-8 top-7 -translate-x-1/2 w-3 h-3 rounded-full bg-[#08090a] border border-white/15 z-10 hidden sm:block">
                </div>

                <div className="sm:pl-16 md:pl-20">
                  <Card className="overflow-hidden border-white/[0.06] bg-white/[0.015] shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset]">
                    <div className="flex flex-col lg:flex-row">
                      <div className="p-6 md:p-8 lg:p-10 lg:border-b lg:border-b-0 lg:border-r border-white/[0.05] bg-white/[0.015] lg:min-w-[260px] lg:max-w-[320px]">
                        <div className="flex items-start gap-4">
                          <div className={`p-2.5 rounded-lg border flex-shrink-0 ${
                            entry.type === "training"
                              ? "bg-sky-500/10 border-sky-500/15"
                              : "bg-emerald-500/10 border-emerald-500/15"
                          }`}>
                            {entry.type === "training" ? (
                              <GraduationCap className="w-5 h-5 text-sky-400" strokeWidth={1.9} />
                            ) : (
                              <Briefcase className="w-5 h-5 text-emerald-400" strokeWidth={1.9} />
                            )}
                          </div>

                          <div className="space-y-3 min-w-0">
                            <div>
                              <h3 className="text-[15.5px] font-semibold text-white tracking-tight leading-snug">
                                {entry.role}
                              </h3>
                              <div className="flex items-center gap-1.5 mt-1.5 text-[13px] text-gray-300">
                                <Building2 className="w-3.5 h-3.5 text-gray-500" />
                                <span className="truncate">{entry.company}</span>
                              </div>
                            </div>

                            <div className="space-y-1.5 text-[12px] text-gray-400">
                              <div className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-gray-600" />
                                {entry.location}
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-gray-600" />
                                {entry.period}
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-gray-600" />
                                {entry.duration}
                              </div>
                            </div>

                            <div className="pt-1 flex flex-wrap gap-1.5">
                              <Badge
                                variant={entry.status === "Completed" ? "success" : "accent"}
                                className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1"
                              >
                                {entry.status}
                              </Badge>
                              {entry.type === "training" && (
                                <Badge variant="muted" className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1">
                                  <Workflow className="w-2.5 h-2.5 mr-1" />
                                  Training
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6 md:p-8 lg:p-10 flex-1 space-y-6">
                        <p className="text-[14px] text-gray-400 leading-relaxed">
                          {entry.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="text-[11px] font-mono uppercase tracking-[0.18em] text-gray-500">
                            What I worked on
                          </h4>
                          <ul className="space-y-2.5">
                            {entry.highlights.map((item, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -8 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                                className="flex items-start gap-3 text-[13.5px] text-gray-300 leading-relaxed"
                              >
                                <CheckCircle2
                                  className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"
                                  strokeWidth={2.2}
                                />
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {entry.tags.map((tag, tagIndex) => (
                            <motion.div
                              key={tag}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: tagIndex * 0.05 }}
                            >
                              <Badge
                                variant="secondary"
                                className="text-[10.5px] font-mono px-2.5 py-1"
                              >
                                {tag}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

