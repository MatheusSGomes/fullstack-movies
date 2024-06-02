import { getAllUsers } from "@/api";
import AddUser from "../components/AddUser";
import UserList from "../components/UserList";

export default async function Home() {

  const users = await getAllUsers();

  return (
    <main>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className="text-2xl font-bold">Usuários</h1>
        <AddUser />
      </div>

      {users ? <UserList users={users.data} />
      : <h1>Nenhum usuário encontrado</h1>}
    </main>
  );
}
