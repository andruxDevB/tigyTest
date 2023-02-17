<template>
  <div>
    <div class="sm:flex sm:justify-between mb-10">
      <tg-friends-search v-model="search"></tg-friends-search>
      <!--<form-tg-button class="mt-4 sm:mt-0">Invitar amigo</form-tg-button>-->
    </div>

    <TgTableFriends :friends="filtered"></TgTableFriends>
    <!--<div
      v-for="(group, index) in grouped"
      :key="`frient-group-${index}`"
      class="mb-4"
    >
      <h3 class="mb-2 text-gray-500">{{ group.letter }}</h3>
      <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <tg-friends-item
          v-for="(friend, i) in group.friends"
          :id="friend.user_id"
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
    </div> -->
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
