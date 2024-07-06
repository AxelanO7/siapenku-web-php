<?php

namespace Database\Seeders;

use App\Models\Kasi;
use Illuminate\Database\Seeder;

class KasiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Kasi::create([
            'id' => 1,
            'name' => 'kasi1',
            'position' => 'kasi1',
            'signature' => 'asal.png',
        ]);
    }
}
