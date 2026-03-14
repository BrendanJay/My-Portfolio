import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Play, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import { useState, useRef } from "react"
import { VideoPlayer } from "./VideoPlayer"

// Example video data - user will replace paths with actual .mp4 files later
const homeVideos = [
  { 
    id: 1, 
    title: "Mobile Legends Fanny Montage #1", 
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1600&auto=format&fit=crop", 
    videoSrc: "/video/Mobile Legend-FannyMontage.mp4",
    category: "Video Edit" 
  },
  { 
    id: 2, 
    title: "Zenpos-Expo", 
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop", 
    videoSrc: "/video/Zenpos.mp4", 
    category: "Motion Graphics" 
  },
  { 
    id: 3, 
    title: "Valorant-Iso Highlights", 
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop", 
    videoSrc: "/video/ValorantIso.mp4", 
    category: "Gaming" 
  },
  { 
    id: 4, 
    title: "Cinematic#1", 
    thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1600&auto=format&fit=crop", 
    videoSrc: "/video/TelescopicCinematic.mp4", 
    category: "Lifestyle" 
  },
  { 
    id: 5, 
    title: "Cinematic Edit#2", 
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop", 
    videoSrc: "/video/Cinematic1.mp4", 
    category: "Commercial" 
  },
  { 
    id: 6, 
    title: "Typography#1", 
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop", 
    videoSrc: "/video/Typography1.mp4", 
    category: "Short Film" 
  },
]

export function Content() {
  const [selectedVideo, setSelectedVideo] = useState<{src: string, title: string} | null>(null)

  return (
    <section id="content" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
              Content <span className="text-secondary neon-glow-cyan">Creation</span>
            </h2>
            <div className="h-1.5 w-32 bg-secondary neon-glow-cyan" />
            <p className="text-gray-400 max-w-xl">
              A collection of my latest video edits, motion graphics, and digital content. 
              Click on a card to view the full production.
            </p>
          </div>

          <Button asChild variant="neon" className="hidden md:flex">
            <Link to="/content-library" className="flex items-center gap-2">
              View All Creations
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className="group relative overflow-hidden border-white/10 hover:border-secondary/50 transition-all duration-500 cursor-pointer aspect-video"
                onClick={() => setSelectedVideo({ src: video.videoSrc, title: video.title })}
              >
                {/* Video Preview (Muted, Auto-play) */}
                <div className="absolute inset-0 w-full h-full">
                  {video.videoSrc ? (
                    <video
                      src={video.videoSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-secondary text-[10px] font-black uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {video.category}
                  </span>
                  <h3 className="text-xl font-black text-white mb-4">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center neon-glow-cyan">
                      <Play className="w-5 h-5 text-black fill-black" />
                    </div>
                    <span className="text-xs font-bold text-white uppercase tracking-tighter">Play with Sound</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden flex justify-center pt-8">
          <Button asChild variant="neon" className="w-full">
            <Link to="/content-library">View All Creations</Link>
          </Button>
        </div>
      </div>

      <VideoPlayer
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoSrc={selectedVideo?.src || ""}
        title={selectedVideo?.title || ""}
      />
    </section>
  )
}
