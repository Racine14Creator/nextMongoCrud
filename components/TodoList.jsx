
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi"


const getTodos = async function () {
    try {
        const res = await fetch('https://todo-omega-olive-97.vercel.app/api/todo/', { cache: 'no-store' })

        if (!res.ok) { throw new Error("Failed to fetch Todos") }

        return res.json()

    } catch (error) {
        console.log("Error loading todo: ", error);
    }
}

export default async function TodoList() {
    const { todos } = await getTodos();

    return <>
        {todos.map((todo) => (
            <div className="shadow-md p-4 border border-slate-300 my-3 flex justify-between items-start gap-5" key={todo._id}>
                <div>
                    <h2 className="text-2xl font-bold">{todo.title}</h2>
                    <p>
                        {todo.desc}
                    </p>
                </div>
                <div className="flex justify-between gap-5">
                    <RemoveBtn id={todo._id} />
                    <Link href={`/edit/${todo._id}`}>
                        <HiPencilAlt size={24} />
                    </Link>
                </div>
            </div>
        ))}
    </>
} 