'use client';

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addMovie } from "@/api";
import { useRouter } from "next/navigation";

const AddMovie = () => {
    const router = useRouter();

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const [movieTitleToEdit, setMovieTitleToEdit] = useState<string>('');
    const [movieCoverToEdit, setMovieCoverToEdit] = useState<string>('');
    const [movieEmbedTrailerToEdit, setMovieEmbedTrailerToEdit] = useState<string>('');
    const [movieReleaseYearToEdit, setMovieReleaseYearToEdit] = useState<string>('');
    const [movieGenderToEdit, setMovieGenderToEdit] = useState<string>('');
    const [movieSynopsisToEdit, setMovieSynopsisToEdit] = useState<string>('');

    const handleSubmitNewMovie: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        await addMovie({
            title: movieTitleToEdit,
            cover: movieCoverToEdit,
            embed_trailer: movieEmbedTrailerToEdit,
            release_year: movieReleaseYearToEdit,
            gender_id: movieGenderToEdit,
            synopsis: movieSynopsisToEdit,
        });

        setMovieTitleToEdit('');
        setMovieCoverToEdit('');
        setMovieEmbedTrailerToEdit('');
        setMovieReleaseYearToEdit('');
        setMovieGenderToEdit('');
        setMovieSynopsisToEdit('');

        setModalOpen(false);
        router.refresh();
    }

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">
                Adicionar novo filme
                <AiOutlinePlus className='ml-0' size={15} />
            </button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
                <form onSubmit={handleSubmitNewMovie}>
                    <h3 className="font-bold text-lg">Adicionar novo filme</h3>
                    <div className="flex flex-col gap-3 mt-3">
                        <input
                            value={movieTitleToEdit}
                            onChange={e => setMovieTitleToEdit(e.target.value)}
                            type="text"
                            placeholder="Título"
                            className="input input-bordered w-full"
                        />
                        <input
                            value={movieCoverToEdit}
                            onChange={e => setMovieCoverToEdit(e.target.value)}
                            type="text"
                            placeholder="Capa"
                            className="input input-bordered w-full"
                        />
                        <input
                            value={movieEmbedTrailerToEdit}
                            onChange={e => setMovieEmbedTrailerToEdit(e.target.value)}
                            type="text"
                            placeholder="Link Trailer"
                            className="input input-bordered w-full"
                        />
                        <input
                            value={movieReleaseYearToEdit}
                            onChange={e => setMovieReleaseYearToEdit(e.target.value)}
                            type="text"
                            placeholder="Ano de lançamento"
                            className="input input-bordered w-full"
                        />
                        <input
                            value={movieGenderToEdit}
                            onChange={e => setMovieGenderToEdit(e.target.value)}
                            type="text"
                            placeholder="Genero"
                            className="input input-bordered w-full"
                        />
                        <input
                            value={movieSynopsisToEdit}
                            onChange={e => setMovieSynopsisToEdit(e.target.value)}
                            type="text"
                            placeholder="Sinopse"
                            className="input input-bordered w-full"
                        />
                        <button type='submit' className='btn btn-primary w-full'>Cadastrar</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default AddMovie;
