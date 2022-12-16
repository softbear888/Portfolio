import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Personas from "./pages/Personas";
import Redesign from "./pages/Redesign";
import IterativeDesign from "./pages/IterativeDesign";
import CameraGeometry from "./pages/CameraGeometry";
import Layout from "./Layout"
import About from "./pages/About";
import ScrollToTop from "./ScrollToTop"

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/personas" element={<Personas />} />
          <Route path="/iterative-design" element={<IterativeDesign />} />
          <Route path="/camera-geometry" element={<CameraGeometry />} />
          <Route path="/redesign" element={<Redesign />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
