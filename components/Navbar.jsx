import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-slate-700 px-8 py-3">
            <Link href={"/"} className="text-white font-bold">Racine14 Todo</Link>
            <ul>
                <li><Link href={"/addTodo"} className="bg-white p-2">Add Todo</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar