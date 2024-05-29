<?php

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

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

// Global
Route::get('/', function () {
    return Inertia::render('Global/MainPage');
})->name('main_page');


Route::get('submission', function () {
    return Inertia::render('Admin/Submission');
})->name('submission');

Route::get('resident', function () {
    return Inertia::render('Admin/Resident');
})->name('resident');


Route::get('/village-chief/validate', function () {
    return Inertia::render('VillageChief/Validate/Index');
})->name('village_chief_validate');

Route::get('/village-chief/detail-validate/{id}', function () {
    return Inertia::render('VillageChief/Validate/Detail');
})->name('village_chief_detail_validate');

Route::get('/village-chief/recommendation/{id}', function () {
    return Inertia::render('VillageChief/Recommendation');
})->name('village_chief_recommendation');


Route::get('/government/validate', function () {
    return Inertia::render('Government/Validate/Index');
})->name('government_validate');

Route::get('/government/detail-validate/{id}', function () {
    return Inertia::render('Government/Validate/Detail');
})->name('government_detail_validate');

Route::get('/government/print/{id}', function () {
    return Inertia::render('Government/Result/Print');
})->name('government_print');

Route::get('/report', function () {
    return Inertia::render('Government/Result/Report');
})->name('government_report');
