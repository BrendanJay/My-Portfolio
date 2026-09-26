import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Play, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import { VideoPlayer } from "./VideoPlayer"
import { videos, type VideoCard } from "../data/videos"

export function VideoWork() {
  const [selectedVideo, setSelectedVideo] = useState<{
    src: string
    title: string
  } | null>(null)
  const previewRefs = useRef<Record<number, HTMLVideoElement | null>>({})
  const openVideoPlayer = (video: VideoCard) => {
    Object.values(previewRefs.current).forEach((preview) => {
      if (preview) preview.muted = true
    })
    setSelectedVideo({ src: video.videoSrc, title: video.title })
  }

  return (
    <section id="content" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-black/20">
      <div className="max-w-6xl mx-auto space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
            >
              My Video Work
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              className="h-px mt-3 rounded-full bg-gradient-to-r from-emerald-300 via-white/80 to-cyan-300"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
              className="mt-3 text-[15px] text-gray-400 max-w-md leading-relaxed"
            >
              Personal video editing and motion design work, presented as looping
              previews. Click a clip to play it with sound in the full player.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95, y: 18 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            >
              <Card
                className="group relative overflow-hidden cursor-pointer aspect-video border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.14] transition-all duration-300"
                onClick={() => openVideoPlayer(video)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <video
                    src={video.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    ref={(element) => { previewRefs.current[video.id] = element }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/95 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <Badge
                      variant="muted"
                      className="text-[10px] font-mono px-2 py-0.5"
                    >
                      {video.homeCategory}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <motion.button
                        transition={{ type: "spring", stiffness: 380, damping: 24 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={(event) => {
                          event.stopPropagation()
                          openVideoPlayer(video)
                        }}
                        aria-label={`Open ${video.title} in full player`}
                        title="Watch full video"
                        className="p-1.5 rounded-md bg-black/50 backdrop-blur-sm border border-white/10 group-hover:border-emerald-300/40 transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 text-white fill-white" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="space-y-1 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-[14px] font-semibold text-white tracking-tight leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      Watch full video
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

