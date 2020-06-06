<template>
  <div>
    <!-- Hero -->
    <!-- <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ $page.frontmatter.title }}
          </h1>
        </div>
      </div>
    </section> -->

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

<script lang="ts">
export default {
  name: 'Header',
  data() {
    return {
      active: 0,
    }
  },
}
</script>