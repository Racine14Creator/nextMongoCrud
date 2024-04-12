import Login from "@/components/Login";
import TodoList from "@/components/TodoList";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const {getUser} = getKindeServerSession()
const user = await getUser()
  return (
    <>
    {user ? (
      <TodoList />
    ):(
      <Login/>
    )}
    </>
    
  );
}
