<template>
  <q-btn
    :aria-label="$t('Theme')"
    :class="textColor"
    dense
    flat
    icon="fa-solid fa-circle-half-stroke"
    round
    @click="toggleThemeMode"
  >
    <q-tooltip>
      {{ $t('Toggle theme mode') }}
    </q-tooltip>
  </q-btn>
</template>

<script>
import { useQuasar } from 'quasar'
import { computed } from 'vue'

import { useStore } from '@/stores/system'

export default {
  setup () {

    const $q = useQuasar()
    const store = useStore()

    const textColor = computed(() => $q.dark.isActive ? 'text-white' : 'text-dark')

    const toggleThemeMode = () => {
      store.darkTheme = !store.darkTheme
      $q.dark.set(store.darkTheme)
    }

    return {
      textColor,
      toggleThemeMode
    }

  }
}
</script>

<style scoped>
</style>
