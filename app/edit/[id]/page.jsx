
import EditForm from "@/components/EditForm";

const getTodoById = async function (id) {
    try {
        const res = await fetch(`https://todo-omega-olive-97.vercel.app/api/todo/${id}`, { cache: "no-store" })
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

    return <EditForm id={id} title={title} desc={desc} />
}