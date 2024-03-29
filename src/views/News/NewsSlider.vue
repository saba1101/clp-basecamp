<script setup>
import SlideImage from "@/assets/images/slide.jpg";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

const modules = [Navigation, Pagination, A11y];
</script>

<template>
  <div class="w-952 bg-color-interface-white rounded-3xl p-4">
    <swiper
      class="rounded-3xl"
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
    >
      <swiper-slide v-for="i in 10" :key="i">
        <img class="w-full" :src="SlideImage" />
      </swiper-slide>
    </swiper>
    <div class="slider-tags flex gap-2 mt-4">
      <div>
        <h3>12.08.2023</h3>
      </div>
      <div>
        <h3>პოლიტიკა</h3>
      </div>
    </div>
    <div class="mt-4 cursor-pointer">
      <h1 class="text-2xl font-bold">
        ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული
        პროექტები დაიწყება
      </h1>
      <p class="mt-2 font-medium text-base text-color-interface-black-grey">
        განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”.
        ობლიგაციის ნომინალი - 1000 USD
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider-tags {
  div {
    @apply w-fit rounded-2xl p-2 bg-color-primary-light;
    h3 {
      @apply text-color-interface-black-medium font-bold text-xs;
    }
  }
}
</style>
