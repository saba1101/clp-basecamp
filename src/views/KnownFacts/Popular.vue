<script setup>
import ImageMoon from "@/assets/images/moon.png";
</script>
<template>
  <div class="w-304 h-618 bg-white rounded-3xl px-6 overflow-auto">
    <div class="pt-6 pb-4">
      <h1 class="text-color-interface-black font-semibold text-lg leading-7">
        პოპულარული
      </h1>
    </div>
    <div>
      <div
        v-for="i in 25"
        :key="i"
        class="flex justify-start align-center mt-4 border-b-2 border-dashed border-color-interface-light pb-4 cursor-pointer"
      >
        <div class="w-96">
          <img class="w-full" :src="ImageMoon" />
        </div>
        <p class="text-sm ml-4 text-color-interface-black-grey">
          დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა
        </p>
      </div>
    </div>
  </div>
</template>
