<template>
  <div>
    <div v-if="selected.id">
      <common-tg-list :loading="false">
        <common-tg-list-item
          :title="selected.full_name"
          :subtitle="selected.email"
          :image="selected.image"
          @click.native="discardSelection()"
        >
          <template #icon>
            <solid-x-icon
              v-tooltip="'Cambiar contacto'"
              class="h-5 w-5 text-gray-400"
            />
          </template>
        </common-tg-list-item>
      </common-tg-list>
    </div>
    <div v-else>
      <common-tg-list :loading="isLoading">
        <common-tg-list-item
          v-for="(contact, index) in contacts"
          :key="`contact-item-${contact.id}-${index}`"
          :title="contact.full_name"
          :subtitle="contact.email"
          :image="contact.image"
          @click.native="selectContact(contact)"
        >
          <template #icon>
            <solid-chevron-right-icon
              v-tooltip="'Seleccionar contacto'"
              class="h-5 w-5 text-gray-400"
            />
          </template>
        </common-tg-list-item>
        <h3
          v-if="contacts.length === 0"
          class="text-sm text-gray-400 text-center p-4"
        >
          No se econtraron contactos
        </h3>
      </common-tg-list>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgGetHelpDestinationContact',
  data() {
    return {
      selected: {},
      contacts: [],
      find: '',
      isLoading: false,
    }
  },
  mounted() {
    this.getContactList()
  },
  methods: {
    async getContactList() {
      try {
        this.isLoading = true
        this.contacts = await this.$store.dispatch('friends/getList')
      } finally {
        this.isLoading = false
      }
    },
    selectContact(contact) {
      this.selected = contact
      this.$store.commit('help/SET_REQUEST_DESTINATION', {
        amigo_id: this.selected.id,
      })
    },
    discardSelection() {
      this.selected = {}
      this.$store.commit('help/SET_REQUEST_DESTINATION', {})
    },
  },
}
</script>
