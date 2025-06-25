import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlinseStatus from "../../utils/hooks/useOnlinseStatus";
import UserContext from "../../utils/context/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const networkStatus = useOnlinseStatus();

  const { userName} = useContext(UserContext);
  

  return (
    <div className="sticky top-0 shadow-2xs flex justify-between items-center px-5 py-5 bg-gray-800 text-white z-10">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul className="flex gap-10 cursor-pointer items-center">
        {networkStatus ? (
          <li className="p-2  rounded-lg text-green-600">Online</li>
        ) : (
          <li className="p-2 rounded-lg text-red-500">Offline</li>
        )}
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <li>Cart</li>
        <Link to="/grocery">
          <li>Grocery</li>
        </Link>
        <button
          className="bg-gray-600 px-5 py-2 cursor-pointer rounded-md"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
        <li>{userName}</li>
      </ul>
    </div>
  );
};

export default Header;
