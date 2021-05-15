<template>
  <component :is="destination" />
</template>
<script>
import TgGetHelpDestinationAll from '@/components/tgGetHelpDestinationAll'
import TgGetHelpDestinationFindContact from '@/components/tgGetHelpDestinationFindContact'
export default {
  components: {
    TgGetHelpDestinationAll,
    TgGetHelpDestinationFindContact,
  },
  props: {
    destinationKey: {
      type: String,
      default: 'All',
    },
  },
  computed: {
    destination() {
      return `TgGetHelpDestination${this.destinationKey}`
    },
  },
}
</script>
