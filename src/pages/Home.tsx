import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { TechnicalStack } from "../components/TechnicalStack"
import { FeaturedProjects } from "../components/FeaturedProjects"
import { VideoWork } from "../components/VideoWork"
import { Skills } from "../components/Skills"
import { WorkExperience } from "../components/WorkExperience"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
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
    <div className="min-h-screen text-white antialiased">
      <CustomCursor />
      <Navbar />

      <main className="overflow-hidden">
        <Hero />
        <TechnicalStack />
        <FeaturedProjects />
        <Skills />
        <WorkExperience />
        <VideoWork />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
