<script setup>
import News from "@/views/News/News.vue";
import NewsSlider from "@/views/News/NewsSlider.vue";
import FactsSlider from "@/views/KnownFacts/FactsSlider.vue";
import Popular from "@/views/KnownFacts/Popular.vue";
import FactsGrid from "@/views/KnownFacts/FactsGrid.vue";
</script>

<template>
  <section class="w-full inline-flex mt-9 gap-8">
    <div><NewsSlider /></div>
    <div><News /></div>
  </section>
  <section class="w-full inline-flex mt-9 gap-8">
    <div>
      <FactsSlider />
      <div><FactsGrid /></div>
    </div>
    <div><Popular /></div>
  </section>
  <!-- <section></section> -->
</template>
//class="home-content-popular"

<style scoped lang="scss">
section {
  @apply rounded-3xl  p-3;
}
</style>
