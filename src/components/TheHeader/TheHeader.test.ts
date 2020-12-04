import { shallowMount } from '@vue/test-utils'

import Viewport from '@/store/viewport'
import TheHeader from '.'

const wrapper = shallowMount(TheHeader)
const vm = wrapper.vm as any

const viewport = vm.$modules.viewport as Viewport

describe('TheHeader', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })

  describe('get currentLogo', () => {
    it('should return a correct icon', () => {
      viewport.setBreakpoint('mobile')
      expect(vm.currentLogo).toBe('logo-small')

      viewport.setBreakpoint('desktop')
      expect(vm.currentLogo).toBe('logo')
    })
  })

  describe('get currentSearch', () => {
    it('should return a correct icon', () => {
      viewport.setBreakpoint('mobile')
      expect(vm.currentSearch).toBe('search-thin')

      viewport.setBreakpoint('desktop')
      expect(vm.currentSearch).toBe('search')
    })
  })

  describe('onLogoClick', () => {
    it('should scroll to top', () => {
      window.scrollTo = jest.fn()

      vm.$route.name = 'index'
      vm.onLogoClick()

      expect(window.scrollTo).toHaveBeenCalled()
    })

    it('should not scroll', () => {
      window.scrollTo = jest.fn()

      vm.$route.name = 'foo'
      vm.onLogoClick()

      expect(window.scrollTo).not.toHaveBeenCalled()
    })
  })
})
