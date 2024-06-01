<?php

namespace App\Http\Controllers;

use App\Services\MovieService;
use Illuminate\Http\Request;
use App\Http\Resources\MovieResource;

class MovieController extends Controller
{
    public function __construct(
        private MovieService $movieService,
    ) { }

    public function index()
    {
        $movies = $this->movieService->getMovies();
        return MovieResource::collection($movies);
    }

    public function store(Request $request)
    {
        $movie = $this->movieService->createMovie($request);
        return MovieResource::make($movie);
    }

    public function show(string $id)
    {
        $movie = $this->movieService->getMovie($id);
        return MovieResource::make($movie);
    }

    public function update(Request $request, string $id)
    {
        $movie = $this->movieService->updateMovie($request, $id);
        return MovieResource::make($movie);
    }

    public function destroy(string $id)
    {
        return $this->movieService->deleteMovie($id);
    }
}
