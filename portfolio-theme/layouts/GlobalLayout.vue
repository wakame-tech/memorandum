
<template>
  <div id="global-layout">
    <TheHeader />
    <Layout />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  components: { TheHeader, TheFooter },
}
</script>
