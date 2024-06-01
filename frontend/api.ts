import { IUser } from "./types/users";

const baseURL = 'http://localhost:8000';

export const getAllUsers = async (): Promise<IUser[]> => {
    const res = await fetch(`${baseURL}/user`);
    const users = await res.json();
    return users;
}