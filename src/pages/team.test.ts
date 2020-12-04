import { shallowMount, Wrapper } from '@vue/test-utils'
import Team from './team.vue'

let wrapper: Wrapper<Team>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(Team)

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('Team page', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
