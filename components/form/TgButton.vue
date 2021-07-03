<template>
  <button
    :type="submit ? 'submit' : 'button'"
    :class="[baseClass, buttonClass, customClass]"
    :disabled="loading || disabled"
  >
    <common-tg-loading-circle v-if="loading" />
    <slot>Label</slot>
  </button>
</template>
<script>
export default {
  name: 'TgPostFooterActionsButton',
  props: {
    submit: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'primary',
    },
    customClass: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      baseClass:
        'group flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium focus:ring-offset-2',
      loadingClass: {
        primary:
          'text-white bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-700 shadow-sm pointer-events-none',
        flat:
          'text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
      },
      typeClass: {
        primary:
          'text-white hover:bg-purple-700 bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm',
        flat:
          'text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
        outline:
          'border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50',
      },
    }
  },
  computed: {
    buttonClass() {
      return this.loading
        ? this.loadingClass[this.type]
        : this.typeClass[this.type]
    },
  },
}
</script>
