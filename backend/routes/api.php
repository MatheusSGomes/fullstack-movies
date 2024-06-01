<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MovieController;
use Illuminate\Support\Facades\Route;

Route::apiResource('user', UserController::class)/* ->middleware('auth:sanctum')*/;
Route::apiResource('movie', MovieController::class)/* ->middleware('auth:sanctum')*/;

Route::controller(AuthController::class)
    ->group(function () {
        Route::post('/login', 'login');
        Route::post('/register', 'register');
    });
