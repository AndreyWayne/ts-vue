import { shallowMount } from '@vue/test-utils'
import { SvgIcon } from './svgicon'

describe('SvgIcon', () => {
  it('should load the icon', () => {
    const name = 'logo'

    const wrapper = shallowMount(SvgIcon, { propsData: { name } })
    expect(wrapper.html().length).toBeTruthy()
  })

  it('should throw an error if icon is invalid', () => {
    const name = 'bar'
    const spy = jest.spyOn(console, 'error')

    const wrapper = shallowMount(SvgIcon, {
      propsData: {
        name
      }
    })

    expect(spy).toBeCalled()
    expect(wrapper.html().length).toBeFalsy()
  })

  it('should set height & width attributes', () => {
    const name = 'logo'

    const height = 24
    const width = 24

    const wrapper = shallowMount(SvgIcon, {
      propsData: {
        height,
        name,
        width
      }
    })

    const attributes = wrapper.attributes()

    expect(attributes.height).toBe(height.toString())
    expect(attributes.width).toBe(width.toString())
  })
})
