export interface IUser {
    id: string|number,
    name: string,
    email: string,
}

export interface IUserPost {
    name: string,
    email: string,
    password: string,
}

export interface IUserPut {
    id: string|number|null,
    name: string,
    email: string,
    password: string,
}