<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <transition leave-active-class="ease-in-out duration-500">
    <div
      v-show="isVisible"
      class="fixed inset-0 overflow-hidden transition ease-in-out duration-500 z-40"
    >
      <div class="absolute inset-0 overflow-hidden">
        <transition
          enter-active-class="ease-in-out duration-500"
          leave-active-class="ease-in-out duration-500"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="isVisible"
            class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
        </transition>

        <transition
          enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
          leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
          enter-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <section
            v-if="isVisible"
            class="absolute inset-y-0 right-0 pl-10 max-w-full flex"
            aria-labelledby="slide-over-heading"
          >
            <ValidationObserver
              ref="observer"
              class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl"
              tag="form"
              @submit.prevent="submit()"
            >
              <div class="flex-1 h-0 overflow-y-auto">
                <div class="py-6 px-4 bg-purple-700 sm:px-6">
                  <div class="flex items-center justify-between">
                    <h2
                      id="slide-over-heading"
                      class="text-lg font-medium text-white"
                    >
                      Solicitar ayuda
                    </h2>
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        type="button"
                        class="bg-purple-700 rounded-md text-purple-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        @click="sidebarToggle()"
                      >
                        <span class="sr-only">Close panel</span>
                        <svg
                          class="h-6 w-6"
                          x-description="Heroicon name: outline/x"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="mt-1">
                    <p class="text-sm text-purple-300">
                      Describe tu necesidad y ofrece una recompenza en tu red de
                      amistades o el mundo.
                    </p>
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-between">
                  <div class="px-4 divide-y divide-gray-200 sm:px-6">
                    <div class="space-y-6 pt-6 pb-5">
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                        name="asunto"
                        slim
                      >
                        <tg-textarea
                          v-model="help.asunto"
                          name="asunto"
                          :errors="errors"
                          >¿Que necesitas?</tg-textarea
                        >
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                        name="recompenza"
                        slim
                      >
                        <tg-button-group
                          v-model="help.cantidad_id"
                          :items="rewards"
                          name="recompenza"
                          :errors="errors"
                        >
                          Selecciona el valor de la recompenza</tg-button-group
                        >
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                        name="privacidad"
                        slim
                      >
                        <tg-drop-down
                          v-model="help.tipoayuda_id"
                          name="privacidad"
                          :items="privacy"
                          :errors="errors"
                          >Privacidad</tg-drop-down
                        >
                      </ValidationProvider>
                    </div>
                    <div class="pt-4 pb-6"></div>
                  </div>
                </div>
              </div>
              <div class="flex-shrink-0 px-4 py-4 flex justify-end">
                <button
                  type="button"
                  class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  @click="sidebarToggle()"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  class="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Enviar solicitud
                </button>
              </div>
            </ValidationObserver>
          </section>
        </transition>
      </div>
    </div>
  </transition>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { mapMutations } from 'vuex'

export default {
  name: 'TgGetHelp',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      help: {},
      countryList: [],
    }
  },
  computed: {
    isVisible() {
      return this.$store.state.help.sidebar
    },
    rewards() {
      return this.$store.state.help.rewards
    },
    privacy() {
      return this.$store.state.help.privacy
    },
  },
  methods: {
    ...mapMutations({
      sidebarToggle: 'help/TOGGLE_SIDEBAR',
    }),
    async submit() {
      const isValid = await this.$refs.observer.validate()
      // this.getCountries()
      // console.log(isValid)
    },
    async getCountries() {
      this.countryList = await this.$store.dispatch('location/getCountryList')
    },
  },
}
</script>
