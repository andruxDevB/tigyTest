<template>
  <sidebar-tg :is-visible="isVisible">
    <div
      class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl"
    >
      <sidebar-tg-content spacing="p-none">
        <template #header>
          <sidebar-tg-content-header
            :title="group.group_name"
            :toogle="sidebarToggle"
          />
        </template>
        <template #body>
          <aside
            class="hidden xl:order-first xl:flex xl:flex-col shrink-0 w-96 border-r bg-white"
          >
            <div class="px-6 pt-6 pb-4">
              <h2 class="text-lg font-medium text-gray-900">Miembros</h2>
              <p class="mt-1 text-sm text-gray-600">
                {{ group.group_info.length }} miembros pertenecen a este grupo
              </p>
              <div class="mt-6 flex space-x-4">
                <div class="flex-1 min-w-0">
                  <tg-friends-search v-model="search"></tg-friends-search>
                </div>
                <form-tg-button sub class="mt-4 sm:mt-0"
                  >Invitar</form-tg-button
                >
              </div>
            </div>
            <!-- Directory list -->
            <nav
              class="flex-1 min-h-0 relative overflow-y-auto"
              aria-label="Directory"
            >
              <div
                v-for="group in grouped"
                :key="`chat-group-contact-${group.letter}`"
              >
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
                      <div class="shrink-0">
                        <common-tg-avatar
                          :image="contact.user.image"
                          :alt="contact.user.full_name"
                        ></common-tg-avatar>
                      </div>
                      <div class="flex-1 min-w-0">
                        <span
                          class="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                        <p class="text-sm font-medium text-gray-900">
                          {{ contact.user.full_name }}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>
        </template>
      </sidebar-tg-content>
    </div>
  </sidebar-tg>
</template>

<script>
import _ from 'lodash'
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'TgSidebarFriendsGroup',
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapGetters({
      isVisible: 'friends/groups/sidebarList',
      group: 'friends/groups/info',
    }),
    grouped() {
      return _(this.filtered)
        .orderBy((o) => o.user.full_name.toLowerCase(), ['asc'])
        .groupBy((o) => o.user.full_name[0].toUpperCase())
        .map((contacts, letter) => ({ letter, contacts }))
        .value()
    },
    filtered() {
      return this.group.group_info.filter((friend) => {
        return friend.user.full_name
          .toLowerCase()
          .includes(this.search.toLowerCase())
      })
    },
  },
  methods: {
    ...mapMutations({
      sidebarToggle: 'friends/groups/TOGGLE_SIDEBAR_LIST',
    }),
  },
}
</script>
