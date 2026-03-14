import { motion } from "framer-motion"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Play, ArrowLeft, Filter, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { CustomCursor } from "../components/CustomCursor"
import { Footer } from "../components/Contact"
import { VideoPlayer } from "../components/VideoPlayer"

// More comprehensive video library - user will replace paths with actual .mp4 files later
const allVideos = [
  { id: 1, title: "Mobile Legends Fanny Montage #1", thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1600&auto=format&fit=crop", videoSrc: "/video/Mobile Legend-FannyMontage.mp4", category: "Video Edit" },
  { id: 2, title: "Zenpos-Expo", thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop", videoSrc: "/video/Zenpos.mp4", category: "Motion Graphics" },
  { id: 3, title: "Valorant-Iso Highlights", thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop", videoSrc: "/video/ValorantIso.mp4", category: "Gaming" },
  { id: 4, title: "Cinematic#1", thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1600&auto=format&fit=crop", videoSrc: "/video/TelescopicCinematic.mp4", category: "Lifestyle" },
  { id: 5, title: "Cinematic Edit#2", thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop", videoSrc: "/video/Cinematic1.mp4", category: "Commercial" },
  { id: 6, title: "Typography#1", thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop", videoSrc: "/video/Typography1.mp4", category: "Short Film" },
  { id: 7, title: "Music Video Promo", thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop", videoSrc: "", category: "Music Video" },
  { id: 8, title: "Sports Highlights", thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop", videoSrc: "", category: "Sports" },
  { id: 9, title: "Nature Documentary", thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop", videoSrc: "", category: "Nature" },
  { id: 10, title: "Corporate Interview", thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop", videoSrc: "", category: "Corporate" },
  { id: 11, title: "Event Aftermovie", thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop", videoSrc: "", category: "Events" },
  { id: 12, title: "Fashion Lookbook", thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1600&auto=format&fit=crop", videoSrc: "", category: "Fashion" },
]

export function ContentLibrary() {
  const [selectedVideo, setSelectedVideo] = useState<{src: string, title: string} | null>(null)

  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white selection:bg-primary selection:text-white">
      <CustomCursor />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button asChild variant="ghost" className="gap-2 hover:bg-white/5">
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </Button>
          
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter text-white">
              Content<span className="text-secondary">Library</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-hover:text-secondary transition-colors" />
              <input 
                type="text" 
                placeholder="Search creations..." 
                className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-secondary transition-all w-64"
              />
            </div>
            <Button variant="outline" size="icon" className="border-white/10 hover:bg-white/5">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Title and Category */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-black tracking-tight"
            >
              All <span className="text-neon-cyan">Creations</span>
            </motion.h1>
            <div className="flex flex-wrap gap-2">
              {["All", "Video Edits", "Motion Graphics", "Gaming", "Lifestyle", "Commercial"].map((tag) => (
                <button 
                  key={tag} 
                  className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-bold hover:border-secondary hover:text-secondary transition-all bg-white/5"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
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
                  <div className="absolute inset-0 p-4 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-secondary text-[8px] font-black uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      {video.category}
                    </span>
                    <h3 className="text-lg font-black text-white mb-3">
                      {video.title}
                    </h3>
                    
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center neon-glow-cyan">
                        <Play className="w-4 h-4 text-black fill-black" />
                      </div>
                      <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Play with Sound</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <VideoPlayer
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoSrc={selectedVideo?.src || ""}
        title={selectedVideo?.title || ""}
      />
    </div>
  )
}
