import { config, RouterLinkStub } from '@vue/test-utils'

import VueRouter, { Route } from 'vue-router'
import Vuex, { Store } from 'vuex'
import Vue from 'vue'

import { plugin as $api } from '@/plugins/api'
import { plugin as $dayjs } from '@/plugins/dayjs'
import { plugin as $pluralize } from '@/plugins/pluralize'

import { getModules, getStoreModules, Modules } from '@/plugins/modules'

Vue.use(Vuex)

const store = new Store({
  modules: getModules() as any
}) as any

// Cookies mock.
const $cookies = {
  get: jest.fn,
  getAll: jest.fn,
  remove: jest.fn,
  removeAll: jest.fn,
  set: jest.fn,
  setAll: jest.fn
}

// Device mock.
const $device = {
  isDesktop: true,
  isIos: false,
  isAndroid: false,
  isMobile: false,
  isMobileOrTablet: false,
  isDesktopOrTablet: false,
  isTablet: false,
  isWindows: false,
  isMacOS: false
}

store.$cookies = $cookies
store.$device = $device

// Modules mock.
const $modules: Modules = getStoreModules(store)

// Route mock.
const $route: Route = {
  fullPath: '/',
  hash: '',
  matched: [],
  params: {},
  path: '/',
  query: {}
}

// Router mock.
const $router = new VueRouter({})

config.mocks = {
  $api,
  $cookies,
  $dayjs,
  $device,
  $modules,
  $pluralize,
  $route,
  $router
}

config.stubs = {
  ClientOnly: Vue.extend({
    render: h => h('')
  }),

  Nuxt: Vue.extend({
    render: h => h('div')
  }),

  NuxtLink: RouterLinkStub,
  NuxtChild: Vue.extend({
    render: h => h('div')
  }),

  SvgIcon: Vue.extend({
    render: h => h('svg')
  })
}
