<template>
  <div class="w-0 flex-1 flex">
    <button :class="[baseClass, buttonClass]">
      <common-tg-loading-circle v-if="loading" /> <slot>Action</slot>
    </button>
  </div>
</template>
<script>
export default {
  name: 'TgFriendsRequestsActionsButton',
  props: {
    type: {
      type: String,
      default: 'flat',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      baseClass:
        'relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-bl-lg',
      typeClass: {
        primary: 'text-purple-500 hover:text-purple-700',
        flat: 'text-gray-700 hover:text-gray-500',
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
