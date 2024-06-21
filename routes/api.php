<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LetterController;
use App\Http\Controllers\ResidentController;
use App\Http\Controllers\WitnessController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/letter', [LetterController::class, 'createLetter']);
Route::get('/letter', [LetterController::class, 'getAllLetters']);
Route::get('/letter/{id}', [LetterController::class, 'getLetterById']);
Route::put('/letter/{id}', [LetterController::class, 'updateLetter']);

// save file with form-data
Route::post('/letter/file', [LetterController::class, 'saveFile']);

// resident
Route::get('/resident', [ResidentController::class, 'show']);
Route::post('/resident', [ResidentController::class, 'store']);
Route::put('/resident/{id}', [ResidentController::class, 'update']);
Route::delete('/resident/{id}', [ResidentController::class, 'deleteById']);


Route::get('/kasi', [WitnessController::class, 'getAllKasi']);
Route::get('/kadus', [WitnessController::class, 'getAllKadus']);

Route::get('/profile', [AuthController::class, 'getProfile']);
