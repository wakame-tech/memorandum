<template>
  <div>
    <!-- Hero -->
    <section :class="{ hero: true, 'is-dark': isDarkMode }">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ $page.frontmatter.title || $page.title }}
          </h1>
          <h2 v-if="isDarkMode" class="subtitle">
            (ダークモード未実装)
          </h2>
        </div>
      </div>
    </section>

    <div class="tabs is-centered">
      <ul>
        <template v-for="nav in $themeConfig.nav">
          <b-navbar-item :class="{ 'is-active': $route.path === nav.link }" tag="router-link" :key="nav.text" :to="nav.link">
            <span v-if="nav.icon" class="icon">
              <i :class="nav.icon"></i>
            </span>
            {{ nav.text }}
          </b-navbar-item>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  mounted() {
    console.log(this.isDarkMode)
  },
  computed: {
    isDarkMode() {
      return !!window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  }
}
</script>