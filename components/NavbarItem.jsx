
"use client";

import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {name: "Dashboard", href: "/dashboard"},
    {name: "Data", href: "/data"},
    {name: "Profile", href: "/profile"},
]

export default function NavbarItem(){
    
    const {isAuthenticated, isLoading} = useKindeBrowserClient()
    const userIsAuth = isAuthenticated;
    
    const pathname = usePathname()
    // console.log(pathname);
    let firstPathname = '/' + pathname.split('/')[1];

    if(isLoading) return <div className="text-white font-bold">Loading...</div>
    
    return (userIsAuth ? (
        <>
            {navLinks.map((item, index)=>(
            <li key={index}>
                <Link href={item.href} className={`${firstPathname === item.href ? 'bg-white text-red rounded-md' : 'text-white bg-transparent'} p-2`}>
                {item.name}
            </Link>
            </li>
        ))}
        <li><LogoutLink className="text-red p-2">Log Out</LogoutLink></li>
        </>
    ):(
        <>
            <li><LoginLink className="bg-white p-2 rounded-md">Log In</LoginLink></li>
            <li><RegisterLink className="bg-white p-2 rounded-md">Register</RegisterLink></li>
        </>
    ))
}