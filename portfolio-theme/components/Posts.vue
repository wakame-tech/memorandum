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
    <!-- <nav class="pagination is-centered" role="navigation" aria-label="pagination">
      <router-link
        :to="`/pages/${$pagination.currentIndex - 1}`"
        class="pagination-previous"
        :disabled="!$pagination.hasPrev"
      >
        <i class="fas fa-chevron-left"/>
      </router-link>
      <router-link
        :to="`/pages/${$pagination.currentIndex + 1}`"
        class="pagination-next"
        :disabled="!$pagination.hasNext"
      >
        <i class="fas fa-chevron-right"/>
      </router-link>

      <div class="pagination-list">
        <div v-for="(page, i) in $pagination.pages">
          <router-link
            :to="`/pages/${i + 1}`"
            :class="{ 'pagination-link': true, 'is-current': $pagination.currentIndex == i + 1 }"
            aria-label="Page 1"
            aria-current="page"
          >
            {{ i + 1 }}
          </router-link>
        </div>
      </div>
    </nav> -->
    <!-- <section id="section">
      <b-pagination
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
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </section> -->
  </div>
</template>

<script>
export default {
}
</script>