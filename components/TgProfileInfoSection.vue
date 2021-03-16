<template>
  <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          <slot name="title">Title</slot>
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          <slot name="subTitle">Sub title</slot>
        </p>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="grid grid-cols-6 gap-6">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgProfileInfoSection',
}
</script>
