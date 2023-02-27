<template>
  <div>
    <div class="sm:flex sm:justify-between mb-10">
      <tg-friends-search v-model="search"></tg-friends-search>
    </div>
    <TgTableFriends :friends="filtered"></TgTableFriends>
  </div>
</template>
<script>
import _ from 'lodash'
import { mapMutations } from 'vuex'

export default {
  name: 'TgFriendsGroups',
  props: {
    friends: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    grouped() {
      return _(this.filtered)
        .orderBy((o) => o.full_name.toLowerCase(), ['asc'])
        .groupBy((o) => o.full_name[0].toUpperCase())
        .map((friends, letter) => ({ letter, friends }))
        .value()
    },
    filtered() {
      return this.friends.filter((friend) => {
        return friend.full_name
          .toLowerCase()
          .includes(this.search.toLowerCase())
      })
    },
  },
  methods: {
    ...mapMutations({
      sidebarCreateGroupToggle: 'friends/groups/TOGGLE_SIDEBAR',
    }),
  },
}
</script>
