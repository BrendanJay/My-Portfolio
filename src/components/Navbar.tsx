import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"
import { Link, useLocation } from "react-router-dom"
import { scrollToElement } from "../lib/useLenis"

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Systems", href: "/#systems" },
  { name: "Projects", href: "/#projects" },
  { name: "Competencies", href: "/#competencies" },
  { name: "Experience", href: "/#experience" },
  { name: "Videos", href: "/#content" },
  { name: "Contact", href: "/#contact" },
]

export function Navbar() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState(location.hash || "#about")
  const isHome = location.pathname === "/"
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setActiveHash(location.hash || "#about")
    if (!isHome) return

    const sections = navLinks
      .map((link) => document.getElementById(link.href.replace("/#", "")))
      .filter((section): section is HTMLElement => section !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        const activeSection = entries.find((entry) => entry.isIntersecting)
        if (activeSection) setActiveHash(`#${activeSection.target.id}`)
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [isHome, location.hash, location.pathname])

  // Get Lenis instance from window if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      lenisRef.current = (window as any).lenis || null
    }
  }, [])

  const handleNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only handle if on home page and it's a hash link
    if (!isHome || !href.startsWith("/#")) {
      return
    }

    e.preventDefault()
    const elementId = href.replace("/#", "")
    setActiveHash(`#${elementId}`)

    // Use Lenis if available, otherwise fallback to native smooth scroll
    if (lenisRef.current) {
      scrollToElement(lenisRef.current, elementId)
    } else {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-3",
        isScrolled ? "glass-panel border-b border-white/[0.06]" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col leading-tight"
        >
          <span className="text-[15px] font-semibold tracking-tight text-white">
            Brendan Jay Condes
          </span>
          <span className="text-[10px] text-gray-500 font-medium">
            Computer Engineer · Frontend Developer
          </span>
        </motion.div>

        <div className="hidden md:flex items-center">
          <div className="relative flex items-center gap-1 p-1 rounded-lg border border-white/[0.06] bg-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            {navLinks.map((link, index) => {
              const isActive = activeHash === `#${link.href.split("#")[1]}`

              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className="relative"
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-md bg-gradient-to-r from-emerald-300/18 via-white/[0.06] to-cyan-300/18 shadow-[0_0_18px_rgba(52,211,153,0.18)]"
                    />
                  )}

                  <Link
                    to={link.href}
                    onClick={handleNavClick(link.href)}
                    className={cn(
                      "relative z-10 block rounded-md px-3.5 py-1.5 text-[13px] font-medium transition-all duration-300",
                      isActive ? "text-white" : "text-zinc-400 hover:text-white",
                    )}
                  >
                    <span className="relative">
                      {link.name}
                      {!isActive && (
                        <span className="absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-emerald-300/80 to-cyan-300/80 transition-transform duration-300 group-hover:scale-x-100" />
                      )}
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="ml-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Button asChild size="sm" className="relative h-8 text-[12px] overflow-hidden border border-emerald-300/20 bg-gradient-to-r from-emerald-300/10 via-white/[0.04] to-cyan-300/10 shadow-[0_0_18px_rgba(52,211,153,0.12)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.24),transparent_28%)] before:opacity-80 before:content-['']">
                <Link to="/#contact" onClick={handleNavClick("/#contact")} className="relative z-10">
                  Get in touch
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 rounded-xl overflow-hidden border border-white/[0.06] bg-[#0e0f11]/95 backdrop-blur-xl"
          >
            <div className="flex flex-col p-2 gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => {
                    handleNavClick(link.href)(e as React.MouseEvent<HTMLAnchorElement>)
                    setIsMobileMenuOpen(false)
                  }}
                  className={cn(
                    "rounded-lg px-3.5 py-2.5 text-[14px] font-medium transition-colors hover:bg-white/[0.04] hover:text-white",
                    activeHash === `#${link.href.split("#")[1]}` ? "bg-white/[0.04] text-white" : "text-gray-300",
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 mt-1 border-t border-white/[0.06]">
                <Button asChild className="w-full h-9 text-[13px]">
                  <Link to="/#contact" onClick={handleNavClick("/#contact")}>
                    Get in touch
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
