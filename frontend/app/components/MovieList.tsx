import { IMovie } from "@/types/movies";
import Movie from "./Movie";

interface MovieListProps {
    movies: IMovie|any
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {

    return (
        <div className="overflow-x-auto">



            <div className="grid grid-cols-4 gap-4">
            {movies.map((movie: any) => {
                console.log(movie);

                return (
                    <div  key={movie.id} className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                            <img className="w-full" src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/>
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">
                                {movie.title}

                            </h2>

                            <div className="flex flex-row gap-2">
                                <div className="badge badge-secondary">{movie.release_year}</div>
                                <div className="badge badge-secondary">{movie.gender}</div>
                            </div>

                            <p>{movie.synopsis}</p>
                            <div className="card-actions justify-end">
                                {/* <button className="btn btn-primary">Buy Now</button> */}
                                <Movie key={movie.id} movie={movie} />
                            </div>
                        </div>
                    </div>
                );
            })}
            </div>

            {/* <table className="table w-fulll">
                <thead>
                    <tr>
                        <th>Filme</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>

                    { movies ?
                    movies.map((movie: any) => <Movie key={movie.id} movie={movie} />)
                    : <tr><td colSpan={2} className="text-center">Nenhum filme encontrado</td></tr>}

                </tbody>
            </table> */}
        </div>
    );
}

export default MovieList;