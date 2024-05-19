<?php

namespace App\Http\Controllers;

use App\Models\letter;
use Illuminate\Http\Request;

class LetterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(letter $letter)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(letter $letter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, letter $letter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(letter $letter)
    {
        //
    }

    public function validateRequest(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'birth_place' => 'required',
            'birth_date' => 'required',
            'gender' => 'required',
            'religion' => 'required',
            'family_card' => 'required',
            'identity_card' => 'required',
            'address' => 'required',
            'nationality' => 'required',
            'needs' => 'required',
            'attachment' => 'required',
            'status' => 'required'
        ]);
        return true;
    }

    public function createLetter(Request $request)
    {
        $this->validateRequest($request);
        // $request->validate([
        //     'name' => 'required',
        //     'birth_place' => 'required',
        //     'birth_date' => 'required',
        //     'gender' => 'required',
        //     'religion' => 'required',
        //     'family_card' => 'required',
        //     'identity_card' => 'required',
        //     'address' => 'required',
        //     'nationality' => 'required',
        //     'needs' => 'required',
        //     'attachment' => 'required',
        //     'status' => 'required'
        // ]);

        $letter = new letter();
        $letter->name = $request->name;
        $letter->birth_place = $request->birth_place;
        $letter->birth_date = $request->birth_date;
        $letter->gender = $request->gender;
        $letter->religion = $request->religion;
        $letter->family_card = $request->family_card;
        $letter->identity_card = $request->identity_card;
        $letter->address = $request->address;
        $letter->nationality = $request->nationality;
        $letter->needs = $request->needs;
        $letter->attachment = $request->attachment;
        $letter->status = $request->status;
        $letter->save();

        return response()->json([
            'message' => 'Letter created successfully',
            'data' => $letter
        ]);
    }

    public function getAllLetters()
    {
        $letters = letter::all();
        return response()->json([
            'message' => 'All letters',
            'data' => $letters
        ]);
    }

    public function getLetterById($id)
    {
        $letter = letter::find($id);
        return response()->json([
            'message' => 'Letter by id',
            'data' => $letter
        ]);
    }

    public function updateLetter(Request $request, $id)
    {
        $letter = letter::find($id);
        $letter->name = $request->name;
        $letter->birth_place = $request->birth_place;
        $letter->birth_date = $request->birth_date;
        $letter->gender = $request->gender;
        $letter->religion = $request->religion;
        $letter->family_card = $request->family_card;
        $letter->identity_card = $request->identity_card;
        $letter->address = $request->address;
        $letter->nationality = $request->nationality;
        $letter->needs = $request->needs;
        $letter->attachment = $request->attachment;
        $letter->status = $request->status;
        $letter->save();
        return response()->json([
            'message' => 'Letter updated successfully',
            'data' => $letter
        ]);
    }
}
