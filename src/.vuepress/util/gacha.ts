import _ from 'lodash'

export interface IGacha<T> {
  title: string
  dataset: T[]
  distri: Disribution[]
}

export interface Disribution {
  name: string
  rare: number
  percent: number
}

export class Gacha<T extends { rare: number }> {
  title: string
  contents: T[]
  distri: Disribution[]
  results: T[] = []

  constructor(fields: IGacha<T>) {
    this.title = fields.title
    this.contents = fields.dataset
    this.distri = fields.distri
  }

  localizeRare(r: number) {
    const map = _.keyBy(this.distri, d => d.rare)
    return map[r].name || '--'
  }

  colorizeRare(r: number) {
    return ({
      2: 'tag is-primary',
      3: 'tag is-info',
    })[r] || 'tag is-light'
  }

  summary() {
    return this.distri.map(d => `${d.name}: ${d.percent}%`).join('\n')
  }

  private rollOnce(): T {
    // 0-99
    const r = Math.floor(Math.random() * 100)
    const rare = (() => {
      let tmp = 0
      for (let d of this.distri) {
        if (tmp <= r && r < tmp + d.percent) {
          return d.rare
        }
        tmp += d.percent
      }
      throw 'unreach'
    })()
    const targets = _.groupBy(this.contents, c => c.rare)
    
    return _.sample(targets[rare])
  }

  roll(k: number) {
    this.results = [...Array(k)].map(() => this.rollOnce())
  }
}