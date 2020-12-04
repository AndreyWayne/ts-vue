import { shallowMount, Wrapper } from '@vue/test-utils'
import HistoryMatches from '.'

let wrapper: Wrapper<HistoryMatches>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(HistoryMatches)
  vm = wrapper.vm
})

describe('HistoryMatches', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
