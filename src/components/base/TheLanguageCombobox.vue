<template>
  <q-select
    v-model="store.locale"
    :options="localeOptions"
    :use-chips="false"
    dense
    borderless
    emit-value
    map-options
    options-dense
    @update:model-value="onChange"
  >
    <template #prepend>
      <q-icon
        :color="color"
        name="fa-solid fa-language"
      />
    </template>
    <q-tooltip>
      {{ $t('Language') }}
    </q-tooltip>
  </q-select>
</template>

<script>
import { useQuasar } from 'quasar'
import { computed } from 'vue'

import i18n from '@/i18n'
import { useStore } from '@/stores/system'

export default {
  setup () {

    const $q = useQuasar()
    const store = useStore()

    const color = computed(() => $q.dark.isActive ? 'white' : 'dark')

    const onChange = (locale) => {

      // i18n
      if (i18n?.global?.locale) {
        i18n.global.locale = locale
      }

    }

    return {
      color,
      localeOptions: [
        { value: 'en-US', label: 'English' },
        { value: 'pt-BR', label: 'Português (BR)' }
      ],
      store,
      onChange
    }
  }
}
</script>

<style scoped>
</style>
