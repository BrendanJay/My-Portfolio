import { motion, AnimatePresence } from "framer-motion"
import { X, Volume2, VolumeX } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Button } from "./ui/button"

interface VideoPlayerProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  title: string
}

export function VideoPlayer({ isOpen, onClose, videoSrc, title }: VideoPlayerProps) {
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Content */}
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              controls
              muted={isMuted}
              className="w-full h-full"
            />

            {/* Controls Overlay (Custom) */}
            <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
              <h3 className="text-white font-bold text-lg md:text-xl truncate pr-4">
                {title}
              </h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white hover:bg-white/10 rounded-full"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-white hover:bg-white/10 rounded-full"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
