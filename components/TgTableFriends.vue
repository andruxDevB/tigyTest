<template>
  <div>
    <div class="sm:flex sm:justify-between mb-10">
      <common-tg-table>
        <template #head>
          <common-tg-table-head>Nombre</common-tg-table-head>
          <common-tg-table-head>Acción</common-tg-table-head>
        </template>
        <template #body>
          <common-tg-table-row
            v-for="(friend, index) in friends"
            :key="`gif-item-${index}-${friend.id}`"
          >
            <common-tg-table-row-cell>{{
              friend.full_name
            }}</common-tg-table-row-cell>
            <common-tg-table-row-cell>
              <TgFriendRequestsActions
                :friend="friend"
              ></TgFriendRequestsActions>
            </common-tg-table-row-cell>
          </common-tg-table-row>
        </template>
      </common-tg-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgTableFriends',
  props: {
    friends: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {},
}
</script>
