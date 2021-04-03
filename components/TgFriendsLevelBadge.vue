<template>
  <span
    class="flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full"
    :style="{
      color: color,
      background: bg,
    }"
    >{{ level }}</span
  >
</template>
<script>
export default {
  name: 'TgFriendsLevelBadge',
  props: {
    color: {
      type: String,
      required: true,
    },
    bg: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
  },
}
</script>
