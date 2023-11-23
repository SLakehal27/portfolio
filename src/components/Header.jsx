import React from "react";
import { useState } from "react"
import logo from "../assets/img/logo5.png"
import darklogo from "../assets/img/logo-dark.png"
import Logo from "./Logo";
export default function Header() {
    function toggleDarkMode(){
        document.documentElement.classList.toggle("dark");
        setDark(!isDark);
    }
    const [isDark, setDark] = useState(false);
    return(
        <header>
            <div className="h-24 flex justify-between items-center p-10
             text-white text-xl bg-sky-500/80 shadow-lg shadow-slate-700/30
             dark:bg-indigo-700/60 dark:shadow-indigo-500/30 transition">
                {!isDark? <Logo image={logo}/>: <Logo image={darklogo}/>}
                <div>
                    <ul className="flex items-center pr-6 gap-12">
                        <li className="hover:scale-110 transition">Projets</li>
                        <li className="hover:scale-110 transition">CV</li>
                        <li className="hover:scale-110 transition">Contact</li>
                        <li>
                            <div className="bg-indigo-500 p-2 rounded-lg
                            dark:bg-amber-500">
                            <button onClick={toggleDarkMode}
                                className="rounded-md">{!isDark? "Dark Mode" : "Light Mode"}</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}