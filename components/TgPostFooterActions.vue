<template>
  <div class="flex justify-between flex-wrap px-4 py-2">
    <tg-button type="flat">
      <outline-heart-icon
        class="w-6 h-6 text-gray-400 mr-1 group-hover:text-gray-500"
      />
      <span class="hidden sm:inline-block"> Me gusta</span>
    </tg-button>
    <tg-button type="flat">
      <outline-hand-icon
        class="w-6 h-6 text-gray-400 mr-1 group-hover:text-gray-500"
      />
      <span class="hidden sm:inline-block"> Brindar ayuda</span>
    </tg-button>
    <tg-button type="flat">
      <outline-share-icon
        class="w-6 h-6 text-gray-400 mr-1 group-hover:text-gray-500"
      />
      <span class="hidden sm:inline-block"> Compartir</span>
    </tg-button>
    <tg-button type="flat">
      <outline-dots-horizontal-icon
        class="w-6 h-6 text-gray-400 mr-1 group-hover:text-gray-500"
      />
    </tg-button>
  </div>
</template>
<script>
export default {
  name: 'TgPostFooterActions',
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
