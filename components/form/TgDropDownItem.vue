<template>
  <div class="flex items-center">
    <img
      v-if="image"
      :src="image"
      alt=""
      class="shrink-0 h-6 w-6 rounded-full"
    />
    <span
      :class="[
        isCurrent ? 'font-semibold' : 'font-normal',
        'ml-3 block truncate',
      ]"
    >
      {{ label }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'TgDropDownMenuItem',
  props: {
    image: {
      type: String,
      default: null,
    },
    isCurrent: {
      type: Boolean,
      default: false,
    },
    label: { type: String, default: '' },
  },
}
</script>
