<script setup lang="ts" xmlns="http://www.w3.org/1999/html">

    import 'bootstrap/dist/js/bootstrap.min.js';
    import 'bootstrap/dist/css/bootstrap.css';
    import router from '../router.ts'

</script>

<template>
  <div class="col-md-10 col-sm-8 m-auto mt-3">

    <div class="col">
      <div class="card p-4">
        <h4 class="mt-3">История входов для {{username}}:</h4>

      </div>


      <div class="card mt-3 p-4">

        <table class="">
          <thead>
            <tr>
              <th scope="col">ip</th>
              <th scope="col">время</th>
              <th scope="col">устройство</th>
            </tr>
          </thead>


          <tbody  v-for="al in auth_logs">
          <tr>
            <td class="col-2">{{al['ipAddress']}}</td>
            <td class="col-2">{{al['loginTime'].replace(regex, "$1 $2")}}</td>
            <td class="col-5">@{{al['userAgent']}}</td>
          </tr>
          </tbody>
        </table>

      </div>

    </div>
  </div>

</template>

<style scoped>

</style>



<script lang="ts">
  const regex = /(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}).*/;

  export default {
    data() {
      return {
        username: this.$route.params.username,
        auth_logs: []
      }
    },
    methods: {
      async loghistory() {
        let response = await router.api.get(this.$MyUrl + '/api/Auth/LoginHistory/' + this.username);
        this.auth_logs = response.data;
        console.log(this.auth_logs)
      }
    },
    mounted() {
      this.loghistory();
    },
  }
</script>
