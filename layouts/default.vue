<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <tg-messenger-bubble />
    <tg-sidebar-menu-mobile />
    <tg-sidebar-menu-desktop />
    <tg-sidebar-report />
    <tg-sidebar-friends-group />
    <tg-get-help></tg-get-help>
    <sidebar-tg-notifications />

    <tg-price></tg-price>
    <div class="flex flex-col w-0 flex-1 overflow-hidden relative">
      <tg-header />
      <main
        class="flex-1 relative overflow-y-auto focus:outline-none"
        tabindex="0"
      >
        <Nuxt />
      </main>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
}
</script>
