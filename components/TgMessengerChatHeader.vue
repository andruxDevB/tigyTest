<template>
  <div
    v-if="thread.user.full_name"
    class="shrink-0 bg-white border-b border-gray-200"
  >
    <!-- Toolbar-->
    <div class="h-16 flex flex-col justify-center">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="py-3 flex justify-between">
          <!-- Left buttons -->
          <div class="flex items-center space-x-4">
            <div class="shrink-0">
              <div class="relative">
                <img
                  class="h-11 w-11 rounded-full"
                  :src="thread.user.image"
                  :alt="thread.user.full_name"
                />
                <span
                  class="absolute inset-0 shadow-inner rounded-full"
                  aria-hidden="true"
                ></span>
              </div>
            </div>
            <div>
              <strong class="text-gray-600">{{ thread.user.full_name }}</strong>
            </div>
          </div>

          <!-- Right buttons -->
          <nav aria-label="Pagination"></nav>
        </div>
      </div>
    </div>
    <!-- Message header -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TgMessengerChatHeader',
  computed: {
    ...mapGetters({
      thread: 'messenger/thread',
    }),
  },
}
</script>
