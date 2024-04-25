<script setup lang="ts">
  import router from "../router.ts"
</script>

<template>


  <div class="col-md-9 col-md-3 m-auto mt-3 p-5">

    <div class="col">
      <div class="card p-4">
        <h4 class="mt-3">Поиск хостов</h4>

        <form>

          <div class="mb-3  ">
            <label for="exampleInputEmail1" class="form-label">Логин</label>
            <input v-model="search_word" type="text" class="form-control" id="Login" aria-describedby="emailHelp">
          </div>

        </form>

        <button @click="Search" class="btn btn-primary col-3">Войти</button>

      </div>
    </div>

    <div class="card mt-3">

      <div class="card-header">Найденные хосты</div>
      <div class="card-body">

        <div v-for="a in my_hosts">

          <div class="row mt-3">
            <div class="col">Hostname: {{a['hostname']}}</div>
            <div class="col">
              <div v-if="a['online']==true">Status: alive💓</div>
              <div v-else>Status: death💀</div>
            </div>
            <div class="col"><a v-bind:href="a['hostname']"><button  class="btn btn-dark btn-sm">Перейти к хосту</button></a></div>
          </div>

        </div>

      </div>
    </div>
  </div>

</template>

<style scoped>

</style>

<script lang="ts">

  export default {
    data() {
      return {
        my_hosts: [],
        search_word: ""
      };
    },
    methods: {
      async GetHosts() {
        const response = await router.api.get(this.$MyUrl + '/api/Pc/GetAllPC');
        this.my_hosts = response.data;
      },
      async Search() {

        if (this.search_word == '') {
          this.GetHosts();
          return;
        }

        var search = this.search_word
        var response = await router.api.get(this.$MyUrl + '/api/Pc/SearchPc/' + search);

        this.my_hosts = response.data;
      }
    },
    mounted() {
      this.GetHosts();
    }
  }

</script>