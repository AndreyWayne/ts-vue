import { mount } from '@vue/test-utils'
import Edit from './edit.vue'

function build ({ title = 'Foo' } = {}, component: any = Edit) {
  const wrapper = mount(component, {
    propsData: {
      material: {
        title
      }
    }
  })

  const vm = wrapper.vm

  return {
    vm,
    wrapper
  }
}

describe('Edit page', () => {
  it('should render', () => {
    const { wrapper } = build()

    expect(wrapper).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('get currentAttributes', () => {
    it('should return material attributes', () => {
      const { vm, wrapper } = build()

      const material = {
        attributes: {
          title: 'Foo'
        }
      }

      wrapper.setProps({ material })
      expect((vm as any).currentAttributes).toEqual(material.attributes)
    })

    it('should return an empty object', () => {
      const { vm, wrapper } = build()

      const material = {}

      wrapper.setProps({ material })
      expect((vm as any).currentAttributes).toEqual(material)
    })
  })

  describe('autoResize', () => {
    it('should set element style', () => {
      const { vm }: { vm: any } = build()

      const element = document.createElement('textarea')
      vm.autoResize(element)

      expect(element.style.height).toMatchSnapshot()
    })

    it('should ignore', () => {
      const { vm }: { vm: any } = build()
      vm.autoResize()
    })
  })

  describe('onTextAreaInput', () => {
    it('should call autoResize', () => {
      const { vm }: { vm: any } = build()

      vm.autoResize = jest.fn()

      const event = new Event('input')
      vm.onTextAreaInput(event)

      expect(vm.autoResize).toBeCalled()
    })
  })
})
