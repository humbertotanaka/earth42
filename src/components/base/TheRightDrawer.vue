<template>
  <q-drawer
    v-model="showRightMenu"
    :width="150"
    class="column items-center q-pt-xl q-gutter-y-lg"
    mini
    side="right"
  >
    <TheLanguageCombobox class="q-mt-md q-px-sm" />
    <TheThemeButton />
  </q-drawer>
</template>

<script>
import { storeToRefs } from 'pinia'

import TheLanguageCombobox from '@/components/base/TheLanguageCombobox.vue'
import TheThemeButton from '@/components/base/TheThemeButton.vue'

import { useStore } from '@/stores/system'

export default {
  components: {
    TheLanguageCombobox,
    TheThemeButton
  },
  setup () {

    const store = storeToRefs(useStore())

    return {
      showRightMenu: store.showRightMenu
    }

  }
}
</script>

<style scoped>
</style>
