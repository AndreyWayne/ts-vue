import { shallowMount, Wrapper } from '@vue/test-utils'
import WidgetTournaments from '.'

let wrapper: Wrapper<WidgetTournaments>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(WidgetTournaments)
  vm = wrapper.vm
})

describe('WidgetTournaments', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
