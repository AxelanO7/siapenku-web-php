<?php

namespace App\Http\Middleware;

use App\Models\Admin;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class CustomAuth extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo(Request $request): ?string
    {
        $isNotAuthenticated = Admin::where('token', $request->bearerToken())->doesntExist();
        return $isNotAuthenticated ? route('login') : null;
        // $request->expectsJson() ? null :
        // $request->routeIs('admin_index') ? route('admin_index') :
        // $request->routeIs('submission') ? route('submission') :
        // $request->routeIs('resident') ? route('resident') :
        // $request->routeIs('village_chief_index') ? route('village_chief_index') :
        // $request->routeIs('validate') ? route('validate') :
        // route('main_page');
        // $request->expectsJson() ? null : route('login');
    }
}
