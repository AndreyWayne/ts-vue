<template>
  <div :class="[$style.attach]">
    <h2>H2 Таблица трансферов в Dota 2. Зима 2017‑2018</h2>
    <div :class="[$style.wrapper]">
      <table :class="[$style.table]">
        <thead>
          <tr :class="[$style.thead]">
            <th>Команда</th>
            <th>Ушли</th>
            <th>Пришли</th>
            <th>Состав</th>
          </tr>
        </thead>
        <tbody :class="[$style.tbody]">
          <tr :class="[$style.row]">
            <td>
              <div :class="[$style.team]">
                <div :class="[$style.logo]">
                  <img src="~@/assets/images/team.png" alt="Virtus.pro">
                </div>
                <div>Effect</div>
              </div>
            </td>
            <td>
              <div :class="[$style.player]">
                <div :class="[$style.country]">
                  <svg-icon name="flags/ru" />
                </div>
                <div>n0tail</div>
              </div>
            </td>
            <td>
              <div :class="[$style.player]">
                <div :class="[$style.country]">
                  <svg-icon name="flags/kz" />
                </div>
                <div>MATUMBAMAN</div>
              </div>
            </td>
            <td>
              <div :class="[$style.player]">
                <div :class="[$style.country]">
                  <svg-icon name="flags/ru" />
                </div>
                <div>n0tail</div>
              </div>
              <div :class="[$style.player]">
                <div :class="[$style.country]">
                  <svg-icon name="flags/ua" />
                </div>
                <div>n1tail</div>
              </div>
              <div :class="[$style.player]">
                <div :class="[$style.country]">
                  <svg-icon name="flags/ua" />
                </div>
                <div>n2tail</div>
              </div>
              <div :class="[$style.player]">
                <div :class="[$style.country]">
                  <svg-icon name="flags/ua" />
                </div>
                <div>n3tail</div>
              </div>
              <div :class="[$style.player]">
                <div :class="[$style.country]">
                  <svg-icon name="flags/ua" />
                </div>
                <div>n4tail</div>
              </div>
            </td>
          </tr>
          <tr :class="[$style.row]">
            <td>
              <div :class="[$style.team]">
                <div :class="[$style.logo]">
                  <img src="~@/assets/images/team.png" alt="Virtus.pro">
                </div>
                <div>Effect</div>
              </div>
            </td>
            <td>
              <div :class="[$style.player]">
                <div :class="[$style.country]">
                  <svg-icon name="flags/ru" />
                </div>
                <div>n0tail</div>
              </div>
            </td>
            <td>
              <div :class="[$style.player]">
                <div :class="[$style.country]">
                  <svg-icon name="flags/kz" />
                </div>
                <div>MATUMBAMAN</div>
              </div>
            </td>
            <td>
              <div :class="[$style.player]">
                <div :class="[$style.country]">
                  <svg-icon name="flags/ru" />
                </div>
                <div>n0tail</div>
              </div>
              <div :class="[$style.player]">
                <div :class="[$style.country]">
                  <svg-icon name="flags/ua" />
                </div>
                <div>n1tail</div>
              </div>
              <div :class="[$style.player]">
                <div :class="[$style.country]">
                  <svg-icon name="flags/ua" />
                </div>
                <div>n2tail</div>
              </div>
              <div :class="[$style.player]">
                <div :class="[$style.country]">
                  <svg-icon name="flags/ua" />
                </div>
                <div>n3tail</div>
              </div>
              <div :class="[$style.player]">
                <div :class="[$style.country]">
                  <svg-icon name="flags/ua" />
                </div>
                <div>n4tail</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ArticleTable extends Vue {}
</script>

<style lang="scss" module>
.attach {
  display: flex;
  flex-direction: column;
  font-family: Roboto, serif;
  margin-bottom: 30px;
}

.wrapper {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  overflow-x: auto;
  width: 100%;
}

.table {
  border-radius: 4px;
  min-width: 598px;
  overflow: hidden;
  width: 100%;
}

.thead {
  height: 40px;
  text-align: left;
}

.tbody {
  font-size: 14px;
}

th {
  padding: 12px 14px !important;

  &:first-child {
    padding-left: 20px !important;
  }

  &:not(:last-child) {
    border-right: 2px solid var(--color-primary--color-text-gray);

    transition: border-right $transition-mode;
    will-change: border-right;
  }
}

.row {
  &:not(:last-child) {
    border-bottom: 2px solid var(--color-primary--color-text-gray);

    transition: border-bottom $transition-mode;
    will-change: border-bottom;
  }
}

td {
  padding: 12px 14px !important;

  &:first-child {
    padding-left: 20px !important;
  }

  &:not(:last-child) {
    border-right: 2px solid var(--color-primary--color-text-gray);

    transition: border-right $transition-mode;
    will-change: border-right;
  }
}

.player {
  align-items: center;
  display: flex;
  line-height: 20px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
}

.country {
  height: 14px;
  margin-right: 8px;
  width: 20px;
}

.team {
  align-items: center;
  display: flex;
}

.logo {
  img {
    height: 20px;
    margin-right: 8px;
    width: 20px;
  }
}
</style>
