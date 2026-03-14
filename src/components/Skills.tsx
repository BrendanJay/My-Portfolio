import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { 
  Network, 
  ShoppingCart, 
  Settings, 
  Router, 
  Headphones, 
  Server 
} from "lucide-react"
import { cn } from "../lib/utils"

const skills = [
  { 
    name: "Network Troubleshooting", 
    icon: Network, 
    color: "text-secondary", 
    bg: "bg-secondary/10", 
    glow: "neon-glow-cyan" 
  },
  { 
    name: "POS Systems", 
    icon: ShoppingCart, 
    color: "text-accent", 
    bg: "bg-accent/10", 
    glow: "neon-glow-magenta" 
  },
  { 
    name: "Network Configuration", 
    icon: Settings, 
    color: "text-primary", 
    bg: "bg-primary/10", 
    glow: "neon-glow-purple" 
  },
  { 
    name: "Router Configuration", 
    icon: Router, 
    color: "text-secondary", 
    bg: "bg-secondary/10", 
    glow: "neon-glow-cyan" 
  },
  { 
    name: "Technical Support", 
    icon: Headphones, 
    color: "text-accent", 
    bg: "bg-accent/10", 
    glow: "neon-glow-magenta" 
  },
  { 
    name: "System Deployment", 
    icon: Server, 
    color: "text-primary", 
    bg: "bg-primary/10", 
    glow: "neon-glow-purple" 
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
            Base Stats & <span className="text-secondary neon-glow-cyan">Skill Tree</span>
          </h2>
          <div className="h-1.5 w-32 bg-secondary mt-4 neon-glow-cyan" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.05] border-white/10">
                <CardContent className="p-10 flex flex-col items-center justify-center text-center space-y-6">
                  <div className={cn("p-6 rounded-2xl relative", skill.bg)}>
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(0,0,0,0)",
                          "0 0 20px rgba(var(--neon-color), 0.4)",
                          "0 0 0px rgba(0,0,0,0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={cn("absolute inset-0 rounded-2xl", skill.glow)}
                    />
                    <skill.icon className={cn("w-12 h-12 relative z-10", skill.color)} />
                  </div>

                  <div className="space-y-4 w-full">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {skill.name}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black tracking-widest uppercase">
                        <span className="text-gray-500">Mastery: Lv. MAX</span>
                        <span className="text-secondary">100%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-secondary to-accent"
                        />
                      </div>
                    </div>
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
