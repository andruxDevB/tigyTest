<template>
  <div class="-mt-px flex divide-x divide-gray-200">
    <div class="w-0 flex-1 flex">
      <button :class="[baseClass, buttonClass]" @click="sidebarPriceToggle()">
        <common-tg-loading-circle v-if="loading" /> Dar reconocimiento
      </button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'TgFriendRequestsActions',
  props: {
    friend: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      baseClass:
        'relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-bl-lg hover:bg-purple-700 bg-purple-600',
      typeClass: {
        primary: 'text-white',
        flat: 'text-gray-700 hover:text-gray-500',
      },
    }
  },
  computed: {
    buttonClass() {
      return this.typeClass.primary
    },
  },
  methods: {
    ...mapMutations({
      sidebarPriceToggle: 'price/TOGGLE_SIDEBAR',
    }),
  },
}
</script>
