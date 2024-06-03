<?php

namespace App\Services;

use App\Models\Movie;
use Illuminate\Http\Request;

class MovieService
{
    public function getMovies()
    {
        return Movie::paginate(10);
    }

    public function createMovie(Request $request)
    {
        $user = auth()->user();

        return Movie::create([
            "title" => $request->title,
            "cover" => $request->cover,
            "embed_trailer" => $request->embed_trailer,
            "release_year" => $request->release_year,
            "gender_id" => $request->gender_id,
            "synopsis" => $request->synopsis,
            "user_id" => $user ? $user->id : null,
        ]);
    }

    public function getMovie(int|string $id)
    {
        return Movie::find($id);
    }

    public function updateMovie(Request $request, string $id)
    {
        $movie = Movie::find($id);

        if (!$movie) {
            return response()->json([
                'message' => 'Filme não encontrado.',
                'status' => 'error'
            ], 404);
        }

        $user = auth()->user();

        $movie->update([
            "title" => $request->title ?? $movie->title,
            "cover" => $request->cover ?? $movie->cover,
            "embed_trailer" => $request->embed_trailer ?? $movie->embed_trailer,
            "release_year" => $request->release_year ?? $movie->release_year,
            "gender_id" => $request->gender_id ?? $movie->gender_id,
            "synopsis" => $request->synopsis ?? $movie->synopsis,
            "user_id" => $user ? $user->id : null,
        ]);

        return $movie;
    }

    public function deleteMovie(int|string $id)
    {
        $movie = Movie::find($id);

        if (!$movie) {
            return response()->json([
                'message' => 'Filme não encontrado.',
                'status' => 'error'
            ], 404);
        }

        return $movie->delete();
    }
}
