<?php

namespace App\Http\Controllers;

use App\Models\Resident;
use Illuminate\Http\Request;

class ResidentController extends Controller
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
        $resident = Resident::create($request->all());
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Data Resident berhasil ditambahkan',
                'data' => $resident,
            ]
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Resident $resident)
    {
        $residents = resident::all();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Data Resident',
                'data' => $residents,
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Resident $resident)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Resident $resident)
    {
        $residentById = Resident::find($request->id);
        $residentById->update($request->all());
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Data Resident berhasil diupdate',
                'data' => $residentById,
            ]
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resident $resident)
    {
        //
    }

    public function deleteById(Request $request)
    {
        $residentById = Resident::find($request->id);
        $residentById->delete();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Data Resident berhasil dihapus',
                'data' => $residentById,
            ]
        );
    }
}
