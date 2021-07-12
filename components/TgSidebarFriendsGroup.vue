<template>
  <sidebar-tg :is-visible="isVisible">
    <ValidationObserver
      ref="observer"
      class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl"
      tag="form"
      @submit.prevent="submit()"
    >
      <sidebar-tg-content>
        <template #header>
          <sidebar-tg-content-header
            title="Crear un grupo"
            :toogle="sidebarToggle"
          />
        </template>
        <template #body
          ><div class="space-y-6 pt-6 pb-5">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="nombre"
              slim
            >
              <form-tg-input v-model="group.name" name="nombre" :errors="errors"
                >Nombre del grupo</form-tg-input
              >
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="alias"
              slim
            >
              <form-tg-input v-model="group.alias" name="alias" :errors="errors"
                >Alias del grupo</form-tg-input
              >
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="prioridad"
              slim
            >
              <form-tg-button-group
                v-model="group.priority"
                :items="priorityList"
                name="prioridad"
                :errors="errors"
              >
                Prioridad</form-tg-button-group
              >
            </ValidationProvider>
          </div></template
        >
      </sidebar-tg-content>
      <sidebar-tg-footer>
        <form-tg-button
          :submit="false"
          type="outline"
          @click.native="sidebarToggle()"
          >Cancelar</form-tg-button
        >
        <form-tg-button :loading="loading" class="ml-4 inline-flex"
          >Crear</form-tg-button
        >
      </sidebar-tg-footer>
    </ValidationObserver>
  </sidebar-tg>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'TgSidebarFriendsGroupCreate',
  components: {
    ValidationObserver,
  },
  data() {
    return {
      group: {},
      loading: false,
      priorityList: [
        { id: 1, name: 1 },
        { id: 2, name: 2 },
        { id: 3, name: 3 },
        { id: 4, name: 4 },
        { id: 5, name: 5 },
      ],
    }
  },
  computed: {
    ...mapGetters({
      isVisible: 'friends/groups/sidebar',
    }),
  },
  methods: {
    ...mapMutations({
      sidebarToggle: 'friends/groups/TOGGLE_SIDEBAR',
    }),
    async submit() {
      try {
        this.loading = true
        const isValid = await this.$refs.observer.validate()
        if (isValid) {
          const payload = {
            subject: this.group.alias,
            name: this.group.name,
            priority: this.group.priority.id,
          }
          await this.$store.dispatch('friends/groups/create', payload)
          this.sidebarToggle()
          this.group = {}
          this.$toast.success('Grupo creado exitosamente')
        }
      } catch (err) {
        this.$toast.show({
          type: 'danger',
          title: 'Error',
          message: 'Existió un error, intenta mas tarde',
        })
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
