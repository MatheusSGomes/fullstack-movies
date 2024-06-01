<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
    public function __construct(
        private UserService $userService,
    ) { }

    public function index()
    {
        $users = $this->userService->getUsers();
        return UserResource::collection($users);;
    }

    public function store(Request $request)
    {
        $user = $this->userService->createUser($request);
        return UserResource::make($user);
    }

    public function show(string $id)
    {
        $user = $this->userService->getUser($id);
        return UserResource::make($user);
    }

    public function update(Request $request, string $id)
    {
        $user = $this->userService->updateUser($request, $id);
        return UserResource::make($user);
    }

    public function destroy(string $id)
    {
        return $this->userService->deleteUser($id);
    }
}
