import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6b577a2b = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _5d134020 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _458d0c48 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _20bc2a70 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _d4490238 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _5f88a06e = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _5327a3d6 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _6b577a2b,
    children: [{
      path: "",
      component: _5d134020,
      name: "home"
    }, {
      path: "/login",
      component: _458d0c48,
      name: "login"
    }, {
      path: "/register",
      component: _458d0c48,
      name: "register"
    }, {
      path: "/profile/:username/:articleType?",
      component: _20bc2a70,
      name: "profile"
    }, {
      path: "/settings",
      component: _d4490238,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _5f88a06e,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _5327a3d6,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
