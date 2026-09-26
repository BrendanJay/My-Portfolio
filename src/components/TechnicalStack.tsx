import { motion } from "framer-motion"
import { Cpu } from "lucide-react"
import { techGroups } from "../data/technicalStack"

export function TechnicalStack() {
  return (
    <section id="systems" className="py-24 px-4 sm:px-6 relative">
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 0.055, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute right-[8%] top-20 hidden text-emerald-100 pointer-events-none lg:block"
      >
        <Cpu size={164} strokeWidth={0.7} />
      </motion.div>
      <div className="max-w-6xl mx-auto space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
              Technical Stack
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
              transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
              className="mt-3 text-[15px] text-gray-400 max-w-md leading-relaxed"
            >
              Tools I use for frontend work and computer engineering.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {techGroups.map((group, groupIndex) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.08, ease: "easeOut" }}
              className="space-y-5"
            >
              <h3 className="text-lg font-semibold text-white">{group.name}</h3>
              <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {group.items.map((item, itemIndex) => {
                  const Icon = item.icon
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.35, delay: itemIndex * 0.05, ease: "easeOut" }}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-3 py-3.5 transition-colors duration-300"
                    >
                      <Icon className="w-4 h-4 shrink-0 text-gray-400 transition-all duration-300 group-hover:text-emerald-200" strokeWidth={1.8} />
                      <span className="text-[14px] text-gray-200 transition-colors duration-300 group-hover:text-white">{item.name}</span>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

