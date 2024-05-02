"use client"

import Link from "next/link"
import NavbarItem from "./NavbarItem";
// import Nav from "./Nav";


const Navbar = async () => {

    return (
        <nav className="sticky top-0 flex justify-between items-center bg-slate-700 px-8 py-3">
            <Link href={"/"} className="text-white font-bold">Racine14 Todo</Link>
            <ul className="flex gap-x-2">
                <NavbarItem/>
            </ul>
        </nav>
    )
}

export default Navbar