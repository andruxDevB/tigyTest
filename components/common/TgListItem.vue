<template>
  <li>
    <button class="block w-full hover:bg-gray-50">
      <div class="flex items-center px-4 py-4 sm:px-6 justify-between">
        <div class="min-w-0 flex-1 flex items-center">
          <div class="shrink-0">
            <img
              v-if="image"
              class="h-12 w-12 rounded-full mr-4"
              :src="image"
              :alt="title"
            />
          </div>

          <div>
            <p class="text-sm text-left font-medium text-purple-600 truncate">
              {{ title }}
            </p>
            <p class="mt-1 flex items-center text-sm text-gray-500">
              <span class="truncate">{{ subtitle }}</span>
            </p>
          </div>
        </div>
        <div class="flex">
          <slot name="icon">
            <solid-chevron-right-icon class="h-5 w-5 text-gray-400" />
          </slot>
        </div>
      </div>
    </button>
  </li>
</template>
<script>
export default {
  name: 'TgListItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: null,
    },
  },
}
</script>
