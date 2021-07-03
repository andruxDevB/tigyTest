<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <transition leave-active-class="ease-in-out duration-500">
    <div
      v-show="isVisible"
      class="fixed inset-0 overflow-hidden transition ease-in-out duration-500 z-40"
    >
      <div class="absolute inset-0 overflow-hidden">
        <transition
          enter-active-class="ease-in-out duration-500"
          leave-active-class="ease-in-out duration-500"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="isVisible"
            class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
        </transition>

        <transition
          enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
          leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
          enter-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <section
            v-if="isVisible"
            class="absolute inset-y-0 right-0 pl-10 max-w-full flex"
            aria-labelledby="slide-over-heading"
          >
            <slot></slot>
          </section>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SidebarTg',
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
