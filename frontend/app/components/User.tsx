'use client';

import { IUser, IUserPost } from "@/app/types/users";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import Modal from "./Modal";
import { deleteUser, editUser } from "@/api";

interface UserProps {
    user: IUser
}

const User: React.FC<UserProps> = ({ user }) => {
    const router = useRouter();

    const [modalOpenEdit, setModalOpenEdit] = useState<boolean>(false);
    const [modalOpenDelete, setModalOpenDelete] = useState<boolean>(false);

    const [userNameToEdit, setUserNameToEdit] = useState<string>(user.name);
    const [userEmailToEdit, setUserEmailToEdit] = useState<string>(user.email);
    const [userPasswordToEdit, setUserPasswordToEdit] = useState<string>('');


    const handleSubmitEditUser: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        await editUser({
            id: user.id,
            name: userNameToEdit,
            email: userEmailToEdit,
            password: userPasswordToEdit,
        })

        setModalOpenEdit(false);
        setModalOpenDelete(false);

        router.refresh();
    }

    const handleDeleteUser = async (user_id: string|number) => {
        await deleteUser(user_id);
        setModalOpenDelete(false);
        router.refresh();
    }

    return (
        <tr key={user.id}>
            <td className='w-full'>{user.name}</td>
            <td className='flex gap-5'>
                <FiEdit onClick={() => setModalOpenEdit(true)} cursor="pointer" className='text-blue-500' size={25} />
                <Modal modalOpen={modalOpenEdit} setModalOpen={setModalOpenEdit} >
                    <form onSubmit={handleSubmitEditUser}>
                        <h3 className="font-bold text-lg">Editar usuário</h3>
                        <div className="flex flex-col gap-3 mt-3">
                            <input
                                value={userNameToEdit}
                                onChange={e => setUserNameToEdit(e.target.value)}
                                type="text"
                                placeholder="Nome"
                                className="input input-bordered w-full"
                                required
                            />
                            <input
                                value={userEmailToEdit}
                                onChange={e => setUserEmailToEdit(e.target.value)}
                                type="text"
                                placeholder="E-mail"
                                className="input input-bordered w-full"
                                required
                            />
                            <input
                                value={userPasswordToEdit}
                                onChange={e => setUserPasswordToEdit(e.target.value)}
                                type="password"
                                placeholder="Senha"
                                className="input input-bordered w-full"
                                required
                            />
                            <button type='submit' className='btn btn-primary w-full'>Atualizar</button>
                        </div>
                    </form>
                </Modal>

                <FiTrash onClick={() => setModalOpenDelete(true)} cursor="pointer" className='text-red-500' size={25} />

                <Modal modalOpen={modalOpenDelete} setModalOpen={setModalOpenDelete} >
                    <h3 className="text-lg">Tem certeza que deseja apagar o usuário?</h3>
                    <div className="modal-action">
                        <button
                            onClick={() => setModalOpenDelete(false)}
                            className="btn"
                        >Não</button>
                        <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="btn btn-primary"
                        >Sim</button>
                    </div>
                </Modal>
            </td>
        </tr>
    );
}

export default User;
