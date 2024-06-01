import { IUser } from "@/types/users";

interface UserProps {
    user: IUser
}

const User: React.FC<UserProps> = ({ user }) => {
    return (
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>botões</td>
        </tr>
    );
}

export default User;
