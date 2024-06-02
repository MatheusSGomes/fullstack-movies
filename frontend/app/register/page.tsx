'use client';

import { FormEventHandler, useState } from "react";
import { addUser } from "@/api";
import { useRouter } from "next/navigation";

const AddUser = () => {
    const router = useRouter();

    const [userNameValue, setUserNameValue] = useState<string>('');
    const [userEmailValue, setUserEmailValue] = useState<string>('');
    const [userPasswordlValue, setUserPasswordlValue] = useState<string>('');

    const handleSubmitRegister: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        await addUser({
            name: userNameValue,
            email: userEmailValue,
            password: userPasswordlValue,
        })

        router.push('/movies')
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
                <div className="w-full p-6 bg-white dark:bg-slate-900 rounded-md shadow-md border-top max-w-lg">
                    <h1 className="text-3xl font-semibold text-center text-white">
                        Cadastrar usuário
                    </h1>
                    <form onSubmit={handleSubmitRegister} className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="text-base label-text text-white">Nome</span>
                            </label>
                            <input
                                value={userNameValue}
                                onChange={e => setUserNameValue(e.target.value)}
                                type="text"
                                placeholder="Nome"
                                className="w-full input input-bordered"
                            />
                        </div>
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
                            <button className="btn btn-block btn-primary text-white mt-3">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddUser;
