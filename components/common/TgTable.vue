<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <slot name="head"> </slot>
      </tr>
    </thead>
    <tbody>
      <slot name="body"> </slot>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'TgTable',
}
</script>
