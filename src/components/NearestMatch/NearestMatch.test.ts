import { shallowMount, Wrapper } from '@vue/test-utils'
import NearestMatch from '.'

let wrapper: Wrapper<NearestMatch>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(NearestMatch)
  vm = wrapper.vm
})

describe('NearestMatch', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
