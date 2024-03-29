<script setup>
import Image1 from "@/assets/images/cardpicSmall.png";
import Image2 from "@/assets/images/cardpic.png";
</script>

<template>
  <div class="mt-16">
    <div
      class="grid grid-cols-3 grid-rows-2 gap-8 align-middle place-items-center"
    >
      <div
        class="col-start-2 col-end-3 row-start-1 row-end-3 w-304 h-408 grid-card-style"
      >
        <div>
          <img :src="Image2" />
        </div>
        <div class="tags flex gap-2 mt-4">
          <div>
            <h3>12.08.2023</h3>
          </div>
          <div>
            <h3>პოლიტიკა</h3>
          </div>
        </div>
        <p class="article-title">
          ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების
        </p>
      </div>
      <div
        class="col-start-1 col-end-2 row-start-1 row-end-2 w-304 grid-card-style"
      >
        <div class="image-placeholder">
          <img :src="Image1" />
        </div>
        <div class="tags flex gap-2 mt-4">
          <div>
            <h3>12.08.2023</h3>
          </div>
          <div>
            <h3>პოლიტიკა</h3>
          </div>
        </div>
        <p class="article-title">
          ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების
        </p>
      </div>
      <div
        class="col-start-1 col-end-2 row-start-2 row-end-3 w-304 grid-card-style"
      >
        <div class="image-placeholder">
          <img :src="Image1" />
        </div>
        <div class="tags flex gap-2 mt-4">
          <div>
            <h3>12.08.2023</h3>
          </div>
          <div>
            <h3>პოლიტიკა</h3>
          </div>
        </div>
        <p class="article-title">
          ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების
        </p>
      </div>
      <div
        class="col-start-3 col-end-4 row-start-1 row-end-2 w-304 grid-card-style"
      >
        <div class="image-placeholder">
          <img :src="Image1" />
        </div>
        <div class="tags flex gap-2 mt-4">
          <div>
            <h3>12.08.2023</h3>
          </div>
          <div>
            <h3>პოლიტიკა</h3>
          </div>
        </div>
        <p class="article-title">
          ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების
        </p>
      </div>
      <div
        class="col-start-3 col-end-4 row-start-2 row-end-3 w-304 grid-card-style"
      >
        <div class="image-placeholder">
          <img :src="Image1" />
        </div>
        <div class="tags flex gap-2 mt-4">
          <div>
            <h3>12.08.2023</h3>
          </div>
          <div>
            <h3>პოლიტიკა</h3>
          </div>
        </div>
        <p class="article-title">
          ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-card-style {
  @apply bg-color-interface-white rounded-2xl p-2;
}
.tags {
  div {
    @apply w-fit rounded-2xl p-2 bg-color-primary-light;
    h3 {
      @apply text-color-interface-black-medium font-bold text-xs;
    }
  }
}
.article-title {
  @apply mt-4 text-base text-color-interface-black-medium font-medium;
}
</style>
