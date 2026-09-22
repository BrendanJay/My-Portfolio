import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Mail, Github, Linkedin, Twitter, Send, ArrowUpRight } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [copied, setCopied] = useState(false)

  const email = "brendanjay.condes@email.com"

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-white/20" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-500">
              06 / Contact
            </span>
            <span className="w-8 h-px bg-white/20" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-balance">
            Let&apos;s build something together
          </h2>
          <p className="mt-4 text-[15px] text-gray-400 max-w-lg mx-auto leading-relaxed">
            Currently open to engineering roles, contract work, and collaborative
            projects in software, IoT, and network infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="overflow-hidden border-white/[0.06] bg-gradient-to-b from-white/[0.025] to-white/[0.008] shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset]">
            <CardContent className="p-8 md:p-12 space-y-10">
              <div className="space-y-6 text-center">
                <div className="inline-flex p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Mail
                    className="w-6 h-6 text-gray-300"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="space-y-2.5">
                  <button
                    onClick={copyEmail}
                    className="text-2xl md:text-3xl font-semibold tracking-tight text-white hover:text-white/85 transition-colors group inline-flex items-center gap-2"
                  >
                    {email}
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-gray-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </button>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="block text-[12px] font-medium text-emerald-400"
                    >
                      Email copied to clipboard.
                    </motion.span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <Button size="lg" className="h-11 gap-2 group">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${email}`}>Send an email</a>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                  <Button variant="outline" size="lg" className="h-11" onClick={copyEmail}>
                    {copied ? "Copied" : "Copy address"}
                  </Button>
                </div>
              </div>

              <div className="pt-8 border-t border-white/[0.06] space-y-5">
                <h4 className="text-center text-[11px] font-mono uppercase tracking-[0.2em] text-gray-500">
                  Or find me on
                </h4>
                <div className="flex justify-center flex-wrap gap-3">
                  {[
                    {
                      icon: Github,
                      label: "GitHub",
                      href: "https://github.com",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      href: "https://linkedin.com",
                    },
                    {
                      icon: Twitter,
                      label: "Twitter / X",
                      href: "https://twitter.com",
                    },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.045] hover:border-white/[0.14] text-gray-300 hover:text-white transition-all"
                    >
                      <social.icon className="w-4 h-4" strokeWidth={1.8} />
                      <span className="text-[13px] font-medium">
                        {social.label}
                      </span>
                      <Badge
                        variant="muted"
                        className="text-[9px] font-mono px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        OPEN
                      </Badge>
                    </motion.a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[12.5px] text-gray-500 font-medium tracking-wide">
          © {new Date().getFullYear()} Brendan Jay R. Condes. Built with React,
          TypeScript &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-600">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          all systems nominal
        </div>
      </div>
    </footer>
  )
}
