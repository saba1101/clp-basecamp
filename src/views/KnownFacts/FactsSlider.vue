<script setup>
import SlideImage from "@/assets/images/slide.jpg";
import IconSliderArrow from "@/assets/svg/sliderArrow.svg";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { ref } from "vue";

const modules = [Navigation, Pagination, A11y];
const swiperRef = ref("");

const getSwiperRef = (swiperInstance) => {
  swiperRef.value = swiperInstance;
};

const swiperActionsHandler = {
  next: () => {
    swiperRef.value.slideNext();
  },
  prev: () => {
    swiperRef.value.slidePrev();
  },
};
</script>

<template>
  <div class="p-4 bg-white rounded-3xl desktop:w-952 mobile:w-full">
    <div class="flex justify-between align-middle">
      <h3 class="text-color-interface-black-grey">ცნობილი ფაქტები</h3>
      <div class="flex justify-center align-middle gap-4">
        <div
          class="swiper-navigation-action"
          v-on:click="swiperActionsHandler.prev()"
        >
          <img :src="IconSliderArrow" />
        </div>
        <div
          class="swiper-navigation-action rotate-180"
          v-on:click="swiperActionsHandler.next()"
        >
          <img :src="IconSliderArrow" />
        </div>
      </div>
    </div>
    <div class="mt-5">
      <swiper
        class="rounded-3xl overflow-hidden"
        :modules="modules"
        :slides-per-view="3"
        :space-between="20"
        @swiper="getSwiperRef"
      >
        <swiper-slide v-for="i in 10" :key="i">
          <div class="bg-color-primary-light p-3 rounded-xl">
            <div class="w-auto">
              <img class="w-fit h-120 rounded-xl" :src="SlideImage" />
              <p class="mt-2 text-sm font-medium">
                ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper-navigation-action {
  @apply w-10 h-10 rounded-full ring-1 ring-black ring-opacity-10 grid place-items-center cursor-pointer;
}
</style>
