import { shallowMount } from '@vue/test-utils'
import MaterialPage from './_slug.vue'

function build () {
  const wrapper = shallowMount(MaterialPage)
  const vm = wrapper.vm

  return {
    wrapper,
    vm
  }
}

describe('Material page', () => {
  it('should render', () => {
    const { wrapper } = build()
    expect(wrapper).toBeTruthy()
  })

  describe('asyncData', () => {
    it('should throw an error', async () => {
      const { vm } = build()

      const app = {
        $api: {
          materials: {
            getMaterialBySlug: () => {
              throw new Error('Failed')
            }
          }
        }
      }

      const error = jest.fn()

      const { asyncData } = vm.$options

      if (asyncData) {
        await asyncData({ app, error } as any)
      }

      expect(error).toBeCalled()
    })

    it('should assign material data', async () => {
      const { vm } = build()

      const data = {
        id: 0
      }

      const params = {
        slug: 'foo'
      }

      const app = {
        $api: {
          materials: {
            getMaterialBySlug () {
              return {
                data
              }
            }
          }
        }
      }

      const error = jest.fn()
      const { asyncData } = vm.$options

      if (asyncData) {
        const material = await asyncData({ app, error, params } as any)
        expect(material).toEqual({ material: data })
      }
    })
  })
})
