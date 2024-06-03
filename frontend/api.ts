import { IUser, IUserPost, IUserPut } from "./types/users";
import { IMovie, IMoviePost, IMoviePut } from "./types/movies";
import { ILogin } from "./types/login";
import { IRegister } from "./types/login";

const baseURL = 'http://localhost:8000/api';

// TODO: buscar token de forma dinâmica após criar página de login
const bearerToken = '3|tUTjIgajYe36WMU5tHwgwcNR4TU69yO2Bz1tO5AO64fb2272';

/* USERS */
export const getAllUsers = async (): Promise<any> => {
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

export const addUser = async (user: IUserPost): Promise<any> => {
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

export const editUser = async (user: IUserPut): Promise<any> => {
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
}

/* MOVIES */
export const getAllMovies = async (): Promise<any> => {
    const res = await fetch(`${baseURL}/movie`, {
        cache: 'no-store',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // TODO: buscar token de forma dinâmica após criar página de login
            'Authorization':`Bearer ${bearerToken}`,
        }),
    });
    const movies = await res.json();
    return movies;
}

export const addMovie = async (movie: IMoviePost): Promise<any> => {
    const res = await fetch(`${baseURL}/movie`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${bearerToken}`,
        },
        body: JSON.stringify(movie),
    });
    const newMovie = await res.json();
    // TODO: adicionar toaster para indicar que usuário foi cadastrado
    return newMovie;
}

export const editMovie = async (movie: IMoviePut): Promise<any> => {
    const res = await fetch(`${baseURL}/movie/${movie.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${bearerToken}`,
        },
        body: JSON.stringify(movie),
    });
    const updatedMovie = await res.json();
    // TODO: adicionar toaster para indicar que usuário foi atualizado
    return updatedMovie;
}

export const deleteMovie = async (movie_id: string|number): Promise<any> => {
    const res = await fetch(`${baseURL}/movie/${movie_id}`, {
        method: 'DELETE',
        headers: {
            'Authorization':`Bearer ${bearerToken}`,
        },
    });
    // TODO: adicionar toaster para indicar que usuário foi apagado
}

/* GENDER */
export const getGenders = async (): Promise<any> => {
    const res = await fetch(`${baseURL}/gender`, {
        cache: 'no-store',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${bearerToken}`,
        }),
    });
    const gender = await res.json();
    return gender;
}

export const login = async (user: ILogin): Promise<any> => {
    const res = await fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    const login = await res.json();
    return login;
}

export const register = async (user: IRegister): Promise<any> => {
    alert('cadastro!');
}

