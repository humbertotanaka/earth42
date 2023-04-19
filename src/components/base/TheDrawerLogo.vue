<template>
  <div class="column q-my-xl">
    <q-img
      :alt="$t('Earth 42 Logo')"
      src="@/assets/earth.png"
      class="logo col self-center"
      fit="contain"
      @click="redirect2Home"
    />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()

    const redirect2Home = () => {
      router.push({ to: '/' })
    }

    return {
      redirect2Home
    }
  }
}
</script>

<style scoped>
.logo {
  cursor: pointer;
  max-height: 200px;
  max-width: 70%;
}
</style>
