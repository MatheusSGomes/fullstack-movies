<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GenderController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MovieController;
use Illuminate\Support\Facades\Route;

Route::apiResource('user', UserController::class)/* ->middleware('auth:sanctum') */;
Route::apiResource('movie', MovieController::class)/* ->middleware('auth:sanctum') */;

Route::middleware('auth:sanctum')->group( function () {
    // Route::apiResource('movie', MovieController::class);
});

Route::get('gender', [GenderController::class, 'index']);

Route::controller(AuthController::class)
    ->group(function () {
        Route::post('register', 'register');
        Route::post('login', 'login');
        Route::get('auth-user', 'authUser')
            ->middleware('auth:sanctum');
    });
