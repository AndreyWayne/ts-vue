import { shallowMount, Wrapper } from '@vue/test-utils'
import Spinner from '.'

let wrapper: Wrapper<Spinner>

beforeEach(() => {
  wrapper = shallowMount(Spinner, {})
})

describe('Comment', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
