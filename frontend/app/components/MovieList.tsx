import { IMovie } from "@/types/movies";
import Movie from "./Movie";

interface MovieListProps {
    Movies: IMovie[]
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {

    console.log(movies)

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
                    {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
                </tbody>
            </table>
        </div>
    );
}

export default MovieList;