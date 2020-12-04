import { shallowMount, Wrapper } from '@vue/test-utils'
import Lineup from '.'

let wrapper: Wrapper<Lineup>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(Lineup)
  vm = wrapper.vm
})

describe('Lineup', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
