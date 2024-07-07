<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Admin::create([
            'id' => 1,
            'name' => 'admin',
            'password' => 'admin',
            'role' => 1,
        ]);
        Admin::create([
            'id' => 2,
            'name' => 'kadus',
            'password' => 'kadus',
            'role' => 2,
        ]);
        Admin::create([
            'id' => 3,
            'name' => 'kasi',
            'password' => 'kasi',
            'role' => 3,
        ]);
    }
}
