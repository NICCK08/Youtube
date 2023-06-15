import "./App.css";
import AddVideo from "./components/addvideo";
import Home from "./components/home.jsx";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

      <Routes>
        <Route element={<Home />} path="/"/>
        <Route element={<AddVideo/>} path="/add-video"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
