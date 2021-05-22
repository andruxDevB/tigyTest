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
                      Enviar Reconocimiento
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
                      Premia a tus amigos por sus buenas acciones y ayudlos a
                      mejorar su pefil
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
                        <form-tg-drop-down
                          :items="contacts"
                          :errors="errors"
                          :loading="loadingContacts"
                        >
                          Selecciona un amigo
                          <template #item="{ item, isCurrent }">
                            <FormTgDropDownItem
                              :is-current="isCurrent"
                              :image="item.image"
                              :label="item.full_name"
                            />
                          </template>
                          <template #selected="{ selected }">
                            <FormTgDropDownItem
                              :is-current="true"
                              :image="selected.image"
                              :label="selected.full_name"
                            />
                          </template>
                        </form-tg-drop-down>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                        name="recompenza"
                        slim
                      >
                        <form-tg-button-group
                          v-model="price.quantity"
                          :items="rewards"
                          name="recompenza"
                          :errors="errors"
                        >
                          Selecciona el valor de la
                          recompenza</form-tg-button-group
                        >
                      </ValidationProvider>
                    </div>
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
                <form-tg-button :loading="loading" class="ml-4 inline-flex"
                  >Enviar solicitud</form-tg-button
                >
              </div>
            </ValidationObserver>
          </section>
        </transition>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'TgPrice',
  components: {},
  data() {
    return {
      price: {},
      contacts: [],
      loading: false,
      loadingContacts: false,
    }
  },
  computed: {
    isVisible() {
      return this.$store.state.price.sidebar
    },
    rewards() {
      return this.$store.state.help.rewards
    },
  },
  mounted() {
    this.getContactList()
  },
  methods: {
    ...mapMutations({
      sidebarToggle: 'price/TOGGLE_SIDEBAR',
    }),
    async getContactList() {
      try {
        this.loadingContacts = true
        this.contacts = await this.$store.dispatch('friends/getList')
      } finally {
        this.loadingContacts = false
      }
    },
    async submit() {
      try {
        this.loading = true
        const isValid = await this.$refs.observer.validate()
        if (isValid) {
          const payload = {
            subject: this.help.subject,
            quantity: this.help.quantity.value,
            privacy: this.help.privacy.value,
            balance: this.balance.vsaldo,
            requestDestination: this.requestDestination,
          }
          await this.$store.dispatch('help/request', payload)
          this.sidebarToggle()
          this.help = {}
          this.$toast.success('Solicitud enviada correctamente a la red')
        }
      } catch (err) {
        console.log(err)
        this.$toast.error('existio un error')
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
