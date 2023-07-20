<template>
  <q-layout class="main" view="hHh lpR fFf">
    <TheHeader :show-drawer-button="false" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

import TheHeader from '@/components/base/TheHeader.vue'

export default defineComponent({
  name: 'BlankLayout',

  components: {
    TheHeader
  }
})
</script>

<style scoped>
</style>
