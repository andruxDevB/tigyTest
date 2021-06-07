<template>
  <form class="space-y-6" @submit.prevent="updateProfile">
    <tg-profile-info-section>
      <template #title> Datos personales </template>
      <template #subTitle> Completa la informacion de tu perfil </template>
      <div class="col-span-6 sm:col-span-3">
        <form-tg-input v-model="profile.personales.nombres" name="nombres">
          Nombres
        </form-tg-input>
      </div>

      <div class="col-span-6 sm:col-span-3">
        <form-tg-input v-model="profile.personales.apellidos" name="apellidos">
          Apellidos
        </form-tg-input>
      </div>

      <div class="col-span-6 sm:col-span-3">
        <form-tg-input
          v-model="profile.personales.fecha_nace"
          name="fecha_nace"
          type="date"
        >
          Fecha de nacimiento
        </form-tg-input>
      </div>

      <div class="col-span-6 sm:col-span-3">
        <form-tg-select
          v-model="profile.personales.genero_id"
          name="gender"
          :items="genders"
          value-key="id"
          label-key="descripcion"
          >Genero</form-tg-select
        >
      </div>

      <div class="col-span-6 sm:col-span-6 lg:col-span-3">
        <form-tg-select
          v-model="user.pais_id"
          name="country"
          value-key="id"
          label-key="nombre_pais"
          :items="countryList"
          >País</form-tg-select
        >
      </div>

      <div class="col-span-6 sm:col-span-3 lg:col-span-3">
        <form-tg-select
          v-model="profile.adicionales.provincia_id"
          name="provice"
          :items="proviceList"
          value-key="id"
          label-key="nombre_prov"
          >Provincia</form-tg-select
        >
      </div>

      <div class="col-span-6 sm:col-span-3 lg:col-span-3">
        <form-tg-select
          v-model="profile.adicionales.ciudad_id"
          name="city"
          :items="cityList"
          value-key="id"
          label-key="nombre_ciudad"
          >Ciudad</form-tg-select
        >
      </div>
    </tg-profile-info-section>

    <tg-profile-info-section>
      <template #title> Perfil profesional</template>
      <template #subTitle> Cuenta un poco mas sobre tí </template>
      <div class="sm:col-span-6">
        <form-tg-input
          v-model="profile.adicionales.ocupacion"
          name="ocupacion"
          placeholder="Ej: Programador"
        >
          Ocupación
        </form-tg-input>
      </div>

      <div class="sm:col-span-6">
        <form-tg-input
          v-model="profile.adicionales.hobby"
          name="hobby"
          placeholder="Ej: Escuchar música"
        >
          Hobby
        </form-tg-input>
      </div>

      <div class="sm:col-span-6">
        <form-tg-input
          v-model="profile.adicionales.frase"
          name="frase"
          placeholder="Ej: Excel, coaching, networking y mas cosas con las que puedes ayudar en la red"
        >
          ¿Comó puedes ayudar a tu red?
        </form-tg-input>
      </div>

      <div class="col-span-6 sm:col-span-3">
        <form-tg-select
          v-model="profile.adicionales.escolaridad_id"
          name="gender"
          :items="schooling"
          value-key="id"
          label-key="descripcion"
          >Escolaridad</form-tg-select
        >
      </div>

      <div class="col-span-6 sm:col-span-3">
        <form-tg-select
          v-model="profile.adicionales.profesion_id"
          name="gender"
          :items="profession"
          value-key="id"
          label-key="descripcion"
          >Profesión</form-tg-select
        >
      </div>
    </tg-profile-info-section>

    <tg-profile-info-section>
      <template #title> Información de contacto</template>
      <template #subTitle>¿Cómo se pueden comunicar contigo?</template>
      <div class="col-span-6 sm:col-span-3">
        <form-tg-input
          v-model="profile.ubicacion.dir_correo1"
          name="dir_correo1"
        >
          Email
        </form-tg-input>
      </div>

      <div class="col-span-6 sm:col-span-3">
        <form-tg-input v-model="profile.ubicacion.telef_cel1" name="telef_cel1">
          Celular
        </form-tg-input>
      </div>
      <div class="sm:col-span-6">
        <form-tg-input
          v-model="profile.ubicacion.red_social1"
          name="facebook"
          placeholder="Nombre en Facebook"
        >
          Facebook
        </form-tg-input>
      </div>
      <div class="sm:col-span-6">
        <form-tg-input
          v-model="profile.ubicacion.red_social2"
          name="twitter"
          placeholder="@nombre de usuario"
        >
          Twitter
        </form-tg-input>
      </div>
      <div class="sm:col-span-6">
        <form-tg-input
          v-model="profile.ubicacion.red_social3"
          name="linkedin"
          placeholder="Url de LinkedIn"
        >
          LinkedIn
        </form-tg-input>
      </div>
    </tg-profile-info-section>

    <div class="flex justify-end">
      <form-tg-button :loading="loading">Guardar</form-tg-button>
    </div>
  </form>
</template>
<script>
import { cloneDeep } from 'lodash'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      countryList: [],
      proviceList: [],
      cityList: [],
      genders: [],
      schooling: [],
      profession: [],
      profile: { adicionales: {}, personales: {}, ubicacion: {} },
      loading: false,
      user: {},
    }
  },

  async fetch() {
    ;[
      this.countryList,
      this.genders,
      this.schooling,
      this.profession,
    ] = await Promise.all([
      this.$store.dispatch('catalogs/getCountries'),
      this.$store.dispatch('catalogs/getGenders'),
      this.$store.dispatch('catalogs/getSchooling'),
      this.$store.dispatch('catalogs/getProfession'),
    ])
  },
  computed: {
    ...mapGetters({
      profileInfo: 'profile/account',
      profileUser: 'profile/user',
    }),
  },
  watch: {
    profileInfo() {
      this.profile = cloneDeep(this.profileInfo)
      this.user = cloneDeep(this.profileUser)
    },
    async 'user.pais_id'(val) {
      this.proviceList = await this.$store.dispatch(
        'catalogs/getProvincesByCountryId',
        { countryId: val }
      )
    },
    async 'profile.adicionales.provincia_id'(val) {
      this.cityList = await this.$store.dispatch(
        'catalogs/getCitiesByCountryAndProvinceId',
        { countryId: this.user.pais_id, provinceId: val }
      )
    },
  },
  beforeMount() {
    this.profile = cloneDeep(this.profileInfo)
  },
  methods: {
    async updateProfile() {
      try {
        this.loading = true
        await this.$store.dispatch('profile/updateAccount', {
          ...this.profile.personales,
          ...this.profile.adicionales,
          ...this.profile.ubicacion,
        })

        this.$toast.show({
          type: 'success',
          title: 'Éxito',
          message: 'Perfil actualizado correctamente',
        })
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
