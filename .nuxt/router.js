import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _218afa32 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _72d10fbb = () => interopDefault(import('..\\pages\\index\\index.vue' /* webpackChunkName: "pages/index/index" */))
const _2271f19f = () => interopDefault(import('..\\pages\\index\\article.vue' /* webpackChunkName: "pages/index/article" */))
const _eac70dba = () => interopDefault(import('..\\pages\\index\\article\\components\\article-comment.vue' /* webpackChunkName: "pages/index/article/components/article-comment" */))
const _30a91df1 = () => interopDefault(import('..\\pages\\index\\article\\components\\article-meta.vue' /* webpackChunkName: "pages/index/article/components/article-meta" */))
const _25b8fe8a = () => interopDefault(import('..\\pages\\index\\article\\_slug.vue' /* webpackChunkName: "pages/index/article/_slug" */))
const _3c78b2d2 = () => interopDefault(import('..\\pages\\index\\login.vue' /* webpackChunkName: "pages/index/login" */))
const _6f78d501 = () => interopDefault(import('..\\pages\\index\\mkarticle.vue' /* webpackChunkName: "pages/index/mkarticle" */))
const _0777c65c = () => interopDefault(import('..\\pages\\index\\profile.vue' /* webpackChunkName: "pages/index/profile" */))
const _179dbc53 = () => interopDefault(import('..\\pages\\index\\profile\\_username.vue' /* webpackChunkName: "pages/index/profile/_username" */))
const _2b38140e = () => interopDefault(import('..\\pages\\index\\setting.vue' /* webpackChunkName: "pages/index/setting" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _218afa32,
    children: [{
      path: "",
      component: _72d10fbb,
      name: "index"
    }, {
      path: "article",
      component: _2271f19f,
      name: "index-article",
      children: [{
        path: "components/article-comment",
        component: _eac70dba,
        name: "index-article-components-article-comment"
      }, {
        path: "components/article-meta",
        component: _30a91df1,
        name: "index-article-components-article-meta"
      }, {
        path: ":slug?",
        component: _25b8fe8a,
        name: "index-article-slug"
      }]
    }, {
      path: "login",
      component: _3c78b2d2,
      name: "index-login"
    }, {
      path: "mkarticle",
      component: _6f78d501,
      name: "index-mkarticle"
    }, {
      path: "profile",
      component: _0777c65c,
      name: "index-profile",
      children: [{
        path: ":username?",
        component: _179dbc53,
        name: "index-profile-username"
      }]
    }, {
      path: "setting",
      component: _2b38140e,
      name: "index-setting"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
