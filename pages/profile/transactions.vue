<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <tg-table>
      <template #head>
        <tg-table-head>ID</tg-table-head>
        <tg-table-head>Descripción</tg-table-head>
        <tg-table-head>Fecha</tg-table-head>
        <tg-table-head>Monto</tg-table-head>
        <tg-table-head>Saldo</tg-table-head>
      </template>
      <template #body>
        <tg-table-row
          v-for="(transaction, index) in transactions.data"
          :key="`transaction-item-${index}-${transaction.id}`"
        >
          <tg-table-row-cell>{{ transaction.id }}</tg-table-row-cell>
          <tg-table-row-cell>{{ transaction.descripcion }}</tg-table-row-cell>
          <tg-table-row-cell>{{ transaction.fecha }}</tg-table-row-cell>
          <tg-table-row-cell>
            <tg-amount :type="transaction.efecto">{{
              transaction.valor
            }}</tg-amount>
          </tg-table-row-cell>
          <tg-table-row-cell>{{ transaction.saldo }}</tg-table-row-cell>
        </tg-table-row>
      </template>
    </tg-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transactions: {},
    }
  },
  async fetch() {
    this.transactions = await this.$store.dispatch('profile/getTransactions')
  },
}
</script>
