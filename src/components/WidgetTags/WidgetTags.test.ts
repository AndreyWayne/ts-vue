import { shallowMount, Wrapper } from '@vue/test-utils'
import WidgetTags from '.'

let wrapper: Wrapper<WidgetTags>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(WidgetTags)
  vm = wrapper.vm
})

describe('WidgetTags', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
