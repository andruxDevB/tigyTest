<template>
  <div>
    <div class="sm:flex sm:justify-between mb-10">
      <tg-friends-search v-model="search"></tg-friends-search>
      <form-tg-button
        class="mt-4 sm:mt-0"
        @click.native="sidebarCreateGroupToggle()"
        >Crear grupo</form-tg-button
      >
    </div>
    <div>
      <ul
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
      >
        <tg-friends-groups-item
          v-for="(group, index) in filtered"
          :key="`group-item-${index}`"
          :group="group"
        ></tg-friends-groups-item>
      </ul>
    </div>
  </div>
</template>
<script>
import isUndefined from 'lodash/isUndefined'
import { mapMutations } from 'vuex'

export default {
  name: 'TgFriendsGroups',
  props: {
    groups: {
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
    filtered() {
      if (isUndefined(this.groups)) return []
      return this.groups.filter((group) => {
        return group.group_name
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
