<template>
  <div v-if="$pagination">
    <PostCard :post="post"  v-for="post in sortedPosts" />
  </div>
</template>

<script lang="ts">
import PostCard from './PostCard.vue'

export default {
  components: { PostCard },
  computed: {
    sortedPosts() {
      return this.$pagination.pages
        // filter published
        .filter(page => page.frontmatter.draft ? !page.frontmatter.draft : true)
        // pinned post
        .sort((a, b) => a.frontmatter.pinned ? -1 : (b.frontmatter.pinned ? 1 : 0))
    },
  },
}
</script>