const webpack = require('webpack')
const { config } = require('dotenv')

config()

module.exports = {
  title: 'Memorundum',
  description: '✨ TIL + Tech memos + Portfolio + Blog',
  theme: require.resolve('./../../portfolio-theme'),
  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/',
        },
      ],
    }],
    ['vuepress-plugin-typescript', {
      tsLoaderOptions: {}
    }],
    ['vuepress-plugin-mathjax', {
      target: 'svg'
    }],
    // for OGP
    [ 'autometa', {
      image: false,
      canonical_base: 'https://wakame.tech',
    }]
  ],
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'CONTENTFUL_SPACE_ID': JSON.stringify(process.env.CONTENTFUL_SPACE_ID),
          'CONTENTFUL_DELIVERY_ACCESS_TOKEN': JSON.stringify(process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN)
        }
      })
    ]
  },
  serviceWorker: true,
  pagination: {
    perPage: 10,
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
  themeConfig: {
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Home',
        link: '/home/',
      }
    ]
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
  //   footer: {
  //     contact: [
  //       {
  //         type: 'github',
  //         link: 'https://github.com/wakame-tech',
  //       },
  //       {
  //         type: 'twitter',
  //         link: 'https://twitter.com/wakame_tech',
  //       }
  //     ],
  //     copyright: [
  //       {
  //         text: 'MIT Licensed | Copyright © 2020 wakame-tech',
  //         link: 'https://github.com/wakame-tech/memorandum',
  //       }
  //     ]
  //   },
  // }
}