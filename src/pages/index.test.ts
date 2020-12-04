import { shallowMount } from '@vue/test-utils'
import IndexPage from './index.vue'

function build () {
  const wrapper = shallowMount(IndexPage)
  const vm = wrapper.vm

  return {
    wrapper,
    vm
  }
}

describe('Index page', () => {
  it('should render', () => {
    const { wrapper } = build()
    expect(wrapper).toBeTruthy()
  })

  describe('fetch', () => {
    it('should call fetchMaterials', async () => {
      const { vm }: { vm: any } = build()
      const { fetch } = vm.$options

      if (!fetch) {
        return
      }

      vm.fetchMaterials = jest.fn()
      await fetch.call(vm)

      expect(vm.fetchMaterials).toBeCalled()
    })
  })

  describe('fetchMaterials', () => {
    it('should assign new materials', async () => {
      const { vm }: { vm: any } = build()

      const data = [{ id: 0 }, { id: 1 }, { id: 2 }]

      vm.$api.materials.getMaterialsMainPage = () => {
        return {
          data
        }
      }

      await vm.fetchMaterials()
      expect(vm.materials).toEqual(data)
    })

    it('should not assign an empty array', async () => {
      const { vm }: { vm: any } = build()

      const defaultValue = [{ id: 0 }, { id: 1 }, { id: 2 }]

      vm.materials = defaultValue

      vm.$api.materials.getMaterialsMainPage = () => {
        return {}
      }

      await vm.fetchMaterials()
      expect(vm.materials).toEqual(defaultValue)
    })
  })
})
