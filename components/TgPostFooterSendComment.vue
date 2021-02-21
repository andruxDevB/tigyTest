<template>
  <div class="p-4 flex space-x-4 items-center rounded-b bg-gray-50">
    <div class="flex-shrink-0">
      <img class="h-8 w-8 rounded-full" :src="user.foto" :alt="user.nameuser" />
    </div>

    <div class="flex-auto">
      <div class="relative rounded-md shadow-sm">
        <input
          id="comment"
          type="text"
          name="account_number"
          class="focus:ring-indigo-500 border focus:border-purple-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
          placeholder="Deja un comentario"
        />
        <div class="absolute inset-y-0 right-0 pr-0 flex items-center">
          <!-- Heroicon name: solid/question-mark-circle -->
          <button
            class="group flex justify-center p-2 border border-transparent rounded-md text-sm font-medium focus:outline-none"
          >
            <solid-paper-airplane-icon
              class="w-6 h-6 text-gray-400 group-hover:text-purple-500"
            ></solid-paper-airplane-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgPostFooterSendComment',
  event: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    user() {
      return this.$auth.user
    },
  },
}
</script>
