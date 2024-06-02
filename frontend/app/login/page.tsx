'use client';

import { FormEventHandler, useState } from "react";
import { login } from "@/api";
import { useRouter } from "next/navigation";

const AddUser = () => {
    const router = useRouter();

    const [userEmailValue, setUserEmailValue] = useState<string>('');
    const [userPasswordlValue, setUserPasswordlValue] = useState<string>('');

    const handleSubmitNewMovie: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        await login({
            email: userEmailValue,
            password: userPasswordlValue,
        })

        // TODO: redireciona para home
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
                <div className="w-full p-6 bg-white dark:bg-slate-900 rounded-md shadow-md border-top max-w-lg">
                    <h1 className="text-3xl font-semibold text-center text-white">
                        Login
                    </h1>
                    <form onSubmit={handleSubmitNewMovie} className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="text-base label-text text-white">Email</span>
                            </label>
                            <input
                                value={userEmailValue}
                                onChange={e => setUserEmailValue(e.target.value)}
                                type="text"
                                placeholder="E-mail"
                                className="w-full input input-bordered"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text text-white">Senha</span>
                            </label>
                            <input
                                value={userPasswordlValue}
                                onChange={e => setUserPasswordlValue(e.target.value)}
                                type="password"
                                placeholder="Senha"
                                className="w-full input input-bordered"
                            />
                        </div>
                        <div>
                            <button className="btn btn-block btn-primary text-white mt-3">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddUser;
