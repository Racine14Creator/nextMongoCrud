"use client"

import { redirect } from "next/navigation";
import Scene from "./Scene";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function HomePage(){
    const {isAuthenticated} = useKindeBrowserClient()

    if(isAuthenticated){
        redirect('/dashboard')
    }
    return(
       <>
        <Scene/>
        <div className="relative text-center flex flex-col justify-center items-center h-[50vh] w-full">
            <h3 className="font-bold text-4xl">
                Welcome to <span className="text-error">Racine14 TodoList</span>
            </h3>
            <p className="mt-12 text-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum in, minima eligendi distinctio ducimus minus doloremque ullam officiis similique impedit maxime vel, modi quisquam totam nihil! Modi placeat accusamus sed.
            </p>
            <button className="mt-12 w-fit bg-grey px-3py-2">Get Started</button>
        </div>
       </> 
    )
}