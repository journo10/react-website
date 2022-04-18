import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SoruCevap from "./components/SoruCevap"
import Video from "./components/Video"
import Podcast from "./components/Podcast"
import Newsletter from "./components/Newsletter"
import About from "./components/About"
import Contact from "./components/Contact"
import HomeDetail from "./components/HomeDetail";
import VideoDetail from "./components/VideoDetail";
import PodcastDetail from "./components/PodcastDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{maxHeight:"auto"}}>
     <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soru-cevap" element={<SoruCevap />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/about" element={<About />} />
          <Route path="/video" element={<Video />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home/:id" element={<HomeDetail />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/podcast/:id" element={<PodcastDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
