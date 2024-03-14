"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({ id, title, desc }) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDesc, setNewDesc] = useState(desc);
    const router = useRouter();

    const handleSubmit = async (event) => {

        event.preventDefault();

        const url = "https://todo-omega-olive-97.vercel.app/"

        try {
            const res = await fetch(`${url}api/todo/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ newTitle, newDesc })
            });

            if (!res.ok) {
                throw new Error("Failed to update todo");
            }
            router.refresh()
            router.push("/");

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <h3 className="text-2xl font-bold">Update: {id}</h3>
            <input
                type="text"
                name="title"
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                placeholder="Todo Title"
                className="border border-slate-500 px-8 py-2 my-3"
            />
            <input
                type="text"
                name="desc"
                onChange={(e) => setNewDesc(e.target.value)}
                value={newDesc}
                placeholder="Todo Description"
                className="border border-slate-500 px-8 py-2 my-3"
            />
            <button type="submit" className="w-fit bg-green-500 font-bold py-3 px-8 my-3">Update Todo</button>
        </form>
    );
}
