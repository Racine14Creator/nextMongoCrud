"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({ todo }) {
    const [newTitle, setNewTitle] = useState(todo.title);
    const [newDesc, setNewDesc] = useState(todo.desc);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/todo/${todo.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ newTitle, newDesc })
            });

            if (!res.ok) {
                throw new Error("Failed to update todo");
            }
            router.reload(); // Use router.reload() to reload the page
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <h3 className="text-2xl font-bold">Update</h3>
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
