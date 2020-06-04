import _ from 'lodash'

export class Gacha {
  constructor(contents, distri) {
    this.contents = contents
    this.distri = distri
  }

  localizeRare(r) {
    const map = _.keyBy(this.distri, d => d['rare'])
    return map[r]['name'] || '--'
  }

  colorizeRare(r) {
    return ({
      2: 'tag is-primary',
      3: 'tag is-info',
    })[r] || 'tag is-light'
  }

  summary() {
    return this.distri.map(d => `${d['name']}: ${d['percent']}%`).join('\n')
  }

  roll() {
    const r = Math.floor(Math.random() * 100)
    const rare = (() => {
      let tmp = 0
      for (let d of this.distri) {
        if (tmp < r && r <= tmp + d['percent']) {
          return d['rare']
        }
        tmp += d['percent']
      }
      throw 'unreach'
    })()
    console.log(`rare: ${rare}`)
    const targets = _.groupBy(this.contents, c => c['rare'])
    
    return _.sample(targets[rare])
  }
}