<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ $page.frontmatter.title || $page.title }}
          </h1>
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
    console.log(this.$route)
  }
}
</script>