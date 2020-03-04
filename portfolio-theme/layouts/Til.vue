<template>
  <section class="section is-medium">
    <div class="container">
      <Content />
    </div>

    <!-- Til List -->
    <div class="container" v-for="til in tils">
      <div class="card" :key="til.title">
        <div v-if="til.image" class="card-image">
          <figure class="image">
            <img :src="til.image" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="title">{{ til.title }}</div>

          <div class="card-content">
            <div class="content">
              {{ til.descriptions.join('\n') }}

              <time>{{ new Date(til.updated * 1000).toDateString() }}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export const fetchContents = async () => {
  const contents = fetch('https://scrapbox.io/api/pages/wakame-memorundum', {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:8080'
    }
  })
    .then(res => res.json())
    .catch(console.error)

  /*
  projectName: string
  count: number
  pages
    id: string
    title: string
    image: string | null
    descriptions: Array<string>
    updated: number
  */
  return contents.pages
}

export default {
  name: 'Works',
  data() {
    return {
      tils: []
    }
  },
  mounted() {
    console.log('Hello')
  },
  async created() {
    this.tils = await fetchContents()
  }
}
</script>