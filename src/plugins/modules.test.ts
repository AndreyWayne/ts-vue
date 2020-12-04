import { Context } from '@nuxt/types'

import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import pluginModules from './modules'

Vue.use(Vuex)

describe('Modules', () => {
  it('should export a function by default', () => {
    expect(typeof pluginModules).toBe('function')
  })

  it('should execute inject function', () => {
    const inject = jest.fn()

    const context = {
      store: new Store({})
    } as Context

    pluginModules(context, inject)
    expect(inject).toHaveBeenCalled()
  })

  it('should not execute inject if not a function', () => {
    const inject = {} as Function

    const context = {
      store: new Store({})
    } as Context

    pluginModules(context, inject)
  })

  it('should not execute inject function if no store', () => {
    const inject = jest.fn()

    pluginModules({} as Context, inject)
    expect(inject).not.toHaveBeenCalled()
  })
})
