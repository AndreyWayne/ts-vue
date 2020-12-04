import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import { actions } from '.'

Vue.use(Vuex)

export const store = new Store({})

const $modules = {
  bar: {},

  foo: {
    nuxtServerInit: jest.fn()
  }
}

const context = {
  app: {
    $modules
  }
} as any

describe('Store', () => {
  it('should export actions as object', () => {
    expect(Array.isArray(actions)).toBeFalsy()
    expect(typeof actions).toBe('object')
  })

  describe('Actions', () => {
    describe('nuxtServerInit', () => {
      it('should call every nuxtServerInit action', async () => {
        await actions.nuxtServerInit(store, context)
        expect($modules.foo.nuxtServerInit).toBeCalled()
      })
    })
  })
})
