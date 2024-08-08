<?php

namespace App\Http\Controllers;

use App\Models\Letter;
use App\Models\Kasi;
use App\Models\Kadus;
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

    // public function validateRequest(Request $request)
    // {
    //     $request->validate([
    //         'name' => 'required',
    //         'birth_place' => 'required',
    //         'birth_date' => 'required',
    //         'gender' => 'required',
    //         'religion' => 'required',
    //         'family_card' => 'required',
    //         'identity_card' => 'required',
    //         'address' => 'required',
    //         'nationality' => 'required',
    //         'needs' => 'required',
    //         'profession' => 'required',
    //         'marital_status' => 'required',
    //         'status' => 'required',
    //     ]);
    //     return true;
    // }

    public function createLetter(Request $request)
    {
        // $this->validateRequest($request);
        // $letter = new letter();
        // $letter->name = $request->name;
        // $letter->birth_place = $request->birth_place;
        // $letter->birth_date = $request->birth_date;
        // $letter->gender = $request->gender;
        // $letter->religion = $request->religion;
        // $letter->family_card = $request->family_card;
        // $letter->identity_card = $request->identity_card;
        // $letter->address = $request->address;
        // $letter->nationality = $request->nationality;
        // $letter->needs = $request->needs;
        // $letter->status = $request->status;
        // $letter->profession = $request->profession;
        // $letter->marital_status = $request->marital_status;
        // $letter->type_letter = $request->type_letter;
        // $letter->no_letter = $request->no_letter;
        // $letter->kasi_id = $request->kasi_id;
        // $letter->kadus_id = $request->kadus_ids;
        // $letter->type_submission = $request->type_submission;
        // $letter->att_family_card = $request->att_family_card;
        // $letter->att_certificate = $request->att_certificate;
        // $letter->att_rs = $request->att_rs;
        // $letter->save();
        $letter = letter::create($request->all());

        return response()->json([
            'message' => 'Letter created successfully',
            'data' => $letter
        ]);
    }

    public function getAllLetters()
    {
        $letters = letter::all();
        foreach ($letters as $letter) {
            if ($letter->kasi_id) {
                $kasi = kasi::find($letter->kasi_id);
                $letter->kasi = $kasi;
            }
            if ($letter->kadus_id) {
                $kadus = kadus::find($letter->kadus_id);
                $letter->kadus = $kadus;
            }
        }
        return response()->json([
            'message' => 'All letters',
            'data' => $letters
        ]);
    }

    public function getLetterById($id)
    {
        $letter = letter::find($id);
        if ($letter->kasi_id) {
            $kasi = kasi::find($letter->kasi_id);
            $letter->kasi = $kasi;
        }
        if ($letter->kadus_id) {
            $kadus = kadus::find($letter->kadus_id);
            $letter->kadus = $kadus;
        }
        return response()->json([
            'message' => 'Letter by id',
            'data' => $letter
        ]);
    }

    public function updateLetter(Request $request, $id)
    {
        $letter = letter::find($id);
        $no_letter = 0;
        if ($request->no_letter == null) {
            $no_letter = $this->generateLastNoLetter($request->type_letter);
        } else {
            $no_letter = $request->no_letter;
        }
        // make kadus key null
        $request->kadus = null;
        $letter->update($request->all());
        // $letter->name = $request->name;
        // $letter->birth_place = $request->birth_place;
        // $letter->birth_date = $request->birth_date;
        // $letter->gender = $request->gender;
        // $letter->religion = $request->religion;
        // $letter->family_card = $request->family_card;
        // $letter->identity_card = $request->identity_card;
        // $letter->address = $request->address;
        // $letter->nationality = $request->nationality;
        // $letter->needs = $request->needs;
        // $letter->profession = $request->profession;
        // $letter->marital_status = $request->marital_status;
        // $letter->status = $request->status;
        // $letter->type_letter = $request->type_letter;
        // $letter->type_submission = $request->type_submission;
        // $letter->att_family_card = $request->att_family_card;
        // $letter->att_certificate = $request->att_certificate;
        // $letter->att_rs = $request->att_rs;
        // if ($request->no_letter == null) {
        //     $letter->no_letter = $this->generateLastNoLetter($request->type_letter);
        // } else {
        //     $letter->no_letter = $request->no_letter;
        // }
        // $letter->kasi_id = $request->kasi_id;
        // $letter->kadus_id = $request->kadus_id;
        // $letter->save();
        return response()->json([
            'message' => 'Letter updated successfully',
            'data' => $letter
        ]);
    }

    public function getListNoLetter()
    {
        $list_no_letter = [
            // surat keterangan umum
            "01/SKU/2024",
            // surat kematiian
            "02/SKK/2024",
            // surat kelahiran
            "03/SKL/2024",
        ];
        return $list_no_letter;
    }

    public function generateLastNoLetter(
        $typeLetter
    ) {
        $letter = letter::where('type_letter', $typeLetter)->latest()->first();
        // remove space from string
        switch ($typeLetter) {
            case "Surat Kelahiran":
                $typeLetter = "SKL";
                break;
            case "Surat Kematian":
                $typeLetter = "SKK";
                break;
            case "Surat Keterangan Umum":
                $typeLetter = "SKU";
                break;
        }
        if ($letter) {
            $no_letter = $letter->no_letter;
            $no_letter = explode('/', $no_letter);
            $no_letter = $no_letter[0];
            $no_letter = (int)$no_letter + 1;
            $no_letter = $no_letter . '/' . $typeLetter . '/' . date('Y');
            return $no_letter;
        } else {
            return '01/' . $typeLetter . '/' . date('Y');
        }
    }

    public function saveFile(
        Request $request
    ) {
        if (!$request->hasFile('file')) {
            return response()->json([
                'message' => 'File not found'
            ]);
        }
        $file = $request->file('file');
        // filename from file
        $file_name = time() . '.' . $file->getClientOriginalExtension();
        if (!file_exists(public_path('files'))) {
            mkdir(public_path('files'), 0777, true);
        }
        $file->move(public_path('files'), $file_name);
        return response()->json([
            'message' => 'File uploaded successfully',
            'data' => $file_name
        ]);
    }

    public function deleteLetter($id)
    {
        $letter = letter::find($id);
        $letter->delete();
        return response()->json([
            'message' => 'Letter deleted successfully'
        ]);
    }

    public function getLetterByType($type)
    {
        switch ($type) {
            case "birth-letter":
                return "Surat Kelahiran";
                break;
            case "death-letter":
                return "Surat Kematian";
                break;
            case "general-letter":
                return "Surat Keterangan Umum";
                break;
        }
    }

    public function getTypeLetter($id)
    {
        $letter = letter::find($id);
        $letterType = $this->getLetterByType($letter->type_submission);
        $last_no_letter = $this->generateLastNoLetter($letterType);
        $data = [
            'letter_type' => $letterType,
            'last_no_letter' => $last_no_letter
        ];
        return response()->json([
            'message' => 'Letter by type',
            'data' => $data
        ]);
    }
}
