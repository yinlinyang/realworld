module.exports = {
  plugins: ['~/plugins/request.js', '~/plugins/dayjs.js'],
  server: {
    port: 3001, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.splice(0)
      routes.push(
        ...[
          {
            path: '/',
            component: resolve(__dirname, 'pages/layout'),
            children: [
              {
                path: '',
                name: 'home',
                component: resolve(__dirname, 'pages/home')
              },
              {
                path: '/login',
                name: 'login',
                component: resolve(__dirname, 'pages/login')
              },
              {
                path: '/register',
                name: 'register',
                component: resolve(__dirname, 'pages/login')
              },
              {
                path: '/profile/:username/:articleType?',
                name: 'profile',
                component: resolve(__dirname, 'pages/profile')
              },
              {
                path: '/settings',
                name: 'settings',
                component: resolve(__dirname, 'pages/settings')
              },
              {
                path: '/editor/:slug?',
                name: 'editor',
                component: resolve(__dirname, 'pages/editor')
              },
              {
                path: '/article/:slug',
                name: 'article',
                component: resolve(__dirname, 'pages/article')
              }
            ],
          },
        ]
      )
    },
  },
}
