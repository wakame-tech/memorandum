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
          <span :class="colorizeRare(result['rare'])">{{ localizeRare(result['rare']) }}</span>
          <span>{{ result['tite'] }} / {{ result['artist'] || '不明' }} ({{ result['from'] }}~)</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
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
    this.title = res.fields.title
    this.gacha = new Gacha(res.fields.dataset, res.fields.distri)
  },
  methods: {
    roll(k: number) {
      this.results = [...Array(k)].map(() => this.gacha.roll())
    },
    localizeRare(r: number) {
      return this.gacha.localizeRare(r)
    },
    colorizeRare(r: number) {
      return this.gacha.colorizeRare(r)
    },
  }
}
</script>
