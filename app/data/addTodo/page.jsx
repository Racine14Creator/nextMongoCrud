"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const url = process.env.NEXT_PUBLIC_URL
// console.log(url)
export default function AddTodo() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {

        e.preventDefault();
        
        if (!title || !desc) {
            alert("Title and Description are required");
            return;
        }

        try {
            
            const res = await fetch(`${url}/api/todo`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, desc })
            });

            if (res.ok) {
                router.push("/data");
                router.refresh()
            } else {
                throw new Error("Failed to create todo");
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Register</h3>
                <Link href="/data" className="px-4 py-2 rounded-md bg-red text-white">Back</Link>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} name="title" placeholder="Todo Title" className="border border-slate-500 px-8 py-2 my-3 outline-none" />
                <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc} name="desc" placeholder="Todo Description" className="border border-slate-500 px-8 py-2 my-3 outline-none" />
                <button type="submit" className="w-fit bg-green-500 font-bold py-3 px-8 my-3">Add Todo</button>
            </form>
        </>
    );
}
