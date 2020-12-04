<template>
  <div :class="[$style.filter]">
    <div :class="[$style.item]">
      <svg-icon name="disciplines/dota" />
    </div>
    <div :class="[$style.item]">
      <svg-icon name="disciplines/cs" />
    </div>
    <div :class="[$style.item]">
      <svg-icon name="disciplines/pubg" />
    </div>
    <div :class="[$style.item]">
      <svg-icon name="disciplines/lol" />
    </div>
    <div :class="[$style.item]">
      <svg-icon name="disciplines/hearthstone" />
    </div>
    <div :class="[$style.more]">
      <div>
        <!-- TODO: если выбраны дисциплины из списка (отоброжать кол-во) -->
        <div :class="[$style.moreSelected]">
          + 3
        </div>
        <svg-icon name="disciplines/more" />
      </div>
      <div :class="[$style.dropdown]">
        <div :class="[$style.item, $style.dropdownItem]">
          <div>Rainbow Six Siege</div>
          <svg-icon name="disciplines/rainbow-6" />
        </div>
        <div :class="[$style.item, $style.dropdownItem]">
          <div>Fortnite</div>
          <svg-icon name="disciplines/fortnite" />
        </div>
        <div :class="[$style.item, $style.dropdownItem]">
          <div>Apex Legends</div>
          <svg-icon name="disciplines/apex" />
        </div>
        <div :class="[$style.item, $style.dropdownItem]">
          <div>Artifact</div>
          <svg-icon name="disciplines/artifact" />
        </div>
        <div :class="[$style.item, $style.dropdownItem]">
          <div>Overwatch</div>
          <svg-icon name="disciplines/ow" />
        </div>
        <div :class="[$style.item, $style.dropdownItem]">
          <div>Warface</div>
          <svg-icon name="disciplines/warface" />
        </div>
        <div :class="[$style.item, $style.dropdownItem]">
          <div>Warcraft III</div>
          <svg-icon name="disciplines/warcraft" />
        </div>
        <div :class="[$style.item, $style.dropdownItem]">
          <div>FIFA</div>
          <svg-icon name="disciplines/fifa" />
        </div>
        <div :class="[$style.item, $style.dropdownItem]">
          <div>Quake Champions</div>
          <svg-icon name="disciplines/quake" />
        </div>
      </div>
    </div>
    <!-- TODO: кнопка чтобы быстро убрать все выбранные дисципилины -->
    <div :class="[$style.remove]">
      <svg-icon name="disciplines/remove" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'

export default class WidgetNotice extends Vue {}
</script>

<style lang="scss" module>
.filter {
  display: flex;
}

.item {
  cursor: pointer;
  margin-right: 5px;

  @include hover() {
    svg {
      filter: grayscale(0);
    }
  }

  svg {
    filter: grayscale(1);

    transition: filter $transition;
    will-change: filter;
  }
}

.isActive {
  filter: grayscale(0);
}

.more {
  cursor: pointer;
  fill: var(--color-text-gray);

  position: relative;

  transition: fill $transition;
  will-change: fill;

  @include hover() {
    fill: var(--color-primary);

    .moreSelected {
      color: var(--color-primary);
    }

    .dropdown {
      opacity: 1;
      visibility: visible;
    }
  }
}

.moreSelected {
  color: var(--color-text-gray);
  display: flex;

  font-size: 12px;
  font-weight: 500;

  height: 28px;
  justify-content: center;
  left: 0;
  line-height: 12px;
  padding-top: 6px;
  position: absolute;
  top: 0;

  transition: color $transition-mode;
  width: 28px;
  will-change: color;

  @include hover() {
    color: var(--color-primary);
  }
}

.dropdown {
  background-color: var(--color-layer);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

  left: calc(-104px + 14px);
  opacity: 0;
  position: absolute;
  top: 28px;

  transition: background-color $transition-mode, opacity $transition;
  visibility: hidden;
  width: 208px;
  will-change: background-color, opacity;
  z-index: 3;
}

.dropdownItem {
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: space-between;
  line-height: 16px;
  margin-right: 0;
  min-height: 40px;
  padding-left: 24px;
  padding-right: 16px;

  transition: border-bottom $transition, color $transition;
  will-change: border-bottom, color;

  @include hover() {
    color: var(--color-primary);
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }
}

.remove {
  cursor: pointer;
  margin-left: 15px;

  @include hover() {
    svg {
      fill: var(--color-primary);
    }

    path {
      stroke: var(--color-layer);
    }
  }

  svg {
    fill: transparent;

    transition: fill $transition;
    will-change: fill;
  }

  rect {
    stroke: var(--color-primary);
  }

  path {
    stroke: var(--color-primary);

    transition: stroke $transition;
    will-change: stroke;
  }
}
</style>
