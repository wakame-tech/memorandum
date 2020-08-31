<template>
  <div>
    <div class="p-2">
      <h4 class="is-size-4 has-text-weight-light">{{ $page.frontmatter.title }}</h4>

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

export default {
}
</script>