import { motion } from "framer-motion"
import { ArrowRight, Eye, Download, Copy, Check, MapPin, Building2 } from "lucide-react"
import { useState } from "react"
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
import resumeImg from "../assets/Resume.png"
import { Link } from "react-router-dom"

export function Hero() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("brendanjay.condes@email.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.05),rgba(0,0,0,0))] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-white/20 via-white/[0.08] to-white/[0.02] blur-[0px]" />
              
              <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_48px_-16px_rgba(0,0,0,0.5)]">
                <img
                  src={heroImg}
                  alt="Brendan Jay R. Condes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-[#0e0f11]/95 backdrop-blur-sm shadow-lg"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-mono font-semibold tracking-wider text-emerald-400 uppercase">
                  System: Online
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-center lg:text-left order-1 lg:order-2 space-y-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2"
            >
              <Badge variant="secondary" className="font-mono text-[11px] px-3 py-1 tracking-wide">
                <span className="text-gray-500 mr-1">›</span>
                sys.user: OnichanJay
              </Badge>
              <Badge variant="muted" className="font-mono text-[11px] px-3 py-1">
                v3.2.0 — production
              </Badge>
            </motion.div>

            <div className="space-y-4">
              <div className="space-y-1">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="text-[13px] font-medium text-gray-500 tracking-wide uppercase"
                >
                  Hello, I&apos;m
                </motion.h2>
                <motion.h1
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05] text-balance"
                >
                  Brendan Jay R. Condes
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl sm:text-2xl font-medium bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent tracking-tight"
              >
                Computer Engineer &amp; Full-Stack Developer
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-[15px] text-gray-400 leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0"
            >
              Building reliable systems at the intersection of software and hardware. 
              Experienced in full-stack web development, embedded IoT solutions, and 
              network infrastructure deployment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 text-[13px] text-gray-400"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gray-600" />
                <span>Philippines</span>
              </div>
              <span className="text-gray-700 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-gray-600" />
                <span>Open to new opportunities</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <Link to="/#projects">
                <Button size="lg" className="group">
                  View Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg">
                    <Eye className="w-4 h-4" />
                    View Resume
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl border-white/10 p-0 overflow-hidden bg-[#0b0c0e]">
                  <DialogHeader className="p-5 pb-0 flex flex-row items-center justify-between border-b border-white/[0.06]">
                    <DialogTitle className="text-[15px] font-semibold text-white">
                      Resume — Brendan Jay R. Condes
                    </DialogTitle>
                    <Button asChild size="sm" className="h-8 text-[12px]">
                      <a href={resumeImg} download="Brendan_Jay_Condes_Resume.png" className="flex items-center gap-1.5">
                        <Download className="w-3.5 h-3.5" />
                        Download
                      </a>
                    </Button>
                  </DialogHeader>
                  <div className="p-6 overflow-y-auto max-h-[75vh] flex justify-center bg-black/40">
                    <img 
                      src={resumeImg} 
                      alt="Resume Preview" 
                      className="max-w-full h-auto rounded-lg border border-white/[0.06] shadow-2xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "https://placehold.co/600x800/0b0c0e/ffffff?text=Resume+Image+Not+Found\nAdd+Resume.png+to+assets"
                      }}
                    />
                  </div>
                </DialogContent>
              </Dialog>

              <Button variant="ghost" size="lg" onClick={copyEmail}>
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Email
                  </>
                )}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
