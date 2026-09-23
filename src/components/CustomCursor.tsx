import { useEffect, useState, useRef } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isDesktop, setIsDesktop] = useState(false)
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)
  const [ringAnimation, setRingAnimation] = useState<{ x: number; y: number; id: number }[]>([])
  const ringIdRef = useRef(0)

  const springConfig = { damping: 25, stiffness: 220, mass: 0.2 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.matchMedia("(hover: hover) and (pointer: fine)").matches)
    checkScreen()
    window.addEventListener("resize", checkScreen)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      // Detect if hovering over interactive elements
      const target = e.target as HTMLElement
      const isInteractive = Boolean(
        target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.getAttribute("role") === "button",
      )
      setIsHoveringInteractive(isInteractive)

      // Create expanding ring effect periodically
      if (Math.random() > 0.85) {
        const newId = ringIdRef.current++
        setRingAnimation((prev) => [
          ...prev.slice(-1), // Keep only the most recent ring
          { x: e.clientX, y: e.clientY, id: newId },
        ])
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("resize", checkScreen)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  if (!isDesktop) return null

  const cursorColor = isHoveringInteractive ? "rgb(34, 197, 94)" : "rgb(255, 255, 255)" // green for links, white for default

  return (
    <>
      {/* Glow blob following cursor */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-white/[0.02] pointer-events-none z-[9998] mix-blend-screen"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          maskImage: "radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)",
        }}
      />

      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[10000] shadow-lg"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: cursorColor,
          boxShadow: `0 0 8px ${isHoveringInteractive ? "rgba(34, 197, 94, 0.6)" : "rgba(255, 255, 255, 0.4)"}`,
          transition: "background-color 0.2s ease, box-shadow 0.2s ease",
        }}
      />

      {/* Trailing ring effect */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border border-white/40 rounded-full pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: isHoveringInteractive ? "rgba(34, 197, 94, 0.5)" : "rgba(255, 255, 255, 0.3)",
          transition: "border-color 0.2s ease",
        }}
        animate={{
          scale: isHoveringInteractive ? 1.3 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Expanding rings on movement */}
      {ringAnimation.map((ring) => (
        <motion.div
          key={ring.id}
          className="fixed top-0 left-0 border rounded-full pointer-events-none z-[9997]"
          initial={{
            x: ring.x,
            y: ring.y,
            width: 8,
            height: 8,
            opacity: 0.8,
            borderColor: isHoveringInteractive ? "rgba(34, 197, 94, 0.6)" : "rgba(255, 255, 255, 0.4)",
          }}
          animate={{
            width: 32,
            height: 32,
            opacity: 0,
            translateX: "-50%",
            translateY: "-50%",
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          onAnimationComplete={() => {
            setRingAnimation((prev) => prev.filter((r) => r.id !== ring.id))
          }}
        />
      ))}
    </>
  )
}
