<template>
  <div
    class="bg-white shadow overflow-hidden border border-gray-300 sm:rounded-md"
  >
    <common-tg-animation-find v-if="loading" />
    <ul v-else class="divide-y divide-gray-200">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TgList',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
