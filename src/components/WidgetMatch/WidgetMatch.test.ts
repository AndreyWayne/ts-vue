import { shallowMount, Wrapper } from '@vue/test-utils'
import WidgetMatch from '.'

let wrapper: Wrapper<WidgetMatch>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(WidgetMatch)

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('WidgetMatch', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
