<template>
  <div>
    <div class="col-span-6 sm:col-span-6 lg:col-span-3">
      <form-tg-select
        v-model="country"
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
  computed: {
    country: {
      get() {
        return this.$store.state.help.requestDestination.pais_id
      },
      set(value) {
        this.$store.commit('help/SET_REQUEST_DESTINATION', {
          pais_id: value,
        })
      },
    },
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
