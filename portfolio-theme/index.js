const webpack = require('webpack')

module.exports = (opts, ctx) => {
  const options = {
    name: 'portfolio-theme',
    plugins: [
      ['@vuepress/blog', {
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/',
            pagination: {
              lengthPerPage: opts.perPage || 50,
            },
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