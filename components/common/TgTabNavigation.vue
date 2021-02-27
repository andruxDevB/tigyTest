<template>
  <div class="mt-6 sm:mt-2 2xl:mt-5">
    <div class="border-b border-gray-200">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <!-- Current: "border-pink-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
          <nuxt-link
            v-for="(item, index) in items"
            :key="`tab-nav-item-${index}`"
            :to="item.link"
            :class="[
              baseLinkClass,
              isActive(item) ? activeLinkClass : defaltLinkClass,
            ]"
          >
            {{ item.label }}
          </nuxt-link>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgTabNavigation',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      baseLinkClass:
        'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',

      defaltLinkClass:
        'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',

      activeLinkClass: 'border-purple-500 text-gray-900',
    }
  },
  methods: {
    isActive(item) {
      return this.$route.path.endsWith(item.link)
    },
  },
}
</script>
