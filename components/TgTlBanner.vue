<template>
  <div class="bg-white shadow rounded-lg">
    <!--<div class="flex-1 flex-grow">
      <div class="p-6">
        <h2 class="text-gray-600">
          <strong>Solicita ayuda</strong> o
          <strong>envía un reconocimiento</strong> a tus amigos
        </h2>
      </div>
    </div>
    <div class="flex flex-col grow-0">
      <tg-tl-banner-action
        icon="HandIcon"
        label="Solicitar ayuda"
        @click.native="sidebarHelpToggle()"
      ></tg-tl-banner-action>
    </div>-->
    <div v-if="this.$auth.user.rol_id === 7" class="flex flex-col grow-0">
      <tg-tl-banner-action
        icon="GiftIcon"
        label="Reconocimiento"
        @click.native="sidebarPriceToggle()"
      ></tg-tl-banner-action>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'TgTlBanner',
  methods: {
    ...mapMutations({
      sidebarHelpToggle: 'help/TOGGLE_SIDEBAR',
      sidebarPriceToggle: 'price/TOGGLE_SIDEBAR',
    }),
  },
}
</script>
