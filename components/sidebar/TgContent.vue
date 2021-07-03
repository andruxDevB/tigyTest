<template>
  <div class="flex-1 h-0 overflow-y-auto">
    <slot name="header"></slot>
    <div class="flex-1 flex flex-col justify-between">
      <div class="px-4 divide-y divide-gray-200 sm:px-6">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarTgContent',
}
</script>
