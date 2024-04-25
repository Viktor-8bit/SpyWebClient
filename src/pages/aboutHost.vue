<script setup lang="ts">
      import InfoHost from '../components/HostInfo/InfoHost.vue'
      import utilizationHost from '../components/HostInfo/utilizationHost.vue'
      import Process from '../components/HostInfo/Processes.vue'
      import 'bootstrap/dist/js/bootstrap.min.js';
      import 'bootstrap/dist/css/bootstrap.css';

</script>

<template>

  <div class="row justify-content-center">

    <div class="col col-lg-4 col-9 mt-5 mr-3 ml-3">
      <InfoHost></InfoHost>
    </div>

    <div class="col col-lg-7 col-md-9 p-5">

      <ul class="nav nav-pills" id="pills-tab" role="tablist">

        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Утилизация</button>
        </li>

        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Процессы</button>
        </li>

      </ul>
      <div class="tab-content p-4" id="pills-tabContent">

        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
          <utilizationHost></utilizationHost>
        </div>

        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
          <Process></Process>
        </div>

      </div>

    </div>

  </div>


</template>

<style scoped>

</style>