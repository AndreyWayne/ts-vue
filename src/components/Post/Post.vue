<template>
  <!-- POST -->
  <component
    :is="currentComponent"
    :class="[$style.post, isLoading && $style.isLoading]"
    :event="currentEvent"
    :to="currentURL"
  >
    <!-- CONTAINER -->
    <div :class="[$style.container]">
      <template v-if="isLoading">
        <!-- DISCIPLINE -->
        <div :class="[$style.discipline]" />

        <!-- BODY -->
        <div :class="[$style.body]">
          <!-- HEADER -->
          <header :class="[$style.header]">
            <!-- TITLE -->
            <h3 :class="[$style.title]" />
          </header>

          <!-- CONTENT -->
          <div :class="[$style.content]">
            <!-- TEXT -->
            <p :class="[$style.text]" />

            <!-- IMAGE -->
            <div :class="[$style.image]" />
          </div>

          <!-- FOOTER -->
          <footer :class="[$style.footer]">
            <!-- PUBLISHEDAT -->
            <div :class="[$style.publishedAt]" />

            <!-- TAGS -->
            <div :class="[$style.tags]">
              <!-- TAG -->
              <div :class="[$style.tag]" />

              <!-- TAG -->
              <div :class="[$style.tag]" />
            </div>
          </footer>
        </div>
      </template>

      <template v-else>
        <!-- DISCIPLINE -->
        <div :class="[$style.discipline]" />

        <!-- BODY -->
        <div :class="[$style.body]">
          <!-- HEADER -->
          <header :class="[$style.header]">
            <!-- TITLE -->
            <h3 v-if="currentAttributes.title" :class="[$style.title]">
              {{ currentAttributes.title }}
            </h3>

            <!-- COMMENTS -->
            <div v-if="post.comments" :class="[$style.comments]">
              <svg-icon name="comments" />
              <span>{{ post.comments }}</span>
            </div>
          </header>

          <!-- CONTENT -->
          <div :class="[$style.content]">
            <!-- TEXT -->
            <p v-if="currentAttributes.leadText" :class="[$style.text]">
              {{ currentAttributes.leadText }}
            </p>

            <!-- IMAGE -->
            <div v-if="currentAttributes.coverMedia" :class="[$style.image]">
              <img :src="currentAttributes.coverMedia.image">
            </div>
          </div>

          <!-- FOOTER -->
          <footer :class="[$style.footer]">
            <!-- PUBLISHEDAT -->
            <div v-if="publishedAt" :class="[$style.publishedAt]">
              <svg-icon name="time" />
              <span>{{ publishedAt }}</span>
            </div>

            <!-- TAGS -->
            <!-- Using "object" with dummy type to bypass nested links. -->
            <object v-if="(post.tags || []).length" type="owo/uwu" :class="[$style.tags]">
              <!-- TAG -->
              <nuxt-link v-for="tag in post.tags" :key="tag.id" :to="tag.slug" :class="[$style.tag]">
                <span>{{ tag.title }}</span>
              </nuxt-link>

              <!-- SPONSOR -->
              <nuxt-link v-if="post.sponsor" :class="[$style.tag, $style.sponsor]" :to="post.sponsor.url">
                <img :src="post.sponsor.image">
              </nuxt-link>
            </object>
          </footer>
        </div>
      </template>
    </div>
  </component>
</template>

<script lang="ts">
import { Material } from '@cybersport/specifications'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Post extends Vue {
  @Prop({ type: Boolean })
  readonly isLoading!: boolean

  @Prop({ required: true, type: Object })
  readonly post!: Material

  /**
   * Returns current attributes.
   */
  get currentAttributes () {
    return this.post?.attributes || {}
  }

  /**
   * Returns current component name.
   */
  get currentComponent (): string {
    return this.isLoading ? 'div' : 'nuxt-link'
  }

  /**
   * Returns current component name.
   */
  get currentURL () {
    return this.currentAttributes.slug || ''
  }

  /**
   * Returns current link event.
   */
  get currentEvent () {
    if (this.isLoading) {
      return ''
    }

    if (this.currentURL) {
      return 'click'
    }

    return ''
  }

  /**
   * Returns formatted "post.published_at".
   */
  get publishedAt () {
    const unix = Number(this.currentAttributes.publishedAt) * 1000

    if (isNaN(unix)) {
      return ''
    }

    return this.$dayjs(unix).fromNow()
  }
}
</script>

<style lang="scss" module>
/* -- POST -- */
.post {
  align-items: center;
  background-color: var(--color-layer);

  border: 1px solid var(--color-border-transparent);
  border-radius: 4px;

  color: var(--color-text);
  cursor: pointer;

  display: flex;
  outline: none;

  padding: 10px;
  text-decoration: none;

  transition: background-color $transition-mode, border $transition-mode, box-shadow $transition, color $transition-mode;
  will-change: background-color, border, box-shadow, color;

  @include hover() {
    box-shadow: 0 3px 8px transparentize(black, 0.8);
    color: var(--color-text);

    .discipline {
      opacity: 1;
    }
  }
}

/* -- CONTAINER -- */
.container {
  display: flex;

  margin: 0 auto;
  max-width: 790px;

  width: 100%;
}

/* -- BODY -- */
.body {
  display: flex;

  flex: 1;
  flex-direction: column;
}

/* -- DISCIPLINE -- */
.discipline {
  background-color: transparentize(black, 0.8);
  border-radius: 2px;

  display: inline-flex;
  height: 20px;

  margin-right: 10px;
  opacity: 0.5;

  transition: opacity $transition;

  width: 20px;
  will-change: opacity;

  @include breakpoint('tablet') {
    height: 40px;

    margin-right: 20px;
    width: 40px;
  }
}

/* -- HEADER -- */
.header {
  margin-top: -4px;
}

/* -- TITLE -- */
.title {
  display: inline;

  font-size: 16px;
  line-height: 22px;

  margin: 0;
  padding: 0;

  @include breakpoint('tablet') {
    font-size: 18px;
    line-height: 24px;
  }
}

/* -- COMMENTS -- */
.comments {
  align-items: center;
  color: var(--color-text-light);

  display: inline-block;
  font-size: 12px;

  transition: color $transition-mode;
  will-change: color;
}

/* -- COMMENTS:SVG -- */
.comments svg {
  margin-right: 2px;

  position: relative;
  top: 3px;
}

/* -- CONTENT -- */
.content {
  display: flex;
  flex-direction: column;

  margin-left: -30px;

  @include breakpoint('mobile', 'wide') {
    margin-left: 0;
  }
}

/* -- TEXT -- */
.text {
  font-size: 14px;
  line-height: 20px;

  margin: 0;
  margin-top: 9px;

  padding: 0;
}

/* -- IMAGE -- */
.image {
  display: flex;
  height: 0;

  margin-top: 10px;
  padding-bottom: 66.67%;

  position: relative;
  width: 100%;
}

/* -- IMAGE:IMG -- */
.image > img {
  height: 100%;

  object-fit: cover;
  position: absolute;

  width: 100%;
}

/* -- FOOTER -- */
.footer {
  align-items: center;
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;

  margin-left: -30px;

  @include breakpoint('mobile', 'wide') {
    margin-left: 0;
  }
}

/* -- PUBLISHEDAT -- */
.publishedAt {
  align-items: center;

  color: var(--color-text-light);
  display: flex;

  font-size: 12px;

  margin-right: 20px;
  margin-top: 14px;

  transition: color $transition-mode;
  will-change: color;
}

/* -- PUBLISHEDAT:SVG -- */
.publishedAt svg {
  margin-right: 6px;
}

/* -- TAGS -- */
.tags {
  align-items: center;
  display: flex;

  flex-wrap: wrap;
}

/* -- TAG -- */
.tag {
  border: 1px solid var(--color-text-lighter);
  border-radius: 3px;

  color: color('primary');
  font-size: 12px;

  margin-top: 10px;
  outline: none;

  padding: 4px 8px;
  text-decoration: none;

  transition: border $transition-mode;
  will-change: border;

  @include hover() {
    border-color: color('primary');
  }
}

/* -- TAG:SPONSOR */
.tag.sponsor {
  border: 0;
  padding: 0;
}

/* -- TAG:SPONSOR:IMG */
.tag.sponsor img {
  height: 20px;
}

/* -- TAG::NOT::LAST-CHILD -- */
.tag:not(:last-child) {
  margin-right: 10px;
}

/* -- ISLOADING */
.isLoading {
  box-shadow: none !important;
  cursor: default;
}

/* -- ISLOADING:DISCIPLINE */
.isLoading .discipline {
  opacity: 1;
}

/* -- ISLOADING:HEADER */
.isLoading .header {
  margin: 0;
}

/* -- ISLOADING:HEADER */
.isLoading .discipline {
  @include loading();
}

/* -- ISLOADING:TITLE */
.isLoading .title {
  @include loading();
  display: flex;

  height: 16px;
  width: 75%;

  @include breakpoint('tablet') {
    height: 18px;
  }
}

/* -- ISLOADING:TEXT */
.isLoading .text {
  @include loading();
  display: flex;

  height: 14px;
  width: 100%;
}

/* -- ISLOADING:IMAGE */
.isLoading .image {
  @include loading();

  display: flex;
  height: 14px;

  padding: 0;
  width: 90%;
}

/* -- ISLOADING:PUBLISHEDAT */
.isLoading .publishedAt {
  @include loading();
  display: flex;

  height: 14px;
  width: 100px;
}

/* -- ISLOADING:TAG */
.isLoading .tag {
  @include loading();

  border: 0;

  display: flex;
  height: 23px;

  padding: 0;
  width: 70px;
}
</style>
