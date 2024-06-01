<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Services\UserService;
use App\Http\Resources\UserResource;

class AuthController extends Controller
{
    public function __construct(
        private UserService $userService,
    ) { }

    public function login(Request $request)
    {
        // TODO: passar validação credenciais para FormRequest
        $credenciais = $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        if (!Auth::attempt($credenciais)) {
            return response()->json([
                'message' => 'Email ou senha incorreto',
            ], 401);
        }

        return response()->json([
            'message' => 'Login realizado com sucesso',
            'token' => auth()->user()->createToken("API_TOKEN")->plainTextToken,
            'token_type' => 'Bearer',
        ], 200);
    }

    public function register(Request $request)
    {
        $user = $this->userService->createUser($request);
        return UserResource::make($user);
    }
}
