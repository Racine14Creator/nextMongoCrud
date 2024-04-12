import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Login(){
    return (
        <>
            <div className="container flex flex-col justify-center items-center w-full px-3 py-5 h-[80vh] shadow-md">
                <h3 className="text-4xl font-bold mb-5">Login first</h3>
                <p className="max-w-md text-2xl text-center font-medium text-grey-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates laborum saepe nemo consequuntur molestiae autem ratione ea id vel ipsam
                </p>
                <button className="button bg-error mt-5 w-fit shadow-md bg-red text-2xl font-normal">
                    <LoginLink>
                        Sign Up
                    </LoginLink>
                </button>
            </div>
        </>
    )
}