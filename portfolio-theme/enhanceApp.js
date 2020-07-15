import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@fortawesome/fontawesome'
import VueProgressiveImage from 'vue-progressive-image'

import momentMixin from './api/moment-mixin'
import emojiMixin from './api/emoji'
import contentfulMixin from './api/contentful'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.use(Buefy)
    Vue.use(VueProgressiveImage)
    Vue.mixin({
        mixins: [momentMixin, emojiMixin, contentfulMixin]
    })
}
