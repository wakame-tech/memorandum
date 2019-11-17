<template>
  <div>
    <template v-for="(work, i) in works">
      <div>
        <h2> {{ work.title }} </h2>
        <span class="tag" v-for="tag in work.tags">{{ `#${tag}` }}</span>
        <div v-if="work.thumbnail">
          <div>
            <img :src="work.thumbnail.fields.file.url" />
          </div>
        </div>
        <Markdown>{{ work.description }}</Markdown>
        <p class="date"> {{ new Date(work.date).toDateString() }} </p>
      </div>
    </template>
  </div>
</template>

<script>
import * as Contentful from 'contentful'

const createClient = () => {
  return Contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
  })
}

const fetchContents = async (query) => {
  const client = createClient()
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
    this.works = await fetchContents({
      'content_type': 'work',
      'order': '-fields.date'
    })
  },
}
</script>

<style>
.tag {
  padding-left: 0.3em;
}

.date {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 200;
}
</style>