import { motion } from "framer-motion"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Play, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { CustomCursor } from "../components/CustomCursor"
import { Footer } from "../components/Footer"
import { VideoPlayer } from "../components/VideoPlayer"
import { videos } from "../data/videos"

export function ContentLibrary() {
  const [selectedVideo, setSelectedVideo] = useState<{src: string, title: string} | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", ...new Set(videos.map((video) => video.libraryCategory))]

  const filteredVideos = videos.filter(video =>
    activeCategory === "All" ? true : video.libraryCategory === activeCategory
  )

  return (
    <div className="min-h-screen text-white antialiased selection:bg-white selection:text-black">
      <CustomCursor />

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#08090a]/85 backdrop-filter saturate-180 blur-xl px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Button asChild variant="ghost" className="gap-2 hover:bg-white/[0.05] text-gray-300 hover:text-white">
            <Link to="/">
              <ArrowLeft className="w-4 h-4" strokeWidth={1.8} />
              Back to Portfolio
            </Link>
          </Button>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/80" />
            <span className="text-[15px] font-semibold tracking-tight text-white">
              Brendan Jay R. Condes
            </span>
            <Badge variant="muted" className="font-mono text-[10px] px-2 py-0.5 tracking-wider hidden sm:inline-flex">
              / media library
            </Badge>
          </div>

          <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500">
            {videos.length} playable videos
          </span>
        </div>
      </header>

      <main className="pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-white/20" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-500">
                05 / Content / Archive
              </span>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white text-balance">
                Media Library
              </h1>
              <p className="mt-3 text-[15px] text-gray-400 max-w-xl leading-relaxed">
                Video edits, motion graphics, and post-production work across
                personal projects and client deliverables.
              </p>
              <div className="mt-4 flex items-center gap-2 text-[12px] font-mono text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Showing {filteredVideos.length} · {activeCategory}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {categories.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveCategory(tag)}
                  className={`px-3.5 py-1.5 rounded-full border text-[12px] font-medium transition-all ${
                    activeCategory === tag
                      ? "bg-white text-black border-white"
                      : "bg-white/[0.015] border-white/[0.08] text-gray-400 hover:text-white hover:border-white/[0.18] hover:bg-white/[0.04]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
              >
                <Card
                  className="group relative overflow-hidden border-white/[0.06] hover:border-white/[0.16] transition-all duration-300 cursor-pointer aspect-video rounded-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset]"
                  onClick={() => setSelectedVideo({ src: video.videoSrc, title: video.title })}
                >
                  <div className="absolute inset-0 w-full h-full">
                    <video
                      src={video.videoSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/25 to-black/10 opacity-80 group-hover:opacity-95 transition-opacity duration-400" />

                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <Badge
                      variant="muted"
                      className="text-[10px] font-medium px-2 py-0.5 tracking-wide"
                    >
                      {video.libraryCategory}
                    </Badge>
                  </div>

                  <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                    <h3 className="text-[15px] font-semibold text-white leading-snug mb-3 line-clamp-2">
                      {video.title}
                    </h3>

                    <div className="flex items-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 delay-75">
                      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset]">
                        <Play className="w-4 h-4 fill-black translate-x-px" strokeWidth={2} />
                      </div>
                      <span className="text-[11px] font-medium text-white/90 uppercase tracking-wide">
                        Play with sound
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="py-20 text-center border border-dashed border-white/[0.08] rounded-2xl">
              <p className="text-gray-500 text-sm">No content matches the selected filter.</p>
            </div>
          )}

          <div className="flex justify-center pt-4">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/">
                <ArrowLeft className="w-4 h-4" strokeWidth={1.8} />
                Return to Portfolio
              </Link>
            </Button>
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
