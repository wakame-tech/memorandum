<template>
  <div>
    <div class="section">
      <h3>Tags</h3>
      <Tags :tags="tags" @click="onTagClick" />
    </div>

    <div v-if="selectedTag" class="section">
      <h3>Filtered by</h3>
      <Tags :tags="[selectedTag]"  />
    </div>

    <!-- Work List -->
    <div :key="work.title" v-for="work in filteredWorks">
      <WorkView :work="work" />
    </div>
  </div>
</template>

<script lang="ts">
import _ from 'lodash'
import WorkView from './../components/Work.vue'

// TODO
interface Work {
  date: string
  description: string
  genre: string
  tags: string[]
  thumbnail: any
  title: string
}

export default {
  components: { WorkView },
  data() {
    return {
      works: [],
      tags: [],
      selectedTag: '',
    }
  },
  computed: {
    filteredWorks() {
      return this.works.filter(work =>
        this.selectedTag !== '' ? work.tags.includes(this.selectedTag) : true
      )
    }
  },
  async created() {
    this.works = await this.$contentful.fetchContents({
      'content_type': 'work',
      'order': '-fields.date'
    })
    this.tags = _(this.works as Work[])
      .flatMap(work => work.tags)
      .uniq()
      .value()
  },
  methods: {
    onTagClick(tag: string) {
      this.selectedTag = (tag === this.selectedTag) ? '' : tag
    }
  }
}
</script>
