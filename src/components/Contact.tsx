import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Mail, Phone, Facebook, Linkedin, Music2, Send, ArrowUpRight } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [copied, setCopied] = useState(false)

  const email = "brendancondes@gmail.com"
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto w-fit text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-balance"
          >
            Get in touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-3 h-px rounded-full bg-gradient-to-r from-emerald-300 via-white/80 to-cyan-300"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
            className="mt-4 text-[15px] text-gray-400 max-w-lg mx-auto leading-relaxed"
          >
            I&apos;m based in Cebu and open to frontend opportunities. For questions
            about my work, send me an email.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
                  <motion.button
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -1 }}
                    onClick={copyEmail}
                    className="text-2xl md:text-3xl font-semibold tracking-tight text-white hover:text-white/85 transition-colors group inline-flex items-center gap-2"
                  >
                    <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-emerald-300/80 after:to-cyan-300/80 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                      {email}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-gray-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </motion.button>
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
                  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} whileHover={{ y: -2 }}>
                    <Button asChild size="lg" className="h-11 gap-2 group">
                      <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer">
                        <Mail className="w-4 h-4" />
                        Send an email
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }} whileHover={{ y: -2 }}>
                    <Button variant="outline" size="lg" className="h-11" onClick={copyEmail}>
                      {copied ? "Copied" : "Copy address"}
                    </Button>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 pt-1 text-sm"
                  aria-label="Phone numbers"
                >
                  <Phone className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  <a href="tel:+639568474616" className="text-gray-300 transition-colors hover:text-white">
                    09568474616
                  </a>
                  <span className="text-gray-600" aria-hidden="true">/</span>
                  <a href="tel:+639917725971" className="text-gray-300 transition-colors hover:text-white">
                    09917725971
                  </a>
                </motion.div>
              </div>

              <div className="pt-8 border-t border-white/[0.06] space-y-5">
                <h4 className="text-center text-[11px] font-mono uppercase tracking-[0.2em] text-gray-500">
                  Or find me on
                </h4>
                <div className="flex justify-center flex-wrap gap-3">
                  {[
                    {
                      icon: Facebook,
                      label: "Facebook",
                      href: "https://www.facebook.com/brendan.condes",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      href: "https://linkedin.com/in/brendan-jay-condes",
                    },
                    {
                      icon: Music2,
                      label: "TikTok",
                      href: "https://www.tiktok.com/@onichanjay.mlbb?is_from_webapp=1&sender_device=pc",
                    },
                    {
                      icon: Mail,
                      label: "Gmail",
                      href: gmailComposeUrl,
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.12 + index * 0.06 }}
                      whileHover={{ y: -2 }}
                      className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.045] hover:border-white/[0.14] text-gray-300 hover:text-white transition-all"
                    >
                      <social.icon className="w-4 h-4" strokeWidth={1.8} />
                      <span className="text-[13px] font-medium">
                        {social.label}
                      </span>
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

