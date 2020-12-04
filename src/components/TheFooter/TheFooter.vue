<template>
  <footer :class="[$style.footer]">
    <div :class="[$style.container]">
      <div :class="[$style.left]">
        <div :class="[$style.social]">
          <a href="" target="_blank" :class="[$style.socialItem]" class="vk">
            <svg-icon name="socials/vk" :width="30" :height="30" />
          </a>
          <a href="" target="_blank" :class="[$style.socialItem]" class="fb">
            <svg-icon name="socials/fb" :width="30" :height="30" />
          </a>
          <a href="" target="_blank" :class="[$style.socialItem]" class="tw">
            <svg-icon name="socials/tw" :width="30" :height="30" />
          </a>
          <a href="" target="_blank" :class="[$style.socialItem]" class="rss">
            <svg-icon name="socials/rss" :width="30" :height="30" />
          </a>
        </div>
      </div>
      <div :class="[$style.right]">
        <div :class="[$style.nav]">
          <div :class="[$style.links]">
            <nuxt-link to="" :class="[$style.linksItem]">
              О нас
            </nuxt-link>
            <nuxt-link to="" :class="[$style.linksItem]">
              Документы
            </nuxt-link>
          </div>
          <div :class="[$style.copyright]">
            © Cybersport Media — All Rights Reserved
          </div>
        </div>
        <div :class="[$style.info]">
          <div :class="[$style.age]">
            18+
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TheFooter extends Vue {}
</script>

<style lang="scss" module>
.footer {
  background-color: color('licorice', 'dark');
  color: color('gray');
  font-size: 12px;
  line-height: 16px;
  padding: 20px 0 12px;

  @include breakpoint('tablet') {
    padding: 22px 0;
  }
}

.container {
  @include container();

  padding-left: 10px;
  padding-right: 10px;

  @include breakpoint('tablet') {
    align-items: center;
    justify-content: space-between;
  }
}

.left {
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
  width: 100%;

  @include breakpoint('tablet') {
    margin-bottom: 0;
    width: fit-content;
  }
}

.right {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @include breakpoint('tablet') {
    align-items: flex-end;
    width: fit-content;
  }
}

.social {
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
}

.socialItem {
  height: 30px;
  margin: 0 10px;
}

.nav {
  display: flex;
  flex-direction: column;

  @include breakpoint('tablet') {
    flex-direction: row;
    order: 1;
  }
}

.links {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;

  @include breakpoint('tablet') {
    margin-bottom: 0;
    margin-right: 30px;
  }
}

.linksItem {
  color: color('gray');
  text-decoration: none;

  @include hover() {
    color: var(--color-primary);
  }

  &:not(:last-child) {
    margin-right: 30px;
  }
}

.copyright {
  margin-bottom: 14px;

  @include breakpoint('tablet') {
    margin-bottom: 0;
  }
}

.info {
  @include breakpoint('tablet') {
    margin-bottom: 12px;
    order: 0;
  }
}

.age {
  border: 2px solid color('gray');
  border-radius: 8px;
  color: color('gray');
  display: flex;
  font-size: 22px;
  font-weight: 500;
  height: 28px;
  padding: 5px 8px 0;
  width: fit-content;
}
</style>
