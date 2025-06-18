import { useState } from "react";


const User = ({ name }) => {
    const [count, setCount] = useState(0)
  return (
    <div className="border-1 border-black p-3 flex flex-col gap-2">
      <h1 className="font-bold">-- Function Component --</h1>
      <h1>Count: {count}</h1>
      <h1>Name: {name}</h1>
      <h1>Contact: sutharharsh@gmail.com</h1>
      <h1>Location: Visnagar</h1>
    </div>
  );
};

export default User;
