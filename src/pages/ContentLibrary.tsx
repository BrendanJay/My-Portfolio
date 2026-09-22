import { motion } from "framer-motion"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Play, ArrowLeft, Filter, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { CustomCursor } from "../components/CustomCursor"
import { Footer } from "../components/Contact"
import { VideoPlayer } from "../components/VideoPlayer"

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
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Video Edit", "Motion Graphics", "Gaming", "Lifestyle", "Commercial", "Short Film", "Music Video", "Sports", "Nature", "Corporate", "Events", "Fashion"]

  const filteredVideos = allVideos.filter(v =>
    activeCategory === "All" ? true : v.category === activeCategory
  )

  return (
    <div className="min-h-screen bg-[#08090a] text-white antialiased selection:bg-white selection:text-black">
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

          <div className="hidden md:flex items-center gap-3">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-gray-300 transition-colors" strokeWidth={1.8} />
              <input
                type="text"
                placeholder="Search content..."
                className="bg-white/[0.03] border border-white/[0.08] rounded-md py-2 pl-10 pr-4 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-white/[0.18] transition-all w-64 shadow-[0_1px_0_0_rgba(255,255,255,0.02)_inset]"
              />
            </div>
            <Button variant="outline" size="icon" className="border-white/[0.08] hover:bg-white/[0.05] text-gray-300">
              <Filter className="w-4 h-4" strokeWidth={1.8} />
            </Button>
          </div>
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
                {filteredVideos.length} of {allVideos.length} entries · filtered by <span className="text-gray-300">{activeCategory.toLowerCase()}</span>
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
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.4 }}
              >
                <Card
                  className="group relative overflow-hidden border-white/[0.06] hover:border-white/[0.16] transition-all duration-300 cursor-pointer aspect-video rounded-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset]"
                  onClick={() => video.videoSrc && setSelectedVideo({ src: video.videoSrc, title: video.title })}
                >
                  <div className="absolute inset-0 w-full h-full">
                    {video.videoSrc ? (
                      <video
                        src={video.videoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    )}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/25 to-black/10 opacity-80 group-hover:opacity-95 transition-opacity duration-400" />

                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <Badge
                      variant="muted"
                      className="text-[10px] font-medium px-2 py-0.5 tracking-wide"
                    >
                      {video.category}
                    </Badge>
                    {!video.videoSrc && (
                      <Badge
                        variant="outline"
                        className="text-[10px] font-mono px-2 py-0.5"
                      >
                        UPLOAD SOON
                      </Badge>
                    )}
                  </div>

                  <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                    <h3 className="text-[15px] font-semibold text-white leading-snug mb-3 line-clamp-2">
                      {video.title}
                    </h3>

                    <div className={`flex items-center gap-3 transition-opacity duration-300 ${video.videoSrc ? "opacity-0 group-hover:opacity-100 delay-75" : "opacity-50"}`}>
                      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset]">
                        <Play className="w-4 h-4 fill-black translate-x-px" strokeWidth={2} />
                      </div>
                      <span className="text-[11px] font-medium text-white/90 uppercase tracking-wide">
                        {video.videoSrc ? "Play with sound" : "Preview only"}
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
