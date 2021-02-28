<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="px-4 py-5 sm:p-6 h-full">
      <dt class="text-sm font-medium text-gray-500 truncate">
        <slot name="title"> </slot>
      </dt>
      <dd class="mt-1 text-gray-900">
        <slot></slot>
      </dd>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgProfileIdStatsItem',
}
</script>
