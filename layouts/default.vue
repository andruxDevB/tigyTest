<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <tg-sidebar-menu-mobile />
    <tg-sidebar-menu-desktop />
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <tg-header />
      <main
        class="flex-1 relative overflow-y-auto focus:outline-none"
        tabindex="0"
      >
        <div class="p-6">
          <div class="grid grid-cols-6 gap-4">
            <div class="md:col-start-2 md:col-span-4"><Nuxt /></div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
}
</script>
