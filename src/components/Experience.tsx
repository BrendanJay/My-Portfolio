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
} from "lucide-react"

interface TimelineEntry {
  id: string
  role: string
  company: string
  location: string
  period: string
  duration: string
  status: "Completed" | "In Progress"
  description: string
  highlights: string[]
  tags: string[]
}

const timeline: TimelineEntry[] = [
  {
    id: "ojt-codelikeus",
    role: "IT Support Intern",
    company: "CodeLikeUs Technologies Inc.",
    location: "Manila, Philippines",
    period: "June 2025 — July 2025",
    duration: "8 weeks",
    status: "Completed",
    description:
      "On-the-job training rotation covering end-user support and internal IT operations in a fast-moving technology services environment.",
    highlights: [
      "Provided tier-1 technical support and troubleshooting for hardware and software issues across workstations and peripherals.",
      "Assisted in network configuration, router setup, and POS system deployment for retail clients.",
      "Gained hands-on experience in a professional IT environment adhering to change management and ticketing workflows.",
      "Documented system configurations and assisted with driver and assisted with asset inventory tracking.",
    ],
    tags: ["POS Deployment", "Networking", "Windows Desktop Support", "Hardware Troubleshooting", "Deployment"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative">
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
                04 / Experience
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Work &amp; Training
            </h2>
            <p className="mt-3 text-[15px] text-gray-400 max-w-md leading-relaxed">
              Professional roles, internships, and applied training programs that
              shaped my approach to building and training.
            </p>
          </div>
          <Badge variant="muted" className="w-fit font-mono text-[11px]">
            {timeline.length} role{timeline.length === 1 ? "" : "s"} on record
          </Badge>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/[0.06] to-transparent hidden sm:block" />

          <div className="space-y-8">
            {timeline.map((entry, entryIndex) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: entryIndex * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-8 top-7 -translate-x-1/2 w-3 h-3 rounded-full bg-[#08090a] border border-white/15 z-10 hidden sm:block">
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: entryIndex * 0.15 }}
                  className="absolute inset-0 rounded-full bg-emerald-400 blur-sm blur-[1px]"
                />
              </div>

              <div className="sm:pl-16 md:pl-20">
                <Card className="overflow-hidden border-white/[0.06] bg-white/[0.015] shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset]">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left rail */}
                    <div className="p-6 md:p-8 lg:p-10 lg:border-b lg:border-b-0 lg:border-r border-white/[0.05] bg-white/[0.015] lg:min-w-[260px] lg:max-w-[320px]">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/15 flex-shrink-0">
                          <Briefcase className="w-5 h-5 text-emerald-400" strokeWidth={1.9} />
                        </div>

                        <div className="space-y-3 min-w-0">
                          <div>
                            <h3 className="text-lg font-semibold text-white tracking-tight leading-snug">
                              {entry.role}
                            </h3>
                            <div className="flex items-center gap-1.5 mt-1 text-[13px] text-gray-300">
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

                          <div className="pt-1">
                            <Badge
                              variant={entry.status === "Completed" ? "success" : "accent"}
                              className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1"
                            >
                              {entry.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right content */}
                    <CardContent className="p-6 md:p-8 lg:p-10 flex-1 space-y-6">
                      <p className="text-[14px] text-gray-400 leading-relaxed">
                        {entry.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="text-[11px] font-mono uppercase tracking-[0.18em] text-gray-500">
                          Key Contributions
                        </h4>
                        <ul className="space-y-2.5">
                          {entry.highlights.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -6 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.35, delay: 0.15 + i * 0.06 }}
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
                        {entry.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-[10.5px] font-mono px-2.5 py-1"
                          >
                            {tag}
                          </Badge>
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
