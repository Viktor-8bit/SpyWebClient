<script setup lang="ts">
  import { Chart, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip, registerables } from 'chart.js';

</script>

<template>

      <div style="width: 1000px; height: 200px">
          <canvas v-bind:id="elementId">1</canvas>
      </div>

</template>

<style scoped>

</style>

<script lang="ts">


Chart.register(...registerables);
Chart.register(BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip);


      export default {
        props: {
          graphlabel: {
            type: String
          },
          cdata: {
            type: Array,
            default: [4, 46, 81, 81, 35, 66, 86, 44, 52, 41, 11, 6, 72, 22],
          },
          clable: {
            type: Array,
            default: [4, 46, 81, 81, 35, 66, 86, 44, 52, 41, 11, 6, 72, 22],
          },
          oncolor: {
            type: String,
          },
          elementId: {
            type: String,
          }
        },
        data() {
          return {
            mychart: Object,
          }
        },
        watch: {
          cdata() {
              this.mychart.data.datasets[0].data = this.cdata;
              this.mychart.data.datasets[0].label = this.graphlabel;
              this.mychart.data.labels = this.clable;
              this.mychart.update();
          }
        },
        mounted() {
          let canvas = document.getElementById(this.elementId) as HTMLCanvasElement;
          let ctx = canvas.getContext('2d')
          const _mychart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: this.clable,
              datasets: [{
                label: this.graphlabel,
                data: this.cdata,
                borderWidth: 1,
                backgroundColor: '#0d6efd', // Измените цвет фона графика
                borderColor: '#0d6efd' // Измените цвет границы графика
              }]
            },
            options: {
              responsive: true, // Настройка графика для полного размера
              maintainAspectRatio: false, // Отключение пропорционального масштабирования

              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    max: 100 // 100%
                  }
                }
              },
            }
          })
          Object.seal(_mychart);
          this.mychart = _mychart;
        }
    }

</script>