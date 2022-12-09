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
            class="absolute inset-0 bg-gray-500/75 transition-opacity"
            aria-hidden="true"
            @click="sidebarToggle()"
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
            class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16"
            aria-labelledby="slide-over-heading"
          >
            <div class="w-screen max-w-md">
              <div
                class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll"
              >
                <div class="p-6">
                  <div class="flex items-start justify-between">
                    <h2
                      id="slide-over-title"
                      class="text-lg font-medium text-gray-900"
                    >
                      Notificaciones
                    </h2>
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-purple-500"
                        @click="sidebarToggle()"
                      >
                        <span class="sr-only">Close panel</span>
                        <!-- Heroicon name: outline/x -->
                        <svg
                          class="h-6 w-6"
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
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <common-tg-tabs>
                  <common-tg-tabs-item
                    :current="section === 'User'"
                    @click.native="section = 'User'"
                    >Tus notificaciones</common-tg-tabs-item
                  >
                  <common-tg-tabs-item
                    :current="section === 'Network'"
                    @click.native="section = 'Network'"
                    >Novedades Tigy</common-tg-tabs-item
                  >
                </common-tg-tabs>

                <component :is="section" />
              </div>
            </div>
          </section>
        </transition>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapMutations } from 'vuex'
import Network from '@/components/sidebar/TgNotificationsNetwork'
import User from '@/components/sidebar/TgNotificationsUser'

export default {
  name: 'TgNotifications',
  components: { Network, User },
  data() {
    return {
      section: 'User',
    }
  },

  computed: {
    isVisible() {
      return this.$store.state.notifications.sidebar
    },
  },
  mounted() {
    this.$store.dispatch('notifications/getUser')
    this.$store.dispatch('notifications/getNetwork')
  },
  methods: {
    ...mapMutations({
      sidebarToggle: 'notifications/TOGGLE_SIDEBAR',
    }),
  },
}
</script>
