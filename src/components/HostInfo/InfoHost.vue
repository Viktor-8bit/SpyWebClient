<script setup lang="ts">
    import { createApp, ref, defineComponent } from 'vue'
    import axios from 'axios';

</script>

<template>
  <div class="col">
    <div class="card p-2">
      <h4 class="mt-3">{{infohost['hostname']}}</h4>

      <div v-if="infohost['online']==true">Status: alive💓</div>
      <div v-else class="mt-3">Status: death💀</div>

    </div>
  </div>
</template>

<style scoped>

</style>

<script lang="ts">

    export default {
      data() {
        return {
          hostname: this.$route.params.hostname,
          infohost: []
        }
      },
      methods: {
        async getinfoabouthost() {
          const response = await axios.get(this.$MyUrl + '/api/Pc/InfoPc/' + this.hostname);
          this.infohost = response.data;
          console.log(this.infohost)
          console.log(this.hostname)
        }
      },
      mounted() {
        this.getinfoabouthost();
        //const hostname = this.$route.params.hostname;
      }
    }
</script>