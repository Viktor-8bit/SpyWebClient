<script setup lang="ts">

import ChartJSChart from "../ChartJSChart.vue"
import axios from 'axios';
import vue from 'vue';

</script>

<template>


  <div class="row p-5 w-75">

    <ChartJSChart :clable="time" :cdata="cpu" :graphlabel="'Загрузка процессора %'"  :elementId="'_CPU'"></ChartJSChart>
    <ChartJSChart :clable="time" :cdata="ram" :graphlabel="'Свободная память mb'"  :elementId="'_RAM'"></ChartJSChart>

  </div>

</template>

<script lang="ts">
    export default {
      data() {
        return {
          hostname: this.$route.params.hostname,
          ram: [],
          cpu: [],
          time: ['0', '0', '0', '0', '0' ],
          updated: false,
        }
      },
      methods: {

        async getdata() {
          setInterval(() => {
               axios.get(this.$MyUrl + '/api/Utilization/GetFromPc/' + this.hostname + '/1/1')
                  .then(response => {
                    this.ram = []
                    this.cpu = []
                    this.time = []

                    let cpu_list = []
                    let ram_list = []
                    let time_list = []

                    for(let i = 0; i < response.data.length; i++ ) {
                      let cpu = response.data[i]['cpU_load']
                      let ram = response.data[i]['ram']
                      let time = response.data[i]['date']

                      cpu_list.push(cpu)
                      ram_list.push(ram)
                      time_list.push(time)

                      //console.log(cpu, ram, time)
                    }

                    this.ram = ram_list
                    this.cpu = cpu_list
                    this.time = time_list
                    this.updated = !this.updated;

                  })
                  .catch(error => {
                    // Обработка ошибки
                    console.error(error);
                  });
            }, 5000);
          },
        async getdatafirsttime() {

            axios.get('http://localhost:8000/api/Utilization/GetFromPc/' + this.hostname + '/1/1')
                .then(response => {
                  this.ram = []
                  this.cpu = []
                  this.time = []

                  let cpu_list = []
                  let ram_list = []
                  let time_list = []

                  for(let i = 0; i < response.data.length; i++ ) {
                    let cpu = response.data[i]['cpU_load']
                    let ram = response.data[i]['ram']
                    let time = response.data[i]['date']

                    cpu_list.push(cpu)
                    ram_list.push(ram)
                    time_list.push(time)

                    //console.log(cpu, ram, time)
                  }

                  this.ram = ram_list
                  this.cpu = cpu_list
                  this.time = time_list
                  this.updated = !this.updated;

                })
                .catch(error => {
                  // Обработка ошибки
                  console.error(error);
                });
        },
      },
      mounted() {
        this.getdatafirsttime();
        this.getdata();
      }
    }
</script>