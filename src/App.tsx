import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { ContentLibrary } from "./pages/ContentLibrary"
import { useLenis } from "./lib/useLenis"

function App() {
  // Initialize Lenis smooth scrolling
  useLenis()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content-library" element={<ContentLibrary />} />
      </Routes>
    </Router>
  )
}

export default App
