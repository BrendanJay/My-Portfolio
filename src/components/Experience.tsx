import { motion } from "framer-motion"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { Briefcase, Calendar, CheckCircle2, TrendingUp } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative bg-black/30 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
            Side <span className="text-green-400 neon-glow-green">Quests</span>
          </h2>
          <div className="h-1.5 w-32 bg-green-400 mt-4 neon-glow-green" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="glass-panel border-green-500/30 overflow-hidden group">
            <div className="flex flex-col md:flex-row">
              {/* Icon Section */}
              <div className="p-8 md:p-12 flex items-center justify-center bg-green-500/5 relative">
                <div className="p-8 rounded-3xl bg-green-500/10 relative">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-green-500/20 rounded-3xl blur-xl"
                  />
                  <Briefcase className="w-16 h-16 text-green-400 relative z-10" />
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="p-8 md:p-12 space-y-8 flex-1">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className="text-3xl font-black text-white">IT Support Intern</h3>
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Badge variant="green" className="bg-green-500 text-black px-4 py-1 font-bold flex gap-1 items-center border-none">
                        <CheckCircle2 className="w-4 h-4" />
                        OJT COMPLETED
                      </Badge>
                    </motion.div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400 font-medium">
                    <div className="flex items-center gap-2 text-secondary">
                      <TrendingUp className="w-4 h-4" />
                      CodeLikeUs Technologies Inc.
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      June - July 2025
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-black tracking-[0.2em] text-gray-500 uppercase">Objectives & Achievements</h4>
                  <ul className="space-y-3">
                    {[
                      "Provided technical support and troubleshooting for hardware and software issues",
                      "Assisted in network configuration and POS system deployment",
                      "Gained hands-on experience in professional IT environment"
                    ].map((objective, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-3 text-gray-300 group/item"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span className="text-sm md:text-base leading-relaxed">{objective}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Badge variant="green" className="bg-green-500/20 text-green-400 border-green-500/50 px-6 py-2 text-lg font-black tracking-tighter">
                    +1000 XP Earned
                  </Badge>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
