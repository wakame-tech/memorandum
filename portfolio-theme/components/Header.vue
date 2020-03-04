<template>
  <b-navbar>
    <h3>{{ $themeConfig.nav }}</h3>
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        <h3>{{ $page.frontmatter.title || $page.title || $site.title || '' }}</h3>
      </b-navbar-item>
    </template>
    <template slot="start">
      <template v-for="nav in $themeConfig.nav">
        <b-navbar-item :key="nav.text">
          <router-link :to="nav.link">{{ nav.text }}</router-link>
        </b-navbar-item>
      </template>
    </template>
  </b-navbar>
</template>

<style lang="stylus" scoped>

</style>