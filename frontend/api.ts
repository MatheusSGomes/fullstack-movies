import { IUser, IUserPost, IUserPut } from "./types/users";

const baseURL = 'http://localhost:8000/api';

export const getAllUsers = async (): Promise<IUser[]> => {
    const res = await fetch(`${baseURL}/user`, {
        cache: 'no-store',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }),
    });
    const users = await res.json();
    return users;
}

export const addUser = async (user: IUserPost): Promise<IUserPost> => {
    const res = await fetch(`${baseURL}/user`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    const newUser = await res.json();
    // TODO: adicionar toaster para indicar que usuário foi cadastrado
    return newUser;
}

export const editUser = async (user: IUserPut): Promise<IUserPut> => {
    const res = await fetch(`${baseURL}/user/${user.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    const updatedUser = await res.json();
    // TODO: adicionar toaster para indicar que usuário foi atualizado
    return updatedUser;
}

export const deleteUser = async (user_id: string|number): Promise<any> => {
    const res = await fetch(`${baseURL}/user/${user_id}`, {
        method: 'DELETE',
    });
    // TODO: adicionar toaster para indicar que usuário foi apagado
    console.log(res);
}