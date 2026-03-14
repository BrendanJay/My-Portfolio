import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  const springConfig = { damping: 30, stiffness: 300 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    handleResize()
    window.addEventListener("resize", handleResize)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  if (isMobile) return null

  return (
    <>
      {/* Main Glow */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full bg-secondary/30 blur-xl pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-secondary pointer-events-none z-[9999] neon-glow-cyan"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Trail Effect */}
      {[...Array(8)].map((_, i) => (
        <TrailDot 
          key={i} 
          index={i} 
          x={mousePosition.x} 
          y={mousePosition.y} 
        />
      ))}
    </>
  )
}

function TrailDot({ index, x, y }: { index: number; x: number; y: number }) {
  const springConfig = { damping: 30 + index * 5, stiffness: 300 - index * 20 }
  const dotX = useSpring(x, springConfig)
  const dotY = useSpring(y, springConfig)

  useEffect(() => {
    dotX.set(x)
    dotY.set(y)
  }, [x, y, dotX, dotY])

  return (
    <motion.div
      className="fixed top-0 left-0 w-1 h-1 rounded-full bg-secondary pointer-events-none z-[9998]"
      style={{
        x: dotX,
        y: dotY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: 0.5 - index * 0.05,
        scale: 1 - index * 0.1,
      }}
    />
  )
}
