<script setup lang="ts" >

  import {
           NGrid, NGi, NIcon, NAvatar, NBadge
  } from 'naive-ui'
  import { Home,
           Search, AnalyticsOutline,
           PersonCircle, NotificationsCircleOutline
  } from '@vicons/ionicons5'

</script>

<template>

  <n-grid :x-gap="12" :cols="4" layout-shift-disabled v-if="!isSmallScreen">
      <n-gi></n-gi>

      <n-gi :span="2">
      <ul class="list">
        <n-grid :x-gap="12" :cols="4" layout-shift-disabled>
          <n-gi>
            <li>
              <n-icon class="ico-header" size="20" :component="Home" />
              <a href="/main/">Главная</a>
            </li>
          </n-gi>

          <n-gi>
            <li>
              <n-icon class="ico-header" size="20" :component="Search"/>
              <a href="/search/">Поиск</a>
            </li>
          </n-gi>

          <n-gi>
            <li>
              <n-icon class="ico-header" size="20" :component="AnalyticsOutline"/>
              <a href="/resources/">Заметки</a>
            </li>
          </n-gi>

          <n-gi>
            <li>
              <n-badge :value='notificationcount'>
                <n-avatar
                    round
                    size="small">
                  <n-icon class="ico-header" size="25" :component="NotificationsCircleOutline"/>
                </n-avatar>
              </n-badge>
            </li>
          </n-gi>

        </n-grid>
      </ul>
      </n-gi>

    <n-gi></n-gi>

  </n-grid>

  <div v-if="isSmallScreen">

      <ul class="list">
        <n-grid :x-gap="12" :cols="4" class="mobile-head">
          <n-gi>
            <li>
              <n-icon class="ico-header" size="20" :component="Home" />
              <a href="/main/">Главная</a>
            </li>
          </n-gi>

          <n-gi>
            <li>
              <n-icon class="ico-header" size="20" :component="Search"/>
              <a href="/search/">Поиск</a>
            </li>
          </n-gi>

          <n-gi>
            <li>
              <n-icon class="ico-header" size="20" :component="AnalyticsOutline"/>
              <a href="/resources/">Заметки</a>
            </li>
          </n-gi>

          <n-gi>
            <li>
              <n-badge :value="notificationcount">
                <n-avatar
                    round
                    size="small">
                  <n-icon class="ico-header" size="20" :component="NotificationsCircleOutline"/>
                </n-avatar>
              </n-badge>
            </li>
          </n-gi>
        </n-grid>
      </ul>

  </div>

</template>

<script lang="ts">
export default {
  data() {
    return {
      isSmallScreen: false,
      notificationcount: 1,
    };
  },
  mounted() {
    const mediaQuery = window.matchMedia('(max-width: 580px)');

    this.isSmallScreen = mediaQuery.matches;

    mediaQuery.addEventListener('change', (event) => {
      this.isSmallScreen = event.matches;
    });
  },
};
</script>


<style scoped>

  .list {
    padding: 0;
    display: flex;
  }

  .ico-header {
    align-self: center;
  }

  .list li:hover {
    color: #4899dc; /* Set the color on hover */
    text-decoration: underline;
  }


  @media (max-width: 580px) {
    .list a {
      font-size: 1.5vh;
      text-decoration: none;
      color: inherit;
    }
    .list li {
      display: flex;
      margin-left: 5%;
      color: #676767;
    }
  }

  @media (min-width: 580px) {
    .list a {
      font-size: 2vh;
      text-decoration: none;
      color: inherit;
    }
    .list li {
      display: flex;
      color: #676767;
    }
  }

</style>