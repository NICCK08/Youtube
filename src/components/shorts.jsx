import { useState } from "react";
import "../styles/shorts.css"
const Shorts = () => {
  let [shorts, setShorts] = useState([
    {
      thumbnail: "https://i.ytimg.com/vi/5SQVScOpi5A/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLCuiuNGk5sX1OpbkMPw1xlXj3Tq1g",
      title: "Don't Work Together To Win More - Valorant",
      views: "175K views"
    },
    {
      thumbnail: "https://i.ytimg.com/vi/Y3BOgbycB7g/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLAdBRaGxvhY4RM98OG4_PzZvptD-w",
      title: "6 Useful Lineup Gaps In Valorant",
      views: "135K views"
    },
    {
      thumbnail: "https://i.ytimg.com/vi/oSlJMUO0Tac/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLAIdvV4eiym32kmRpEHAvXzrigMwA",
      title: "How a RADIANT REYNA defends in Valorant",
      views: "269K views"
    },
    {
      thumbnail: "https://i.ytimg.com/vi/FrvXiAioRcQ/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLBejg3-FLjlsVKYNR1193C8aqzsVw",
      title: "Top 5 Operator Skins in VALORANT!",
      views: "896K views"
    },
    {
      thumbnail: "https://i.ytimg.com/vi/YsiiEIP7Gqk/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLCTpBaAM5gmYageQ2D1EvhM4Sq6jw",
      title: "This is why TenZ overrated!",
      views: "2.3M views"
    }
  ]);
  return ( 
    <div className="shorts">
     <h1>Featured Shorts</h1>
     <div className="shortdata">
       {shorts.map((data) => {
         return (
           <div className="short">
             <img src={data.thumbnail} alt="" />
             <div className="shortdetails">
               <h3>{data.title}</h3>
               <p>{data.views}</p>
             </div>
           </div>
         );
       })}
     </div>
   </div>
   );
}
 
export default Shorts;


