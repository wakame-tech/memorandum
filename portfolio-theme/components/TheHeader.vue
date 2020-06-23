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


    <p class="pl-2 page-title is-size-3">Memorandom</p>

    <div class="tabs is-boxed is-centered">
      <ul>
        <template v-for="nav in $themeConfig.nav">
          <li :key="nav.text" :class="{ 'is-active': $route.path === nav.link }">
            <router-link tag="a" :to="nav.link">
              <span v-if="nav.icon" class="icon is-small">
                <i aria-hidden="true" :class="nav.icon"></i>
              </span>
              <span>{{ nav.text }}</span>
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TheHeader',
  data() {
    return {
      active: 0,
    }
  },
}
</script>

<style>
.page-title {
  font-family: 'Tangerine', cursive;
}
</style>