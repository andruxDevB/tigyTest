<template>
  <button
    :class="[baseClass, buttonClass, customClass]"
    :disabled="loading || disabled"
  >
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
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
