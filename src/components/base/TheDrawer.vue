<template>
  <q-drawer
    v-model="showMenu"
    :dark="true"
    side="left"
  >
    <TheDrawerLogo />
    <TheMenu />
  </q-drawer>
</template>

<script>
import { storeToRefs } from 'pinia'

import TheDrawerLogo from '@/components/base/TheDrawerLogo.vue'
import TheMenu from '@/components/base/TheMenu.vue'

import { useStore } from '@/stores/system'

export default {
  components: {
    TheDrawerLogo,
    TheMenu
  },
  setup () {

    const store = storeToRefs(useStore())

    return {
      showMenu: store.showMenu
    }

  }
}
</script>

<style scoped>
</style>
