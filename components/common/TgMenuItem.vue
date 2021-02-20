<template>
  <button
    class="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'TgMenuItem',
}
</script>
