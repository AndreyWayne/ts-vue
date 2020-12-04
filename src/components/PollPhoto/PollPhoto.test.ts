import { shallowMount, Wrapper } from '@vue/test-utils'
import PollPhoto from '.'

let wrapper: Wrapper<PollPhoto>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(PollPhoto, {
    propsData: {
      question: {}
    }
  })

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('PollPhoto', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
