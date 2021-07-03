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
            title="Reportar"
            description="Ayúdanos a mantener el código de condudcta dentro de la plataforma"
            :toogle="sidebarToggle"
          />
        </template>
        <template #body
          ><div class="space-y-6 pt-6 pb-5">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="asunto"
              slim
            >
              <form-tg-textarea
                v-model="report.subject"
                name="asunto"
                :errors="errors"
                >Motivo para reportar este evento</form-tg-textarea
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
          >Reportar</form-tg-button
        >
      </sidebar-tg-footer>
    </ValidationObserver>
  </sidebar-tg>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'TgSidebarReport',
  components: {
    ValidationObserver,
  },
  data() {
    return {
      report: {},
      loading: false,
    }
  },
  computed: {
    ...mapGetters({
      isVisible: 'post/report/sidebar',
      postId: 'post/report/postId',
    }),
  },
  methods: {
    ...mapMutations({
      sidebarToggle: 'post/report/TOGGLE_SIDEBAR',
    }),
    async submit() {
      try {
        this.loading = true
        const isValid = await this.$refs.observer.validate()
        if (isValid) {
          const payload = {
            subject: this.report.subject,
            postId: this.postId,
          }
          await this.$store.dispatch('post/report/send', payload)
          this.sidebarToggle()
          this.report = {}
          this.$toast.success('Reporte enviado exitosamente')
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
