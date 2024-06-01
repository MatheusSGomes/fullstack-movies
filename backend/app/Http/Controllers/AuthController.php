<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
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
        //
    }
}
