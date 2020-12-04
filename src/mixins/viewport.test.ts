import { shallowMount } from '@vue/test-utils'

import { getModule, Vue } from 'nuxt-property-decorator'
import Vuex, { Store } from 'vuex'

import Viewport from '@/store/viewport'
import { generateQueries, ViewportMixin } from './viewport'

Vue.use(Vuex)

let wrapper: any

beforeEach(() => {
  const store = new Store({
    modules: {
      viewport: Viewport
    }
  })

  const modules = {
    viewport: getModule(Viewport, store)
  }

  wrapper = shallowMount(ViewportMixin, {
    render: h => h()
  })

  wrapper.vm.$modules = modules
  wrapper.vm.$store = store
})

describe('Viewport', () => {
  describe('generateQueries', () => {
    it('should return a set of queries from breakpoints', () => {
      const breakpoints = {
        foo: 100,
        bar: 200,
        xyz: 300
      }

      const expectedQueries = new Set([
        { mediaQuery: '(min-width: 300px)', ref: 'xyz' },
        { mediaQuery: '(min-width: 200px) and (max-width: 299px)', ref: 'bar' },
        { mediaQuery: '(min-width: 1px) and (max-width: 199px)', ref: 'foo' }
      ])

      const queries = generateQueries(breakpoints as any)
      expect(queries).toEqual(expectedQueries)
    })
  })

  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
