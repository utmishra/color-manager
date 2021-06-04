<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddHexcodeNameToColors extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('colors', function (Blueprint $table) {
            $table->string('hex', 6);
            $table->string('name', 100);
            $table->boolean('is_deleted');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('colors', function (Blueprint $table) {
            $table->dropColumn('hex');
            $table->dropColumn('name');
            $table->dropColumn('is_deleted');
        });
    }
}
