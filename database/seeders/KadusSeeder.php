<?php

namespace Database\Seeders;

use App\Models\Kadus;
use Illuminate\Database\Seeder;

class KadusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Kadus::create([
            'id' => 1,
            'name' => 'kadus1',
            'position' => 'kadus1',
            'signature' => 'asal.png',
        ]);
    }
}
