import { sortBy, isUndefined } from 'lodash'

export default {
  async getCountries({ commit }) {
    try {
      const response = await this.$api.$get(`/paises`)
      return sortBy(response.data.paises, 'nombre_pais')
    } catch (e) {
      console.error(e)
    }
  },
  async getProvincesByCountryId({ commit }, payload) {
    try {
      if (isUndefined(payload.countryId)) return []
      const response = await this.$api.$get(`/provincias/${payload.countryId}`)
      return sortBy(response.data.provincias, 'nombre_prov')
    } catch (e) {
      console.error(e)
    }
  },
  async getCitiesByCountryAndProvinceId({ commit }, payload) {
    try {
      if (isUndefined(payload.provinceId) || isUndefined(payload.countryId))
        return []
      const response = await this.$api.$get(
        `/ciudades/${payload.countryId}/${payload.provinceId}`
      )
      return sortBy(response.data.ciudades, 'nombre_ciudad')
    } catch (e) {
      console.error(e)
    }
  },
  async getGenders({ commit }, payload) {
    try {
      const response = await this.$api.$get(`/generos`)
      return response.data.generos
    } catch (e) {
      console.error(e)
    }
  },
  async getSchooling({ commit }, payload) {
    try {
      const response = await this.$api.$get(`/escolaridades`)
      return response.data.escolaridades
    } catch (e) {
      console.error(e)
    }
  },
  async getProfession({ commit }, payload) {
    try {
      const response = await this.$api.$get(`/profesiones`)
      return response.data.profesiones
    } catch (e) {
      console.error(e)
    }
  },
  async getMaritalStatus({ commit }, payload) {
    try {
      const response = await this.$api.$get(`/eciviles`)
      return response.data.eciviles
    } catch (e) {
      console.error(e)
    }
  },
}
