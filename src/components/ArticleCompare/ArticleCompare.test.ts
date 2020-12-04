import { shallowMount, Wrapper } from '@vue/test-utils'
import ArticleCompare from '.'

let wrapper: Wrapper<ArticleCompare>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(ArticleCompare)
  vm = wrapper.vm
})

describe('ArticleCompare', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
