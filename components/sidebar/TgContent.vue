<template>
  <div class="flex-1 h-0 overflow-y-auto">
    <slot name="header"></slot>
    <div class="flex-1 flex flex-col justify-between">
      <div :class="['divide-y divide-gray-200', spacing]">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarTgContent',
  props: {
    spacing: {
      type: String,
      default: 'px-4 sm:px-6',
    },
  },
}
</script>
