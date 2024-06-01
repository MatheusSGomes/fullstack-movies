import { getAllUsers } from "@/api";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

export default async function Home() {

  const users = await getAllUsers();

  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className="text-2xl font-bold">Usuários</h1>
        <AddUser />
      </div>
      <UserList users={users.data} />
    </main>
  );
}
