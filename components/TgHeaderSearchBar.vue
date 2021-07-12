<template>
  <form class="w-full flex md:ml-0" action="#" method="GET">
    <label for="search_field" class="sr-only">Buscar</label>
    <div class="relative w-full text-gray-400 focus-within:text-gray-600">
      <div
        class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
      >
        <!-- Heroicon name: search -->
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <vue-autosuggest
        ref="search_field"
        v-model="query"
        class="w-auto h-full"
        :suggestions="suggestions"
        :input-props="inputProps"
        :section-configs="sectionConfigs"
        :render-suggestion="renderSuggestion"
        :should-render-suggestions="shouldRenderSuggestions"
        :get-suggestion-value="getSuggestionValue"
        @input="search"
      >
        <template slot="after-suggestions">
          <span
            v-if="query && suggestions.length === 0"
            class="text-gray-500 text-sm p-4 block text-center"
          >
            No se encontraron resultados para la busqueda:
            <strong class="font-bold text-black">{{ query }}</strong
            >, intenta con otra cosa
          </span></template
        >
      </vue-autosuggest>
    </div>
  </form>
</template>
<script>
import _ from 'lodash'

export default {
  name: 'TgHeaderSearchBar',
  data() {
    return {
      loading: false,
      query: '',
      suggestions: [],
      timeout: null,
      debounceMilliseconds: 250,
      inputProps: {
        id: 'search_field',
        placeholder: 'Busca en tu red',
        class:
          'block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm',
        name: 'hello',
      },
      sectionConfigs: {
        info_ayudas: {
          limit: 6,
          label: this.$t(`search.info_ayudas`),
          onSelected: (selected) => {
            this.$router.push(`/users/${selected.item.user_id}`)
          },
        },
        info_cuentas: {
          limit: 6,
          label: this.$t(`search.info_cuentas`),
          onSelected: (selected) => {
            this.$router.push(`/users/${selected.item.user_id}`)
          },
        },
        info_eventos: {
          limit: 6,
          label: this.$t(`search.info_eventos`),
          onSelected: (selected) => {
            this.$router.push(`/post/${selected.item.evento_id}`)
          },
        },
        info_users: {
          limit: 6,
          label: this.$t(`search.info_users`),
          onSelected: (selected) => {
            this.$router.push(`/users/${selected.item.user_id}`)
          },
        },
        empty: {
          limit: 1,
          label: null,
        },
      },
    }
  },
  methods: {
    search() {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.suggestions = []
        const data = this.$store.dispatch('search/findByQuery', {
          query: this.query,
        })

        Promise.resolve(data).then((values) => {
          _.map(values, (value, key) => {
            if (value.length) {
              this.suggestions.push({
                name: key,
                data: _.slice(value, 0, 6),
              })
            }
          })
        })
      }, this.debounceMilliseconds)
    },
    renderSuggestion(suggestion) {
      return (
        <div class="truncate">
          <strong class="text-black">{suggestion.item.nombres}</strong>

          <span class="text-gray-400 text-xs">
            {' · '}
            {suggestion.item.detalle}
          </span>
        </div>
      )
    },
    getSuggestionValue(suggestion) {
      return this.query
    },
    shouldRenderSuggestions(size, loading) {
      // This is the default behavior
      return size >= 0 && !loading
    },
  },
}
</script>
<style lang="postcss">
#autosuggest > div {
  @apply h-full w-full lg:w-3/4;
}
.autosuggest {
  &__results {
    @apply bg-white shadow-lg rounded-lg border z-10 overflow-y-scroll max-h-96;

    &-before {
      @apply text-sm pt-4 text-gray-400 pb-2 px-4 mb-2 border-b border-gray-200;
    }

    &-item {
      @apply px-4 py-2 cursor-pointer hover:bg-gray-100;
    }
  }
}
</style>
