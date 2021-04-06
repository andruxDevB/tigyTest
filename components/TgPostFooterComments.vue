<template>
  <div v-if="comments.length > 0" class="p-4">
    <transition-group name="list" tag="ul" class="space-y-4">
      <li v-for="item in comments" :key="`post-comment-${item.id}`">
        <div class="flex space-x-3">
          <div class="flex-shrink-0">
            <common-tg-avatar
              :image="item.user.image"
              :alt="item.user.image.full_name"
              size="md"
            ></common-tg-avatar>
          </div>
          <div>
            <div class="text-sm text-gray-700 bg-gray-200 p-2 rounded-md">
              {{ item.comment }}
            </div>
            <div class="mt-1 text-sm space-x-2">
              <span class="text-sm text-gray-400"
                >hace {{ $moment(item.created_at.date).toNow(true) }}</span
              >
            </div>
          </div>
        </div>
      </li>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: 'TgPostFooterComments',
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style lang="css">
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
