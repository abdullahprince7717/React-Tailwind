

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Navbar() {

    const [showMenu, setShowMenu] = useState(false)

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className='flex justify-between items-center h-24 mx-auto px-4 lg:px-10 text-white'>
            <h1 className='w-full text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold text-[#00df9a]'>React.</h1>
            <ul className='flex hidden sm:flex md:text-2xl lg:text-3xl 2xl:text-5xl'>
                <a className='p-4' href='#'>Home</a>
                <a className='p-4' href='#'>About</a>
                <a className='p-4' href='#'>Services</a>
                <a className='p-4' href='#'>Contact</a>
            </ul>
            <div onClick={handleMenu} className="sm:hidden">
                {showMenu ? <IoMdClose size={20} /> : <GiHamburgerMenu size={20} />}
            </div>
            <div className={showMenu ? "fixed top-0 w-[60%] h-full ease-in-out duration-500" : "hidden"}>

                <ul className="flex flex-col pt-24 uppercase">
                    <a className='p-4 border-b border-grey-500' href='#'>Home</a>
                    <a className='p-4 border-b border-grey-500' href='#'>About</a>
                    <a className='p-4 border-b border-grey-500' href='#'>Services</a>
                    <a className='p-4 border-b border-grey-500' href='#'>Contact</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar