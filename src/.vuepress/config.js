const Dotenv = require('dotenv-webpack')

module.exports = {
  title: 'Memorundum',
  theme: 'meteorlxy',
  // theme: '@vuepress/theme-blog',
  plugins: [
    // ['@vuepress/blog', {
    //   directories: [
    //     {
    //       id: 'title',
    //       dirname: '_posts',
    //       path: '/',
    //       itemPermalink: '/posts/:year/:month/:day/:slug',
    //       pagination: {
    //         lengthPerPage: 10
    //       }
    //     }
    //   ],
    // }],
    ['vuepress-plugin-mathjax', {
      target: 'svg'
    }]
  ],
  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  },
  head: [
    ['link', { href: '/css/style.css', rel: 'stylesheet'}]
  ],
  header: {
    // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
    background: {
      // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
      url: '/assets/img/bg.jpg',
      // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
      useGeo: true,
    },
    // show title in the header or not
    showTitle: true,
  },
  pagination: {
    perPage: 5,
  },
  defaultPages: {
    // Allow theme to add Home page (url: /)
    home: true,
    // Allow theme to add Posts page (url: /posts/)
    posts: true,
  },
  locales: {
    '/': {
      lang: 'ja-JP'
    }
  },
  themeConfig: {
    lang: require('./public/lang/ja-JP'),
    comments: false,
    personalInfo: {
      nickname: 'wakame-tech',
      description: 'Doing Nothing',
      email: '',
      location: 'Tokyo, Japan',
      organization: 'Something',
      avatar: 'https://images.ctfassets.net/ix7hhkbnjvh0/26vx1m8aWl3m7q9Tyfblbj/35e526d9fe6bc4f20b4fd16bd2794831/mel.jpg',
      sns: {
        github: {
          account: 'wakame-tech',
          link: 'https://github.com/wakame-tech',
        },
        twitter: {
          account: 'wakame_tech',
          link: 'https://twitter.com/wakame_tech',
        },
        docker: {
          account: 'wakametech',
          link: 'https://hub.docker.com/u/wakametech',
        },
      },
    },
    nav: [
      {
        text: 'ホーム',
        link: '/home/',
        exact: true
      },
      {
        text: 'ブログ',
        link: '/',
        exact: true
      },
      {
        text: 'Works',
        link: '/portfolio/',
        exact: true
      },
      {
        text: 'Til',
        link: '/til/'
      }
    ]
  }
}