import { shallowMount, Wrapper } from '@vue/test-utils'
import ArticleCollapse from '.'

let wrapper: Wrapper<ArticleCollapse>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(ArticleCollapse)
  vm = wrapper.vm
})

describe('ArticleCollapse', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
