<template>
  <div>
    <div v-if="selected.id">
      <common-tg-list :loading="false">
        <common-tg-list-item
          :title="selected.full_name"
          :subtitle="selected.email"
          :image="selected.image"
          @click.native="selected = {}"
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
      <form-tg-input
        v-model="find"
        type="text"
        name="find"
        class="mb-5"
        placeholder="Escribe un email para buscar"
        @input="getSuggestionList"
        >Buscar por email</form-tg-input
      >
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
          No se econtraron resultados
        </h3>
      </common-tg-list>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgGetHelpDestinationFindContact',
  data() {
    return {
      selected: {},
      contacts: [],
      find: '',
      isLoading: false,
    }
  },
  methods: {
    async getSuggestionList(inputValue) {
      try {
        this.isLoading = true
        this.contacts = await this.$store.dispatch('friends/findByEmail', {
          email: inputValue,
        })
      } finally {
        this.isLoading = false
      }
    },
    selectContact(contact) {
      this.selected = contact
    },
  },
}
</script>
