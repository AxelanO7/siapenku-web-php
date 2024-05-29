<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('name', 'password');
        $token = $this->generateToken($request);
        $user = Admin::where($credentials)->first();
        if (Admin::where($credentials)->exists()) {
            Admin::where($credentials)->update(['token' => $token]);
            return response()->json([
                'user' => $user,
                'token' => $token,
                'message' => 'Successfully logged in'
            ]);
        } else {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }
    }

    public function logout(Request $request)
    {
        $token = $request->bearerToken();
        Admin::where('token', $token)->update(['token' => null]);
        return redirect('/');
    }

    public function generateToken(Request $request)
    {
        $token = $request->bearerToken();
        if (!$token) {
            $token = bin2hex(random_bytes(40));
        }
        return $token;
    }

    public function getProfile(Request $request)
    {
        $token = $request->bearerToken();
        $user = Admin::where('token', $token)->first();
        return response()->json(
            [
                'user' => $user,
                'message' => 'Successfully fetched user profile'
            ]
        );
    }
}
