import Link from "next/link"
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-slate-700 px-8 py-3">
            <Link href={"/"} className="text-white font-bold">Racine14 Todo</Link>
            <ul>
                <li><Link href={"/addTodo"} className="bg-white p-2">Add Todo</Link></li>
                <li><LoginLink className="bg-white p-2">Log In</LoginLink></li>
                <li><RegisterLink className="bg-white p-2">Register</RegisterLink></li>
            </ul>
        </nav>
    )
}

export default Navbar