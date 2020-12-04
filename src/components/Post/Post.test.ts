import { shallowMount } from '@vue/test-utils'
import Post from '.'

let wrapper: any
let vm: any

beforeEach(() => {
  wrapper = shallowMount(Post, {
    propsData: {
      post: {}
    }
  })

  vm = wrapper.vm
})

describe('Post', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })

  describe('get currentComponent', () => {
    it('should be nuxt-link', () => {
      expect(vm.currentComponent).toBe('nuxt-link')
    })

    it('should be div', () => {
      wrapper.setProps({
        isLoading: true
      })

      expect(vm.currentComponent).toBe('div')
    })
  })

  describe('get currentURL', () => {
    it('should be empty', () => {
      expect(vm.currentURL).toBe('')
    })

    it('should be post url', () => {
      const slug = 'https://foo.xyz'

      const post = {
        attributes: {
          slug
        }
      }

      wrapper.setProps({
        post
      })

      expect(vm.currentURL).toBe(slug)
    })
  })

  describe('get currentEvent', () => {
    it('should be empty', () => {
      expect(vm.currentEvent).toBe('')
    })

    it('should be click', () => {
      const slug = 'https://foo.xyz'

      const post = {
        attributes: {
          slug
        }
      }

      wrapper.setProps({
        post
      })

      expect(vm.currentEvent).toBe('click')
    })

    it('should be empty with loading', () => {
      wrapper.setProps({
        isLoading: true
      })

      expect(vm.currentEvent).toBe('')
    })
  })

  describe('get publishedAt', () => {
    it('should be empty', () => {
      expect(vm.publishedAt).toBe('')
    })

    it('should format unix', () => {
      const post = {
        attributes: {
          publishedAt: new Date().getTime() / 1000 - 10000
        }
      }

      wrapper.setProps({
        post
      })

      expect(vm.publishedAt).toBe('3 часа назад')
    })
  })
})
