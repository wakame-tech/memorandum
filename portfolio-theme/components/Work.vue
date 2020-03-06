<template>
  <div class="card">
    <div v-if="work.thumbnail" class="card-image">
      <figure class="image">
        <img :src="work.thumbnail.fields.file.url" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="title">
        {{ work.title }}
        <Badge>{{ work.genre }}</Badge>
      </div>

      <div class="card-content">
        <b-taglist>
          <b-tag :key="tag" type="is-info" v-for="tag in work.tags" >
            <router-link tag="p" :to="'/tag/' + tag">
              {{ tag }}
            </router-link>
          </b-tag>
        </b-taglist>

        <div v-html="marked(work.description)" />

        <time class="has-text-grey">{{ new Date(work.date).toDateString() }}</time>
      </div>
    </div>
  </div>
</template>

<script>

import marked from 'marked'

export default {
  name: 'Works',
  props: ['work'],
  methods: {
    marked
  },
}
</script>

<style lang="stylus" scoped>
.card-image img
  max-height: 70vh
  width: auto
  background-size: contain
  background-position: center
</style>
