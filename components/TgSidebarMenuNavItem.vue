<template>
  <nuxt-link
    :to="item.link"
    :class="[baseLinkClass, isActive ? activeLinkClass : defaltLinkClass]"
  >
    <component
      :is="item.icon"
      :class="[baseIconClass, isActive ? activeIconClass : defaultIconClass]"
    ></component>
    {{ item.label }}
  </nuxt-link>
</template>
<script>
import HomeIcon from '@nuxt-hero-icons/outline/src/components/HomeIcon'
import UserCircle from '@nuxt-hero-icons/outline/src/components/UserCircleIcon'
import UserGroup from '@nuxt-hero-icons/outline/src/components/UserGroupIcon'
import Support from '@nuxt-hero-icons/outline/src/components/SupportIcon'
import Chat from '@nuxt-hero-icons/outline/src/components/ChatIcon'

export default {
  name: 'TgSidebarMenuNav',
  components: {
    HomeIcon,
    UserCircle,
    UserGroup,
    Support,
    Chat,
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      baseLinkClass:
        'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
      baseIconClass: 'mr-3 h-6 w-6',

      defaltLinkClass: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
      activeLinkClass: 'bg-gray-100 text-gray-900',

      defaultIconClass: 'text-gray-400 group-hover:text-gray-500',
      activeIconClass: 'text-gray-500',
    }
  },
  computed: {
    isActive() {
      return this.$route.path.endsWith(this.item.link)
    },
  },
}
</script>
