<template>
  <button :class="[baseClass, buttonClass, customClass]">
    <slot>Label</slot>
  </button>
</template>
<script>
export default {
  name: 'TgPostFooterActionsButton',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      baseClass:
        'group flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium focus:ring-offset-2',
      typeClass: {
        primary:
          'text-white hover:bg-purple-700 bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm',
        flat:
          'text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
        // icon: 'text-gray-400 group-hover:text-gray-500',
      },
    }
  },
  computed: {
    buttonClass() {
      return this.typeClass[this.type]
    },
  },
}
</script>
