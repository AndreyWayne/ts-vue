import { shallowMount, Wrapper } from '@vue/test-utils'
import CsStatsMaps from '.'

let wrapper: Wrapper<CsStatsMaps>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(CsStatsMaps)
  vm = wrapper.vm
})

describe('CsStatsMaps', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
