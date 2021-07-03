<template>
  <div class="py-6 px-4 bg-purple-700 sm:px-6">
    <div class="flex items-center justify-between">
      <h2 id="slide-over-heading" class="text-lg font-medium text-white">
        {{ title }}
      </h2>
      <div class="ml-3 h-7 flex items-center">
        <button
          type="button"
          class="bg-purple-700 rounded-md text-purple-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          @click="toogle"
        >
          <span class="sr-only">Close panel</span>
          <svg
            class="h-6 w-6"
            x-description="Heroicon name: outline/x"
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
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div v-if="description" class="mt-1">
      <p class="text-sm text-purple-300">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarTgHeader',
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    toogle: {
      type: Function,
      required: true,
    },
  },
}
</script>
