<template>
  <li
    class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
  >
    <div class="flex-1 flex flex-col p-8">
      <h3 class="text-gray-900 text-2xl font-medium">
        {{ group.group_name }}
      </h3>
      <dl class="mt-1 flex-grow flex flex-col justify-between">
        <dt class="sr-only">Creado</dt>
        <dd class="text-gray-500 text-sm">
          Creado hace {{ $moment(group.created_at).toNow(true) }}
        </dd>
        <dt class="sr-only">Miembros</dt>
        <dd class="mt-3">
          <div class="flex items-center space-x-2 justify-center">
            <div class="flex flex-shrink-0 -space-x-1">
              <img
                class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;ixqx=zmxHNLLj3m&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt="Dries Vincent"
              />

              <img
                class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixqx=zmxHNLLj3m&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt="Lindsay Walton"
              />

              <img
                class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixqx=zmxHNLLj3m&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt="Courtney Henry"
              />

              <img
                class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixqx=zmxHNLLj3m&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt="Tom Cook"
              />
            </div>

            <span class="flex-shrink-0 text-xs leading-5 font-medium">+8</span>
          </div>
        </dd>
      </dl>
    </div>
  </li>
</template>
<script>
export default {
  name: 'TgFriendsGroupsItem',
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
}
</script>
