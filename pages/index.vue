<template>
  <div class="p-6">
    <div class="container">
      <div class="mx-auto max-w-xl">
        <tg-tl-banner></tg-tl-banner>

        <tg-post-skeleton v-if="$fetchState.pending" class="my-5" />
        <transition
          enter-active-class="ease-in-out duration-500"
          leave-active-class="ease-in-out duration-500"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <tg-tl-events
            v-if="!$fetchState.pending"
            :events="events"
          ></tg-tl-events>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TgPostSkeleton from '~/components/TgPostSkeleton.vue'

export default {
  components: { TgPostSkeleton },
  async fetch() {
    debugger
    await this.$store.dispatch('timeline/get')
  },
  head() {
    return {
      title: 'Bienvenido',
    }
  },
  computed: {
    ...mapGetters({
      events: 'timeline/events',
    }),
  },
}
</script>
