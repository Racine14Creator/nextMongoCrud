import Link from "next/link"
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

const navLinks = [
    {name: "Dashboard", href: "/"},
    {name: "Profile", href: "/"},
]
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-slate-700 px-8 py-3">
            <Link href={"/"} className="text-white font-bold">Racine14 Todo</Link>
            <ul className="flex gap-x-2">
                {navLinks.map((item, index)=>(
                    <li key={index}>
                        <Link href={item.href} className="bg-white p-2">
                        {item.name}
                    </Link>
                    </li>
                ))}
                
                <li><LoginLink className="bg-white p-2">Log In</LoginLink></li>
                <li><RegisterLink className="bg-white p-2">Register</RegisterLink></li>
            </ul>
        </nav>
    )
}

export default Navbar