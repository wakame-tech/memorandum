const { config } = require('dotenv')

config()

module.exports = {
  title: 'Memorundum',
  description: '✨ TIL + Tech memos + Portfolio + Blog',
  theme: require.resolve('./../../portfolio-theme'),
  serviceWorker: true,
  pagination: {
    perPage: 50,
  },
  defaultPages: {
    home: true,
    posts: true,
  },
  locales: {
    '/': {
      lang: 'ja-JP'
    }
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css' }]
  ],
  themeConfig: {
    about: {
      nickname: 'wakame-tech',
      bio: 'Doing Nothing',
      avatar: 'https://images.ctfassets.net/ix7hhkbnjvh0/26vx1m8aWl3m7q9Tyfblbj/35e526d9fe6bc4f20b4fd16bd2794831/mel.jpg',
      sns: {
        github: {
          account: 'wakame-tech',
          link: 'https://github.com/wakame-tech',
        },
        twitter: 'wakame_tech'
      },
    },
    contentful: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      token: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
    },
    nav: [
      {
        text: 'Home',
        icon: 'fas fa-bars',
        link: '/home/',
      },
      {
        text: 'Blog',
        icon: 'fas fa-bars',
        link: '/',
      },
      {
        text: 'Works',
        icon: 'fas fa-bars',
        link: '/works/',
      },
      {
        text: 'Til',
        icon: 'fas fa-bars',
        link: '/til/',
      }
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/wakame-tech',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/wakame_tech',
        }
      ],
      copyright: 'Copyright © 2020 wakame-tech'
    },
  }
  // themeConfig: {
  //   comments: false,
  //   lang: require.resolve('./public/lang/ja-JP'),
  //   nav: [
  //     {
  //       text: 'About',
  //       link: '/home/',
  //       icon: 'el-icon-house',
  //     },
  //     {
  //       text: 'Blog',
  //       link: '/',
  //       icon: 'el-icon-house',
  //     },
  //     {
  //       text: 'Works',
  //       link: '/works/',
  //       icon: 'el-icon-folder',
  //     },
  //     {
  //       text: 'Til',
  //       link: '/til/',
  //       icon: 'el-icon-folder',
  //     }
  //   ],
  //   personalInfo: {
  //     nickname: 'wakame-tech',
  //     description: 'Doing Nothing',
  //     email: '',
  //     location: 'Tokyo, Japan',
  //     organization: 'Something',
  //     avatar: 'https://images.ctfassets.net/ix7hhkbnjvh0/26vx1m8aWl3m7q9Tyfblbj/35e526d9fe6bc4f20b4fd16bd2794831/mel.jpg',
  //     sns: {
  //       github: {
  //         account: 'wakame-tech',
  //         link: 'https://github.com/wakame-tech',
  //       },
  //       twitter: {
  //         account: 'wakame_tech',
  //         link: 'https://twitter.com/wakame_tech',
  //       },
  //     },
  //   },
  //   header: {
  //     background: {
  //       url: '/img/bg.jpg',
  //       useGeo: false,
  //     }
  //   },
  // }
}