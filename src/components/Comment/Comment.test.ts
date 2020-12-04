import { Comment as IComment } from '@cybersport/specifications'

import { shallowMount, Wrapper } from '@vue/test-utils'
import Comment from '.'

let wrapper: Wrapper<Comment>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(Comment, {
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

describe('Comment', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })

  describe('get currentActions', () => {
    it('should return an array of available actions', () => {
      const actions = vm.currentActions

      expect(Array.isArray(actions)).toBeTruthy()
      expect(actions.length).toBeTruthy()
    })

    it('should call handler', () => {
      const actions = vm.currentActions

      actions.forEach((action: any) => {
        const spy = jest.spyOn(action, 'handler')

        action.handler()
        expect(spy).toBeCalled()
      })
    })
  })

  describe('get extraText', () => {
    it('should return an empty string', () => {
      expect(vm.extraText).toBe('')
    })

    it('should return an updated string', () => {
      wrapper.setProps({
        comment: {
          ...vm.comment,

          attributes: {
            updatedBy: 'user'
          }
        } as IComment
      })

      expect(vm.extraText).toBe('Комментарий был отредактирован')
    })

    it('should return an updated string moderator', () => {
      wrapper.setProps({
        comment: {
          ...vm.comment,

          attributes: {
            updatedBy: 'moderator'
          }
        } as IComment
      })

      expect(vm.extraText).toBe('Комментарий был отредактирован модератором')
    })

    it('should return a deleted string user', () => {
      wrapper.setProps({
        comment: {
          ...vm.comment,

          attributes: {
            deletedBy: 'user'
          }
        } as IComment
      })

      expect(vm.extraText).toBe('Комментарий был удален')
    })

    it('should return a deleted string moderator', () => {
      wrapper.setProps({
        comment: {
          ...vm.comment,

          attributes: {
            deletedBy: 'moderator'
          }
        } as IComment
      })

      expect(vm.extraText).toBe('Комментарий был удален модератором')
    })
  })

  describe('get isTextVisible', () => {
    it('should return false', () => {
      wrapper.setProps({
        comment: {
          ...vm.comment,

          attributes: {
            deletedBy: 'moderator',
            text: ''
          }
        } as IComment
      })

      expect(vm.isTextVisible).toBeFalsy()
    })

    it('should return true', () => {
      wrapper.setProps({
        comment: {
          ...vm.comment,

          attributes: {
            text: ' '
          }
        } as IComment
      })

      expect(vm.isTextVisible).toBeTruthy()
    })
  })
})
