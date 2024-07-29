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
            $table->string('type_letter')->nullable();
            $table->string('no_letter')->nullable();
            $table->string('type_submission')->nullable();
            // attachment
            $table->string('att_family_card')->nullable();
            $table->string('att_certificate')->nullable();
            $table->string('att_rs')->nullable();
            // birth
            $table->string('order_child')->nullable();
            $table->string('birth_attendant')->nullable();
            $table->string('address_attendant')->nullable();
            $table->string('identity_card_mother')->nullable();
            $table->string('name_mother')->nullable();
            $table->string('birth_place_mother')->nullable();
            $table->string('birth_date_mother')->nullable();
            $table->string('address_mother')->nullable();
            $table->string('identity_card_father')->nullable();
            $table->string('name_father')->nullable();
            $table->string('birth_place_father')->nullable();
            $table->string('birth_date_father')->nullable();
            $table->string('address_father')->nullable();
            // death
            $table->string('name_requester')->nullable();
            $table->string('identity_card_requester')->nullable();
            $table->string('address_requester')->nullable();
            $table->string('relationship_requester')->nullable();
            $table->string('date_death')->nullable();
            $table->string('village_death')->nullable();
            $table->string('sub_district_death')->nullable();
            $table->string('district_death')->nullable();
            $table->string('province_death')->nullable();
            $table->string('cause_death')->nullable();

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
