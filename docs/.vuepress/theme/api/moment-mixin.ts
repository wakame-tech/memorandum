import moment from 'moment-timezone'
moment.tz.setDefault('Asia/Tokyo')

export default {
  filters: {
    moment(date: Date) {
      return moment(date).format('YYYY/MM')
    },
    date(date: Date) {
      return moment(date).format('YYYY/MM/DD')
    },
    from(date: Date) {
      return moment(date).fromNow()
    },
  },
}