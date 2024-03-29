<script setup>
import Header from "@/components/Header/Header.vue";
import Home from "@/views/Home.vue";
</script>

<template>
  <Header />
  <main>
    <Home />
  </main>
  <footer></footer>
</template>

<style scoped>
main {
  @apply desktop:w-1280 tablet:w-1024 mobile:w-20 overflow-hidden m-auto;
}
</style>
