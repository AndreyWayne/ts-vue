import { shallowMount, Wrapper } from '@vue/test-utils'
import Tournament from '.'

let wrapper: Wrapper<Tournament>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(Tournament)
  vm = wrapper.vm
})

describe('Tournament', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
