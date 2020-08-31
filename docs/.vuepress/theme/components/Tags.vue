<template>
  <b-taglist>
    <b-tag :key="tag" class="hover" :class="tagColor(tag)" v-for="tag in tags">
      <span @click="$emit('click', `${tagValue(tag)}`)">
        {{ tagValue(tag) }}
      </span>
    </b-tag>
  </b-taglist>
</template>

<script lang="ts">
const colorMap = require(__dirname +  '/../tagMap.json')

export default {
  name: 'Tags',
  props: {
    tags: Array
  },
  methods: {
    tagValue(tag) {
      if (tag.startsWith('#')) {
        const [_, value] = tag.split(' ')
        return value
      }
      return tag
    },
    tagColor(tag) {
      if (tag.startsWith('#')) {
        const [color, _] = tag.split(' ')
        return `tag is-${color.substr(1)}`
      }
      for (const [color, tags] of Object.entries(colorMap as Record<string, string[]>)) {
        if (tags.includes(tag)) {
          return color
        }
      }
      return 'tag is-light'
    }
  },
}
</script>

<style scoped>
.hover {
  cursor: pointer;
}
</style>