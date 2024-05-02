
"use client";

import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {name: "Dashboard", href: "/dashboard"},
    {name: "Profile", href: "/profile"},
]

export default function NavbarItem(){
    const {isAuthenticated} = useKindeBrowserClient()
    const userIsAuth = isAuthenticated;
    
    const pathname = usePathname()

    return (userIsAuth ? (
        <>
            {navLinks.map((item, index)=>(
            <li key={index}>
                <Link href={item.href} className={`${pathname === item.href ? 'bg-white text-red rounded-md' : 'bg-transparent'} p-2`}>
                {item.name}
            </Link>
            </li>
        ))}
        <li><LogoutLink className="text-red p-2">Log Out</LogoutLink></li>
        </>
    ):(
        <>
            <li><LoginLink className="bg-white p-2">Log In</LoginLink></li>
            <li><RegisterLink className="bg-white p-2">Register</RegisterLink></li>
        </>
    ))
}