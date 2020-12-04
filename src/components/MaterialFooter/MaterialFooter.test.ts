import { shallowMount, Wrapper } from '@vue/test-utils'
import MaterialFooter from '.'

let wrapper: Wrapper<MaterialFooter>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(MaterialFooter)

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('MaterialFooter', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
