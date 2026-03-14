import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { Equipment } from "../components/Equipment"
import { Projects } from "../components/Projects"
import { Skills } from "../components/Skills"
import { Experience } from "../components/Experience"
import { Content } from "../components/Content"
import { Contact, Footer } from "../components/Contact"
import { CustomCursor } from "../components/CustomCursor"

export function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [hash])
  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white selection:bg-primary selection:text-white">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Equipment />
        <Projects />
        <Content />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
