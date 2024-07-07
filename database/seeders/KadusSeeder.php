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
            'name' => 'I Ketut Arta Sedana',
            'position' => 'Kadus Dangin Margi',
            'signature' => 'kadus_dangin_margi.png',
        ]);
        Kadus::create([
            'id' => 2,
            'name' => 'Wayan Sukendra Adnyana',
            'position' => 'Kadus Bantes',
            'signature' => 'kadus_bantes.png',
        ]);
        Kadus::create([
            'id' => 3,
            'name' => 'I Made Sukadana',
            'position' => 'Kadus Banyu Buah',
            'signature' => 'kadus_banyu_buah.png',
        ]);
        Kadus::create([
            'id' => 4,
            'name' => 'I Ketut Kariana',
            'position' => 'Kadus Dauh Margi',
            'signature' => 'kadus_dauh_margi.png',
        ]);
        Kadus::create([
            'id' => 5,
            'name' => 'I Gede Uki Rana',
            'position' => 'Kadus Lodguwuh',
            'signature' => 'kadus_lodguwuh.png',
        ]);
    }
}
