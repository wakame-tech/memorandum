<template>
  <div class="box has-margin-1">
    <h4 class="is-size-4 has-text-weight-light">
      {{ work.title }}
    </h4>

    <div v-if="work.thumbnail" class="card-image">
      <figure class="image">
        <progressive-img
          :src="work.thumbnail.fields.file.url"
          :placeholder="work.thumbnail.fields.file.url + '?w=50&h=100'"
        />

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
import marked from '../api/custom-marked'

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
