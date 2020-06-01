<template>
  <div class="box has-margin-1">
    <div class="title">
      {{ work.title }}
    </div>

    <div v-if="work.thumbnail" class="card-image">
      <figure class="image">
        <img :src="work.thumbnail.fields.file.url" alt="Placeholder image">
      </figure>
    </div>

    <div class="card-content">
      <b-taglist>
        <b-tag :key="tag" :class="tagColor(tag)" v-for="tag in work.tags" >
          {{ tag }}
          <!-- <router-link tag="p" :to="'/tag/' + tag">
            {{ tag }}
          </router-link> -->
        </b-tag>
      </b-taglist>

      <div v-html="marked(work.description)" />

      <time class="has-text-grey is-size-7">{{ formatDate(work.date) }}</time>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'
moment.tz.setDefault('Asia/Tokyo')
import marked from 'marked'

export default {
  name: 'Works',
  props: ['work'],
  methods: {
    marked,
    formatDate(date) {
      return moment(date).format('YYYY/MM')
    },
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

<style lang="stylus" scoped>
.card-image img
  max-height: 70vh
  width: auto
  background-size: contain
  background-position: center

.has-margin-1
  margin: 0.3rem
</style>
