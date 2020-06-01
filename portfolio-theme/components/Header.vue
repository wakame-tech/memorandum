<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ $page.frontmatter.title || $page.title }}
          </h1>
          <!-- <h2 v-if="isDarkMode" class="subtitle">
            (ダークモード未実装)
          </h2> -->
        </div>
      </div>
    </section>

    <div class="tabs is-centered">
      <ul>
        <template v-for="nav in $themeConfig.nav">
          <li :key="nav.text" :class="{ 'is-active': $route.path === nav.link }">
            <router-link :to="nav.link">
              <span v-if="nav.icon" class="icon">
                <i :class="nav.icon"></i>
              </span>
              {{ nav.text }}
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      active: 0,
    }
  },
  // computed: {
  //   isDarkMode() {
  //     // no ssr
  //     // return !!window.matchMedia('(prefers-color-scheme: dark)').matches
  //     return (typeof window !== 'undefined') && !!window.matchMedia('(prefers-color-scheme: dark)').matches
  //   }
  // }
}
</script>