<template>
  <tg-friends :friends="friends"></tg-friends>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      friends: 'friends/list',
    }),
  },
}
</script>
