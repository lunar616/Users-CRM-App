module.exports = {
  publicPath: process.env.NODE_ENV  === 'production'
    ? '/Users-CRM-App/'
    : '/',
  assetsDir: 'assets',
  productionSourceMap: false,
}