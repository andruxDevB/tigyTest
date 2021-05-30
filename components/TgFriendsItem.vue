<template>
  <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
    <nuxt-link :to="`/users/${id}`">
      <div class="w-full flex items-center justify-between p-6 space-x-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="text-gray-900 text-sm font-medium truncate">
              {{ title }}
            </h3>
            <slot name="badge"></slot>
          </div>
          <p class="mt-1 text-gray-500 text-sm truncate">
            {{ subTitle }}
          </p>
        </div>
        <img
          v-if="avatar"
          class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
          :src="avatar"
          :alt="title"
        />
      </div>
      <slot name="actions"></slot>
    </nuxt-link>
  </li>
</template>
<script>
export default {
  name: 'TgFriendsItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: null,
    },
    id: {
      type: Number,
      required: true,
    },
  },
}
</script>
