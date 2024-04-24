<script setup lang="ts">
  import axios from 'axios';
  import vue from 'vue';
</script>

<template>

  <div class="row">
    <div class="p-5 m-auto col-md-5 col-sm-10">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Логин</label>
          <input v-model="login" type="text" class="form-control" id="Login" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Пароль</label>
          <input v-model="password" type="password" class="form-control" id="Password">
        </div>
      </form>
      <button @click="login_data" class="btn btn-primary">Войти</button>
    </div>
  </div>

</template>

<style scoped>

</style>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      login: "",
      password: ""
    };
  },
  methods: {
    async login_data() {

      await axios.post(this.$MyUrl + '/api/Auth/Login/',
          {
            Login: this.login,
            Password: this.password
          }
      ).then(resp => {
        console.log(resp.status)
        if (resp.status == 200) {
          localStorage.setItem('jwt_token', resp.data);
        }
      })
    }
  }
}
</script>