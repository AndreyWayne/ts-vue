<template>
  <div :class="[$style.container]">
    <div :class="[$style.main]">
      <h1 :class="[$style.title]">
        Блоги
      </h1>
      <WidgetNotice v-if="viewport.isMobileOrTablet" />
      <div :class="[$style.head]">
        <div :class="[$style.headItem]">
          <div :class="[$style.tab]">
            <Tabs :tabs="currentTabs" />
          </div>
          <div v-if="viewport.isTabletOrHigher" :class="[$style.sort]">
            За всё время
          </div>
          <select v-if="viewport.isMobile" id="" name="">
            <option value="За всё время">
              Показывать: за всё время
            </option>
            <option value="За всё время">
              2020
            </option>
            <option value="За всё время">
              2019
            </option>
            <option value="За всё время">
              2018
            </option>
            <option value="За всё время">
              2017
            </option>
            <option value="За всё время">
              2016
            </option>
          </select>
        </div>
        <div :class="[$style.headItem]">
          <DisciplineFilter />
        </div>
      </div>
      <div :class="[$style.list]">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <CarouselPopular />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div :class="[$style.more]">
        <Button>
          Показать еще
        </Button>
      </div>
    </div>
    <div v-if="viewport.isDesktopOrHigher" :class="[$style.aside]">
      <WidgetNotice />
      <WidgetAuthors />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins, Vue } from 'nuxt-property-decorator'
import { ViewportMixin } from '@/mixins'

import BlogItem from '@/components/PostBlog'
import WidgetNotice from '@/components/WidgetNotice'
import WidgetAuthors from '@/components/WidgetAuthors'
import Tabs from '@/components/Tabs'
import DisciplineFilter from '@/components/DisciplineFilter'
import CarouselPopular from '@/components/CarouselPopular'
import Button from '@/components/Button'

@Component({
  components: {
    BlogItem,
    WidgetNotice,
    WidgetAuthors,
    Tabs,
    DisciplineFilter,
    CarouselPopular,
    Button
  }
})
export default class Blog extends mixins(Vue, ViewportMixin) {
  get currentTabs (): Object {
    return [
      {
        position: 1,
        title: ' Популярное'
      },
      {
        position: 2,
        title: 'Свежее'
      },
      {
        position: 3,
        title: 'Обсуждаемое'
      }
    ]
  }

  get viewport () {
    return this.$modules.viewport
  }
}
</script>

<style lang="scss" module>
.container {
  @include container();
  margin-top: 20px;
  padding: 0 5px;

  @include breakpoint('desktop') {
    flex-wrap: nowrap;
    padding: 0;
  }
}

.main {
  @include main();
}

.aside {
  @include aside();

  flex: 0 0 auto;
}

.title {
  font-size: 24px;
  line-height: 32px;
  text-align: center;

  @include breakpoint('tablet', 'base') {
    font-size: 36px;
    line-height: 42px;
  }
}

.head {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 0 10px;

  @include breakpoint('tablet', 'base') {
    padding: 0;
  }

  @include breakpoint('desktop', 'wide') {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
}

.headItem {
  display: flex;
  flex-direction: column;
  width: 100%;

  @include breakpoint('tablet', 'base') {
    flex-direction: row;
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
}

.tab {
  flex: 1;
  margin-bottom: 20px;

  @include breakpoint('tablet', 'base') {
    margin-bottom: 0;
  }
}

.sort {
  align-items: center;
  display: flex;
  font-size: 13px;
  line-height: 18px;
  margin-left: 12px;

  &::after {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid var(--color-text);
    content: '';
    display: flex;
    margin-left: 10px;
    transition: border-top $transition-mode;
    width: 0;
    will-change: border-top;
  }
}

.list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: -10px;
}

.more {
  margin: 10px 0 20px;
}
</style>
