<template>
  <TgAnimation :loop="true" path="/animations/find.json" />
</template>

<script>
import TgAnimation from '@/components/common/TgAnimation'

export default {
  name: 'TgAnimationLoading',
  components: { TgAnimation },
}
</script>
