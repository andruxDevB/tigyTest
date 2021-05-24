<template>
  <button :class="[baseLinkClass, current ? activeLinkClass : defaltLinkClass]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'TgTabsItem',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    current: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      baseLinkClass:
        'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',

      defaltLinkClass:
        'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',

      activeLinkClass: 'border-purple-500 text-gray-900',
    }
  },
}
</script>
