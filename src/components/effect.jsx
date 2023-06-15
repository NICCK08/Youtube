import { useEffect, useState } from "react";

const Effect = () => {
  let [user, setUser] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      let data = await response.json();
      setUser(data);
    };
    fetchData();
  },[]);
  let removeUser = (userId) => {
    let res = user.filter((x) => x.userId!==userId);
    setUser(res);
  };
  return (
    <div className="effect">
      {user.map((x) => {
        return (
          <div>
            <h1>{x.title}</h1>
            <button onClick={() => removeUser(x.userId)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Effect;
