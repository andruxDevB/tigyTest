<template>
  <div class="space-y-6">
    <div class="col-span-6 sm:col-span-6 lg:col-span-3">
      <form-tg-select
        v-model="location.country"
        :loading="isLoading.country"
        name="country"
        value-key="id"
        label-key="nombre_pais"
        :items="countryList"
        >País</form-tg-select
      >
    </div>

    <div class="col-span-6 sm:col-span-3 lg:col-span-3">
      <form-tg-select
        v-model="location.province"
        :loading="isLoading.province"
        name="province"
        :items="provinceList"
        value-key="id"
        label-key="nombre_prov"
        >Provincia</form-tg-select
      >
    </div>

    <div class="col-span-6 sm:col-span-3 lg:col-span-3">
      <form-tg-select
        v-model="location.city"
        name="city"
        :loading="isLoading.city"
        :items="cityList"
        value-key="id"
        label-key="nombre_ciudad"
        >Ciudad</form-tg-select
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgGetHelpDestinationCity',
  data() {
    return {
      location: {
        country: null,
        province: null,
        city: null,
      },
      countryList: [],
      provinceList: [],
      cityList: [],
      isLoading: {
        country: false,
        province: false,
        city: false,
      },
    }
  },
  watch: {
    async 'location.country'(val) {
      try {
        this.isLoading.province = true
        this.provinceList = await this.$store.dispatch(
          'catalogs/getProvincesByCountryId',
          { countryId: val }
        )
      } finally {
        this.isLoading.province = false
      }
    },
    async 'location.province'(val) {
      try {
        this.isLoading.city = true
        this.cityList = await this.$store.dispatch(
          'catalogs/getCitiesByCountryAndProvinceId',
          { countryId: this.location.country, provinceId: val }
        )
      } finally {
        this.isLoading.city = false
      }
    },
    'location.city'(val) {
      this.$store.commit('help/SET_REQUEST_DESTINATION', {
        ciudad_id: val,
      })
    },
  },
  mounted() {
    this.getCountryList()
  },
  methods: {
    async getCountryList() {
      try {
        this.isLoading.country = true
        this.countryList = await this.$store.dispatch('catalogs/getCountries')
      } finally {
        this.isLoading.country = false
      }
    },
  },
}
</script>
