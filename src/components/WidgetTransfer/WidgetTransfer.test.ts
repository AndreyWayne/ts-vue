import { shallowMount, Wrapper } from '@vue/test-utils'
import WidgetTransfer from '.'

let wrapper: Wrapper<WidgetTransfer>
// eslint-disable-next-line
let vm: any

beforeEach(() => {
  wrapper = shallowMount(WidgetTransfer)

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('WidgetTransfer', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
