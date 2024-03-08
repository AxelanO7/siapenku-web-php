<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

// Admin
Route::get('/admin', function () {
    return Inertia::render('Admin/MainPage');
})->name('admin_index');

Route::get('/admin/submission', function () {
    return Inertia::render('Admin/Submission');
})->name('submission');

Route::get('/admin/resident', function () {
    return Inertia::render('Admin/Resident');
})->name('resident');

// Village Chief
Route::get('/village-chief', function () {
    return Inertia::render('VillageChief/MainPage');
})->name('village_chief_index');

Route::get('/village-chief/validate', function () {
    return Inertia::render('VillageChief/Validate/Index');
})->name('village_chief_validate');

// todo: confirm validate
Route::get('/village-chief/confirm-validate', function () {
    return Inertia::render('VillageChief/Validate/Confirm');
})->name('village_chief_confirm_validate');

Route::get('/village-chief/detail-validate/{id}', function () {
    return Inertia::render('VillageChief/Validate/Detail');
})->name('village_chief_detail_validate');

Route::get('/village-chief/recommendation', function () {
    return Inertia::render('VillageChief/Recommendation');
})->name('village_chief_recommendation');

// Government
Route::get('/government', function () {
    return Inertia::render('Government/MainPage');
})->name('government_index');

Route::get('/government/validate', function () {
    return Inertia::render('Government/Validate/Index');
})->name('government_validate');

Route::get('/government/detail-validate/{id}', function () {
    return Inertia::render('Government/Validate/Detail');
})->name('government_detail_validate');

Route::get('/government/submission', function () {
    return Inertia::render('Government/Submission/Letter');
})->name('government_submission');

Route::get('/government/submission/report', function () {
    return Inertia::render('Government/Submission/Report');
})->name('government_submission_report');
