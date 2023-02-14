<template>
  <div class="flex-1 relative z-0 flex overflow-hidden">
    <main
      class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last"
      tabindex="0"
    >
      <article>
        <!-- Profile header -->
        <!--<tg-profile-header
          :name="`${profile.personales.nombres} ${profile.personales.apellidos}`"
          :image="user.foto"
          :bg="stats.ranking.fondo"
          :color="stats.ranking.color"
          :title="stats.ranking.nivel"
          :sub-title="stats.ranking.significado"
        />-->
        <!-- Tabs -->
        <common-tg-tab-navigation
          :items="navigation"
        ></common-tg-tab-navigation>

        <div class="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <NuxtChild />
        </div>
      </article>
    </main>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TgProfile',
  props: {
    navigation: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters({
      profile: 'profile/account',
      stats: 'profile/stats',
      user: 'profile/user',
    }),
  },
}
</script>
