<template>
  <div :class="[$style.container]">
    <div :class="[$style.main]">
      <div :class="[$style.layer]">
        <div :class="[$style.header]">
          <div :class="[$style.breadcrumbs]">
            <a href="" :class="[$style.breadcrumbsItem]">Главная</a>
            <span :class="[$style.breadcrumbsLine]">/</span>
            <a href="" :class="[$style.breadcrumbsItem]">Статьи</a>
          </div>
          <h1 :class="[$style.title]">
            {{ currentAttributes.title }}
          </h1>
          <div :class="[$style.tags]">
            <Tags />
          </div>
        </div>
        <div :class="[$style.author]">
          <div :class="[$style.authorImage]">
            <img src="~/assets/images/player.jpg" alt="author">
          </div>
          <div :class="[$style.authorInfo]">
            <nuxt-link to="" :class="[$style.authorName]">
              Владислав «Machinae» Животнёв
            </nuxt-link>
            <div :class="[$style.material]">
              <time :class="[$style.materialPub]">27.02.2019, 00:52</time>
              <div :class="[$style.materialComments]">
                <svg-icon name="comment" />
                <div>44</div>
              </div>
            </div>
          </div>
        </div>
        <div :class="[$style.article]" v-html="currentAttributes.leadText" />
        <MaterialFooter />
      </div>
    </div>
    <div v-if="viewport.isDesktopOrHigher" :class="[$style.aside]">
      <WidgetNews title="Главные новости" />
      <WidgetPlayer />
      <WidgetTeam />
      <WidgetTournament />
    </div>
  </div>
</template>

<script lang="ts">
import { Material } from '@cybersport/specifications'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

import MaterialFooter from '@/components/MaterialFooter'
import Tags from '@/components/Tags'

import WidgetNews from '@/components/WidgetNews'
import WidgetPlayer from '@/components/WidgetPlayer'
import WidgetTeam from '@/components/WidgetTeam'
import WidgetTournament from '@/components/WidgetTournament'

@Component({
  components: {
    MaterialFooter,
    Tags,

    WidgetNews,
    WidgetPlayer,
    WidgetTeam,
    WidgetTournament
  }
})
export default class MaterialPage extends Vue {
  @Prop({ required: true, type: Object })
  readonly material!: Material

  get currentAttributes () {
    return this.material?.attributes || {}
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

  @include breakpoint('desktop') {
    flex-wrap: nowrap;
  }
}

.main {
  @include main();
}

.layer {
  background-color: var(--color-layer);
  border: 1px solid var(--color-border-transparent);
  margin: 0 -15px 14px;
  padding: 12px 14px 0;

  transition: background-color $transition-mode, border $transition-mode;
  will-change: background-color, border;

  @include breakpoint('tablet') {
    border-radius: 4px;
    margin: 0 0 20px;
    padding: 35px 20px;
  }

  @include breakpoint('desktop', 'wide') {
    padding: 35px 110px;
  }
}

.aside {
  @include aside();

  flex: 0 0 auto;
}

.header > .tags {
  display: none;

  @include breakpoint('tablet') {
    display: flex;
    margin-bottom: 20px;
  }
}

.breadcrumbs {
  color: color('gray', 'dark');
  display: flex;
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 8px;
}

.breadcrumbsItem {
  color: color('gray', 'dark');
  text-decoration: none;

  transition: color $transition;
  will-change: color;

  @include hover() {
    color: var(--color-primary-secondary);
  }
}

.breadcrumbsLine {
  padding: 0 6px;
}

.title {
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 10px;
  margin-top: 0;

  @include breakpoint('tablet') {
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 20px;
  }
}

.tags {
  display: flex;
}

.tag {
  border: 1px solid var(--color-border);
  border-radius: 3px;
  color: var(--color-primary);
  cursor: pointer;
  font-size: 12px;
  line-height: 18px;
  padding: 3px 8px;

  transition: border $transition;
  will-change: border;

  @include hover() {
    border: 1px solid var(--color-primary);
  }
}

.author {
  border-bottom: 1px solid var(--color-border-transparent);
  border-top: 1px solid var(--color-border-transparent);
  display: flex;
  margin-bottom: 10px;
  padding: 10px 0;

  @include breakpoint('tablet') {
    margin-bottom: 25px;
    padding: 14px 0;
  }
}

.authorImage {
  height: 40px;
  margin-right: 10px;

  img {
    border-radius: 50%;
    width: 40px;
  }
}

.authorInfo {
  display: flex;
  flex-direction: column;
}

.authorName {
  color: var(--color-text);
  font-size: 15px;
  line-height: 20px;
  text-decoration: none;

  transition: color $transition-mode;
  will-change: color;

  @include hover() {
    color: var(--color-primary);
  }
}

.material {
  align-items: center;
  display: flex;
}

.materialPub {
  color: var(--color-text-gray);
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  margin-right: 12px;

  transition: color $transition-mode;
  will-change: color;
}

.materialComments {
  align-items: center;
  color: var(--color-text-gray);
  display: flex;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;

  svg {
    fill: var(--color-text-gray);
    margin-right: 2px;
  }
}

.article {
  p {
    line-height: 26px;
  }

  img {
    width: 100%;
  }

  figure {
    margin: 0;
  }

  figcaption {
    color: color('gray', 'dark');
    font-size: 13px;
    line-height: 18px;
    margin-top: 10px;
  }
}

.banner {
  background-color: #2d3641;
  height: 90px;
  width: 100%;
}
</style>
