<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kadus extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'position',
        'signature'
    ];
}
