import Navbar from "./component/homeAll/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home/Home";
import AboutPage from "./component/pages/AboutPage";
import Footer from "./component/homeAll/footer/Footer";
import PricePage from "./component/pages/PricePage";
import FeaturePage from "./component/pages/FeaturesPage";
import Blog from "./component/BlogAll/Blog";
import ReadBlogPage from "./component/pages/ReadBlogPage";
import ContactPage from "./component/pages/ContactPage";
import WorkPage from "./component/pages/WorkPage";
import ReadCase from "./component/readCase/ReadCase";
import FAQ from "./component/homeAll/faq/FAQ";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/feature" element={<FeaturePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/readBlog" element={<ReadBlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/readCase" element={<ReadCase />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
