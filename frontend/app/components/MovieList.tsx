import { IMovie } from "@/types/movies";
import Movie from "./Movie";

interface MovieListProps {
    movies: IMovie|any
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {

    return (
        <div className="overflow-x-auto">
            <table className="table w-fulll">
                <thead>
                    <tr>
                        <th>Filme</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie: any) => <Movie key={movie.id} movie={movie} />)}
                </tbody>
            </table>
        </div>
    );
}

export default MovieList;