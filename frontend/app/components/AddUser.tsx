'use client';

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";

const AddUser = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">
                Adicionar novo usuário
                <AiOutlinePlus className='ml-0' size={15} />
            </button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
                conteúdo da modal
            </Modal>
        </div>
    );
}

export default AddUser;
