<template>
  <div class="flex justify-between flex-wrap px-4 py-2">
    <form-tg-button type="flat" @click.native="like()">
      <solid-heart-icon
        v-if="liked"
        class="w-6 h-6 mr-1 text-purple-500 group-hover:text-purple-700"
      />
      <outline-heart-icon
        v-else
        class="w-6 h-6 mr-1 text-gray-400 group-hover:text-gray-500"
      />
      <span :class="['hidden sm:inline-block', liked ? 'text-purple-500' : '']">
        Me gusta</span
      >
    </form-tg-button>
    <form-tg-button type="flat">
      <outline-hand-icon
        class="w-6 h-6 text-gray-400 mr-1 group-hover:text-gray-500"
      />
      <span class="hidden sm:inline-block"> Brindar ayuda</span>
    </form-tg-button>
    <form-tg-button type="flat">
      <outline-share-icon
        class="w-6 h-6 text-gray-400 mr-1 group-hover:text-gray-500"
      />
      <span class="hidden sm:inline-block"> Compartir</span>
    </form-tg-button>
    <common-tg-menu>
      <form-tg-button type="flat">
        <outline-dots-horizontal-icon
          class="w-6 h-6 text-gray-400 mr-1 group-hover:text-gray-500"
        />
      </form-tg-button>
      <template #items>
        <common-tg-menu-item>Reportar</common-tg-menu-item>
        <common-tg-menu-item>Eliminar</common-tg-menu-item>
      </template>
    </common-tg-menu>
  </div>
</template>
<script>
export default {
  name: 'TgPostFooterActions',
  props: {
    likes: {
      type: Array,
      default: () => [],
    },
    comments: {
      type: Object,
      default: () => {},
    },
    eventId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      liked: !!this.$tg.events.like(this.likes, this.$auth.user.user_id),
    }
  },
  methods: {
    like() {
      this.liked = !this.liked
      this.$store.dispatch('timeline/like', { eventId: this.eventId })
    },
  },
}
</script>
