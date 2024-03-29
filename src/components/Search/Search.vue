<script setup>
import iconSearch from "@/assets/svg/search.svg";
import { computed } from "vue";
const props = defineProps({
  value: {
    type: [String, Number],
    default: "",
  },
  placeHolder: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["update:value"]);

const inputValue = computed({
  get() {
    return props.value;
  },
  set(value) {
    return emits("update:value", value);
  },
});
</script>

<template>
  <div class="search-input-wrapper">
    <input
      v-model="inputValue"
      type="text"
      :placeholder="props.placeHolder"
      value=""
    />
    <div class="search-icon">
      <img :src="iconSearch" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-input-wrapper {
  @apply w-56 h-12 rounded-full bg-color-primary-light relative grid place-items-center;

  & > input {
    @apply w-full h-full outline-none rounded-full border-solid border-2 border-transparent pl-4 pr-10 bg-transparent;
    &:focus {
      @apply border-2 border-color-primary;
    }
  }

  .search-icon {
    @apply absolute top-1/2 right-4 transform -translate-y-1/2;
  }
}
</style>
