<template>
  <div class="box">
    <div class="title is-5">
      {{ title }}
    </div>

    <details class="pt-2" v-if="gacha">
      <summary>提供確率</summary>
      <p>{{ gacha.summary() }}</p>
    </details>

    <div class="buttons pt-2">
      <b-button class="is-info" @click="roll(1)">ガチャを引く</b-button>
      <b-button class="is-light" @click="roll(10)">10連</b-button>
    </div>

    <div class="p-2" v-if="results.length">
      <ul>
        <li v-for="(result, i) in results" :key="i">
          <span class="tag is-light">{{ localizeRare(result['rare']) }}</span>
          <span>{{ result['tite'] }} / {{ result['artist'] || '不明' }} ({{ result['from'] }}~)</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { createClient, fetchContent } from '../api/contentful'
import { Gacha } from '../api/gacha'

export default {
  name: 'Gacha',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      title: '',
      /**
       * artist: string
       * title: string
       * from: number
       * genre: string?
       * subgenre: string?
       * rare: number
       */
      gacha: null,
      results: [],
    }
  },
  async created() {
    const client = createClient(this.$themeConfig.contentful.spaceId, this.$themeConfig.contentful.token)
    const res = await fetchContent(client, this.id)
    console.log(res)
    this.title = res.fields.title
    this.gacha = new Gacha(res.fields.dataset)
  },
  methods: {
    roll(k) {
      this.results = [...Array(k)].map(() => this.gacha.roll())
    },
    localizeRare(r) {
      return this.gacha.localizeRare(r)
    },
  }
}
</script>

<style scoped>
.pt-2 {
  padding-top: 1rem;
}
</style>