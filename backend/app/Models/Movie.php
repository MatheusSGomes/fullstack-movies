<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'cover',
        'embed_trailer',
        'release_year',
        'gender',
        'synopsis',
        'user_id',
    ];
}
