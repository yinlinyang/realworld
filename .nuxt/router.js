import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _562a56d4 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _4e00394b = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _723f387d = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _8f0c4486 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _2ffc2ae2 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _6dc80a4e = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _c177bdec = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

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
    component: _562a56d4,
    children: [{
      path: "",
      component: _4e00394b,
      name: "home"
    }, {
      path: "/login",
      component: _723f387d,
      name: "login"
    }, {
      path: "/register",
      component: _723f387d,
      name: "register"
    }, {
      path: "/profile/:username/:articleType?",
      component: _8f0c4486,
      name: "profile"
    }, {
      path: "/settings",
      component: _2ffc2ae2,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _6dc80a4e,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _c177bdec,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
