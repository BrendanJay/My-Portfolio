import { motion, useMotionValue, useTransform } from "framer-motion"
import { ArrowRight, Copy, Check, MapPin, Building2, Cpu, Network, FileText } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"
import heroImg from "../assets/Profile.png"
import { Link } from "react-router-dom"

export function Hero() {
  const [copied, setCopied] = useState(false)
  const dragX = useMotionValue(0)
  const dragRotation = useTransform(dragX, [-100, 100], [-12, 12])
  const name = "Brendan Jay R. Condes"

  const copyEmail = () => {
    navigator.clipboard.writeText("brendancondes@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 24, 0], y: [0, 18, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-40 h-[28rem] w-[28rem] rounded-full bg-emerald-400/[0.07] blur-[140px] pointer-events-none"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -22, 0], y: [0, -16, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-40 h-[30rem] w-[30rem] rounded-full bg-cyan-400/[0.07] blur-[140px] pointer-events-none"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-[20%] hidden text-cyan-100/[0.055] pointer-events-none lg:block"
      >
        <Cpu size={132} strokeWidth={0.8} />
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[13%] left-[8%] hidden text-emerald-100/[0.05] pointer-events-none lg:block"
      >
        <Network size={88} strokeWidth={0.8} />
      </motion.div>
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
            <motion.div
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              dragElastic={0.45}
              dragSnapToOrigin
              style={{ x: dragX }}
              whileDrag={{ scale: 1.025, cursor: "grabbing" }}
              animate={{ rotate: [-1.5, 1.8, -1.2, 0] }}
              transition={{ rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } }}
              className="relative cursor-grab touch-pan-y"
              aria-label="Profile photo. Drag to swing it like a lanyard."
            >
              <motion.div style={{ rotate: dragRotation, transformOrigin: "50% -28px" }}>
                <div aria-hidden="true" className="absolute -top-8 left-1/2 z-0 h-12 w-14 -translate-x-1/2 rounded-t-full border-x-[7px] border-t-[7px] border-emerald-200/50 shadow-[0_0_14px_rgba(110,231,183,0.14)]" />
                <div className="relative isolate h-60 w-60 rounded-[1.1rem] border border-emerald-200/30 bg-[#07130f] p-3 shadow-[0_0_0_1px_rgba(110,231,183,0.08),0_24px_48px_-16px_rgba(0,0,0,0.55),inset_0_0_24px_rgba(16,185,129,0.08)] sm:h-64 sm:w-64 md:h-72 md:w-72">
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20">
                    <span className="absolute left-3 top-[7px] h-px w-8 bg-gradient-to-r from-emerald-300/20 to-emerald-300/80" />
                    <span className="absolute left-11 top-[7px] h-2 w-px bg-emerald-300/70" />
                    <motion.span
                      animate={{ opacity: [0.55, 1, 0.55], boxShadow: ["0 0 3px rgba(110,231,183,.35)", "0 0 9px rgba(110,231,183,.85)", "0 0 3px rgba(110,231,183,.35)"] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-[41px] top-[13px] h-1.5 w-1.5 rounded-full border border-emerald-200 bg-emerald-300"
                    />
                    <span className="absolute right-3 bottom-[7px] h-px w-8 bg-gradient-to-l from-cyan-300/20 to-cyan-300/80" />
                    <span className="absolute right-11 bottom-[7px] h-2 w-px bg-cyan-300/70" />
                    <span className="absolute right-[41px] bottom-[13px] h-1.5 w-1.5 rounded-full border border-cyan-200 bg-cyan-300 shadow-[0_0_7px_rgba(103,232,249,0.65)]" />
                    <span className="absolute left-[4px] top-1/3 h-px w-2 bg-emerald-300/70" />
                    <span className="absolute right-[4px] top-2/3 h-px w-2 bg-cyan-300/70" />
                  </div>
                  <div className="relative h-full w-full overflow-hidden rounded-lg border border-emerald-100/15 bg-black shadow-[inset_0_0_16px_rgba(0,0,0,0.4)]">
                    <img
                      src={heroImg}
                      alt="Brendan Jay R. Condes"
                      draggable={false}
                      className="h-full w-full select-none object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-center lg:text-left order-1 lg:order-2 space-y-7"
          >
            <div className="space-y-4">
              <div className="space-y-1">
                <motion.h2
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[13px] font-medium text-gray-500 tracking-wide uppercase"
                >
                  Hello, I&apos;m
                </motion.h2>
                <motion.h1
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-balance"
                  aria-label={name}
                >
                  {name.split("").map((char, index) => {
                    const isSpace = char === " "
                    const shimmerDelay = index * 0.08

                    return (
                      <motion.span
                        key={`${char}-${index}`}
                        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                          duration: 0.38,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.4 + index * 0.05,
                        }}
                        className={`metal-name-letter ${isSpace ? "space-char" : ""}`}
                        style={{ animationDelay: `${shimmerDelay}s` }}
                      >
                        {isSpace ? "\u00A0" : char}
                      </motion.span>
                    )
                  })}
                </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="pt-2 text-sm text-gray-500"
                  >
                    Also known as <span className="text-emerald-200">OnichanJay</span>
                  </motion.p>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", backgroundPosition: ["-10% 50%", "110% 50%", "-10% 50%"] }}
                transition={{
                  opacity: { delay: 0.5, duration: 0.8 },
                  y: { delay: 0.5, duration: 0.8 },
                  filter: { delay: 0.5, duration: 0.8 },
                  backgroundPosition: { duration: 12, repeat: Infinity, ease: "linear" },
                }}
                style={{ backgroundSize: "220% 100%" }}
                className="text-xl sm:text-2xl font-medium bg-gradient-to-r from-emerald-200 via-white to-cyan-200 bg-clip-text text-transparent tracking-tight"
              >
                Computer Engineer &amp; Frontend Developer
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-[15px] text-gray-400 leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0"
            >
              I build frontend interfaces and work hands-on with embedded systems,
              biometric sensors, and network hardware.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 text-[13px] text-gray-400"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gray-600" />
                <span>Cebu, Philippines</span>
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
                  View My Work
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>

              <Button asChild variant="outline" size="lg" className="group">
                <a href="/Condes_Resume.docx.pdf" target="_blank" rel="noreferrer">
                  <FileText className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  View Resume
                </a>
              </Button>

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
