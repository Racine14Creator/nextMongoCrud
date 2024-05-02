
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi"

import { motion } from "framer-motion";
const onlineURL = "https://todo-omega-olive-97.vercel.app/api/todo/"
const url = process.env.NEXT_PUBLIC_URL
// console.log(url)

const getTodos = async function () {
    try {
        const res = await fetch(`${url}/api/todo`, { cache: 'no-store' })

        if (!res.ok) { throw new Error("Failed to fetch Todos") }

        return res.json()

    } catch (error) {
        console.log("Error loading todo: ", error);
    }
}

const variants = {
  visible: i => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0 },
}

export default async function TodoList() {
    const { todos } = await getTodos();

    return <>
        <div className="flex justify-between items-center">
            <h3 className="text-3xl font-bold">Data</h3>
            <Link href={'/data/addTodo'} className="bg-red text-white px-4 py-2 rounded-md">Add Data</Link>
        </div>
        {todos.map((todo) => (
            <motion.div className="shadow-md p-4 border border-slate-300 my-3 flex justify-between items-start gap-5" key={todo._id}>
                <div>
                    <h2 className="text-2xl font-bold">{todo.title}</h2>
                    <p>
                        {todo.desc}
                    </p>
                </div>
                <div className="flex justify-between gap-5">
                    <RemoveBtn id={todo._id} />
                    <Link href={`/data/${todo._id}`}>
                        <HiPencilAlt size={24} />
                    </Link>
                </div>
            </motion.div>
        ))}
    </>
} 