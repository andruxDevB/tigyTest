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
                v-for="(member, index) in members"
                :key="`group-${group.id}-member-${index}`"
                v-tooltip.top="member.user.full_name"
                class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                :src="member.user.image"
                :alt="member.user.full_name"
              />
            </div>
            <v-popover trigger="hover">
              <span
                v-if="extraMembers.length > 0"
                class="flex-shrink-0 text-xs leading-5 font-medium"
                >+{{ extraMembers.length }}</span
              >
              <template slot="popover">
                <ul class="space-y-3">
                  <li
                    v-for="(member, index) in extraMembers"
                    :key="`group-${group.id}-extra-member-${index}`"
                    class="flex justify-start"
                  >
                    <div class="flex items-center space-x-3">
                      <div class="flex-shrink-0">
                        <img
                          class="h-5 w-5 rounded-full ring-2 ring-white"
                          :src="member.user.image"
                          :alt="member.user.full_name"
                        />
                      </div>
                      <div class="text-sm font-medium text-white">
                        {{ member.user.full_name }}
                      </div>
                    </div>
                  </li>
                </ul>
              </template>
            </v-popover>
          </div>
        </dd>
      </dl>
    </div>
  </li>
</template>
<script>
import take from 'lodash/take'
import slice from 'lodash/slice'

export default {
  name: 'TgFriendsGroupsItem',
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
  computed: {
    members() {
      return take(this.group.group_info, 5)
    },
    extraMembers() {
      return slice(this.group.group_info, this.members.length)
    },
  },
}
</script>
