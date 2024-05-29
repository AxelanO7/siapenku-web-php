<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Witness extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'position'
    ];

    public function letters()
    {
        return $this->hasMany(Letter::class);
    }
}
