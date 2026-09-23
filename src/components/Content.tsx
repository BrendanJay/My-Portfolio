import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Play, ExternalLink, Film } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { VideoPlayer } from "./VideoPlayer"

interface VideoCard {
  id: number
  title: string
  thumbnail: string
  videoSrc: string
  category: string
}

const homeVideos: VideoCard[] = [
  {
    id: 1,
    title: "Mobile Legends Fanny Montage #1",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1600&auto=format&fit=crop",
    videoSrc: "/video/Mobile Legend-FannyMontage.mp4",
    category: "Gaming",
  },
  {
    id: 2,
    title: "Zenpos-Expo",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    videoSrc: "/video/Zenpos.mp4",
    category: "Motion Graphics",
  },
  {
    id: 3,
    title: "Valorant-Iso Highlights",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",
    videoSrc: "/video/ValorantIso.mp4",
    category: "Gaming",
  },
  {
    id: 4,
    title: "Cinematic #1",
    thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1600&auto=format&fit=crop",
    videoSrc: "/video/TelescopicCinematic.mp4",
    category: "Lifestyle",
  },
  {
    id: 5,
    title: "Cinematic Edit #2",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop",
    videoSrc: "/video/Cinematic1.mp4",
    category: "Commercial",
  },
  {
    id: 6,
    title: "Typography #1",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop",
    videoSrc: "/video/Typography1.mp4",
    category: "Short Form",
  },
]

export function Content() {
  const [selectedVideo, setSelectedVideo] = useState<{
    src: string
    title: string
  } | null>(null)

  return (
    <section id="content" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-black/20">
      <div className="max-w-6xl mx-auto space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-white/20" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-500">
                05 / Media
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Selected Content
            </h2>
            <p className="mt-3 text-[15px] text-gray-400 max-w-md leading-relaxed">
              Personal video editing and motion design work. Hover for a silent
              preview, click to open the full playback with audio.
            </p>
          </div>
          <Badge variant="muted" className="w-fit font-mono text-[11px]">
            <Film className="w-3 h-3 mr-1" />
            {homeVideos.length} clips
          </Badge>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {homeVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card
                className="group relative overflow-hidden cursor-pointer aspect-video border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.14] transition-all duration-300"
                onClick={() =>
                  setSelectedVideo({ src: video.videoSrc, title: video.title })
                }
              >
                <div className="absolute inset-0 w-full h-full">
                  {video.videoSrc ? (
                    <video
                      src={video.videoSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/95 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <Badge
                      variant="muted"
                      className="text-[10px] font-mono px-2 py-0.5"
                    >
                      {video.category}
                    </Badge>
                    <div className="p-1.5 rounded-md bg-black/50 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-3.5 h-3.5 text-white fill-white" />
                    </div>
                  </div>

                  <div className="space-y-1 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-[14px] font-semibold text-white tracking-tight leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      Click to play with audio
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center md:justify-end">
          <Button asChild variant="outline" size="sm" className="h-9">
            <Link to="/content-library" className="flex items-center gap-2">
              Open full library
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
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
