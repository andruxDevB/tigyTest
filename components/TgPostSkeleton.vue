<template>
  <div>
    <div
      v-for="n in items"
      :key="`post-skeleton-${n}`"
      class="bg-white shadow mb-5 p-4 rounded-md"
    >
      <div class="animate-pulse">
        <div class="flex space-x-4 mb-4">
          <div class="rounded-full bg-gray-200 h-11 w-11"></div>
          <div class="flex-1 space-y-2 py-1">
            <div class="h-4 bg-gray-300 rounded w-2/4"></div>
            <div class="h-3 bg-gray-300 rounded w-1/4"></div>
          </div>
        </div>

        <div class="space-y-2 mb-4">
          <div class="h-4 bg-gray-200 rounded"></div>
          <div class="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>

        <div class="flex space-x-4 pt-8">
          <div class="h-3 bg-gray-300 rounded w-1/3"></div>
          <div class="h-3 bg-gray-300 rounded w-1/3"></div>
          <div class="h-3 bg-gray-300 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgPostSkeleton',
  props: {
    items: {
      type: Number,
      default: 5,
    },
  },
}
</script>
