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
    <form-tg-button type="flat" @click.native="help()">
      <outline-hand-icon
        class="w-6 h-6 text-gray-400 mr-1 group-hover:text-gray-500"
      />
      <span class="hidden sm:inline-block"> Brindar ayuda</span>
    </form-tg-button>
    <common-tg-menu>
      <form-tg-button type="flat">
        <outline-share-icon
          class="w-6 h-6 text-gray-400 mr-1 group-hover:text-gray-500"
        />
        <span class="hidden sm:inline-block"> Compartir</span>
      </form-tg-button>
      <template #items>
        <common-tg-menu-item
          v-for="(item, index) in share"
          :key="`share-action-${index}`"
          @click.native="shareTo(item.id)"
          >{{ item.label }}</common-tg-menu-item
        >
        <common-tg-menu-item>Eliminar</common-tg-menu-item>
      </template>
    </common-tg-menu>
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
  computed: {
    share() {
      return this.$store.state.post.share
    },
  },
  methods: {
    like() {
      this.liked = !this.liked
      this.$store.dispatch('timeline/like', { eventId: this.eventId })
    },
    help() {
      this.$modal.show({
        type: 'info',
        title: 'Brindar ayuda',
        body: `Confirma tu ayuda y podrás ser gratamente recompenzado con una recompenza de Tigy's`,
        primary: {
          label: 'Confirmar',
          theme: 'indigo',
          action: () => this.support(),
        },
        secondary: {
          label: 'Cancelar',
          theme: 'white',
          action: () => null,
        },
      })
    },
    async shareTo(id) {
      try {
        await this.$store.dispatch('post/share', {
          eventId: this.eventId,
          supportId: id,
        })
        this.$toast.success('Compartido correctamente')
      } catch (e) {
        this.$toast.error('Existió un error, intenta mas tarde')
      }
    },
    async support() {
      try {
        await this.$store.dispatch('timeline/support', { id: this.eventId })
        this.$toast.success('Se registro tu aopoyo con éxito')
      } catch (e) {
        this.$toast.danger('Existió un problema, intenta mas tarde')
      }
    },
  },
}
</script>
