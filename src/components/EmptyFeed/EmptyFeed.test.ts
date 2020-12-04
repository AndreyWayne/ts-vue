import { shallowMount, Wrapper } from '@vue/test-utils'
import EmptyFeed from '.'

let wrapper: Wrapper<EmptyFeed>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(EmptyFeed)
  vm = wrapper.vm
})

describe('EmptyFeed', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
