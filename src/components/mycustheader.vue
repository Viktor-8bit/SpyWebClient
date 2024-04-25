<script setup lang="ts" >

import axios from 'axios';
import vue from 'vue';

</script>

<template>

  <ul class="nav">

    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/">Главная</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="/search">Поиск</a>
    </li>

      <li class="nav-item" v-if="!jwt">
        <a class="nav-link" href="/login">Вход</a>
      </li>

      <li class="nav-item" v-if="!jwt">
        <a class="nav-link" href="/registration">Регистрация</a>
      </li>


      <li class="nav-item" v-if="jwt">
        <a class="nav-link" :href="'/user/' + getUsernameFromJwtToken(jwt!)">{{getUsernameFromJwtToken(jwt!)}}</a>
      </li>

      <li class="nav-item" v-if="jwt">
        <a class="nav-link" @click="logout" href="#">Выйти</a>
      </li>

  </ul>
</template>

<script lang="ts">

  export default {
    data() {
      return {
        jwt: localStorage.getItem('jwt_token')
      }
    },

    methods: {
      logout() {
        console.log("logout")
        localStorage.removeItem('jwt_token');
        window.location.href = '/login'
      },
      getUsernameFromJwtToken(token: String) {
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          const usernameClaim = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name";
          return payload[usernameClaim];
        } catch (error) {
          console.error('Error while decoding JWT token:', error);
          return null;
        }
      }

  }

  }

</script>


<style scoped>

</style>