import { shallowMount, Wrapper } from '@vue/test-utils'
import WidgetPlayer from '.'

let wrapper: Wrapper<WidgetPlayer>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(WidgetPlayer)

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('WidgetPlayer', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
