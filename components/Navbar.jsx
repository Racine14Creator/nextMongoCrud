"use client"

import Link from "next/link"
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { usePathname } from "next/navigation";


const navLinks = [
    {name: "Dashboard", href: "/"},
    {name: "Profile", href: "/"},
]
const Navbar = async () => {
    
    const {isAuthenticated} = getKindeServerSession()

    const pathname = usePathname()

    return (
        <nav className="flex justify-between items-center bg-slate-700 px-8 py-3">
            <Link href={"/"} className="text-white font-bold">Racine14 Todo</Link>
            <ul className="flex gap-x-2">
                {await isAuthenticated() ? (
                    <>
                    {navLinks.map((item, index)=>(
                        <li key={index}>
                            <Link href={item.href} className={`${pathname === item.href ? 'bg-white' : 'bg-transparent'} p-2`}>
                            {item.name}
                        </Link>
                        </li>
                    ))}
                    <li><LogoutLink className="bg-white p-2">Log Out</LogoutLink></li>
                    </>
                ): (
                    <>
                        <li><LoginLink className="bg-white p-2">Log In</LoginLink></li>
                        <li><RegisterLink className="bg-white p-2">Register</RegisterLink></li>
                    </>
                )}
                
            </ul>
        </nav>
    )
}

export default Navbar