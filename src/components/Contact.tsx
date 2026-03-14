import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
            Start a New <span className="text-primary neon-glow-purple">Quest</span>
          </h2>
          <div className="h-1.5 w-32 bg-primary mt-4 mx-auto neon-glow-purple" />
          <p className="mt-8 text-lg text-gray-400 font-medium">
            Ready to collaborate? Let's build something legendary together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="glass-panel border-white/10 overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.1)]">
            <CardContent className="p-8 md:p-12 space-y-12">
              <div className="space-y-6 text-center">
                <div className="inline-flex p-6 rounded-full bg-primary/10 relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                  <Mail className="w-12 h-12 text-primary relative z-10" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-white">Let's Connect</h3>
                  <p className="text-gray-400 max-w-md mx-auto">
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
                </div>

                <div className="pt-4">
                  <Button variant="neon" size="lg" className="px-12 h-14 text-lg font-bold gap-3 group">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-6">
                <h4 className="text-center text-xs font-black tracking-[0.2em] text-gray-500 uppercase">Find me on</h4>
                <div className="flex justify-center gap-6">
                  {[
                    { icon: Github, label: "GitHub", href: "https://github.com" },
                    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="p-4 rounded-xl border border-white/10 hover:border-primary/50 hover:bg-primary/5 text-gray-400 hover:text-primary transition-all duration-300"
                    >
                      <social.icon className="w-6 h-6" />
                      <span className="sr-only">{social.label}</span>
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
    <footer className="py-12 px-6 border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto space-y-4">
        <p className="text-sm text-gray-500 font-medium">
          © 2026 Brendan Jay R. Condes (OnichanJay). Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
