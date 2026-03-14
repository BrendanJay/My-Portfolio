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
  Blocks 
} from "lucide-react"

const techStack = [
  { 
    name: "React", 
    level: 95, 
    rarity: "Legendary", 
    icon: Blocks, 
    color: "text-purple-400", 
    bg: "bg-purple-400/10" 
  },
  { 
    name: "TypeScript", 
    level: 90, 
    rarity: "Epic", 
    icon: Code2, 
    color: "text-accent", 
    bg: "bg-accent/10" 
  },
  { 
    name: "Tailwind CSS", 
    level: 92, 
    rarity: "Epic", 
    icon: Wind, 
    color: "text-accent", 
    bg: "bg-accent/10" 
  },
  { 
    name: "Node.js", 
    level: 88, 
    rarity: "Rare", 
    icon: Terminal, 
    color: "text-secondary", 
    bg: "bg-secondary/10" 
  },
  { 
    name: "PostgreSQL", 
    level: 85, 
    rarity: "Rare", 
    icon: Database, 
    color: "text-secondary", 
    bg: "bg-secondary/10" 
  },
  { 
    name: "Next.js", 
    level: 90, 
    rarity: "Epic", 
    icon: Layout, 
    color: "text-accent", 
    bg: "bg-accent/10" 
  },
]

export function Equipment() {
  return (
    <section id="equipment" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
            Equipment <span className="text-secondary neon-glow-cyan">Loadout</span>
          </h2>
          <div className="h-1.5 w-32 bg-secondary mt-4 neon-glow-cyan" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:neon-glow-cyan border-white/10">
                <CardContent className="p-8 space-y-6">
                  {/* Header: Icon & Rarity */}
                  <div className="flex items-center justify-between">
                    <div className={cn("p-4 rounded-full", tech.bg)}>
                      <tech.icon className={cn("w-8 h-8", tech.color)} />
                    </div>
                    <Badge variant={tech.rarity.toLowerCase() as any} className="uppercase font-bold tracking-widest text-[10px] px-3">
                      {tech.rarity}
                    </Badge>
                  </div>

                  {/* Body: Name & Level */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">
                      {tech.name}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-end text-sm">
                        <span className="text-gray-400 font-medium">Mastery Level</span>
                        <span className="text-secondary font-bold">{tech.level}%</span>
                      </div>
                      
                      <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary neon-glow-cyan rounded-full"
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
