<template>
  <div>
    <div class="p-2">
      <div class="is-size-3 has-text-weight-light">{{ $page.frontmatter.title }}</div>

      <div class="has-text-grey is-size-7">{{ $page.frontmatter.date | date }} ({{ $page.frontmatter.date | from }})</div>

      <div class="pt-2">
        <tags :tags="$page.frontmatter.tags" />
      </div>
    </div>

    <div class="section">
      <Content />
    </div>
  </div>
</template>

<script lang="typescript">
import Tags from '../components/Tags.vue'

export default {
  components: { Tags },
}
</script>