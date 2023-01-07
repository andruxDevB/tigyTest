<template>
  <li>
    <div class="relative group py-6 px-5 flex items-center">
      <nuxt-link :to="link" class="-m-1 flex-1 block p-1">
        <div
          class="absolute inset-0 group-hover:bg-gray-50"
          aria-hidden="true"
        ></div>
        <div class="flex-1 flex items-center min-w-0 relative">
          <span class="shrink-0 inline-block relative">
            <img class="h-10 w-10 rounded-full" :src="image" />
          </span>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-900 line-clamp-3">
              <slot name="title"></slot>
            </p>
            <p class="text-sm text-gray-500 truncate">hace {{ date }}</p>
          </div>
        </div>
      </nuxt-link>
      <div class="ml-2 shrink-0 relative inline-block text-left">
        <slot name="action"></slot>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: 'TgNotificationsUser',
  props: {
    image: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>
