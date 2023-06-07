import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
// import Categories from "./components/categories";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;