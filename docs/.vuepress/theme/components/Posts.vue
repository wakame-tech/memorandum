<template>
  <div v-if="$pagination">
    <PostCard :post="post"  v-for="post in sortedPosts" />

    <!-- <section class="section">
      <div class="field">
        <b-checkbox v-model="showDraft">ドラフトも含める</b-checkbox>
      </div>
    </section> -->
  </div>
</template>

<script lang="ts">
import PostCard from '../components/PostCard.vue'

export default {
  components: { PostCard },
  data() {
    return {
      showDraft: false,
    }
  },
  computed: {
    sortedPosts() {
      return this.$pagination.pages
        // filter published
        .filter(page => this.showDraft ? true : (page.frontmatter.draft ? !page.frontmatter.draft : true))
        // pinned post
        .sort((a, b) => a.frontmatter.pinned ? -1 : (b.frontmatter.pinned ? 1 : 0))
    },
  },
}
</script>