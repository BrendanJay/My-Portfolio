import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { ContentLibrary } from "./pages/ContentLibrary"

function App() {
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
