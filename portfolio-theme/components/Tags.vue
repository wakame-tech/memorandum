<template>
  <b-taglist>
    <b-tag :key="tag" :class="tagColor(tag)" v-for="tag in tags" >
      <router-link tag="p" :to="'/tag/' + tag">
        {{ tag }}
      </router-link>
    </b-tag>
  </b-taglist>
</template>

<script lang="ts">
export default {
  name: 'Tags',
  props: {
    tags: Array
  },
  methods: {
    tagColor(tag) {
      const colorMap = {
        'Draft': 'tag is-warning',
        'WIP': 'tag is-warning',
        'web': 'tag is-primary',
        '言語処理系': 'tag is-primary',
        'アルゴリズム': 'tag is-danger',
        '機械学習': 'tag is-primary',
        'ポエム': 'tag is-info',
        'app': 'tag is-primary',
        '低レイヤー': 'tag is-dark',
      }
      return colorMap[tag] || 'tag is-light'
    }
  },
}
</script>