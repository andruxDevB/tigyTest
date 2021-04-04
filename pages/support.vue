<template>
  <div class="mt-6 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
    <h1 class="text-2xl font-semibold text-gray-900 mb-4">Solicita soporte</h1>
    <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
      <ValidationObserver
        ref="observer"
        class="mt-8"
        tag="form"
        @submit.prevent="userLogin"
      >
        <div class="sm:p-6 px-4 py-5 space-y-6">
          <div class="grid grid-cols-6 gap-6">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="firstname"
              slim
            >
              <div class="col-span-6 sm:col-span-3">
                <form-tg-input
                  v-model="support.firstname"
                  type="text"
                  name="firstname"
                  :errors="errors"
                  >Nombre</form-tg-input
                >
              </div>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="lastname"
              slim
            >
              <div class="col-span-6 sm:col-span-3">
                <form-tg-input
                  v-model="support.lastname"
                  type="text"
                  name="lastname"
                  :errors="errors"
                  >Apellido</form-tg-input
                >
              </div>
            </ValidationProvider>
          </div>
          <div class="grid grid-cols-6 gap-6">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|email"
              name="email"
              slim
            >
              <div class="col-span-6">
                <form-tg-input
                  v-model="support.email"
                  type="email"
                  name="email"
                  :errors="errors"
                  >Email</form-tg-input
                >
              </div>
            </ValidationProvider>
          </div>
          <div class="grid grid-cols-6 gap-6">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="message"
              slim
            >
              <div class="col-span-6">
                <form-tg-textarea
                  v-model="support.message"
                  name="message"
                  :errors="errors"
                  >Mensaje</form-tg-textarea
                >
              </div>
            </ValidationProvider>
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-end">
          <form-tg-button>Enviar</form-tg-button>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      loading: false,
      support: {},
    }
  },
  head() {
    return {
      title: 'Soporte',
    }
  },
}
</script>
