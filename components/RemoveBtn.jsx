"use client"

import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation"

const url = process.env.NEXT_PUBLIC_URL

const RemoveBtn = ({ id }) => {
    
    const router = useRouter();

    const removeTodo = async function () {

        const confirmed = confirm("Are you sure?")

        if (confirmed) {
    
            const res = await fetch(`${url}api/todo/?id=${id}`, { method: "DELETE" })
    
            if (res.ok) {
                router.refresh()
            }
            
        }
    }

    return (
        <button onClick={removeTodo} className="text-red">
            <HiOutlineTrash size={24} />
        </button>
    )
}

export default RemoveBtn