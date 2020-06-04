import _ from 'lodash'

export class Gacha {
  constructor(contents) {
    this.contents = contents
    this.distri = {
      1: 100,
    }

    // contracts
    if (!contents.every(c => c['rare'] && this.distri[c['rare']])) {
      throw 'invalid'
    }
  }

  localizeRare(r) {
    return {
      1: 'R',
    }[r] || '--'
  }

  summary() {
    return Object.entries(this.distri).map(([k, v]) => `${this.localizeRare(k)}: ${v}%`).join('<br>')
  }

  roll() {
    const r = Math.floor(Math.random() * 100)
    const rare = (() => {
      let tmp = 0
      for (let [k, v] of Object.entries(this.distri)) {
        if (tmp < r && r <= tmp + v) {
          return k
        }
        tmp += v
      }
      throw 'unreach'
    })()
    console.log(`rare: ${rare}`)
    const targets = _.groupBy(this.contents, c => c['rare'])
    
    return _.sample(targets[rare])
  }
}