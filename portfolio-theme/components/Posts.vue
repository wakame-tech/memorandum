<template>
  <div v-if="$pagination">
    <!-- Post List -->
    <template v-for="page in $pagination.pages">
      <div class="card" :key="page.title">
        <div class="card-content">
          <div class="title">
            <router-link
              class="page-link"
              :to="page.path"
            >
            {{ page.title }}
            </router-link>
          </div>

          <div class="card-content">
            <b-taglist>
              <b-tag :key="tag" type="is-info" v-for="tag in page.frontmatter.tags || []" >
                <router-link tag="p" :to="`/tag/${tag}`">
                  {{ tag }}
                </router-link>
              </b-tag>
            </b-taglist>
            
            <div class="content">
              {{ page.frontmatter.description }}
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <!-- Pagination(TODO) -->
    <section id="section">
      <!-- <b-pagination
        icon-pack="fas"
        :total="pages"
        :current="currentPage"
        :per-page="perPage"
        order="is-centered"
        size="is-medium"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
      >
        <b-pagination-button
          slot-scope="props"
          :page="props.page"
          :id="`page${props.page.number}`"
          tag="router-link"
          :to="`/page/${props.page.number}`"
        >
          {{ props.page.number }}
        </b-pagination-button>

        <b-pagination-button
          slot="previous"
          slot-scope="props"
          :page="props.page"
          tag="router-link"
          :to="`/page/${props.page.number}`"
        >
          prev
        </b-pagination-button>

        <b-pagination-button
          slot="next"
          slot-scope="props"
          :page="props.page"
          tag="router-link"
          :to="`/page/${props.page.number}`"
        >
          next
        </b-pagination-button>
      </b-pagination>
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link> -->
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    pages() {
      if (!this.$pagination) {
        return 0
      }
      console.log(this.$pagination._paginationPages.length)
      return this.$pagination._paginationPages.length
    },
    currentPage() {
      console.log(this.$pagination.paginationIndex)
      return this.$pagination.paginationIndex + 1
    },
    perPage() {
      if (!this.$pagination) {
        return 0
      }
      const range = this.$pagination._paginationPages[0].interval
      console.log(range[1] - range[0] + 1)
      // return range[1] - range[0] + 1
      return 50
    }
  }
}
</script>