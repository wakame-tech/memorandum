<template>
  <footer class="footer has-background-primary">
    <div class="content has-text-centered">
      <p class="has-text-white">
        {{ about.title }} by {{ about.nickname }}, 2020.
      </p>

      <p class="has-text-white">
        Powered by <a href="https://vuepress.vuejs.org/"><u>VuePress</u></a>
      </p>

      <p class="has-text-white">
        <template v-for="(icon, sns) in snsIcons">
          <a :key="sns" :href="about.sns[sns]">
            <i class="p-1" :class="icon"/>
          </a>
        </template>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'TheFooter',
  computed: {
    about() {
      return this.$themeConfig.about
    }
  },
  data() {
    return {
      snsIcons: {
        'twitter': 'fab fa-twitter',
        'github': 'fab fa-github',
      }
    }
  },
}
</script>