import { motion } from "framer-motion"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Github, ExternalLink, Star } from "lucide-react"
import { cn } from "../lib/utils"

const projects = [
  {
    title: "Gym Management System",
    difficulty: "Medium",
    xp: 500,
    description: "A comprehensive gym management platform with member tracking, class scheduling, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    difficultyColor: "gold"
  },
  {
    title: "Petify",
    difficulty: "Hard",
    xp: 800,
    description: "A pet shop platform for adoption, buying, and community chat. Connect with fellow pet lovers and find your perfect companion.",
    tags: ["React", "Firebase", "Tailwind", "WebSocket"],
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1586&auto=format&fit=crop",
    difficultyColor: "destructive"
  },
  {
    title: "Bidbay",
    difficulty: "Hard",
    xp: 900,
    description: "A live auction platform with real-time bidding, user authentication, and secure payment processing.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "WebSocket"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop",
    difficultyColor: "destructive"
  }
]

export function Projects() {
  return (
    <section id="quests" className="py-24 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
            Completed <span className="text-accent neon-glow-magenta">Quests</span>
          </h2>
          <div className="h-1.5 w-32 bg-accent mt-4 neon-glow-magenta" />
        </motion.div>

        {/* Main Quest (Featured) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <Badge variant="gold" className="px-6 py-2 text-sm font-black tracking-[0.2em] bg-yellow-500 text-black animate-pulse shadow-[0_0_20px_rgba(234,179,8,0.5)]">
              ⭐ MAIN QUEST - ONGOING ⭐
            </Badge>
          </div>
          
          <Card className="overflow-hidden border-2 border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.2)] bg-card/80">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173bdb999ef?q=80&w=1470&auto=format&fit=crop" 
                  alt="HealthSense Kiosk"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              
              <CardContent className="p-8 lg:p-12 space-y-6">
                <div className="flex items-center justify-between">
                  <Badge variant="legendary" className="text-sm px-4 py-1">LEGENDARY</Badge>
                  <Badge variant="gold" className="text-sm px-4 py-1">+1500 XP</Badge>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white">HealthSense Kiosk</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    My College Thesis project: An IoT-based health monitoring system with real-time vital signs tracking and data analytics.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["IoT", "React", "Node.js", "Arduino", "MongoDB"].map(tag => (
                    <Badge key={tag} variant="outline" className="border-white/10 text-gray-400">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="neon" className="bg-gradient-to-r from-yellow-500 to-orange-500 shadow-[0_0_15px_rgba(234,179,8,0.4)] px-8 h-12 text-lg font-bold">
                  View Progress
                </Button>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Regular Quests */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:neon-glow-purple">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  
                  <Badge 
                    variant={project.difficultyColor as any} 
                    className="absolute top-4 right-4 uppercase text-[10px] font-bold"
                  >
                    {project.difficulty}
                  </Badge>
                  
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 text-yellow-400 font-bold text-sm">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    +{project.xp} XP
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-[10px] border-white/5 bg-white/5">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 gap-2 border-white/10 hover:bg-white/5">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="neon" size="sm" className="flex-1 gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Quest
                    </Button>
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
