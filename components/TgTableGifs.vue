<template>
  <div>
    <div class="sm:flex sm:justify-between mb-10">
      <common-tg-table>
        <template #head>
          <common-tg-table-head>Descripción</common-tg-table-head>
          <common-tg-table-head>Valor</common-tg-table-head>
          <common-tg-table-head>Acción</common-tg-table-head>
        </template>
        <template #body>
          <common-tg-table-row
            v-for="(gif, index) in gifs"
            :key="`gif-item-${index}-${gif.id}`"
          >
            <common-tg-table-row-cell>{{
              gif.descripcion
            }}</common-tg-table-row-cell>
            <common-tg-table-row-cell>{{ gif.valor }}</common-tg-table-row-cell>
            <common-tg-table-row-cell>
              <TgGifsRequestsActions :gif="gif"></TgGifsRequestsActions>
            </common-tg-table-row-cell>
          </common-tg-table-row>
        </template>
      </common-tg-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgTableGifs',
  props: {
    gifs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {},
}
</script>
