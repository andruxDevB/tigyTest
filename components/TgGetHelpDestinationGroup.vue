<template>
  <div>
    <div v-if="selected.id">
      <common-tg-list :loading="false">
        <common-tg-list-item
          :title="selected.group_name"
          :subtitle="selected.created_at"
          @click.native="selected = {}"
        >
          <template #icon>
            <solid-x-icon
              v-tooltip="'Cambiar grupo'"
              class="h-5 w-5 text-gray-400"
            />
          </template>
        </common-tg-list-item>
      </common-tg-list>
    </div>
    <div v-else>
      <common-tg-list :loading="isLoading">
        <common-tg-list-item
          v-for="(group, index) in groups"
          :key="`group-item-${group.id}-${index}`"
          :title="group.group_name"
          :subtitle="group.created_at"
          @click.native="selectGroup(group)"
        >
          <template #icon>
            <solid-chevron-right-icon
              v-tooltip="'Seleccionar grupo'"
              class="h-5 w-5 text-gray-400"
            />
          </template>
        </common-tg-list-item>
        <h3
          v-if="groups.length === 0"
          class="text-sm text-gray-400 text-center p-4"
        >
          No se econtraron grupos
        </h3>
      </common-tg-list>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgGetHelpDestinationGroup',
  data() {
    return {
      selected: {},
      groups: [],
      isLoading: false,
    }
  },
  mounted() {
    this.getGroupList()
  },
  methods: {
    async getGroupList() {
      try {
        this.isLoading = true
        this.groups = await this.$store.dispatch('friends/getGroups')
      } finally {
        this.isLoading = false
      }
    },
    selectGroup(group) {
      this.selected = group
    },
  },
}
</script>
