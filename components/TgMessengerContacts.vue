<template>
  <aside
    class="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200 bg-white"
  >
    <div class="px-6 pt-6 pb-4">
      <h2 class="text-lg font-medium text-gray-900">Contactos</h2>
      <p class="mt-1 text-sm text-gray-600">
        Chatea en 1 de {{ contacts.length }} conversaciones
      </p>
      <form class="mt-6 flex space-x-4" action="#">
        <div class="flex-1 min-w-0">
          <label for="search" class="sr-only">conversaciones</label>
          <div class="relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <outline-search-icon class="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="search"
              type="search"
              name="search"
              class="focus:ring-pink-500 border block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Buscar"
            />
          </div>
        </div>
        <button
          type="submit"
          class="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        >
          <svg
            class="h-5 w-5 text-gray-400"
            x-description="Heroicon name: solid/filter"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </form>
    </div>
    <!-- Directory list -->
    <nav class="flex-1 min-h-0 relative overflow-y-auto" aria-label="Directory">
      <div v-for="group in grouped" :key="`chat-group-contact-${group.letter}`">
        <div
          class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
        >
          <h3>{{ group.letter }}</h3>
        </div>
        <ul class="relative z-0 divide-y divide-gray-200">
          <li
            v-for="contact in group.contacts"
            :key="`chat-contact-${contact.id}`"
          >
            <div
              class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
            >
              <div class="flex-shrink-0">
                <common-tg-avatar
                  :image="contact.image"
                  :alt="contact.full_name"
                ></common-tg-avatar>
              </div>
              <div class="flex-1 min-w-0">
                <NuxtLink
                  :to="`/messenger/${contact.gchat_id}`"
                  class="focus:outline-none"
                >
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900">
                    {{ contact.full_name }}
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    {{ contact.tipo_chat }}
                  </p></NuxtLink
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>
<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
export default {
  name: 'TgMessengerContacts',
  computed: {
    grouped() {
      return _(this.contacts)
        .orderBy((o) => o.full_name.toLowerCase(), ['asc'])
        .groupBy((o) => o.full_name[0].toUpperCase())
        .map((contacts, letter) => ({ letter, contacts }))
        .value()
    },
    ...mapGetters({
      contacts: 'messenger/contacts',
    }),
  },
}
</script>
