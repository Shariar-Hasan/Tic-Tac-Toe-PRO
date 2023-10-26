import { Link, NavLink } from "react-router-dom"
import logo from "./../assets/images/favicon.png"
import { routeDatas } from "../assets/configs/Routes.configs"
import { useState } from "react"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="bg-front sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={"/"} className="flex items-center">
                    <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TicTacGo</span>
                </Link>
                <div className="flex md:order-2">
                    <button type="button" className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">Open Settings</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setIsOpen(prev => !prev)}>
                        <span className="sr-only">Open menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between  w-fit md:flex md:w-auto md:order-1 absolute duration-300 transition-all md:relative top-full right-0 md:px-0 px-3 md:translate-x-0 md:visible md:opacity-100 ${isOpen

                    ? "translate-y-0 visible opacity-100"
                    : "-translate-y-[100px] invisible opacity-0"}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 font-medium border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-front">
                        {
                            routeDatas.map(({ path, title, isNavItem }, i) =>
                                isNavItem &&
                                <NavLink
                                    key={i}
                                    to={path}
                                    className={({ isActive }) => isActive ? "text-gray-400" : "text-white "}>
                                    <li className="py-2 px-3">
                                        {title}
                                    </li>
                                </NavLink>)
                        }
                    </ul>
                </div>
            </div>
        </nav >

    )
}

export default Navbar