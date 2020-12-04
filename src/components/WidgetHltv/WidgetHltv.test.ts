import { shallowMount, Wrapper } from '@vue/test-utils'
import WidgetHltv from '.'

let wrapper: Wrapper<WidgetHltv>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(WidgetHltv)
  vm = wrapper.vm
})

describe('WidgetHltv', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
