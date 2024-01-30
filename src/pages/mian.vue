<script setup lang="ts">
    import hostlist from '../components/hostslist.vue'
</script>

<template>
    <div class="p-5">
      <h3>Главная страница</h3>

      <div class="p-3">
        <div class="card">
          <div class="card-header">Список хостов</div>
          <div class="card-body">
            <hostlist></hostlist>
          </div>
        </div>

      </div>


    </div>
</template>

<style scoped>

</style>

