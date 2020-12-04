import { shallowMount, Wrapper } from '@vue/test-utils'
import PollQuiz from '.'

let wrapper: Wrapper<PollQuiz>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(PollQuiz, {
    propsData: {
      question: {}
    }
  })
  vm = wrapper.vm
})

describe('PollQuiz', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
