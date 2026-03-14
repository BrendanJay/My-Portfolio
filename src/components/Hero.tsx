import { motion } from "framer-motion"
import { Sparkles, Download, ArrowRight, Eye } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import heroImg from "../assets/Profile.png"
import resumeImg from "../assets/Resume.png" // User will add this later

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/30 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Profile Image (Left on Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-start order-2 md:order-1"
        >
          <div className="relative group">
            {/* Rotating Neon Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,#00FFFF,#FF00DC,#9333EA,#00FFFF)] p-1 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:blur-md"
            />
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background bg-card/50 transition-transform duration-500 group-hover:scale-[1.05] scanline">
              <img
                src={heroImg}
                alt="Brendan Jay R. Condes"
                className="w-full h-full object-cover transition-all duration-300"
              />
              {/* Scanline overlay (handled via CSS class) */}
              <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Text Content (Right on Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left order-1 md:order-2 space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Badge variant="legendary" className="px-4 py-1 text-sm gap-2">
              <Sparkles className="w-4 h-4" />
              Level 99 Developer
            </Badge>
          </motion.div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-400 tracking-wider">
              Welcome to my Portfolio
            </h2>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              I'm <span className="text-neon-cyan">Brendan Jay R. Condes</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              a.k.a OnichanJay
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 font-medium max-w-lg">
            Full-Stack Developer & Content Creator
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button variant="neon" size="lg" className="group">
              View Quests
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="border-gray-700 hover:border-primary/50 hover:bg-primary/10 gap-2">
                  <Eye className="w-4 h-4" />
                  View Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl glass-panel border-white/10 p-0 overflow-hidden bg-card/95">
                <DialogHeader className="p-6 pb-0 flex flex-row items-center justify-between border-b border-white/5">
                  <DialogTitle className="text-xl font-bold text-white">My Resume</DialogTitle>
                  <Button asChild variant="neon" size="sm" className="h-9">
                    <a href={resumeImg} download="Brendan_Jay_Condes_Resume.png" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </Button>
                </DialogHeader>
                <div className="p-6 overflow-y-auto max-h-[80vh] flex justify-center bg-black/40">
                  <img 
                    src={resumeImg} 
                    alt="Resume Preview" 
                    className="max-w-full h-auto rounded-lg shadow-2xl border border-white/10"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x800/1a1f2e/ffffff?text=Resume+Image+Not+Found\nAdd+Resume.png+to+assets";
                    }}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
