<template>
  <div class="flex">
    <component
      :is="types[type].icon"
      :class="[types[type].class, 'mr-3 h-4 w-4']"
    />
    <span :class="['font-bold', types[type].class]"><slot></slot></span>
  </div>
</template>
<script>
import TrendingUp from '@nuxt-hero-icons/outline/src/components/TrendingUpIcon'
import TrendingDown from '@nuxt-hero-icons/outline/src/components/TrendingDownIcon'
import Equal from '@nuxt-hero-icons/outline/src/components/MenuAlt4Icon'

export default {
  name: 'TgAmount',
  components: {
    TrendingUp,
    TrendingDown,
    Equal,
  },
  props: {
    value: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      default: 'N',
    },
  },
  data() {
    return {
      types: {
        S: {
          class: 'text-green-500',
          icon: 'TrendingUp',
        },
        R: {
          class: 'text-red-500',
          icon: 'TrendingDown',
        },
        N: {
          class: '',
          icon: 'Equal',
        },
      },
    }
  },
}
</script>
