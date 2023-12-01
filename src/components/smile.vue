<script setup lang="ts">
  import { GameControllerOutline, GameController } from '@vicons/ionicons5'
  import { NIcon } from 'naive-ui'
</script>

<template>
  <n-icon size="40">
    <game-controller-outline />
  </n-icon>
  <n-icon size="40" color="#0e7a0d">
    <game-controller />
  </n-icon>
  <n-icon size="40" :component="GameController" />
</template>

<script lang="ts">

</script>


<style scoped>

</style>