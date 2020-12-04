import { shallowMount, Wrapper } from '@vue/test-utils'
import Awards from '.'

let wrapper: Wrapper<Awards>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(Awards)
  vm = wrapper.vm
})

describe('Awards', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
