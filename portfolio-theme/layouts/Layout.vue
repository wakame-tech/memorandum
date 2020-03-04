<template>
  <component :is="layout" :key="$page.path" />
</template>

<script>
import Posts from '../components/Posts'

export default {
  components: { Posts },
  computed: {
    layout() {
      if (this.$pagination) {
        return 'Posts'
      }
      const layout = this.$page.frontmatter.layout
      if (layout) {
        return layout
      }
      if (!this.$page.path) {
        return 'Not Found'
      }
      return 'Content'
    }
  }
}
</script>
