<template>
  <div>
    <section class="section is-medium">
      <div class="container">
        <Content />
      </div>
    </section>

    <!-- Work List -->
    <div :key="work.title" v-for="work in works">
      <div class="section">
        <Work :work="work" />
      </div>
    </div>
  </div>
</template>

<script>
import Work from '../components/Work'
import { createClient, fetchContents } from '../api/contentful'

export default {
  name: 'Works',
  components: { Work },
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
}
</script>
