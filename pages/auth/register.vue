<template>
  <div>
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Crea tu cuenta
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        ¿Ya tienes cuenta?
        <NuxtLink
          to="/auth/login"
          class="font-medium text-purple-600 hover:text-purple-500"
          prefetch
          >Inicia sesión</NuxtLink
        >
      </p>
    </div>
    <ValidationObserver
      ref="observer"
      class="mt-8 space-y-6"
      tag="form"
      @submit.prevent="userRegister"
    >
      <ValidationProvider
        v-slot="{ errors }"
        rules="required|email"
        name="email"
        slim
      >
        <form-tg-input
          v-model="model.email"
          type="email"
          name="email"
          :errors="errors"
          >Email</form-tg-input
        >
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors }"
        rules="required"
        name="pais_id"
        slim
      >
        <form-tg-select
          v-model="model.pais_id"
          value-key="id"
          label-key="nombre_pais"
          :items="countryList"
          name="pais_id"
          :errors="errors"
          >País</form-tg-select
        >
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors }"
        rules="required"
        name="password"
        slim
      >
        <form-tg-input
          v-model="model.password"
          type="password"
          name="password"
          :errors="errors"
          >Contraseña</form-tg-input
        >
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors }"
        rules="required"
        name="password_confirmation"
        slim
      >
        <form-tg-input
          v-model="model.password_confirmation"
          type="password"
          name="password_confirmation"
          :errors="errors"
          >Confirmar Contraseña</form-tg-input
        >
      </ValidationProvider>

      <div class="flex items-center justify-between">
        <div class="text-sm">
          <NuxtLink
            to="/auth/recovery"
            class="font-medium text-purple-600 hover:text-purple-500"
            prefetch
            >¿Olvidaste tu contraseña?</NuxtLink
          >
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Registrarse
        </button>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  comments: {
    ValidationObserver,
    ValidationProvider,
  },
  layout: 'auth',
  transition: 'slide-bottom',
  data() {
    return {
      isLoading: true,
      model: {
        email: '',
        pais_id: null,
        password: '',
        password_confirmation: '',
        origen: 'F',
      },
      countryList: [],
    }
  },
  mounted() {
    this.getCountryList()
  },
  methods: {
    async getCountryList() {
      try {
        // this.isLoading.country = true
        this.countryList = await this.$store.dispatch('catalogs/getCountries')
      } finally {
        // this.isLoading.country = false
      }
    },
    async userRegister() {
      this.isLoading = true
      try {
        const isValid = await this.$refs.observer.validate()
        if (isValid) {
          this.$axios
            .post('/intro/register', this.model)
            .then(() => this.$router.push('/auth/login'))
        }
      } catch (error) {
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>
