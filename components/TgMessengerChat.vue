<template>
  <section
    class="min-w-0 flex-1 h-full flex flex-col overflow-hidden xl:order-last"
  >
    <tg-messenger-chat-header></tg-messenger-chat-header>
    <tg-messenger-chat-thread></tg-messenger-chat-thread>
    <tg-messenger-chat-footer></tg-messenger-chat-footer>
  </section>
</template>
<script>
export default {
  name: 'TgMessengerChat',
}
</script>
