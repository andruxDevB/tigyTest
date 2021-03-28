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
    <nav
      class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
      <div class="hidden sm:block">
        <p class="text-sm text-gray-700">
          Mostrando
          <span class="font-medium">{{ transactions.from }}</span>
          hasta
          <span class="font-medium">{{ transactions.to }}</span>
          de
          <span class="font-medium">{{ transactions.total }}</span>
          transacciones
        </p>
      </div>
      <div class="flex-1 flex justify-between sm:justify-end">
        <tg-button
          type="outline"
          :disabled="transactions.current_page === 1"
          @click.native="
            getTransactions({ page: transactions.current_page - 1 })
          "
        >
          Anterior
        </tg-button>
        <tg-button
          type="outline"
          custom-class="ml-3"
          :disabled="transactions.current_page === transactions.last_page"
          @click.native="
            getTransactions({ page: transactions.current_page + 1 })
          "
        >
          Siguiente
        </tg-button>
      </div>
    </nav>
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
    await this.getTransactions()
  },
  methods: {
    async getTransactions(payload) {
      this.transactions = await this.$store.dispatch(
        'profile/getTransactions',
        payload
      )
    },
  },
}
</script>
