import connectMongoDB from "@/app/lib/mongodb"
import Todo from "@/models/todo"
import { NextResponse } from "next/server"

export async function PUT(request, { params }) {
    const { id } = params
    const { newTitle: title, newDesc: desc } = await request.json()
    await connectMongoDB()

    await Todo.findByIdAndUpdate(id, { title, desc })
    return NextResponse.json({ message: "Topic updated" }, { status: 200 })
}

export async function GET(request, { params }) {
    const { id } = params
    await connectMongoDB()

    const todo = await Todo.findById(id)

    return NextResponse.json({ todo }, { status: 200 })
}

export async function PUT(req, { params }) {
    const { id } = params
    await connectMongoDB()

    const { newTitle, newDesc } = await req.json()

    const todo = await Todo.findByIdAndUpdate(id, {
        newTitle, newDesc
    })
    if (todo) { return NextResponse.json({ todo }, { status: 200 }) } else {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        )
    }
}