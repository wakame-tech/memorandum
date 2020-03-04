<template>
  <div>
    <!-- Nav Bar -->
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" to="/">
          <h3>{{ $page.frontmatter.title || $page.title || $site.title || '' }}</h3>
        </b-navbar-item>
      </template>
      <template slot="end">
        <template v-for="nav in $themeConfig.nav">
          <b-navbar-item :key="nav.text">
            <router-link :to="nav.link">
              <span v-if="nav.icon" class="icon">
                <i :class="nav.icon"></i>
              </span>
              {{ nav.text }}
            </router-link>
          </b-navbar-item>
        </template>
      </template>
    </b-navbar>

    <!-- Hero -->
    <section class="hero is-link is-fullheight is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">{{ $site.title }}</h1>
          <h2 class="subtitle is-3">{{ $site.description }}</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>