<template>
  <router-link class="page-link" :to="post.path">
    <div :class="{ card: true, 'has-background-light': post.frontmatter.pinned }" :key="post.title">
      <div class="card-content">
        <h5 class="is-5"> {{ post | emoji }} </h5>

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