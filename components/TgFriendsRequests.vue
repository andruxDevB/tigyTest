<template>
  <div v-if="requests.length > 0" class="mb-10">
    <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
      <slot name="title"></slot>
    </h3>
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <tg-friends-item
        v-for="(friend, i) in requests"
        :key="`friend-card-${i}`"
        :title="getTitle(friend.usuario1, friend.dir_correo1)"
        :sub-title="`${subTitle} ${$moment(friend.c_fecha).toNow(true)}`"
      >
        <template #actions>
          <component :is="actionsComponent" :friend="friend"></component
        ></template>
      </tg-friends-item>
    </ul>
  </div>
</template>
<script>
import ActionsReceived from '~/components/TgFriendsRequestsActionsReceived'
import ActionsSended from '~/components/TgFriendsRequestsActionsSended'

export default {
  name: 'TgFriendsRequests',
  components: {
    ActionsReceived,
    ActionsSended,
  },
  props: {
    type: { type: String, default: 'sended' },
    requests: { type: Array, default: () => [] },
  },
  computed: {
    subTitle() {
      return this.type === 'sended' ? 'Enviada hace ' : 'Recibida hace '
    },
    actionsComponent() {
      const componentName =
        this.type.charAt(0).toUpperCase() + this.type.slice(1)
      return `Actions${componentName}`
    },
  },
  methods: {
    getTitle(title, alternative) {
      return title.length === 0 || !title.trim() ? alternative : title
    },
  },
}
</script>
