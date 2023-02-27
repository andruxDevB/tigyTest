<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <common-tg-table v-if="this.$auth.user.rol_id === 7">
      <template #head>
        <!--<common-tg-table-head>ID</common-tg-table-head>-->
        <common-tg-table-head>Descripción</common-tg-table-head>
        <common-tg-table-head>Fecha</common-tg-table-head>
        <common-tg-table-head>Monto</common-tg-table-head>
        <common-tg-table-head>Colaborador</common-tg-table-head>
      </template>

      <template #body>
        <common-tg-table-row
          v-for="(transaction, index) in transactions.data"
          :key="`transaction-item-${index}-${transaction.id}`"
        >
          <!--<common-tg-table-row-cell>{{
            transaction.id
          }}</common-tg-table-row-cell>-->
          <common-tg-table-row-cell>{{
            transaction.descripcion
          }}</common-tg-table-row-cell>
          <common-tg-table-row-cell>{{
            transaction.fecha
          }}</common-tg-table-row-cell>
          <common-tg-table-row-cell>
            <tg-amount :type="transaction.efecto">{{
              transaction.premio
            }}</tg-amount>
          </common-tg-table-row-cell>
          <common-tg-table-row-cell>{{
            transaction.usuario1
          }}</common-tg-table-row-cell>
        </common-tg-table-row>
      </template>
    </common-tg-table>

    <common-tg-table v-else-if="this.$auth.user.rol_id === 6">
      <template #head>
        <!--<common-tg-table-head>ID</common-tg-table-head>-->
        <common-tg-table-head>Descripción</common-tg-table-head>
        <common-tg-table-head>Fecha</common-tg-table-head>
        <common-tg-table-head>Monto</common-tg-table-head>
        <common-tg-table-head>Saldo</common-tg-table-head>
      </template>

      <template #body>
        <common-tg-table-row
          v-for="(transaction, index) in transactions.data"
          :key="`transaction-item-${index}-${transaction.id}`"
        >
          <!--<common-tg-table-row-cell>{{
            transaction.id
          }}</common-tg-table-row-cell>-->
          <common-tg-table-row-cell>{{
            transaction.descripcion
          }}</common-tg-table-row-cell>
          <common-tg-table-row-cell>{{
            transaction.fecha
          }}</common-tg-table-row-cell>
          <common-tg-table-row-cell>
            <tg-amount :type="transaction.efecto">{{
              transaction.valor
            }}</tg-amount>
          </common-tg-table-row-cell>
          <common-tg-table-row-cell>{{
            transaction.saldo
          }}</common-tg-table-row-cell>
        </common-tg-table-row>
      </template>
    </common-tg-table>
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
        <form-tg-button
          type="outline"
          :disabled="transactions.current_page === 1"
          @click.native="
            getTransactions({ page: transactions.current_page - 1 })
          "
        >
          Anterior
        </form-tg-button>
        <form-tg-button
          type="outline"
          custom-class="ml-3"
          :disabled="transactions.current_page === transactions.last_page"
          @click.native="
            getTransactions({ page: transactions.current_page + 1 })
          "
        >
          Siguiente
        </form-tg-button>
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
