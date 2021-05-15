<template>
  <div>
    <div class="col-span-6 sm:col-span-6 lg:col-span-3">
      <form-tg-select
        :loading="isLoading"
        name="country"
        value-key="id"
        label-key="nombre_pais"
        :items="countryList"
        >País</form-tg-select
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgGetHelpDestinationCountry',
  data() {
    return {
      countryList: [],
      isLoading: false,
    }
  },
  mounted() {
    this.getCountryList()
  },
  methods: {
    async getCountryList() {
      try {
        this.isLoading = true
        this.countryList = await this.$store.dispatch('catalogs/getCountries')
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>
