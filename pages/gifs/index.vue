<template>
  <div class="p-6">
    <div class="container">
      <div class="mx-auto max-w-xl">
        <tg-table-gifs :gifs="gifs"></tg-table-gifs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gifs: [],
    }
  },
  async fetch() {
    this.gifs = await this.$store.dispatch('gifs/getList')
  },
  head() {
    return {
      title: 'Premios',
    }
  },
}
</script>
