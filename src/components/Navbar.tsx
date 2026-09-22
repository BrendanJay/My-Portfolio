import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Terminal } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"
import { Link, useLocation } from "react-router-dom"

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Systems", href: "/#systems" },
  { name: "Projects", href: "/#projects" },
  { name: "Competencies", href: "/#competencies" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          className="flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center">
            <Terminal className="w-4 h-4 text-white" strokeWidth={2} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight text-white">
              OnichanJay
            </span>
            <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">
              Engineer
            </span>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-1 p-1 rounded-lg border border-white/[0.06] bg-white/[0.02]">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
              >
                <Link
                  to={link.href}
                  className="relative px-3.5 py-1.5 text-[13px] font-medium text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/[0.04]"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="ml-4"
          >
            <Button size="sm" className="h-8 text-[12px]">
              Get in touch
            </Button>
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
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[14px] font-medium text-gray-300 hover:text-white px-3.5 py-2.5 rounded-lg hover:bg-white/[0.04] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 mt-1 border-t border-white/[0.06]">
                <Button className="w-full h-9 text-[13px]">
                  Get in touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
