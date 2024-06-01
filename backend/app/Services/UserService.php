<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;

class UserService
{
    public function getUsers()
    {
        return User::all();
    }

    public function createUser(Request $request)
    {
        // TODO: validação para email duplicado
        return User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => $request->password,
        ]);
    }

    public function getUser(int|string $id)
    {
        return User::find($id);
    }

    public function updateUser(Request $request, string $id)
    {
        $user = User::find($id);

        // TODO: validação para email duplicado
        $user->update([
            "name" => $request->name,
            "email" => $request->email,
            "password" => $request->password,
        ]);

        return $user;
    }

    public function deleteUser(int|string $id)
    {
        return User::find($id)->delete();
    }
}
