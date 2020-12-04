import { shallowMount } from '@vue/test-utils'
import Hamburger from '.'

describe('Hamburger', () => {
  it('should render', () => {
    const wrapper = shallowMount(Hamburger)
    expect(wrapper).toBeTruthy()
  })

  describe('onClick', () => {
    it('should call toggle method', () => {
      const wrapper = shallowMount(Hamburger)
      const vm = wrapper.vm as any

      vm.toggle = jest.fn()
      vm.onClick()

      expect(vm.toggle).toBeCalled()
    })
  })

  describe('toggle', () => {
    it('should emit "onToggle" with !isToggled', async () => {
      const isToggled = false

      const wrapper = shallowMount(Hamburger, {
        propsData: {
          isToggled
        }
      })

      const vm = wrapper.vm as any

      vm.toggle()
      await vm.$nextTick()

      expect(wrapper.emitted().onToggle).toEqual([[!isToggled]])
    })
  })
})
