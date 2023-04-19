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
import { defineComponent } from 'vue'

import TheDrawer from '@/components/base/TheDrawer.vue'
import TheHeader from '@/components/base/TheHeader.vue'
import TheRightDrawer from '@/components/base/TheRightDrawer.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    TheHeader,
    TheDrawer,
    TheRightDrawer
  }
})
</script>

<style scoped>
.main::before {
  background-attachment: fixed;
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
