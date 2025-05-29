const Header = () => {
    return (
        <div className='flex justify-between items-center px-5 py-5 bg-gray-400'>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <ul className='flex gap-10 cursor-pointer'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

export default Header
