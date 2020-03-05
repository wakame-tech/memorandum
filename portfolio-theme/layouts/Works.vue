<template>
  <div>
    <section class="section is-medium">
      <div class="container">
        <Content />
      </div>
    </section>

    <!-- Work List -->
    <section class="section" :key="work.title" v-for="work in works">
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
    </section>
  </div>
</template>

<script>

import marked from 'marked'
import { createClient, fetchContents } from '../api/contentful'

export default {
  name: 'Works',
  data() {
    return {
      works: []
    }
  },
  async created() {
    const client = createClient(this.$themeConfig.contentful.spaceId, this.$themeConfig.contentful.token)
    this.works = await fetchContents(client, {
      'content_type': 'work',
      'order': '-fields.date'
    })
  },
  methods: {
    marked
  },
}
</script>

<style lang="stylus" scoped>
.card-image img
  background-size: contain
  background-position: center
</style>
