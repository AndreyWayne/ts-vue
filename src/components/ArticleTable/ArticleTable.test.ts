import { shallowMount, Wrapper } from '@vue/test-utils'
import ArticleTable from '.'

let wrapper: Wrapper<ArticleTable>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(ArticleTable)
  vm = wrapper.vm
})

describe('ArticleTable', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
