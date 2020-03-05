<template>
  <div>
    <!-- Hero -->
    <section class="hero is-bold is-primary">
      <!-- <div class="hero-head"> -->
        <!-- Nav Bar -->
        <b-navbar wrapper-class="hero-head">
          <template slot="brand">
            <b-navbar-item tag="router-link" to="/">
              <h3>{{ $site.title }}</h3>
            </b-navbar-item>
          </template>
          <template slot="end">
            <template v-for="nav in $themeConfig.nav">
              <b-navbar-item tag="router-link" :key="nav.text" :to="nav.link">
                <span v-if="nav.icon" class="icon">
                  <i :class="nav.icon"></i>
                </span>
                {{ nav.text }}
              </b-navbar-item>
            </template>
          </template>
        </b-navbar>
      <!-- </div> -->
      
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">{{ $page.frontmatter.title || $page.title }}</h1>
          <!-- <h2 class="subtitle is-3">{{ $page.title }}</h2> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>