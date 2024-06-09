import axios from 'axios';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

import { IUserPost, IUserPut } from "./app/types/users";
import { IMoviePost, IMoviePut } from "./app/types/movies";
import { SignInRequestData, SignInResponseData } from "./app/types/login";

const api = axios.create({
    baseURL: 'http://localhost:8000/api'
});

const baseURL = api.getUri();

/* AUTENTICAÇÃO */
export async function signInRequest(reqData: SignInRequestData) {
    try {
        const { data } :  SignInResponseData  = await api.post('/login', {
            email: reqData.email,
            password: reqData.password,
        });

        setCookie(null, 'movies_app_token', data.token, {
            maxAge: 60 * 60 * 24 // 24 horas
        });

        return data;
    } catch (e: any) {
        console.log(e.message);
    }
}

export async function signUpRequest(reqData: any) {}

/* USERS */
export async function recoverUserInformation() {
    const userData = await api.get('/user');

    console.log(userData);

    return {
        user: {
            name: 'Matheus',
            email: 'matheus@email.com',
            avatar_url: 'https://github.com/MatheusSGomes.png'
        }
    }
}

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
    // TODO: buscar token de forma dinâmica através dos cookies
    const bearerToken = '1|6h1xa48yzqdXlL41epleaDJav8H4GgLavXr8PNhu97cfb625';

    const res = await fetch(`${baseURL}/movie`, {
        cache: 'no-store',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // TODO: buscar token de forma dinâmica através dos cookies
            'Authorization':`Bearer ${bearerToken}`,
        }),
    });
    const movies = await res.json();
    return movies;
}

export const addMovie = async (movie: IMoviePost): Promise<any> => {
    // TODO: buscar token de forma dinâmica através dos cookies
    const bearerToken = '1|6h1xa48yzqdXlL41epleaDJav8H4GgLavXr8PNhu97cfb625';

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
    // TODO: buscar token de forma dinâmica através dos cookies
    const bearerToken = '1|6h1xa48yzqdXlL41epleaDJav8H4GgLavXr8PNhu97cfb625';

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
    // TODO: buscar token de forma dinâmica através dos cookies
    const bearerToken = '1|6h1xa48yzqdXlL41epleaDJav8H4GgLavXr8PNhu97cfb625';

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
    // TODO: buscar token de forma dinâmica através dos cookies
    const bearerToken = '1|6h1xa48yzqdXlL41epleaDJav8H4GgLavXr8PNhu97cfb625';

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
