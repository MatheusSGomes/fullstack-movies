'use client';

import { IUser, IUserPost } from "@/types/users";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import Modal from "./Modal";
import { editUser } from "@/api";

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

        setUserNameToEdit('');
        setUserEmailToEdit('');
        setUserPasswordToEdit('');

        setModalOpenEdit(false);
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
                        <div className="modal-action">
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
                            <button type='submit' className='btn'>Cadastrar</button>
                        </div>
                    </form>
                </Modal>

                <FiTrash cursor="pointer" className='text-red-500' size={25} />
            </td>
        </tr>
    );
}

export default User;
