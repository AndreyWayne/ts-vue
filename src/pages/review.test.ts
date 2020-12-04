import { shallowMount, Wrapper } from '@vue/test-utils'
import Review from './review.vue'

let wrapper: Wrapper<Review>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(Review)

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('Review page', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
