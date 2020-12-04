import { mount } from '@vue/test-utils'
import Button from '.'

function build ({ propsData }: { propsData?: any } = {}) {
  const wrapper = mount(Button, {
    propsData
  })

  const vm = wrapper.vm

  return {
    vm,
    wrapper
  }
}

describe('Button', () => {
  it('should render', () => {
    const { wrapper } = build()
    expect(wrapper).toBeTruthy()
  })

  describe('get currentComponent', () => {
    it('should return a div', () => {
      const { vm } = build()
      expect((vm as any).currentComponent).toBe('div')
    })

    it('should return a nuxt-link', () => {
      const { vm } = build({
        propsData: {
          to: '/'
        }
      })

      expect((vm as any).currentComponent).toBe('nuxt-link')
    })
  })
})
