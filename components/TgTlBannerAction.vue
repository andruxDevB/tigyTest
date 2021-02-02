<template>
  <button
    class="group block w-full h-full focus:outline-none p-6 border-l border-gray-200"
  >
    <div class="flex flex-row justify-center items-center h-full">
      <component :is="icon" :class="[baseIconClass]"></component>
    </div>
    <p :class="[baseTextClass]">{{ label }}</p>
  </button>
</template>
<script>
import HandIcon from '@nuxt-hero-icons/outline/src/components/HandIcon'
import GiftIcon from '@nuxt-hero-icons/outline/src/components/GiftIcon'

export default {
  name: 'TgTlBannerAction',
  components: {
    HandIcon,
    GiftIcon,
  },
  props: {
    icon: {
      type: String,
      default: 'HandIcon',
      required: true,
    },
    label: {
      type: String,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      baseIconClass: 'text-gray-600 w-8 h-8 group-hover:text-purple-500',
      baseTextClass:
        'text-gray-600 group-hover:text-purple-500 subpixel-antialiased px-2 py-1 tracking-wide leading-tight text-sm',
    }
  },
}
</script>
