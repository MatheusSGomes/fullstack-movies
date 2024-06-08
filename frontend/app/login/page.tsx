'use client';

import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInRequest } from "@/api";

const AddUser = () => {
    const router = useRouter();

    const [userEmailValue, setUserEmailValue] = useState<string>('');
    const [userPasswordlValue, setUserPasswordlValue] = useState<string>('');

    const handleSubmitLogin: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const response = await signInRequest({
            email: userEmailValue,
            password: userPasswordlValue,
        })

        console.log(response);

        // router.push('/movies');
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
                <div className="w-full p-6 bg-white dark:bg-slate-900 rounded-md shadow-md border-top max-w-lg">
                    <h1 className="text-3xl font-semibold text-center text-white">
                        Login
                    </h1>
                    <form onSubmit={handleSubmitLogin} className="space-y-4">
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
                <Link href="/register" className="text-lg text-gray-300 hover:underline hover:text-blue-600 mt-3">Cadastre-se</Link>
            </div>
        </div>
    );
}

export default AddUser;
