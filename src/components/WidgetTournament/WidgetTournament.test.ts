import { shallowMount, Wrapper } from '@vue/test-utils'
import WidgetTournament from '.'

let wrapper: Wrapper<WidgetTournament>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(WidgetTournament)

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('WidgetTournament', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
