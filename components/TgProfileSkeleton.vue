<template>
  <div>
    <div class="border-gray-200 border-b relative bg-white">
      <img
        class="h-32 w-full object-cover lg:h-48 blend-multiply"
        src="/bg-profile.png"
        alt="profile cover"
      />
    </div>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex animate-pulse">
          <div class="rounded-full bg-gray-200 h-32 w-32"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgProfileSkeleton',
}
</script>
