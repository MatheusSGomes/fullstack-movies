'use client';

import { IMovie, IMoviePost } from "@/types/movies";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import Modal from "./Modal";
import { deleteMovie, editMovie } from "@/api";

interface MovieProps {
    movie: IMovie
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
    const router = useRouter();

    const [modalOpenEdit, setModalOpenEdit] = useState<boolean>(false);
    const [modalOpenDelete, setModalOpenDelete] = useState<boolean>(false);

    const [movieTitleToEdit, setMovieTitleToEdit] = useState<string>(movie.title);
    const [movieCoverToEdit, setMovieCoverToEdit] = useState<string>(movie.cover);
    const [movieEmbedTrailerToEdit, setMovieEmbedTrailerToEdit] = useState<string>(movie.embed_trailer);
    const [movieReleaseYearToEdit, setMovieReleaseYearToEdit] = useState<string>(movie.release_year);
    const [movieGenderToEdit, setMovieGenderToEdit] = useState<string>(movie.gender);
    const [movieSynopsisToEdit, setMovieSynopsisToEdit] = useState<string>(movie.synopsis);

    const handleSubmitEditMovie: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        await editMovie({
            id: movie.id,
            title: movieTitleToEdit,
            cover: movieCoverToEdit,
            embed_trailer: movieEmbedTrailerToEdit,
            release_year: movieReleaseYearToEdit,
            gender_id: movieGenderToEdit,
            synopsis: movieSynopsisToEdit,
        })

        setModalOpenEdit(false);
        setModalOpenDelete(false);

        router.refresh();
    }

    const handleDeleteMovie = async (movie_id: string|number) => {
        // await deleteMovie(movie_id);
        setModalOpenDelete(false);
        router.refresh();
    }

    return (
        <tr key={movie.id}>
            <td className='w-full'>{movie.title}</td>
            <td className='flex gap-5'>
                <FiEdit onClick={() => setModalOpenEdit(true)} cursor="pointer" className='text-blue-500' size={25} />
                <Modal modalOpen={modalOpenEdit} setModalOpen={setModalOpenEdit} >
                    <form onSubmit={handleSubmitEditMovie}>
                        <h3 className="font-bold text-lg">Editar usuário</h3>
                        <div className="flex flex-col gap-3 mt-3">
                            <input
                                value={movieTitleToEdit}
                                onChange={e => setMovieTitleToEdit(e.target.value)}
                                type="text"
                                placeholder="Título"
                                className="input input-bordered w-full"
                                required
                            />
                            {/* TODO: Genero deve ser um campo tipo input image */}
                            <input
                                value={movieCoverToEdit}
                                onChange={e => setMovieCoverToEdit(e.target.value)}
                                type="text"
                                placeholder="Capa"
                                className="input input-bordered w-full"
                                required
                            />
                            <input
                                value={movieEmbedTrailerToEdit}
                                onChange={e => setMovieEmbedTrailerToEdit(e.target.value)}
                                type="text"
                                placeholder="Link Trailer"
                                className="input input-bordered w-full"
                                required
                            />
                            <input
                                value={movieReleaseYearToEdit}
                                onChange={e => setMovieReleaseYearToEdit(e.target.value)}
                                type="text"
                                placeholder="Ano Lançamento"
                                className="input input-bordered w-full"
                                required
                            />
                            {/* TODO: Genero deve ser um campo do tipo select */}
                            <input
                                value={movieGenderToEdit}
                                onChange={e => setMovieGenderToEdit(e.target.value)}
                                type="text"
                                placeholder="Genero"
                                className="input input-bordered w-full"
                                required
                            />
                            <input
                                value={movieSynopsisToEdit}
                                onChange={e => setMovieSynopsisToEdit(e.target.value)}
                                type="text"
                                placeholder="Sinopse"
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
                            onClick={() => handleDeleteMovie(movie.id)}
                            className="btn btn-primary"
                        >Sim</button>
                    </div>
                </Modal>
            </td>
        </tr>
    );
}

export default Movie;
