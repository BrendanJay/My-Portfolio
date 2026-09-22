import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { Equipment } from "../components/Equipment"
import { Projects } from "../components/Projects"
import { Content } from "../components/Content"
import { Skills } from "../components/Skills"
import { Experience } from "../components/Experience"
import { Contact, Footer } from "../components/Contact"
import { CustomCursor } from "../components/CustomCursor"

export function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "")
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 30)
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [hash])

  return (
    <div className="min-h-screen bg-[#08090a] text-white antialiased">
      <CustomCursor />
      <Navbar />

      <main className="overflow-hidden">
        <Hero />
        <Equipment />
        <Projects />
        <Skills />
        <Experience />
        <Content />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
