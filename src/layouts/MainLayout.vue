<template>
  <q-layout class="main" view="hHh LpR fFf">
    <TheDrawer />
    <TheHeader />
    <TheRightDrawer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from 'quasar'
import { defineComponent } from 'vue'

import TheDrawer from '@/components/base/TheDrawer.vue'
import TheHeader from '@/components/base/TheHeader.vue'
import TheRightDrawer from '@/components/base/TheRightDrawer.vue'

import { useStore } from '@/stores/system'

export default defineComponent({
  name: 'MainLayout',

  components: {
    TheHeader,
    TheDrawer,
    TheRightDrawer
  },

  setup () {
    const $q = useQuasar()
    const store = useStore()

    $q.dark.set(store.darkTheme)
  }
})
</script>

<style scoped>
</style>
