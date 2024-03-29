<script setup>
import Logo from "@/assets/svg/Logo.svg";
import { NAVBAR_ITEMS, SOCIALS } from "@/data/common-data";
import { ref, onMounted, onUnmounted } from "vue";
import Search from "@/components/Search/Search.vue";
import IconArrowDown from "@/assets/svg/arrowDown.svg";
import IconMenu from "@/assets/svg/menu.svg";

const navigation = ref(null);
const socials = ref(null);
const searchValue = ref("");
const isMobile = ref(false);
const isNavVisible = ref(false);
const visibleNavItemsIndex = 4;

const setNavigationItems = () => {
  const visibleNavItems = NAVBAR_ITEMS.slice(0, visibleNavItemsIndex);
  const hiddenNavItems = NAVBAR_ITEMS.slice(visibleNavItemsIndex);

  if (!isMobile.value) {
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

const resizeListener = (event) => {
  setIsMobile(event.srcElement.innerWidth);
};

const setIsMobile = (size) => {
  if (size <= 1400) {
    isMobile.value = true;
  } else isMobile.value = false;
  setNavigationItems();
};

onMounted(() => {
  setNavigationItems();
  setSocials();
  setIsMobile(window.innerWidth);
  window.addEventListener("resize", resizeListener);
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeListener);
});
</script>
<template>
  <div class="common-header">
    <div
      v-if="isMobile"
      class="header-menu-btn"
      v-on:click="() => (isNavVisible = !isNavVisible)"
    >
      <img :src="IconMenu" class="w-6" />
    </div>
    <div class="company-logo">
      <img class="w-32" :src="Logo" alt="logo" />
    </div>
    <nav v-show="!isMobile || (isNavVisible && isMobile)">
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
          <img class="w-4 aspect-square" :src="s.icon" />
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
  @apply z-50 desktop:sticky mobile:relative mobile:p-6 desktop:p-0 top-0 w-full desktop:h-28 mobile:h-auto  flex justify-center gap-8 items-center mobile:flex-wrap desktop:flex-nowrap bg-color-interface-white;
  .company-logo {
    @apply mobile:mr-auto desktop:mr-0;
  }
  .header-menu-btn {
    @apply w-12 h-12 rounded-full bg-color-primary-light grid place-items-center mobile:order-2 desktop:-order-none;
  }
  nav {
    @apply mobile:order-2 desktop:-order-none mobile:w-screen desktop:w-auto;
    .nav-more-items:hover .nav-dropdown-wrapper {
      @apply block;
    }

    span {
      @apply break-all;
    }

    .nav-dropdown-wrapper {
      @apply absolute top-full hidden left-0;

      ul.nav-items-dropdown {
        @apply w-48 max-h-80 bg-white rounded-lg mt-2 shadow-lg  overflow-auto;
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
      @apply flex justify-start desktop:items-center mobile:items-start mobile:flex-col desktop:flex-row;

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
