<template>
  <div>
    <component
      :is="layout"
      :key="$page.path"
    />
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      const layout = this.$page.frontmatter.layout
      if (layout) {
        return layout
      }
      if (!this.$page.path) {
        return 'NotFound'
      }
      return 'Home'
    }
  }
}
</script>