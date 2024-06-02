import { getAllMovies } from "@/api";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";

export default async function Home() {

  const movies = await getAllMovies();

  return (
    <main>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className="text-2xl font-bold">Filmes</h1>
        <AddMovie />
      </div>

      {movies ? <MovieList movies={movies.data} />
      : <h1>Nenhum filme encontrado</h1>}
    </main>
  );
}
