<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Color;
use Faker\Factory as Faker;

class ColorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Color::truncate();
        $faker = Faker::create();
        for ($colorIndex = 0; $colorIndex < 30; $colorIndex++) {
            Color::create([
                'hex' => substr($faker->safeHexColor(), 1, 6),
                'name' => $faker->safeColorName()
            ]);
        }
    }
}
