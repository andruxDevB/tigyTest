<template>
  <div
    v-if="likes.quantity + comments.quantity"
    class="flex justify-between p-4"
  >
    <div class="flex">
      <common-tg-user-popover v-if="likes.quantity > 0">
        <div class="flex">
          <solid-heart-icon class="w-6 h-6 text-purple-500 mr-1" />
          <p class="text-gray-500">{{ likes.quantity }}</p>
        </div>
        <template #users>
          <common-tg-user-popover-item
            v-for="(item, index) in likes.likes"
            :key="`like-${index}-user-${item.user.id}`"
            :name="item.user.full_name"
            :image="item.user.image"
          />
        </template>
      </common-tg-user-popover>
    </div>

    <div v-if="comments.quantity > 0">
      <p class="text-right text-gray-500">
        {{ comments.quantity }} comentarios
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgPostFooterResume',
  props: {
    likes: {
      type: Object,
      default: () => {},
    },
    comments: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
