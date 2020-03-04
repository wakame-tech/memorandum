<template>
  <section class="section is-medium">
    <div class="container">
      <Content />
    </div>

    <!-- Work List -->
    <div class="container" v-for="work in works">
      <div class="card" :key="work.title">
        <div v-if="work.thumbnail" class="card-image">
          <figure class="image">
            <img :src="work.thumbnail.fields.file.url" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="title">{{ work.title }}</div>

          <div class="card-content">
            <b-taglist>
              <b-tag :key="tag" type="is-info" v-for="tag in work.tags" >
                <router-link tag="p" :to="'/tag/' + tag">
                  {{ tag }}
                </router-link>
              </b-tag>
            </b-taglist>
            
            <div class="content">
              {{ work.description }}

              <time>{{ new Date(work.date).toDateString() }}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as Contentful from 'contentful'

export const createClient = (spaceId, token) => {
  return Contentful.createClient({
    space: spaceId,
    accessToken: token,
  })
}

export const fetchContents = async (client, query) => {
  const entries = await client.getEntries(query)
    .catch(console.error)

  if (!entries) {
    return []
  }
  
  return entries.items.map(entry => entry.fields)
}

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
  }
}
</script>

<style lang="stylus" scoped>
.card-image img
  background-size: contain
  background-position: center
</style>
