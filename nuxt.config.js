export default {
  router: {
    linkExactActiveClass: 'active'
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    '~/plugins/request',
    '~/plugins/dayjs'
  ]
}