<template>
  <div>
    <tg-tab-navigation :items="navigation"></tg-tab-navigation>
    <div class="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navigation: [
        { label: 'Mis amigos', link: '/friends' },
        { label: 'Solicitudes', link: '/friends/requests' },
        { label: 'Grupos', link: '/friends/groups' },
      ],
    }
  },
}
</script>
