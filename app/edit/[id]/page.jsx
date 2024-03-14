// "use client"
import EditForm from "@/components/EditForm";

const getTodoById = async function (id) {
    try {
        const res = await fetch(`http://localhost:3000/api/todo/${id}`, { cache: "no-store" })
        if (!res.ok) { throw new Error("Failed to fetch topic") }
        return res.json()
    } catch (error) {
        console.log(error);
    }
}

export default async function EditPage({ params }) {
    const { id } = params
    const todo = await getTodoById(id)
    const { title, desc } = todo.todo

    console.log(todo.todo)

    return <EditForm todo={todo} id={id} title={title} desc={desc} />
}