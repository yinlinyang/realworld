module.exports = {
  router: {
    extendRoutes(routes, resolve) {
      routes.splice(0)
      routes.push(
        ...[
          {
            path: '/',
            component: resolve(__dirname, 'src/pages/layout'),
            children: [
              {
                path: '',
                name: 'home',
                component: resolve(__dirname, 'src/pages/home')
              },
              {
                path: '/login',
                name: 'login',
                component: resolve(__dirname, 'src/pages/login')
              },
              {
                path: '/register',
                name: 'register',
                component: resolve(__dirname, 'src/pages/login')
              },
              {
                path: '/profile/:username',
                name: 'profile',
                component: resolve(__dirname, 'src/pages/profile')
              },
              {
                path: '/settings',
                name: 'settings',
                component: resolve(__dirname, 'src/pages/settings')
              },
              {
                path: '/editor',
                name: 'editor',
                component: resolve(__dirname, 'src/pages/editor')
              },
              {
                path: '/article/:slug',
                name: 'article',
                component: resolve(__dirname, 'src/pages/article')
              }
            ],
          },
        ]
      )
    },
  },
}
