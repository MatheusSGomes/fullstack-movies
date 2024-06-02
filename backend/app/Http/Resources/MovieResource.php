<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MovieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "title" => $this->title,
            "cover" => $this->cover,
            "embed_trailer" => $this->embed_trailer,
            "release_year" => $this->release_year,
            "gender" => $this->gender->name,
            "synopsis" => $this->synopsis,
        ];
    }
}
