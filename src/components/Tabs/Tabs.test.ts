import { shallowMount, Wrapper } from '@vue/test-utils'
import Tabs from '.'

let wrapper: Wrapper<Tabs>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(Tabs)
  vm = wrapper.vm
})

describe('Tabs', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
