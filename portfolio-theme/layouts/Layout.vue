<template>
  <BaseListLayout v-if="$pagination" />
  <Content v-else />
</template>

<script>
import BaseListLayout from '../global-components/BaseListLayout'

export default {
  components: { BaseListLayout }
}
</script>
