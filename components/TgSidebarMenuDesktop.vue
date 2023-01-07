<template>
  <!-- Static sidebar for desktop -->
  <div class="hidden md:flex md:shrink-0 bg-white">
    <div class="flex flex-col w-64">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-menu overflow-y-auto"
      >
        <div class="flex items-center shrink-0 px-4">
          <tg-sidebar-menu-user />
        </div>
        <div class="mt-5 flex-grow flex flex-col">
          <tg-sidebar-menu-nav />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TgSidebarMenuNav from './TgSidebarMenuNav.vue'
import TgSidebarMenuUser from './TgSidebarMenuUser.vue'
export default {
  name: 'TgSidebarMenuDesktop',
  components: { TgSidebarMenuNav, TgSidebarMenuUser },
}
</script>
<style>
.bg-menu {
  background: url(~assets/img/bg-menu.svg) no-repeat top center;
  background-size: cover;
}
</style>
