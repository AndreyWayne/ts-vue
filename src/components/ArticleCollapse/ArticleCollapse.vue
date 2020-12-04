<template>
  <div :class="[$style.attach]">
    <div v-if="isActive" :class="[$style.content]">
      <p>
        Почти все улучшения, кроме косметических, будут полезны в игре. Но они в любом случае не сделают вождение легким
        . И хотя все задания сводятся к движению из точки А в точку Б, заскучать вряд ли получится.
      </p>
      <p>
        Типы поверхностей на всех картах постоянно чередуются. Проехался пять секунд по асфальту — получай гравийку. Всё
        еще слишком легко? Добавим тонну грязи под колеса. Земля в грязь превращается не просто так, значит, скоро
        проступит вода. А дальше уж будет или болота, или река — как повезет. Приелась эта чехарда? За ближайшим
        поворотом поедем в гору. Увязнуть в камнях невозможно, но это не значит, что в них нельзя застрять, а еще на них
        легко перевернуться.
      </p>
    </div>
    <div :class="[$style.collapse]" @click="onClick">
      <div :class="[$style.collapseTitle]">
        <div v-if="!isActive">
          Спойлер закрыт
        </div>
        <div v-if="isActive">
          Спойлер открыт
        </div>
        <div
          :class="[
            $style.arrow,
            {
              [$style.isOpen]: isActive,
            },
          ]"
        >
          <svg-icon name="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class ArticleCollapse extends Vue {
  @Prop({ type: Boolean })
  isActive!: Boolean

  onClick (): void {
    this.isActive = !this.isActive
  }
}
</script>

<style lang="scss" module>
.attach {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;

  @include breakpoint('tablet') {
    margin-bottom: 30px;
  }
}

.collapse {
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: Roboto, serif;
  justify-content: center;
  position: relative;

  &::before {
    border-bottom: 2px dashed #c4c4c4;
    content: '';
    position: absolute;
    right: 0;
    width: 100%;
  }
}

.collapseTitle {
  background-color: var(--color-layer);
  color: var(--color-primary);
  display: flex;
  padding: 0 33px;
  position: relative;
}

.arrow {
  margin-left: 20px;
  transform: rotate(-90deg);
  transition: transform $transition;
  will-change: transition;

  svg {
    height: 18px;
    stroke: var(--color-primary);
    transition: stroke $transition;
    width: 12px;
    will-change: stroke;
  }
}

.isOpen {
  transform: rotate(90deg);
}
</style>
