"use client"

import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation"


const RemoveBtn = ({ id }) => {
    const router = useRouter();

    const removeTodo = async function () {
        const confirmed = confirm("Are you sure?")

        if (confirmed) {
            const res = await fetch(`https://todo-omega-olive-97.vercel.app/api/todo/?id=${id}`, { method: "DELETE" })
            if (res.ok) {
                router.refresh()
            }
        }
    }
    return (
        <button onClick={removeTodo} className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    )
}

export default RemoveBtn