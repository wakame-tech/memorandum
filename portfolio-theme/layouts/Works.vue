<template>
  <div>
    <!-- Work List -->
    <div :key="work.title" v-for="work in works">
      <Work :work="work" />
    </div>
  </div>
</template>

<script lang="ts">
import Work from '../components/Work.vue'

export default {
  components: { Work },
  data() {
    return {
      works: []
    }
  },
  async created() {
    this.works = await this.$contentful.fetchContents({
      'content_type': 'work',
      'order': '-fields.date'
    })
  },
}
</script>
