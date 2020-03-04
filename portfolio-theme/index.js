
module.exports = (opts, ctx) => {
  // themeConfig
  console.log(opts)

  const options = {
    name: 'portfolio-theme',
    plugins: [],
    enhanceAppFiles: ['./enhanceApp.js'],
  }

  return options
}