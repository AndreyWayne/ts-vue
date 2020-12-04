import { shallowMount, Wrapper } from '@vue/test-utils'
import WidgetNews from '.'

let wrapper: Wrapper<WidgetNews>
// eslint-disable-next-line
let vm: any

beforeEach(() => {
  wrapper = shallowMount(WidgetNews)

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('WidgetNews', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
