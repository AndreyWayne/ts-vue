import { shallowMount, Wrapper } from '@vue/test-utils'
import PollText from '.'

let wrapper: Wrapper<PollText>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(PollText, {
    propsData: {
      question: {}
    }
  })
  vm = wrapper.vm
})

describe('PollText', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
