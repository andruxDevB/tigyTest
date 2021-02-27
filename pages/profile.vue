<template>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div class="flex-1 relative z-0 flex overflow-hidden">
    <main
      class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last"
      tabindex="0"
    >
      <article>
        <!-- Profile header -->
        <tg-profile-header
          :name="`${profile.personales.nombres} ${profile.personales.apellidos}`"
          :image="user.foto"
          :bg="level.ranking.fondo"
          :color="level.ranking.color"
          :title="level.ranking.significado"
        />
        <!-- Tabs -->
        <div class="mt-6 sm:mt-2 2xl:mt-5">
          <div class="border-b border-gray-200">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                <!-- Current: "border-pink-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                <a
                  href="#"
                  class="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  aria-current="page"
                >
                  Profile
                </a>
                <a
                  href="#"
                  class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                >
                  Calendar
                </a>
                <a
                  href="#"
                  class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                >
                  Recognition
                </a>
              </nav>
            </div>
          </div>
        </div>

        <!-- Description list -->
        <div class="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">Phone</dt>
              <dd class="mt-1 text-sm text-gray-900">(555) 123-4567</dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">Email</dt>
              <dd class="mt-1 text-sm text-gray-900">
                ricardocooper@example.com
              </dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">Title</dt>
              <dd class="mt-1 text-sm text-gray-900">
                Senior Front-End Developer
              </dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">Team</dt>
              <dd class="mt-1 text-sm text-gray-900">Product Development</dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">Location</dt>
              <dd class="mt-1 text-sm text-gray-900">San Francisco</dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">Sits</dt>
              <dd class="mt-1 text-sm text-gray-900">Oasis, 4th floor</dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">Salary</dt>
              <dd class="mt-1 text-sm text-gray-900">$145,000</dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">Birthday</dt>
              <dd class="mt-1 text-sm text-gray-900">June 8, 1990</dd>
            </div>

            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">About</dt>
              <dd class="mt-1 max-w-prose text-sm text-gray-900">
                <p>
                  Tincidunt quam neque in cursus viverra orci, dapibus nec
                  tristique. Nullam ut sit dolor consectetur urna, dui cras nec
                  sed. Cursus risus congue arcu aenean posuere aliquam.
                </p>
                <p class="mt-5">
                  Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea
                  rhoncus ac mauris amet. Urna, sem pretium sit pretium urna,
                  senectus vitae. Scelerisque fermentum, cursus felis dui
                  suspendisse velit pharetra. Augue et duis cursus maecenas eget
                  quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent
                  dictum risus suspendisse.
                </p>
              </dd>
            </div>
          </dl>
        </div>

        <!-- Team member list -->
        <div class="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
          <h2 class="text-sm font-medium text-gray-500">Team members</h2>
          <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div
              class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
            >
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=zmxHNLLj3m&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 min-w-0">
                <a href="#" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900">
                    Leslie Alexander
                  </p>
                  <p class="text-sm text-gray-500 truncate">Co-Founder / CEO</p>
                </a>
              </div>
            </div>

            <div
              class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
            >
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=zmxHNLLj3m&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 min-w-0">
                <a href="#" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900">
                    Michael Foster
                  </p>
                  <p class="text-sm text-gray-500 truncate">Co-Founder / CTO</p>
                </a>
              </div>
            </div>

            <div
              class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
            >
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixqx=zmxHNLLj3m&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 min-w-0">
                <a href="#" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900">Dries Vincent</p>
                  <p class="text-sm text-gray-500 truncate">
                    Manager, Business Relations
                  </p>
                </a>
              </div>
            </div>

            <div
              class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
            >
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=zmxHNLLj3m&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 min-w-0">
                <a href="#" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900">
                    Lindsay Walton
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Front-end Developer
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      profile: {
        adicionales: {},
        personales: {},
        ubicacion: {},
      },
      level: {
        ranking: {},
      },
    }
  },
  async fetch() {
    this.profile = await this.$store.dispatch('profile/get')
    this.level = await this.$store.dispatch('profile/getLevel')
  },
  computed: {
    user() {
      return this.$auth.user
    },
  },
}
</script>
