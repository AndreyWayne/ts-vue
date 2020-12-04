<template>
  <div :class="[$style.widget]">
    <div :class="[$style.widgetContent]">
      <p :class="[$style.title]">
        Публикации от читателей Cybersport.ru
      </p>
      <p :class="[$style.description]">
        Напиши интересный материал и получи респект от редакции и донаты от читателей.
      </p>
      <div :class="[$style.footer]">
        <nuxt-link to="" :class="[$style.link]">
          Подробнее о донатах
        </nuxt-link>
        <TheButton title="Написать пост" orange />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheButton from '~/components/TheButton'

@Component({
  components: {
    TheButton
  }
})
export default class WidgetNotice extends Vue {}
</script>

<style lang="scss" module>
.widget {
  background-color: var(--color-layer);
  border: 1px solid var(--color-border-transparent);
  border-radius: 4px;
  margin-bottom: 20px;

  transition: background-color $transition-mode, border $transition-mode;
  will-change: background-color, border;
}

.widgetContent {
  padding: 10px;

  @include breakpoint('desktop', 'wide') {
    padding: 15px;
  }
}

.title {
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin: 0 0 10px;
}

.description {
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 15px;
}

.footer {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.link {
  color: var(--color-primary);
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 16px;
  text-decoration: underline;

  transition: color $transition, text-decoration $transition;
  will-change: color, text-decoration;

  @include hover() {
    color: var(--color-primary-secondary);
    text-decoration: none;
  }
}
</style>
