<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resident extends Model
{
    use HasFactory;
    protected $fillable = [
        'nik',
        'name',
        'gender',
        'birthdate',
        'address',
        'marital_status',
        'education',
        'phone',
        'resident_status'
    ];
}
