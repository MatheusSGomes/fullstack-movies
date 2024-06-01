<?php

namespace App\Services;

use App\Models\Movie;
use Illuminate\Http\Request;

class MovieService
{
    public function getMovies()
    {
        return Movie::all();
    }

    public function createMovie(Request $request)
    {
        $user = auth()->user()->id;

        return Movie::create([
            "title" => $request->title,
            "cover" => $request->cover,
            "embed_trailer" => $request->embed_trailer,
            "release_year" => $request->release_year,
            // TODO: genero deve estar em uma tabela separada, e uma seeder para preencher os principais generos
            "gender" => $request->gender,
            "synopsis" => $request->synopsis,
            "user_id" => $user->id,
        ]);
    }

    public function getMovie(int|string $id)
    {
        return Movie::find($id);
    }

    public function updateMovie(Request $request, string $id)
    {
        $movie = Movie::find($id);

        // TODO: tratamento caso não exista o filme
        $movie->update([
            "title" => $request->title,
        ]);

        return $movie;
    }

    public function deleteMovie(int|string $id)
    {
        // TODO: feedback para caso o filme não exista
        return Movie::find($id)->delete();
    }
}
