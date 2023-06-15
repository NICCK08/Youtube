import { useEffect, useState } from "react";

const Effect = () => {
  let [user, setUser] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      setUser(data);
    };
    fetchData();
  },[]);
  let removeUser = (id) => {
    let res = user.filter((x) => x.id!==id);
    setUser(res);
  };
  return (
    <div className="effect">
      {user.map((x) => {
        return (
          <div>
            <h1>{x.name}</h1>
            <button onClick={() => removeUser(x.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Effect;
