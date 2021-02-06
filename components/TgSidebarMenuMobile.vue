<template>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <transition leave-active-class="ease-in-out duration-500">
    <div v-show="isVisible" class="z-40">
      <div class="fixed inset-0 flex">
        <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
        <transition
          enter-active-class="transition-opacity ease-linear duration-300"
          leave-active-class="transition-opacity ease-linear duration-300"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-if="isVisible" class="fixed inset-0" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
        </transition>
        <transition
          enter-active-class="transition ease-in-out duration-300 transform"
          leave-active-class="transition ease-in-out duration-300 transform"
          enter-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-class="translate-x-0"
          leave-to-class="-translate-x-full"
        >
          <div
            v-if="isVisible"
            class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white"
          >
            <div class="absolute top-0 right-0 -mr-12 pt-2">
              <button
                class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                @click="navToggle()"
              >
                <span class="sr-only">Close sidebar</span>
                <!-- Heroicon name: x -->
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex-shrink-0 flex items-center px-4">
              <tg-sidebar-menu-user />
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <tg-sidebar-menu-nav />
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapMutations } from 'vuex'
import TgSidebarMenuNav from './TgSidebarMenuNav.vue'

export default {
  name: 'TgSidebarMenuMobile',
  components: { TgSidebarMenuNav },
  data() {
    return {
      showContent: false,
    }
  },
  computed: {
    isVisible() {
      return this.$store.state.nav.mobile
    },
  },
  methods: {
    ...mapMutations({
      navToggle: 'nav/TOGGLE_MOBILE',
    }),
  },
}
</script>
