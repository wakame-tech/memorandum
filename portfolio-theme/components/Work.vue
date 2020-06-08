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
      <tags :tags="work.tags" />

      <div v-html="marked(work.description)" />

      <time class="has-text-grey is-size-7">{{ work.date | moment }}</time>
    </div>
  </div>
</template>

<script lang="ts">
import Tags from '../components/Tags.vue'
import marked from 'marked'

export default {
  components: { Tags },
  props: ['work'],
  methods: {
    marked,
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
