<?php

namespace App\Http\Controllers;

use App\Models\Kasi;
use App\Models\Kadus;
use Illuminate\Http\Request;

class WitnessController extends Controller
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
    public function show(witness $witness)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(witness $witness)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, witness $witness)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(witness $witness)
    {
        //
    }

    // get all kasi table
    public function getAllKasi()
    {
        $res = Kasi::all();
        return response()->json(
            [
                'message' => 'Success',
                'data' => $res
            ]
        );
    }

    // get all kadus table
    public function getAllKadus()
    {
        $res = Kadus::all();
        return response()->json(
            [
                'message' => 'Success',
                'data' => $res
            ]
        );
    }
}
