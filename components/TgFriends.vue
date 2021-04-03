<template>
  <div>
    <div class="sm:flex sm:justify-between mb-10">
      <div class="max-w-lg w-full lg:max-w-xs">
        <label for="search" class="sr-only">Buscar</label>
        <div class="relative text-gray-400 focus-within:text-gray-500">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
          >
            <solid-search-icon class="h-5 w-5"></solid-search-icon>
          </div>
          <input
            id="search"
            v-model="search"
            class="block w-full bg-white py-2 pl-10 pr-3 border border-gray-300 rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 focus:placeholder-gray-500 sm:text-sm"
            placeholder="Buscar"
            type="search"
            name="search"
          />
        </div>
      </div>
      <tg-button class="mt-4 sm:mt-0">Inviar amigo</tg-button>
    </div>

    <div
      v-for="(group, index) in grouped"
      :key="`frient-group-${index}`"
      class="mb-4"
    >
      <h3 class="mb-2 text-gray-500">{{ group.letter }}</h3>
      <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <tg-friends-item
          v-for="(friend, i) in group.friends"
          :key="`friend-card-${i}`"
          :title="friend.full_name"
          :sub-title="`Amigos desde hace ${$moment(
            friend.created_at.date
          ).toNow(true)}`"
          :avatar="friend.image"
          ><template #badge>
            <tg-friends-level-badge
              :color="friend.ranking_info.color"
              :bg="friend.ranking_info.fondo"
              :level="friend.ranking_info.nivel"
            ></tg-friends-level-badge> </template
        ></tg-friends-item>
      </ul>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'

export default {
  name: 'TgFriends',
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
}
</script>
