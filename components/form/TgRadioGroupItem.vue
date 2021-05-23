<template>
  <div class="ml-3 flex flex-col">
    <span
      id="privacy-setting-0-label"
      :class="[
        'block text-sm font-medium',
        isActive ? 'text-purple-900' : 'text-gray-900',
      ]"
    >
      {{ title }}
    </span>
    <!-- Checked: "text-indigo-700", Not Checked: "text-gray-500" -->
    <span
      id="privacy-setting-0-description"
      :class="['block text-sm', isActive ? 'text-purple-700' : 'text-gray-500']"
    >
      {{ subTitle }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'TgRadioGroupItem',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
  },
}
</script>
