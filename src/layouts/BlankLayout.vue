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
.main-deprecated::before {
  background-image: url('@/assets/bg.png');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  content: " ";
  height: 100%;
  opacity: 0.1;
  position: absolute;
  width: 100%;
}
</style>
