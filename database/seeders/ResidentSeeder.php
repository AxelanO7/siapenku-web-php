<?php

namespace Database\Seeders;

use App\Models\Resident;
use Illuminate\Database\Seeder;

class ResidentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Resident::create([
            'nik' => '123456789',
            'name' => 'I Made Sudirsa',
            'gender' => 'l',
            'birthdate' => '1999-01-01',
            'address' => 'Bulian',
            'marital_status' => 'single',
            'education' => 's1',
            'phone' => '1234567890',
            'resident_status' => 'active',
        ]);
    }
}
