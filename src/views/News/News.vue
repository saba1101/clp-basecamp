<script setup>
import IconClock from "@/assets/svg/clock.svg";
</script>
<template>
  <div class="w-304 h-618 bg-white rounded-lg overflow-auto px-6">
    <div class="sticky top-0 bg-white pt-6 pb-4">
      <h1 class="text-color-interface-black font-semibold text-lg leading-7">
        ყველა სიახლე
      </h1>
    </div>
    <div>
      <div
        v-for="i in 25"
        :key="i"
        class="mt-4 border-b-2 border-dashed border-color-interface-light pb-4 cursor-pointer"
      >
        <div class="flex items-center gap-2">
          <img :src="IconClock" alt="iconClock" class="w-5 h-5" />
          <span class="text-color-primary font-bold text-sm">7:30</span>
          <span class="text-color-primary font-bold text-sm">02.01.2023</span>
        </div>
        <div class="mt-4 md:mt-4">
          <p class="text-color-interface-black text-base font-normal leading-5">
            დღეიდან ასაწონად განკუთვნილი პოლიეტილენის პარკები აიკრძალა
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
