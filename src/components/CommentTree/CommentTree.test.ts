import { Comment as IComment } from '@cybersport/specifications'

import { shallowMount, Wrapper } from '@vue/test-utils'
import CommentTree, { REPLIES_LIMIT, REPLIES_STATE } from '.'

let wrapper: Wrapper<CommentTree>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(CommentTree, {
    propsData: {
      comment: {
        attributes: {
          text: ''
        },

        id: 0
      } as IComment
    }
  })

  vm = wrapper.vm
})

describe('CommentTree', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })

  describe('get currentReplies', () => {
    it('should return replies', () => {
      const replies = {
        data: [],
        meta: {}
      }

      wrapper.setProps({
        comment: {
          ...vm.comment,

          relationships: {
            replies
          }
        } as IComment
      })

      expect(vm.currentReplies).toEqual(replies)
    })

    it('should return empty object', () => {
      const replies = {}

      wrapper.setProps({
        comment: {
          ...vm.comment,

          relationships: {
            replies
          }
        } as IComment
      })

      expect(vm.currentReplies).toEqual(replies)
    })
  })

  describe('get isFailed', () => {
    it('should pass', () => {
      const repliesState = REPLIES_STATE.FAILED

      wrapper.setData({
        repliesState
      })

      expect(vm.isFailed).toBeTruthy()
    })
  })

  describe('get isLoaded', () => {
    it('should pass', () => {
      const repliesState = REPLIES_STATE.LOADED

      wrapper.setData({
        repliesState
      })

      expect(vm.isLoaded).toBeTruthy()
    })
  })

  describe('get isLoading', () => {
    it('should pass', () => {
      const repliesState = REPLIES_STATE.LOADING

      wrapper.setData({
        repliesState
      })

      expect(vm.isLoading).toBeTruthy()
    })
  })

  describe('get repliesLeft', () => {
    it('should return a correct value', () => {
      const totalCount = 10
      const length = 5

      const data = Array.from({ length }, (_, id) => {
        return {
          id
        } as IComment
      })

      wrapper.setProps({
        comment: {
          ...vm.comment,

          relationships: {
            replies: {
              meta: {
                totalCount
              },

              data
            }
          }
        } as IComment
      })

      expect(vm.repliesLeft).toBe(totalCount - length)
    })
  })

  describe('get repliesLimit', () => {
    it('should return REPLIES_LIMIT', () => {
      const totalCount = 100
      const length = 10

      const data = Array.from({ length }, (_, id) => {
        return {
          id
        } as IComment
      })

      wrapper.setProps({
        comment: {
          ...vm.comment,

          relationships: {
            replies: {
              meta: {
                totalCount
              },

              data
            }
          }
        } as IComment
      })

      expect(vm.repliesLimit).toBe(REPLIES_LIMIT)
    })

    it('should return repliesLeft', () => {
      const totalCount = 10
      const length = 5

      const data = Array.from({ length }, (_, id) => {
        return {
          id
        } as IComment
      })

      wrapper.setProps({
        comment: {
          ...vm.comment,

          relationships: {
            replies: {
              meta: {
                totalCount
              },

              data
            }
          }
        } as IComment
      })

      expect(vm.repliesLimit).toBe(vm.repliesLeft)
    })
  })

  describe('onMoreClick', () => {
    it('should append new replies', async () => {
      const result = [{ id: 1 }]
      const getReplies = jest.fn(() => Promise.resolve(result))

      wrapper.setProps({
        comment: {
          ...vm.comment,

          relationships: {
            replies: {
              meta: {
                totalCount: 10
              },

              data: undefined
            }
          }
        } as IComment,

        getReplies
      })

      await vm.onMoreClick()
      expect(vm.comment.relationships.replies.data).toEqual(result)
    })
  })
})
