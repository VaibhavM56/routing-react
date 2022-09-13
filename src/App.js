import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import NavBarComponent from "./components/navbar/NavBarComponent";
function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
