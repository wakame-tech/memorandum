<template>
  <div id class="box" v-if="gacha">
    <!-- <div class="title is-5">
      {{ gacha.title }}
    </div>

    <details class="pt-2">
      <summary>提供確率</summary>
      <p>{{ gacha.summary() }}</p>
    </details>

    <div class="buttons pt-2">
      <b-button class="is-info" @click="gacha.roll(1)">ガチャを引く</b-button>
      <b-button class="is-light" @click="gacha.roll(10)">10連</b-button>
    </div>

    <div class="p-1">
      <ul>
        <li ref="item" v-for="(result, i) in gacha.results" :key="i">
          <span :class="gacha.colorizeRare(result['rare'])">{{ gacha.localizeRare(result['rare']) }}</span>
          <span>{{ result['tite'] }} / {{ result['artist'] || '不明' }} ({{ result['from'] }}~)</span>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script lang="ts">
// import { Entry } from 'contentful'
// import { Gacha, IGacha } from '../util/gacha'

// interface Music {
//   artist: string
//   title: string
//   from: number
//   genre?: string
//   subgenre?: string
//   rare: number
// }

// export default {
//   props: {
//     id: {
//       type: String,
//       required: true,
//     },
//   },
//   data() {
//     return {
//       gacha: null as Gacha<Music>,
//       anime: null,
//     }
//   },
//   async created() {
//     // TODO
//     const res: Entry<IGacha<Music>> = await this.$contentful.fetchContent(this.id)
//     this.gacha = new Gacha<Music>(res.fields)
//   },
//   mounted() {

//   },
//   methods: {
//     animate() {
//       this.$nextTick(() => {
//         const tl = this.$anime
//           .timeline({
//             targets: this.$refs.item,
//           })
//         tl.add({
//           delay: (el, i) => i * 50,
//           translateX: 50,
//         })
//       })
//     }
//   },
// }
</script>
