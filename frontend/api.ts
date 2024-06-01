import { IUser } from "./types/users";

const baseURL = 'http://localhost:8000/api';

export const getAllUsers = async (): Promise<IUser[]> => {
    // TODO: passar para o axios
    const res = await fetch(`${baseURL}/user`, {
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }),
    });
    const users = await res.json();
    return users;
}