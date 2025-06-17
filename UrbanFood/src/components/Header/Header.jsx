import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [btnName, setBtnName] = useState("Login")

    return (
        <div className='flex justify-between items-center px-5 py-5 bg-gray-800 text-white'>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <ul className='flex gap-10 cursor-pointer items-center'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <li>Cart</li>
                <button
                className="bg-gray-600 px-5 py-2 cursor-pointer rounded-md"
                onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>
            </ul>
        </div>
    )
}

export default Header
