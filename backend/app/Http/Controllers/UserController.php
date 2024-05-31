<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function store(Request $request)
    {
        // TODO: validação para email duplicado
        return User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => $request->password,
        ]);
    }

    public function show(string $id)
    {
        return User::find($id);
    }

    public function update(Request $request, string $id)
    {
        $user = User::find($id);

        // TODO: validação para email duplicado
        return $user->update([
            "name" => $request->name,
            "email" => $request->email,
            "password" => $request->password,
        ]);
    }

    public function destroy(string $id)
    {
        return User::find($id)->delete();
    }
}
