<template>
  <div class="flex items-center">
    <template v-if="type === 'GRATITUDE_SENT'">
      Enviaste un Agradecimiento a
      <outline-chevron-right-icon class="text-gray-300 mx-1 h-4 w-4" />
      <strong class="text-gray-600">{{ user.full_name }}</strong>
    </template>
    <template v-else-if="type === 'GRATITUDE_RECIVED'" class="flex">
      Recibiste un Agradecimiento de
      <outline-chevron-right-icon class="text-gray-300 mx-1 h-4 w-4" />
      <strong class="text-gray-600">{{ user.full_name }}</strong>
    </template>
    <template v-else class="flex">
      <template v-if="currentUser.user_id === user.id">
        Solicitaste una ayuda
      </template>
      <template v-else>
        <strong class="text-gray-600">{{ user.full_name }}</strong>
        <outline-chevron-right-icon class="text-gray-300 mx-1 h-4 w-4" />
        solicitó una ayuda
      </template>
    </template>
  </div>
</template>
<script>
export default {
  name: 'TgPostHeaderTitle',
  props: {
    user: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: null,
    },
  },
  computed: {
    currentUser() {
      return this.$auth.user
    },
  },
}
</script>
