import { IUser } from "@/types/users";
import User from "./User";

interface UserListProps {
    users: IUser[]
}

const UserList: React.FC<UserListProps> = ({ users }) => {

    return (
        <div className="overflow-x-auto">
            <table className="table w-fulll">
                <thead>
                    <tr>
                        <th>Usuário</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => <User key={user.id} user={user} />)}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;