import { getAllUsers } from "@/api";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

export default async function Home() {

  const users = await getAllUsers();

  return (
    <div>
      <div className="bg-base-100">
        <div className="navbar max-w-4xl mx-auto px-3">
          <div className="navbar-start">
            <a className="text-2xl font-bold">Filmes</a>
          </div>
          <div className="navbar-end gap-3">
            <a className="btn">Filmes</a>
            <a className="btn">Usuários</a>
          </div>
        </div>
      </div>

      <main className='max-w-4xl mx-auto mt-4 px-3'>
        <div className='text-center my-5 flex flex-col gap-4'>
          <h1 className="text-2xl font-bold">Usuários</h1>
          <AddUser />
        </div>
        <UserList users={users.data} />
      </main>
    </div>
  );
}
