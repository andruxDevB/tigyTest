<template>
  <div class="bg-white shadow rounded-lg flex items-center">
    <div class="flex-1 flex-grow">
      <div class="p-6">
        <h2 class="text-gray-600">
          <strong>Solicita ayuda</strong> o
          <strong>envía un reconocimiento</strong> a tus amigos
        </h2>
      </div>
    </div>
    <div class="flex-1 flex-grow-0">
      <tg-tl-banner-action
        icon="HandIcon"
        label="Solicitar ayuda"
      ></tg-tl-banner-action>
    </div>
    <div class="flex-1 flex-grow-0">
      <tg-tl-banner-action
        icon="GiftIcon"
        label="Reconocimiento"
      ></tg-tl-banner-action>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgTlBanner',
}
</script>
