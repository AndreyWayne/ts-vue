import { shallowMount, Wrapper } from '@vue/test-utils'
import Poll from './poll.vue'

let wrapper: Wrapper<Poll>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(Poll)

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('Poll page', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
