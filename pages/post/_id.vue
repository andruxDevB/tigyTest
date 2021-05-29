<template>
  <div class="p-6">
    <div class="container">
      <div class="mx-auto max-w-xl">
        <tg-post-skeleton v-if="$fetchState.pending" class="my-5" :items="1" />
        <transition
          enter-active-class="ease-in-out duration-500"
          leave-active-class="ease-in-out duration-500"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-if="!$fetchState.pending">
            <tg-post :event="post"></tg-post>
          </div>
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
    await this.$store.dispatch('timeline/getById', {
      id: this.$route.params.id,
    })
  },
  head() {
    return {
      title: 'Publicacion',
    }
  },
  computed: {
    ...mapGetters({
      post: 'timeline/post',
    }),
  },
}
</script>
