<template>
  <div :class="[$style.tree]">
    <Comment :class="[$style.comment]" :comment="comment" />

    <ul :class="[$style.replies]">
      <CommentTree v-for="reply in currentReplies.data" :key="reply.id" :comment="reply" :get-replies="getReplies" />

      <template v-if="isLoading">
        <Comment v-for="key in repliesLimit" :key="key" :comment="{}" is-loading :class="[$style.comment]" />
      </template>

      <div v-else-if="repliesLeft > 0" :class="[$style.more]" @click="onMoreClick">
        <div :class="[$style.showMore]">
          <span>{{ moreText }}</span>
          <svg-icon name="chevron" />
        </div>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { Comment as IComment } from '@cybersport/specifications'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

import Comment from '@/components/Comment'
import { REPLIES_LIMIT, REPLIES_STATE } from '.'

@Component({
  components: {
    Comment
  }
})
export default class CommentTree extends Vue {
  /**
   * Current replies state.
   */
  repliesState: REPLIES_STATE = REPLIES_STATE.NOT_ASKED

  /**
   * Comment.
   */
  @Prop({ required: true, type: Object })
  readonly comment!: IComment

  /**
   * Get more replies.
   */
  @Prop({ type: Function })
  readonly getReplies!: () => Promise<IComment[]>

  /**
   * Returns an array of replies.
   */
  get currentReplies () {
    return this.comment?.relationships?.replies || {}
  }

  /**
   * Returns true if current state is Failed.
   */
  get isFailed () {
    return this.repliesState === REPLIES_STATE.FAILED
  }

  /**
   * Returns true if current state is Loaded.
   */
  get isLoaded () {
    return this.repliesState === REPLIES_STATE.LOADED
  }

  /**
   * Returns true if current state is Loading.
   */
  get isLoading () {
    return this.repliesState === REPLIES_STATE.LOADING
  }

  /**
   * Returns a number of replies left.
   */
  get repliesLeft () {
    const total = this.currentReplies.meta?.totalCount || 0
    const current = this.currentReplies.data?.length || 0

    return total - current
  }

  /**
   * Returns a number of replies limit.
   */
  get repliesLimit () {
    const left = this.repliesLeft
    return left >= REPLIES_LIMIT ? REPLIES_LIMIT : left
  }

  /**
   * Returns a string of text with comments left.
   */
  get moreText () {
    const left = this.repliesLeft
    const pluralText = this.$pluralize(left, 'комментарий', 'комментария', 'комментариев')

    return `Показать ${left} ${pluralText}`
  }

  /**
   * Handles more "click".
   */
  async onMoreClick () {
    this.repliesState = REPLIES_STATE.LOADING

    const data = await this.getReplies()
    const current = this.currentReplies

    this.$set(current, 'data', [...(current.data || []), ...data])
    this.repliesState = REPLIES_STATE.LOADED
  }
}
</script>

<style lang="scss" module>
.tree {
  background-color: var(--color-background);
  transition: background-color $transition-mode;

  will-change: background-color;
}

.comment {
  padding: 15px 0;
}

.replies {
  background-color: inherit;
  box-sizing: border-box;

  margin: 0;
  padding: 0;

  @include breakpoint('tablet') {
    padding-left: 50px;
  }
}

.more {
  align-items: center;

  background-color: inherit;
  color: var(--color-text-light);

  cursor: pointer;
  display: flex;

  justify-content: center;
  padding-left: 0;

  position: relative;
  text-align: center;

  transition: color $transition-mode;
  will-change: color;

  @include hover() {
    color: color('primary');
  }

  @include breakpoint('tablet') {
    padding-left: 50px;
  }
}

.more::before {
  border-color: var(--color-text-lighter);
  border-style: dotted;
  border-width: 0 0 2px;

  content: '';

  position: absolute;
  top: 50%;

  transform: translate3d(0, -50%, 0);
  transition: border-color $transition-mode;

  width: 100%;
  will-change: border-color;
}

.showMore {
  align-items: center;

  background-color: inherit;
  box-sizing: border-box;

  display: flex;

  font-size: 13px;
  font-weight: 500;

  line-height: 26px;
  padding: 0 15px;

  position: relative;
}

.showMore svg {
  margin-left: 15px;
}
</style>
