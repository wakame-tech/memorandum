<template>
  <router-link class="page-link" :to="post.path">
    <div class="card" :key="post.title">
      <div class="card-content">
        <h4 class="is-size-4 has-text-weight-light"> {{ post | emoji }} </h4>

        <tags :tags="post.frontmatter.tags" />
        
        <div class="content">
          {{ post.frontmatter.description }}
        </div>

        <div>
          <span class="has-text-grey is-size-7">{{ post.frontmatter.date | from }}</span>
          <span v-if="post.frontmatter.pinned" class="has-text-grey is-size-7 is-pulled-right">
            <i class="fa fa-map-pin"></i>
            この投稿は固定されています
          </span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import Tags from '../components/Tags.vue'

export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  components: { Tags },
  methods: {
    encode(text) {
      return encodeURI(text)
    },
  },
}
</script>