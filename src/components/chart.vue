


<script setup lang="ts">
    import { Chart, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip, registerables } from 'chart.js';
</script>

<template>

  аомогус
  <div style="width: 800px; height: 400px">
    <canvas id="amgusgpraph" >1</canvas>
  </div>

</template>

<script lang="ts">


export default {
  mounted() {
    Chart.register(...registerables);
    Chart.register(BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip);
    // Ваш код, который должен выполниться после загрузки HTML
    const canvas1 = document.getElementById('amgusgpraph') as HTMLCanvasElement;
    const ctx = canvas1.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
        data: {
        labels: [ '2001', '2002', '2003', '2004', '2005', '2006', '2007'],
          datasets: [{
          label: '# Распределение по датам',
            data: [65, 59, 80, 81, 56, 55, 40],
      }]
    }
    });
  }
}



</script>



<style scoped>

</style>

