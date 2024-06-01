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
        'gender_id',
        'synopsis',
        'user_id',
    ];

    public function gender()
    {
        return $this->hasOne(Gender::class, 'id', 'gender_id');
    }
}
