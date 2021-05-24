<template>
  <div class="border-b border-gray-200">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
        <slot></slot>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgTabs',
}
</script>
