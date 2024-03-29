<script setup>
import Logo from "@/assets/svg/Logo.svg";
import { NAVBAR_ITEMS, SOCIALS } from "@/data/common-data";
import { ref, onMounted } from "vue";
import Search from "@/components/Search/Search.vue";
import IconArrowDown from "@/assets/svg/arrowDown.svg";

const navigation = ref(null);
const socials = ref(null);
const searchValue = ref("");
const isMobile = false;
const visibleNavItemsIndex = 4;
const isNavDropdownVisible = ref(false);

const setNavigationItems = () => {
  const visibleNavItems = NAVBAR_ITEMS.slice(0, visibleNavItemsIndex);
  const hiddenNavItems = NAVBAR_ITEMS.slice(visibleNavItemsIndex);

  if (!isMobile) {
    navigation.value = [
      ...visibleNavItems.map((nav, ind) => ({
        title: nav,
        id: ind,
        link: "",
      })),
      ...[
        {
          title: "სხვა",
          id: visibleNavItems.length + 1,
          link: "",
          isDropdown: true,
          children: hiddenNavItems.map((nav, ind) => ({
            title: nav,
            id: ind,
            link: "",
          })),
        },
      ],
    ];
  } else {
    navigation.value = NAVBAR_ITEMS.map((nav, ind) => ({
      title: nav,
      id: ind,
      link: "",
    }));
  }
};

const setSocials = () => (socials.value = SOCIALS ?? []);

onMounted(() => {
  setNavigationItems();
  setSocials();
});
</script>
<template>
  <div class="common-header">
    <div class="company-logo">
      <img :src="Logo" alt="logo" />
    </div>
    <nav>
      <ul>
        <li
          v-for="nav in navigation"
          :key="nav.id"
          :class="{ 'nav-more-items': nav.isDropdown }"
        >
          <div v-if="nav.isDropdown">
            <span class="nav-more-items-category">
              {{ nav.title }}
              <img :src="IconArrowDown" />
            </span>
            <div class="nav-dropdown-wrapper">
              <ul class="nav-items-dropdown" v-if="nav?.children">
                <li v-for="(navChild, ind) in nav?.children" :key="ind">
                  <span>{{ navChild.title }}</span>
                </li>
              </ul>
            </div>
          </div>
          <span v-else> {{ nav?.title }} </span>
        </li>
      </ul>
    </nav>
    <div class="socials">
      <div
        v-for="(s, index) in socials"
        :key="index"
        class="single-social-link"
      >
        <div class="socials-icon">
          <img :src="s.icon" />
        </div>
      </div>
    </div>
    <div class="search-panel">
      <Search placeHolder="ძიება" v-model:value="searchValue" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.common-header {
  @apply w-full h-28 flex justify-center gap-8 items-center bg-color-interface-white;

  nav {
    .nav-more-items:hover .nav-dropdown-wrapper {
      @apply block;
    }

    .nav-dropdown-wrapper {
      @apply absolute top-full hidden left-0;

      ul.nav-items-dropdown {
        @apply w-48 max-h-80 bg-white rounded-lg mt-2 shadow-lg;
        li {
          @apply py-4 px-5 transition-colors duration-200;

          &:hover {
            @apply bg-color-primary-light;
            span {
              @apply text-color-primary;
            }
          }
        }
      }
    }

    ul:not(.nav-items-dropdown) {
      @apply flex justify-start items-center;

      li {
        @apply relative transition duration-200 rounded-lg cursor-pointer py-4 px-5;

        span {
          @apply text-color-interface-black-grey text-base leading-6 flex gap-1;
          &:hover {
            @apply text-color-primary;
          }
        }
      }
    }
  }

  .socials {
    @apply flex items-center justify-center gap-4;

    .socials-icon {
      @apply w-8 h-8 rounded-full bg-color-primary-light overflow-hidden flex items-center justify-center;
    }
  }
}
</style>
