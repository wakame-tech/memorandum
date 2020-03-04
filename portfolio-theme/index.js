const webpack = require('webpack')

module.exports = (opts, ctx) => {
  // themeConfig
  console.log(opts)

  const options = {
    name: 'portfolio-theme',
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
    enhanceAppFiles: ['./enhanceApp.js'],
  }

  return options
}