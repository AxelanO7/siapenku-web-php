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
        'status',
        'marital_status',
        'profession',
        'type_letter',
        'no_letter',
        'kasi_id',
        'kasi',
        'kadus_id',
        'kadus',
        'type_submission',
        'att_family_card',
        'att_certificate',
        'att_rs',
        'order_child',
        'birth_attendant',
        'address_attendant',
        'identity_card_mother',
        'name_mother',
        'birth_place_mother',
        'birth_date_mother',
        'address_mother',
        'identity_card_father',
        'name_father',
        'birth_place_father',
        'birth_date_father',
        'address_father',
        'name_requester',
        'identity_card_requester',
        'address_requester',
        'relationship_requester',
        'date_death',
        'village_death',
        'sub_district_death',
        'district_death',
        'province_death',
        'cause_death',
    ];
}
