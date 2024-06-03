import { IMovie } from "@/types/movies";
import Movie from "./Movie";

interface MovieListProps {
    movies: IMovie|any
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    return (
        movies ? (<div className="overflow-x-auto">
            <div className="grid grid-cols-4 gap-4">
            {movies.map((movie: any) => {
                return (
                    <div  key={movie.id} className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                            <img className="w-full" src={movie.cover} alt="Movie"/>
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">
                                {movie.title}

                            </h2>

                            <div className="flex flex-row gap-2">
                                <div className="badge badge-secondary">{movie.release_year}</div>
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
        </div>) : (<div className="overflow-x-auto"><p className="text-center">Nenhum filme encontrado</p></div>)
    );
}

export default MovieList;