import { IUser, IUserPost } from "./types/users";

const baseURL = 'http://localhost:8000/api';

export const getAllUsers = async (): Promise<IUser[]> => {
    // TODO: passar para o axios
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
    console.log(user);

    const res = await fetch(`${baseURL}/user`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    const newUser = await res.json();
    return newUser;
}