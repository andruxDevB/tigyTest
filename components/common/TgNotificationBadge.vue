<template>
  <span
    class="absolute top-0 right-0 block h-4 w-4 transform -translate-y-1 translate-x-1 rounded-full ring-2 ring-white bg-red-500 text-white text-xs"
    ><slot></slot
  ></span>
</template>
<script>
export default {
  name: 'TgNotificationBadge',
}
</script>
