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
  props: {
    tags: {
      type: [Array, String],
      required: true,
      default: () => []
    }
  },
  mounted() {
    if (typeof this.tags === 'string') {
      this.tags = this.tags.split(',')
    }
  },
  methods: {
    tagColor(tag) {
      const colorMap = {
        'WIP': 'tag is-danger',
        'web': 'tag is-primary',
        'app': 'tag is-info',
        '低レイヤー': 'tag is-warning',
      }
      return colorMap[tag] || 'tag is-light'
    }
  },
}
</script>