import { useState } from "react";
import "../styles/videos.css";
const Videos = () => {
  let [videos, setVideo] = useState([
    {
      id: "101",
      thumbnail:
        "https://i.ytimg.com/vi/YxWlaYCA8MU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALnJ7IheE9Y6XgTRGJQ-j9l9CpaA",
      title:
        "Jhoome Jo Pathaan Song | Shah Rukh Khan, Deepika | Vishal & Sheykhar, Arijit Singh, Sukriti, Kumaar",
      channel: "YRF",
      views: "552M views",
    },
    {
      id: "102",
      thumbnail:
        "https://i.ytimg.com/vi/huxhqphtDrM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBv4vSxPRlGjNS3RClUkEDmtSTT8Q",
      title:
        "Besharam Rang Song | Pathaan | Shah Rukh Khan, Deepika Padukone | Vishal & Sheykhar | Shilpa, Kumaar",
      channel: "YRF",
      views: "446M views",
    },
    {
      id: "103",
      thumbnail:
        "https://i.ytimg.com/vi/_575JFx6Iq4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYnBvmuQNjnQ6aXTJcf2WkRr2IpA",
      title: "NO MORE SINGLE: VALENTINE SPECIAL FEAT ROCKY",
      channel: "CarryMinati",
      views: "71M views",
    },
    {
      id: "104",
      thumbnail:
        "https://i.ytimg.com/vi/ElZfdU54Cp8/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDv98hkYErxwV5vbznDZ86ZvkEl7g",
      title:
        "Apna Bana Le - Bhediya | Varun Dhawan, Kriti Sanon| Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya",
      channel: "Zee Music Company",
      views: "199M views",
    },
    {
      id: "105",
      thumbnail:
        "	https://i.ytimg.com/vi/mEOBGY4-7JA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA3x8a4JDfoghnVhEcOg6KnznL4Qg",
      title: "भारत की अविस्मरणीय जीत | 2011 विश्व कप",
      channel: "ICC",
      views: "39M views",
    },
    {
      id: "106",
      thumbnail:
        "	https://i.ytimg.com/vi/qoq8B8ThgEM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAW9dxQn7Sui71iQ9R06BQBIsNy-w",
      title:
        "Tujh Mein Rab Dikhta Hai Song | Rab Ne Bana Di Jodi | Shah Rukh Khan, Anushka Sharma | Roop Kumar",
      channel: "YRF",
      views: "896M views",
    },
    {
      id: "107",
      thumbnail:
        "	https://i.ytimg.com/vi/KgpFBdapobY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAe56x2KyIipVWsLIG-M2NPBsR7aw",
      title:
        "Show Me The Thumka (Song) Tu Jhoothi Main Makkaar | Ranbir,Shraddha | Pritam| Sunidhi,Shashwat|Amitabh B",
      channel: "T-Series",
      views: "80M views",
    },
    {
      id: "108",
      thumbnail:
        "https://i.ytimg.com/vi/5Eqb_-j3FDA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCmqHUqxnAhhIsNCS7l2xBvSY6ZXA",
      title: "Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill",
      channel: "Coke Studio",
      views: "584M views",
    },
    {
      id: "109",
      thumbnail:
        "https://i.ytimg.com/vi/hhdSyBHuI88/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDcrZ364xeEAl2VDSVr3pq_Vxpt9A",
      title:
        "Zaalima - Lyrical | Raees | Shah Rukh Khan & Mahira Khan | Arijit Singh & Harshdeep K | JAM8-Pritam",
      channel: "Zee Music Company",
      views: "165M views",
    },
    {
      id: "110",
      thumbnail:
        "	https://i.ytimg.com/vi/8xE1oLzfnZI/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLCdQ8rAcfQHRewxbC5cJDNJsncfHA",
      title: "D'YAVOL X Teaser | Shah Rukh Khan | Aryan Khan",
      channel: "arrykhan",
      views: "271K views",
    },
  ]);
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
