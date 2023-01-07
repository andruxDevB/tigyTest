<template>
  <section
    class="min-w-0 flex-1 h-full flex flex-col overflow-hidden xl:order-last"
  >
    <div class="animate-pulse shrink-0 border-b">
      <!-- Toolbar-->
      <div class="pt-4 px-4s m:px-6 lg:px-8">
        <div class="flex space-x-4 mb-4">
          <div class="rounded-full bg-gray-200 h-11 w-11"></div>
          <div class="flex-1 space-y-2 py-1">
            <div class="h-4 bg-gray-300 rounded w-2/4"></div>
            <div class="h-3 bg-gray-300 rounded w-1/4"></div>
          </div>
        </div>
      </div>

      <!-- Message header -->
    </div>
    <div
      class="animate-pulse min-h-0 space-y-4 flex-1 overflow-y-auto p-4 px-4sm:px-6 lg:px-8"
    >
      <div class="flex-1 space-y-4">
        <div class="rounded bg-gray-200 h-8 w-2/4"></div>
        <div class="rounded bg-gray-200 h-8 w-1/4"></div>
        <div class="rounded bg-gray-200 h-8 w-3/4"></div>
        <div class="rounded bg-gray-200 h-8 w-1/6"></div>
      </div>

      <div class="flex space-y-4 justify-end">
        <div class="rounded bg-gray-200 h-8 w-1/4"></div>
      </div>
      <div class="flex space-y-4 justify-end">
        <div class="rounded bg-gray-200 h-8 w-3/4"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TgMessengerChatSkeleton',
}
</script>
