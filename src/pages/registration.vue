
<script setup lang="ts">

import vue from 'vue';

</script>

<template>

  <div class="row">
    <div class="p-5 m-auto col-md-5 col-sm-10">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Логин</label>
          <input v-model="login" type="text" class="form-control" id="myLogin" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Пароль</label>
          <input v-model="password" type="password" class="form-control" id="myPassword">
        </div>
      </form>
      <button @click="send_data" class="btn btn-primary">Зарегистрироваться</button>
    </div>
  </div>


</template>

<style scoped>

</style>

<script lang="ts">
  import axios from 'axios';

  export default {
    data() {
      return {
          login: "",
          password: ""
        };
    },
    methods: {
      async send_data() {

        await axios.post(this.$MyUrl + '/api/Auth/Registration/',
         {
              Login: this.login,
              Password: this.password
          }
        ).then(resp => {
          console.log(resp.status)
        })
      }

    }
  }
</script>