<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('letters', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->string('birth_place');
            $table->string('birth_date');
            $table->string('gender');
            $table->string('religion');
            $table->string('family_card');
            $table->string('identity_card');
            $table->string('address');
            $table->string('nationality');
            $table->string('needs');
            $table->string('status');
            $table->string('marital_status');
            $table->string('profession');
            $table->string('attachment');
            $table->string('type_letter')->nullable();
            $table->string('no_letter')->nullable();

            $table->unsignedBigInteger('kasi_id')->nullable();
            $table->foreign('kasi_id')->references('id')->on('kasis');
            $table->unsignedBigInteger('kadus_id')->nullable();
            $table->foreign('kadus_id')->references('id')->on('kaduses');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('letters');
    }
};
