<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ColorController;


Route::apiResource('colors', ColorController::class);
