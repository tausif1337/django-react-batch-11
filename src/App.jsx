import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="bg-gray-900 p-4 text-center">
          <Link to="/" className="text-white px-4 hover:text-gray-400">
            {" "}
            Home{" "}
          </Link>
          <Link to="/about" className="text-white px-4 hover:text-gray-400">
            {" "}
            About Us{" "}
          </Link>
        </nav>
        <div className="mt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        
      </BrowserRouter>
    </div>
  );
}
export default App;
