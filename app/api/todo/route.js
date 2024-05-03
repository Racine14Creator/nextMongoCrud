import connectMongoDB from "@/app/lib/mongodb"
import Todo from "@/models/todo"
import { NextResponse } from "next/server"

export async function POST(request) {

    const { title, desc } = await request.json()

    await connectMongoDB()

    await Todo.create({ title, desc })
    
    return NextResponse.json({ message: "Todo Created" }, { status: 201 })
}

export async function GET() {
    await connectMongoDB();
    const todos = await Todo.find()
    return NextResponse.json({ todos })
}



export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDB()
    await Todo.findByIdAndDelete(id)
    return NextResponse.json({ message: "Todo delete" }, { status: 200 })
}