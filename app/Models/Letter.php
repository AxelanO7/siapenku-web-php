<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Letter extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'birth_place',
        'birth_date',
        'gender',
        'religion',
        'family_card',
        'identity_card',
        'address',
        'nationality',
        'needs',
        'attachment',
        'status',
        'marital_status',
        'profession',
        'type_letter',
        'no_letter',
        'kasi_id',
        'kasi',
        'kadus_id',
        'kadus'
    ];
}
