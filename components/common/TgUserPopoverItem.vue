<template>
  <li class="flex justify-start">
    <div class="flex items-center space-x-3">
      <div class="shrink-0">
        <img
          class="h-5 w-5 rounded-full ring-2 ring-white"
          :src="image"
          :alt="name"
        />
      </div>
      <div class="text-sm font-medium text-white">
        {{ name }}
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: 'TgUserPopoverItem',
  props: {
    name: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
  },
}
</script>
