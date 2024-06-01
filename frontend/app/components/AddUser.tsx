'use client';

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addUser } from "@/api";
import { useRouter } from "next/navigation";

const AddUser = () => {
    const router = useRouter();

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newUserNameValue, setNewUserNameValue] = useState<string>('');
    const [newUserEmailValue, setNewUserEmailValue] = useState<string>('');
    const [newUserPasswordlValue, setNewUserPasswordlValue] = useState<string>('');

    const handleSubmitNewUser: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        await addUser({
            name: newUserNameValue,
            email: newUserEmailValue,
            password: newUserPasswordlValue,
        })

        setNewUserNameValue('');
        setNewUserEmailValue('');
        setNewUserPasswordlValue('');

        setModalOpen(false);
        router.refresh();
    }

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">
                Adicionar novo usuário
                <AiOutlinePlus className='ml-0' size={15} />
            </button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
                <form onSubmit={handleSubmitNewUser}>
                    <h3 className="font-bold text-lg">Adicionar novo usuário</h3>
                    <div className="modal-action">
                        <input
                            value={newUserNameValue}
                            onChange={e => setNewUserNameValue(e.target.value)}
                            type="text"
                            placeholder="Nome"
                            className="input input-bordered w-full"
                        />
                        <input
                            value={newUserEmailValue}
                            onChange={e => setNewUserEmailValue(e.target.value)}
                            type="text"
                            placeholder="E-mail"
                            className="input input-bordered w-full"
                        />
                        <input
                            value={newUserPasswordlValue}
                            onChange={e => setNewUserPasswordlValue(e.target.value)}
                            type="password"
                            placeholder="Senha"
                            className="input input-bordered w-full"
                        />
                        <button type='submit' className='btn'>Cadastrar</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default AddUser;
