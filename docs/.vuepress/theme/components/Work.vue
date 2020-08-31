<template>
  <div class="box has-margin-1">
    <h4 class="is-size-4 has-text-weight-light">
      {{ work.title }}
    </h4>

    <div v-if="work.thumbnail">
      <figure class="image">
        <img :src="work.thumbnail.fields.file.url" />
        <!-- <progressive-image
          :src="work.thumbnail.fields.file.url"
          :placeholder="work.thumbnail.fields.file.url + '?w=50&h=100'"
        /> -->
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
import marked from '../api/custom-marked'

export default {
  components: { },
  props: ['work'],
  methods: {
    marked,
  },
}
</script>

<style>
.image img {
  /* width: auto !important; */
  max-height: 40vh !important;
  /* object-fit: scale-down; */
  background-position: center;
  object-fit: contain;
}
</style>
