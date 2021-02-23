<template>
  <div
    class="max-w-3xl mx-auto p-4 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl"
  >
    <div class="flex items-center space-x-5">
      <div class="flex-shrink-0">
        <tg-avatar :image="user.image" :alt="user.full_name"></tg-avatar>
      </div>
      <div>
        <h1 class="text-gray-500">
          <tg-post-header-title
            :user="user"
            :type="postType"
            :current-user-id="currentUser.user_id"
          />
        </h1>
        <p class="text-sm text-gray-400">
          <time datetime="2020-08-25"
            >hace {{ $moment(date).toNow(true) }}</time
          >
        </p>
      </div>
    </div>
    <div
      v-if="reward.cantidad"
      class="mt-6 flex text-gray-600 justify-stretch space-y-4 md:mt-0 md:flex-row md:space-x-3"
    >
      {{ reward.cantidad }}
      <outline-gift-icon class="text-gray6500 ml-2 h-6 w-6" />
    </div>
  </div>
</template>
<script>
import findKey from 'lodash/findKey'
import includes from 'lodash/includes'
import TgPostHeaderTitle from './TgPostHeaderTitle.vue'

export default {
  name: 'TgPostHeader',
  components: { TgPostHeaderTitle },
  props: {
    user: {
      type: Object,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    },
    reward: {
      type: [Array, Object],
      default: () => [],
    },
  },
  computed: {
    postType() {
      return findKey(this.$store.state.post.types, (type) => {
        return includes(type, this.type)
      })
    },
    currentUser() {
      return this.$auth.user
    },
  },
}
</script>
