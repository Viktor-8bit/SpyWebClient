<script setup lang="ts">

</script>





<template>

  <div id="amoguslist">

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

</template>

<script lang="ts">


import { createApp, ref, defineComponent } from 'vue'
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      my_hosts: []
    }
  },
  methods: {
    async GetHosts() {
      const response = await axios.get('http://localhost:8000/api/Pc/GetAllPC');
      console.log(response.data);
      this.my_hosts = response.data;
    }
  },
  mounted() {
    this.GetHosts();
  }
});



</script>