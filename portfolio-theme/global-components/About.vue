<template>
  <div>
    <!-- Segment List -->
    <section class="section" :key="segment.title" v-for="segment in segments">
      <div class="card">
        <div class="card-content">
          <div v-if="segment.image" class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="segment.image.fields.file.url" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <div class="title is-4">{{ $themeConfig.about.nickname }}</div>
              <a class="subtitle is-6" :href="'https://twitter.com/' + $themeConfig.about.sns.twitter">@{{ $themeConfig.about.sns.twitter }}</a>
            </div>
          </div>

          <div class="content" v-html="marked(segment.content)" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import marked from 'marked'
import { createClient, fetchContents } from '../api/contentful'

export default {
  name: 'About',
  data() {
    return {
      segments: [],
    }
  },
  async created() {
    const client = createClient(this.$themeConfig.contentful.spaceId, this.$themeConfig.contentful.token)
    this.segments = await fetchContents(client, {
      'content_type': 'segment'
    })
  },
  methods: {
    marked
  },
}
</script>

<style lang="stylus" scoped>
.title
  margin 0
</style>