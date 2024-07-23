<?php

namespace Database\Seeders;

use App\Models\Letter;
use Illuminate\Database\Seeder;

class LetterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Letter::create([
            'name' => 'I Made Sudirsa',
            'birth_place' => 'Bali',
            'birth_date' => '1999-01-01',
            'gender' => 'l',
            'religion' => 'hindu',
            'family_card' => '1234567890',
            'identity_card' => '1234567890',
            'address' => 'Bulian',
            'nationality' => 'Indonesia',
            'needs' => 'KTP',
            'status' => 'pending',
            'profession' => 'swasta',
            'marital_status' => 'Belum Menikah',
            'type_submission' => 'general-letter',
            'att_family_card' => 'logo.png',
            // 'att_certificate' => 'logo.png',
            'att_rs' => 'logo.png',
        ]);
    }
}
