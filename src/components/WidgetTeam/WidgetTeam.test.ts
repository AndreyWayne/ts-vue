import { shallowMount, Wrapper } from '@vue/test-utils'
import WidgetTeam from '.'

let wrapper: Wrapper<WidgetTeam>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(WidgetTeam)

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('WidgetTeam', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
