<template>
  <div>
    <div
      class="border-gray-200 border-b relative"
      :style="`background-color: ${bg}`"
    >
      <h2
        class="z-10 absolute text-right z-10 right-6 -bottom-10 text-white text-5xl sm:text-6xl uppercase font-bold opacity-50"
      >
        {{ subTitle }}
      </h2>

      <img
        class="h-32 w-full object-cover lg:h-48 blend-multiply"
        src="/bg-profile.png"
        alt="profile cover"
      />
    </div>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex">
          <img
            class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
            :src="image"
            :alt="name"
          />
        </div>
        <div
          class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
        >
          <div class="2xl:block mt-6 min-w-0 flex-1">
            <h1 class="text-2xl font-bold text-gray-900 truncate">
              {{ name }}
            </h1>
          </div>
          <tg-profile-header-actions></tg-profile-header-actions>
        </div>
      </div>
      <!--<div class="mt-6 min-w-0 flex-1">
        <div><tg-badge :bg="bg" :color="color">Nivel Blanco</tg-badge></div>
      </div>-->
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgProfileHeader',
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#000',
    },
    bg: {
      type: String,
      default: '#ededed',
    },
    level: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
  },
}
</script>
