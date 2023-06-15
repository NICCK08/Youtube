import Categories from "./categories";
import "../styles/categories.css";
import Banner from "./banner";
import Videos from "./videos";
import Shorts from "./shorts";
// import Navbar from "./navbar";

const Home = () => {
  //sfc shortcut
  return (
    <div className="home">
      <Categories />
      <Banner/>
      <Videos/>  
      <Shorts/> 
    </div>
  );
};

export default Home;
