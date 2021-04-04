<template>
  <div class="flex justify-between flex-wrap px-4 py-2">
    <form-tg-button type="flat">
      <outline-heart-icon
        class="w-6 h-6 text-gray-400 mr-1 group-hover:text-gray-500"
      />
      <span class="hidden sm:inline-block"> Me gusta</span>
    </form-tg-button>
    <form-tg-button type="flat">
      <outline-hand-icon
        class="w-6 h-6 text-gray-400 mr-1 group-hover:text-gray-500"
      />
      <span class="hidden sm:inline-block"> Brindar ayuda</span>
    </form-tg-button>
    <form-tg-button type="flat">
      <outline-share-icon
        class="w-6 h-6 text-gray-400 mr-1 group-hover:text-gray-500"
      />
      <span class="hidden sm:inline-block"> Compartir</span>
    </form-tg-button>
    <common-tg-menu>
      <form-tg-button type="flat">
        <outline-dots-horizontal-icon
          class="w-6 h-6 text-gray-400 mr-1 group-hover:text-gray-500"
        />
      </form-tg-button>
      <template #items>
        <common-tg-menu-item>Reportar</common-tg-menu-item>
        <common-tg-menu-item>Eliminar</common-tg-menu-item>
      </template>
    </common-tg-menu>
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
