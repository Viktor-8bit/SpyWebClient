<script setup lang="ts">


import mycustheader from "./components/mycustheader.vue"
import test from "./pages/test.vue"


</script>

<template>
  <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">

  <mycustheader></mycustheader>

  <router-view></router-view>

</template>

<style scoped>

</style>
