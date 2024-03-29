<script setup>
import Header from "@/components/Header/Header.vue";
import Home from "@/views/Home.vue";
</script>

<template>
  <header class="z-50 sticky top-0">
    <Header />
  </header>
  <main>
    <Home />
  </main>
  <footer></footer>
</template>

<style scoped>
main {
  @apply desktop:w-1280 tablet:w-1024  overflow-hidden m-auto;
}
</style>
