<script setup lang="ts">
      import InfoHost from '../components/HostInfo/InfoHost.vue'
      import utilizationHost from '../components/HostInfo/utilizationHost.vue'
      import Process from '../components/HostInfo/Processes.vue'
      import 'bootstrap/dist/js/bootstrap.min.js';

</script>

<template>

  <div class="row justify-content-center">

    <div class="col col-md-3 mt-5 ms-md-5">
      <InfoHost></InfoHost>
    </div>

    <div class="col col-md-5 p-5">

      <ul class="nav nav-pills" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Утилизация</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Процессы</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Скриншоты</button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">

        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
          <utilizationHost></utilizationHost>
        </div>

        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
          <Process></Process>
        </div>

        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">

        </div>

      </div>

    </div>

  </div>


</template>

<style scoped>

</style>