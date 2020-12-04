import { shallowMount, Wrapper } from '@vue/test-utils'
import ArticleReview from '.'

let wrapper: Wrapper<ArticleReview>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(ArticleReview)
  vm = wrapper.vm
})

describe('ArticleReview', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
