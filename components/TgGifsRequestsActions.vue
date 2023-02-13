<template>
  <div class="-mt-px flex divide-x divide-gray-200">
    <div class="w-0 flex-1 flex">
      <button :class="[baseClass, buttonClass]" @click="ask()">
        <common-tg-loading-circle v-if="loading" /> Pedir
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgGifsRequestsActions',
  props: {
    gif: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
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
  methods: {
    ask() {
      this.loading = true
      try {
        const userId = this.$auth.user.user_id
        this.$store.dispatch('gifs/ask', {
          premioId: this.gif.id,
          userId,
        })
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
