import YoutubeLogo from "../images/YoutubeLogo.png";
import YTstudio from "../images/YTstudio.png";
import notification from "../images/notification.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navLinks">
        <Link to="/">Home</Link>
      </div>
      <div className="navLinks">
        <Link to="/add-video">Add Video</Link>
      </div>
      <div className="logo">
        <img src={YoutubeLogo} alt="" width={120} height={70} />
      </div>
      <div className="searchbar">
        <input type="text" class="input" placeholder="Search" />
      </div>
      <div className="useroptions">
        <img src={YTstudio} alt="" width={30} height={30} />
        <img src={notification} alt="" width={30} height={30} />
        <p>
          <h4>N</h4>
        </p>
      </div>
    </div>
  );
}
export default Navbar;
