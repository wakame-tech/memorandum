<template>
  <div v-if="$pagination">
    <!-- Post List -->
    <template v-for="page in sortedPosts">
      <router-link class="page-link" :to="page.path">
        <div class="card" :key="page.title">
          <div class="card-content">
            <h5 class="is-5"> {{ makeTitle(page) }} </h5>
            <div class="card-content">
              <b-taglist>
                <b-tag v-if="page.frontmatter.pinned" :key="page.title" type="is-primary">pinned</b-tag>
                <b-tag :key="tag" type="is-light" v-for="tag in page.frontmatter.tags || []" >
                  <!-- <router-link tag="p" :to="'/tag/' + encode(tag)"> -->
                    {{ tag }}
                  <!-- </router-link> -->
                </b-tag>
              </b-taglist>
              
              <div class="content">
                {{ page.frontmatter.description }}
              </div>
            </div>
          </div>
        </div>
      </router-link>
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
  computed: {
    sortedPosts() {
      return this.$pagination.pages
        // filter published
        .filter(page => page.frontmatter.draft ? !page.frontmatter.draft : true)
        // pinned post
        .sort((a, b) => a.frontmatter.pinned ? -1 : (b.frontmatter.pinned ? 1 : 0))
    },
  },
  methods: {
    containEmoji(text) {
      const ranges = ['\ud83c[\udf00-\udfff]', '\ud83d[\udc00-\ude4f]', '\ud83d[\ude80-\udeff]', '\ud7c9[\ude00-\udeff]', '[\u2600-\u27BF]']
      const reg = new RegExp(ranges.join('|'), 'g')
      return text.match(reg)
    },
    emoji(tag) {
      const tagMap = {
        'ポエム': '🔥',
        'programming': '💻',
      }
      return tagMap[tag] || '📖'
    },
    makeTitle(page) {
      if (this.containEmoji(page.title)) {
        return page.title
      } else {
        return `${this.emoji(page.frontmatter.tags[0])} {page.title}`
      }
    },
    encode(text) {
      return encodeURI(text)
    },
  },
}
</script>