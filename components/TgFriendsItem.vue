<template>
  <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
    <div class="w-full flex items-center justify-between p-6 space-x-6">
      <div class="flex-1 truncate">
        <div class="flex items-center space-x-3">
          <h3 class="text-gray-900 text-sm font-medium truncate">
            {{ friend.full_name }}
          </h3>
          <span
            class="flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full"
            :style="{
              color: friend.ranking_info.color,
              background: friend.ranking_info.fondo,
            }"
            >{{ friend.ranking_info.nivel }}</span
          >
        </div>
        <p class="mt-1 text-gray-500 text-sm truncate">
          Amigos desde hace {{ $moment(friend.created_at.date).toNow(true) }}
        </p>
      </div>
      <img
        class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
        :src="friend.image"
        :alt="friend.full_name"
      />
    </div>
  </li>
</template>
<script>
export default {
  name: 'TgFriendsItem',
  props: {
    friend: {
      type: Object,
      required: true,
    },
  },
}
</script>
