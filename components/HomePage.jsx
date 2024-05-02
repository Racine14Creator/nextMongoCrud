"use client"

import { redirect } from "next/navigation";
import { motion } from "framer-motion";
import { LoginLink, RegisterLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

export default function HomePage(){
    const {isAuthenticated} = useKindeBrowserClient()

    if(isAuthenticated){
        redirect('/dashboard')
    }
    return(
       <>
        <motion.div
        animate={{ y: -100 }}
        transition={{ ease: "easeOut", duration: 2 }}
         initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
         className="relative text-center flex flex-col justify-center items-center h-[90vh] py-[200px] w-full">
            <h3 className="font-bold text-4xl">
                Welcome to <span className="text-error">Racine14 TodoList</span>
            </h3>
            <p className="mt-12 text-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum in, minima eligendi distinctio ducimus minus doloremque ullam officiis similique impedit maxime vel, modi quisquam totam nihil! Modi placeat accusamus sed.
            </p>
            <button className="shadow-md mt-12 w-fit bg-red text-white rounded-md px-5 py-2"><LoginLink>Get Started</LoginLink></button>
        </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }} 
        transition={{ ease: "easeOut", duration: 2 }}
        className="relative text-center flex flex-col justify-center items-center h-[40vh] w-full md:p-[50px] bg-red rounded-3xl">
            <div className="bg-white w-full p-[30px] shadow-xl sm:mx-5 rounded-3xl">
                <h3 className="text-4xl font-extrabold">TodoList</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque velit facere, iste, similique molestias dolorum dolore sapiente sed officiis porro eos autem dignissimos corrupti aliquam quis? Quod quidem exercitationem necessitatibus.
                </p>
                <button className="bg-red mt-5 shadow-md px-4 py-2 rounded-md transition-all hover:rounded-xl cursor-pointer text-white">
                    <RegisterLink>Create an account</RegisterLink>
                </button>
            </div>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        class="w-full my-10 bg-white rounded-xl shadow-md overflow-hidden">
            <div class="md:flex">
                <div class="md:flex-shrink-0">
                <Image class="h-48 w-full object-cover md:w-48" src={'/assets/todo-list.png'} width={100} height={100} alt="Man looking at item at a store"/>
                </div>
                <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Racine14 Creator</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Simplify your day with us</a>
                <p class="mt-2 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex, porro necessitatibus iure sed repellat voluptatibus commodi debitis nesciunt iste.
                </p>
                </div>
            </div>
            </motion.div>

       </> 
    )
}