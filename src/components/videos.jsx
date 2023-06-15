import { useEffect, useState } from "react";
import "../styles/videos.css";

const Videos = () => {
  let [videos, setVideo] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:3000/videos");
      let data = await response.json();
      setVideo(data);
    };
    fetchData();
  },[]);
  let removeVideo = (id, channel) => {
    let result = videos.filter((x) => x.id!==id);
    setVideo(result);
    alert(`${channel} video got deleted`);
  };
  return (
    <div className="videos">
      <h1>Featured Videos</h1>
      <div className="videodata">
        {videos.map((data) => {
          return (
            <div className="video">
              <img src={data.thumbnail} alt="" />
              <div className="videodetails">
                <h3>{data.title}</h3>
                <p>{data.channel}</p>
                <p>{data.views}</p>
                <a onClick={() => removeVideo(data.id, data.channel)}>Remove</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
