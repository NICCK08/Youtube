import { useState,useEffect } from "react";
import "../styles/shorts.css"
const Shorts = () => {
  let [shorts, setShorts] = useState([]);
    useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:3000/shorts");
      let data = await response.json();
      setShorts(data);
    };
    fetchData();
  },[]
);
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


