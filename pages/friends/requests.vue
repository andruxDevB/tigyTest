<template>
  <div>
    <tg-friends-requests :requests="received" type="received">
      <template #title> Solicitudes recibidas </template>
    </tg-friends-requests>
    <tg-friends-requests :requests="sended">
      <template #title> Solicitudes enviadas </template>
    </tg-friends-requests>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sended: [],
      received: [],
    }
  },
  async fetch() {
    ;[this.sended, this.received] = await Promise.all([
      this.$store.dispatch('friends/requests/getSended'),
      this.$store.dispatch('friends/requests/getReceived'),
    ])
  },
  head() {
    return {
      title: 'Solicitudes de amistad',
    }
  },
}
</script>
