<template>
  <div :class="[$style.comment, isLoading && $style.isLoading]">
    <template v-if="isLoading">
      <div :class="[$style.avatar]" />

      <div :class="[$style.body]">
        <header :class="[$style.header]" />
        <p :class="[$style.text]" />
        <footer :class="[$style.footer]" />
      </div>
    </template>

    <template v-else>
      <div :class="[$style.avatar]">
        <Avatar :badge-size="16" :picture="{}" :picture-size="30" />
      </div>

      <div :class="[$style.body]">
        <header :class="[$style.header]">
          <div :class="[$style.headline]">
            <span>Пользователь</span>

            <div :class="[$style.status]">
              <div :class="[$style.team]">
                <img src="~@/assets/images/virtus.png">
              </div>

              <div :class="[$style.rank]">
                <span>/ New</span>
                <svg-icon name="star" />
              </div>
            </div>

            <div :class="[$style.replyTo]">
              <svg-icon name="corner-right" />
              <span>Админ</span>
            </div>
          </div>

          <span :class="[$style.date]">22.04 в 10:33</span>
        </header>

        <span v-if="extraText" :class="[$style.extra]">{{ extraText }}</span>

        <p v-if="isTextVisible" :class="[$style.text]">
          {{ comment.attributes.text }}
        </p>

        <footer :class="[$style.footer]">
          <div :class="[$style.votes]">
            <div :class="[$style.vote, $style.like]">
              <svg-icon name="thumb-up" />
              <span>27</span>
            </div>

            <div :class="[$style.vote, $style.dislike]">
              <svg-icon name="thumb-down" />
              <span>7</span>
            </div>
          </div>

          <div :class="[$style.actions]">
            <div v-for="action in currentActions" :key="action.title" :class="[$style.action]" @click="action.handler">
              <span>{{ action.title }}</span>
            </div>
          </div>
        </footer>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Comment as IComment } from '@cybersport/specifications'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

import Avatar from '@/components/Avatar'

@Component({
  components: {
    Avatar
  }
})
export default class Comment extends Vue {
  /**
   * Comment.
   */
  @Prop({ required: true, type: Object })
  readonly comment!: IComment

  /**
   * Is Loading?
   */
  @Prop({ type: Boolean })
  readonly isLoading!: boolean

  /**
   * Available actions.
   */
  get currentActions () {
    return [
      {
        handler: () => {},
        title: 'Ответить'
      },
      {
        handler: () => {},
        title: 'Цитировать'
      }
    ]
  }

  /**
   * Returns a string of extra text.
   */
  get extraText () {
    const { deletedBy, updatedBy } = this.comment.attributes
    const action = deletedBy ? 'удален' : updatedBy ? 'отредактирован' : ''

    if (!action) {
      return ''
    }

    const by = deletedBy || updatedBy
    const status = by === 'moderator' ? 'модератором' : ''

    return `Комментарий был ${action} ${status}`.trim()
  }

  /**
   * Returns true if text is visible.
   */
  get isTextVisible () {
    const { deletedBy, text } = this.comment.attributes

    if (deletedBy) {
      return false
    }

    return !!text
  }
}
</script>

<style lang="scss" module>
.comment {
  display: flex;
}

.avatar {
  display: none;
  margin-right: 20px;

  @include breakpoint('tablet') {
    display: block;
  }
}

.body {
  display: flex;
  flex-direction: column;

  width: 100%;
}

.header {
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;
}

.headline {
  align-items: center;
  display: flex;

  font-size: 14px;
  font-weight: 500;
}

.date {
  color: var(--color-text-light);

  font-size: 12px;
  line-height: 18px;

  margin-top: 2px;

  transition: color $transition-mode;
  will-change: color;
}

.status {
  align-items: center;
  display: flex;

  margin-left: 10px;
}

.rank {
  align-items: center;
  display: flex;

  text-transform: uppercase;
}

.rank svg {
  color: color('primary');
  margin-left: 3px;
}

.replyTo {
  align-items: center;

  color: var(--color-text-light);
  display: flex;

  font-size: 12px;
  font-weight: normal;

  margin-left: 8px;

  transition: color $transition-mode;
  will-change: color;
}

.replyTo svg {
  margin-right: 3px;
}

.extra {
  color: var(--color-text-light);

  font-size: 12px;
  font-style: italic;

  margin-bottom: 6px;

  transition: color $transition-mode;
  will-change: color;
}

.text {
  font-size: 14px;
  line-height: 20px;

  margin: 0;
  padding: 0;
}

.footer {
  align-items: center;
  display: flex;

  font-size: 12px;
  margin-top: 10px;
}

.votes {
  display: flex;
}

.vote {
  align-items: center;

  cursor: pointer;
  display: flex;

  transition: opacity $transition;
  will-change: opacity;

  @include hover() {
    opacity: 0.5;
  }

  &:not(:first-child) {
    margin-left: 15px;
  }
}

.vote svg {
  margin-right: 10px;
}

.vote path {
  transition: fill $transition;
  will-change: fill;
}

.vote.like {
  color: color('green');

  &.isActive svg {
    fill: transparentize(color('green'), 0.8);
  }
}

.vote.dislike {
  color: color('red');

  &.isActive svg {
    fill: transparentize(color('red'), 0.8);
  }
}

.vote.isActive {
  font-weight: 500;
  opacity: 1;
}

.actions {
  color: var(--color-text-light);

  display: flex;
  margin-left: 15px;

  transition: color $transition-mode;
  will-change: color;
}

.action {
  @include hover() {
    span {
      opacity: 0.5;
    }
  }
}

.action span {
  cursor: pointer;

  transition: opacity $transition;
  will-change: opacity;
}

.action::before {
  content: '/';
  margin: 0 3px;
}

.action:first-child::before {
  content: unset;
}

.isLoading .avatar {
  @include loading();

  border-radius: 50%;
  height: 30px;
  width: 30px;
}

.isLoading .header {
  @include loading();

  height: 16px;
  margin-bottom: 15px;
  width: 35%;
}

.isLoading .text {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.isLoading .text::before {
  @include loading();
  content: '';

  height: 14px;
  width: 50%;
}

.isLoading .text::after {
  @include loading();
  content: '';

  height: 14px;
  margin-top: 10px;
  width: 45%;
}

.isLoading .footer {
  @include loading();

  height: 14px;
  margin-top: 15px;
  width: 15%;
}
</style>
