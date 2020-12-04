import { shallowMount, Wrapper } from '@vue/test-utils'
import PollVideo from '.'

let wrapper: Wrapper<PollVideo>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(PollVideo, {
    propsData: {
      question: {}
    }
  })
  vm = wrapper.vm
})

describe('PollVideo', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
