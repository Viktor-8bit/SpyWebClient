<script setup lang="ts">
    import { createApp, ref, defineComponent } from 'vue'
    import router from '../../router.ts';

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

    import axios from "axios";

    export default {
      data() {
        return {
          hostname: this.$route.params.hostname,
          infohost: []
        }
      },
      methods: {
        async getinfoabouthost() {
          console.log(router.api.head);
          let response = await router.api.get(this.$MyUrl + '/api/Pc/InfoPc/' + this.hostname);
          this.infohost = response.data;
        },
        async lastinfoabuthost() {
          setInterval(async () => {
            let response = await router.api.get(this.$MyUrl + '/api/Pc/InfoPc/' + this.hostname);
            this.infohost = response.data;
          }, 20000);

        }
      },
      mounted() {
        this.getinfoabouthost();
        this.lastinfoabuthost();
        //const hostname = this.$route.params.hostname;
      }
    }
</script>