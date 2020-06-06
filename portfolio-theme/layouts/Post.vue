<template>
  <div>
    <div class="title p-2">
      {{ $page.frontmatter.title }}

      <time class="has-text-grey is-size-5">{{ $page.frontmatter.date | date }}</time>
    </div>

    <div class="section">
      <Content />
    </div>
  </div>
</template>
