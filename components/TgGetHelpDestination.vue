<template>
  <component :is="destination" />
</template>
<script>
import TgGetHelpDestinationAll from '@/components/TgGetHelpDestinationAll'
import TgGetHelpDestinationFindContact from '@/components/TgGetHelpDestinationFindContact'
import TgGetHelpDestinationContact from '@/components/TgGetHelpDestinationContact'
import TgGetHelpDestinationGroup from '@/components/TgGetHelpDestinationGroup'
import TgGetHelpDestinationCountry from '@/components/TgGetHelpDestinationCountry'
import TgGetHelpDestinationCity from '@/components/TgGetHelpDestinationCity'

export default {
  name: 'TgGetHelpDestination',
  components: {
    TgGetHelpDestinationAll,
    TgGetHelpDestinationFindContact,
    TgGetHelpDestinationContact,
    TgGetHelpDestinationGroup,
    TgGetHelpDestinationCountry,
    TgGetHelpDestinationCity,
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
