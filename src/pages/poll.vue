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
          <h1 :class="[$style.titleSec]">
            Мэддисон взорвался зря — обзор Call of Duty: Warzone
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
        <div :class="[$style.article]">
          <p>
            10 марта Activision выпустила Call of Duty: Warzone — бесплатную «королевскую битву» на движке прошлогодней
            Modern Warfare. За ночь я провёл в ней около пяти часов, из-за чего едва не проспал рабочую смену. Чем же
            меня так зацепила новая «королевская битва» и стоит ли она вашего внимания?
          </p>

          <PollText :question="firstPoll" />
          <PollText :question="secondPoll" />

          <PollPhoto :question="thirdPoll" :is-active="true" />
          <PollPhoto :question="fourPoll" />

          <PollVideo :question="fifthPoll" />
          <PollVideo :question="sixthPoll" />

          <PollQuiz :question="seventhPoll" />

          <PollSwipe :question="eigthPoll" />

          <!--<div :class="[$style.photo]">
            <div :class="[$style.photoHeader]">
              <div :class="[$style.title]">
                Xайлайт 2019 года — это
              </div>
              <div :class="[$style.notice]">
                Можно выбрать не более 2-х ответов
              </div>
            </div>
            <div :class="[$style.photoListDouble]">
              <div :class="[$style.photoItem]">
                <div :class="[$style.photoImg]">
                  <img src="~/assets/images/pic2.jpg" alt="Вариант 1" />
                  <div :class="[$style.photoPercent]">
                    0%
                  </div>
                </div>
                <div :class="[$style.photoText]">
                  Вариант 1
                </div>
              </div>
              <div :class="[$style.photoItem, $style.photoItemActive]">
                <div :class="[$style.photoImg]">
                  <img src="~/assets/images/pic2.jpg" alt="Вариант 1" />
                  <div :class="[$style.photoPercent]">
                    100%
                  </div>
                </div>
                <div :class="[$style.photoText]">
                  Вариант 2
                </div>
              </div>
              <div :class="[$style.photoItem]">
                <div :class="[$style.photoImg]">
                  <img src="~/assets/images/pic2.jpg" alt="Вариант 1" />
                  <div :class="[$style.photoPercent]">
                    0%
                  </div>
                </div>
                <div :class="[$style.photoText]">
                  Вариант 3
                </div>
              </div>
              <div :class="[$style.photoItem]">
                <div :class="[$style.photoImg]">
                  <img src="~/assets/images/pic2.jpg" alt="Вариант 1" />
                  <div :class="[$style.photoPercent]">
                    0%
                  </div>
                </div>
                <div :class="[$style.photoText]">
                  Вариант 4
                </div>
              </div>
            </div>
            <div :class="[$style.photoFooter]">
              <div :class="[$style.vote, $style.voteBold]">
                Голосов: 710
              </div>
            </div>
          </div>-->
          <MaterialFooter />
        </div>
      </div>
    </div>
    <aside :class="[$style.aside]" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import MaterialFooter from '@/components/MaterialFooter'
import Tags from '@/components/Tags'
import Button from '@/components/Button'

import PollText from '@/components/PollText'
import PollPhoto from '@/components/PollPhoto'
import PollVideo from '@/components/PollVideo'
import PollQuiz from '@/components/PollQuiz'
import PollSwipe from '@/components/PollSwipe'

import WidgetNews from '@/components/WidgetNews'
import WidgetPlayer from '@/components/WidgetPlayer'
import WidgetTeam from '@/components/WidgetTeam'
import WidgetTournament from '@/components/WidgetTournament'

@Component({
  components: {
    MaterialFooter,
    Tags,
    Button,

    PollText,
    PollPhoto,
    PollVideo,
    PollQuiz,
    PollSwipe,

    WidgetNews,
    WidgetPlayer,
    WidgetTeam,
    WidgetTournament
  }
})
export default class PollPage extends Vue {
  get firstPoll (): Object {
    return {
      title: 'Какое место Virtus.pro на The International 2020 вас не разочарует?',
      input: 'radio',
      radio: true,
      checkbox: false,
      list: [
        {
          position: 1,
          title: 'Только первое'
        },
        {
          position: 2,
          title: 'Не ниже ТОР–3'
        },
        {
          position: 3,
          title: 'Согласен на ТОР–5-6'
        },
        {
          position: 4,
          title: 'Согласен на ТОР–5-6'
        },
        {
          position: 5,
          title: 'ТОР–12, как в прошлом году'
        },
        {
          position: 6,
          title: 'Главное выграть у NaVi'
        },
        {
          position: 7,
          title: 'Главное — попасть на The International'
        }
      ]
    }
  }

  get secondPoll (): Object {
    return {
      title: 'Какое место Virtus.pro на The International 2020 вас не разочарует?',
      input: 'checkbox',
      radio: false,
      checkbox: true,
      list: [
        {
          position: 1,
          title: 'Только первое'
        },
        {
          position: 2,
          title: 'Не ниже ТОР–3'
        },
        {
          position: 3,
          title: 'Согласен на ТОР–5-6'
        },
        {
          position: 4,
          title: 'Согласен на ТОР–5-6'
        },
        {
          position: 5,
          title: 'ТОР–12, как в прошлом году'
        },
        {
          position: 6,
          title: 'Главное выграть у NaVi'
        },
        {
          position: 7,
          title: 'Главное — попасть на The International'
        }
      ]
    }
  }

  get thirdPoll (): Object {
    return {
      title: 'Лучший киберспортсмен 2019 года — это',
      input: 'photo',
      type: 'triple',
      list: [
        {
          position: 1,
          title: 'Вариант 1'
        },
        {
          position: 2,
          title: 'Вариант 2'
        },
        {
          position: 3,
          title: 'Вариант 3'
        },
        {
          position: 4,
          title: 'Вариант 4'
        },
        {
          position: 5,
          title: 'Вариант 5'
        },
        {
          position: 6,
          title: 'Вариант 6'
        },
        {
          position: 7,
          title: 'Вариант 7'
        },
        {
          position: 8,
          title: 'Вариант 8'
        },
        {
          position: 9,
          title: 'Вариант 9'
        }
      ]
    }
  }

  get fourPoll (): Object {
    return {
      title: 'Xайлайт 2019 года — это',
      input: 'photo',
      type: 'double',
      list: [
        {
          position: 1,
          title: 'Вариант 1'
        },
        {
          position: 2,
          title: 'Вариант 2'
        },
        {
          position: 3,
          title: 'Вариант 3'
        },
        {
          position: 4,
          title: 'Вариант 4'
        }
      ]
    }
  }

  get fifthPoll (): Object {
    return {
      title: 'Xайлайт 2019 года — это',
      input: 'video',
      type: 'one',
      list: [
        {
          position: 1,
          title: 'Невероятные - 5 от S1mple в игре с BiG'
        },
        {
          position: 2,
          title: 'Невероятные - 5 от S1mple в игре с BiG'
        }
      ]
    }
  }

  get sixthPoll (): Object {
    return {
      title: 'Xайлайт 2019 года — это',
      input: 'video',
      type: 'double',
      list: [
        {
          position: 1,
          title: 'Невероятные - 5 от S1mple в игре с BiG'
        },
        {
          position: 2,
          title: 'Невероятные - 5 от S1mple в игре с BiG'
        }
      ]
    }
  }

  get seventhPoll (): Object {
    return {
      title: 'Много знаешь о киберспорте? Проверь себя!',
      input: 'quiz',
      type: 'double',
      list: [
        {
          position: 1,
          title: 'Где ты обычно смотришь игры?',
          list: [
            {
              position: 1,
              title: 'Только клиент игры может дать мне полную картину того, что меня интересует',
              notice: 'Верный ответ!'
            },
            {
              position: 2,
              title: 'Обычно захожу на Twitch — и в чатике посидеть, и матчи посмотреть'
            },
            {
              position: 3,
              title: 'Нет времени на трансляции, просто смотрю результаты на Cybersport.ru',
              notice: 'Неверный ответ!'
            }
          ]
        }
      ]
    }
  }

  get eigthPoll (): Object {
    return {
      title: 'Много знаешь о киберспорте? Проверь себя!',
      input: 'quiz',
      type: 'double',
      list: [
        {
          position: 1,
          title: 'Где ты обычно смотришь игры?',
          list: [
            {
              position: 1,
              title: 'Только клиент игры может дать мне полную картину того, что меня интересует',
              notice: 'Верный ответ!'
            },
            {
              position: 2,
              title: 'Обычно захожу на Twitch — и в чатике посидеть, и матчи посмотреть'
            },
            {
              position: 3,
              title: 'Нет времени на трансляции, просто смотрю результаты на Cybersport.ru',
              notice: 'Неверный ответ!'
            }
          ]
        }
      ]
    }
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
}

.main {
  width: 100%;

  @include breakpoint('desktop') {
    margin-right: 20px;
    max-width: 640px;
  }

  @include breakpoint('desktop', 'wide') {
    max-width: 970px;
  }
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
    padding: 35px 15px 35px 22px;
  }

  @include breakpoint('desktop', 'wide') {
    padding: 35px 110px;
  }
}

.aside {
  width: 310px;
}

.headerSec > .tags {
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

.titleSec {
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

/* Poll */

.isOrange {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3E%3Ccircle cx='9' cy='9' r='8' stroke='%23FF6F22' stroke-width='2'/%3E%3C/svg%3E");

  @include hover() {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19' fill='none'%3E%3Ccircle cx='9' cy='9.02979' r='8' stroke='%23FF6F22' stroke-width='2'/%3E%3Ccircle cx='9' cy='9' r='4' fill='%23FF6F22'/%3E%3C/svg%3E");
  }

  &:checked {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19' fill='none'%3E%3Ccircle cx='9' cy='9.02979' r='8' stroke='%23FF6F22' stroke-width='2'/%3E%3Ccircle cx='9' cy='9' r='4' fill='%23FF6F22'/%3E%3C/svg%3E");
  }
}

.isGreen {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3E%3Ccircle cx='9' cy='9' r='8' stroke='%232ab651' stroke-width='2'/%3E%3C/svg%3E");

  @include hover() {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19' fill='none'%3E%3Ccircle cx='9' cy='9.02979' r='8' stroke='%232ab651' stroke-width='2'/%3E%3Ccircle cx='9' cy='9' r='4' fill='%232ab651'/%3E%3C/svg%3E");
  }

  &:checked {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19' fill='none'%3E%3Ccircle cx='9' cy='9.02979' r='8' stroke='%232ab651' stroke-width='2'/%3E%3Ccircle cx='9' cy='9' r='4' fill='%232ab651'/%3E%3C/svg%3E");
  }
}

.isRed {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3E%3Ccircle cx='9' cy='9' r='8' stroke='%23b6432a' stroke-width='2'/%3E%3C/svg%3E");

  @include hover() {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19' fill='none'%3E%3Ccircle cx='9' cy='9.02979' r='8' stroke='%23b6432a' stroke-width='2'/%3E%3Ccircle cx='9' cy='9' r='4' fill='%23b6432a'/%3E%3C/svg%3E");
  }

  &:checked {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19' fill='none'%3E%3Ccircle cx='9' cy='9.02979' r='8' stroke='%23b6432a' stroke-width='2'/%3E%3Ccircle cx='9' cy='9' r='4' fill='%23b6432a'/%3E%3C/svg%3E");
  }
}

.item {
  cursor: pointer;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 25px;
  }
}

.itemQuestion {
  display: flex;
  flex-direction: column;
}

.voteBold {
  font-size: 18px;
  font-weight: bold;
}
</style>
