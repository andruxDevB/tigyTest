<template>
  <div>
    <tg-profile-skeleton v-if="$fetchState.pending"></tg-profile-skeleton>
    <tg-profile v-else :navigation="navigation"></tg-profile>
  </div>
</template>
<script>
import TgProfileSkeleton from '~/components/TgProfileSkeleton.vue'
export default {
  components: { TgProfileSkeleton },
  data() {
    return {
      navigation: [
        { label: 'Tigy ID', link: `/users/${this.$route.params.id}` },
        {
          label: 'Peticiones',
          link: `/users/${this.$route.params.id}/petitions`,
        },

        {
          label: 'Tigy line',
          link: `/users/${this.$route.params.id}/timeline`,
        },
      ],
    }
  },
  async fetch() {
    const userId = this.$route.params.id
    await this.$store.dispatch('profile/getByUserId', { userId })
  },
  head() {
    return {
      title: 'Mi perfil',
    }
  },
}
</script>
