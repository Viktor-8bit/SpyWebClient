<script setup lang="ts">
import route from "../../router.ts"
</script>

<template>

  <div class="row justify-content-center mt-5">

    <div class="col-3">
      <h3 > Фильтр по дате </h3>
    </div>

    <div class="col">
      <select class="mt-3 ms-5" v-model="selectedOption">
        <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
      </select>
    </div>



  </div>

  <table class="table table-hover mt-3">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Имя процесса</th>
      <th scope="col">Дата создания</th>
      <th scope="col">Pid процесса</th>
    </tr>
    </thead>
    <tbody v-for="proc in process">

        <tr>
          <th scope="row">{{proc['nubmer']}}</th>
          <td>{{proc['name']}}</td>
          <td>{{proc['date']}}</td>
          <td>{{proc['pid']}}</td>
        </tr>


    </tbody>

  </table>

</template>

<script lang="ts">
    import axios from "axios";
    const regex = /(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}).*/;

    export default {
        data() {
          return {
            selectedOption: '',
            hostname: this.$route.params.hostname,
            process: [],
            date: [],
            options: [],
            id: 0

          }
        },
      methods: {
          GetProcessData() {
            route.api.get(this.$MyUrl + '/api/Process/GetProcessMounted/' + this.hostname + '/0').then(response => {
                for(let i = 0; i < response.data.length; i++ ) {
                  let name = response.data[i]['name']
                  let date = response.data[i]['date']
                  let pid = response.data[i]['processId']

                  this.process.push( {'name': name, 'date': date.replace(regex, "$1 $2"), 'pid': pid, 'nubmer': i })
                }
              }
            );
          },

          GetActionsDate() {
            route.api.get(this.$MyUrl + '/api/Process/GetAllProcessActionDate/' + this.hostname ).then(response => {

              for(let i = 0; i < response.data.length; i++ ) {
                  this.options.push( { value: response.data[i], label:  response.data[i].replace(regex, "$1 $2") } )
              }
            });
          },

          // восстанавливаем по дате процессы
          GetProcessDataByDate() {
            route.api.get(this.$MyUrl + '/api/Process/GetProcessesByDate/' + this.hostname + '/' + this.selectedOption).then(response => {
              this.process = []
              for(let i = 0; i < response.data.length; i++ ) {
                let name = response.data[i]['name']
                let date = response.data[i]['date']
                let pid = response.data[i]['processId']

                this.process.push( {'name': name, 'date': date.replace(regex, "$1 $2"), 'pid': pid, 'nubmer': i })
              }
            })
          },
      },

      watch: {
        selectedOption() {
          console.log(this.selectedOption);
          this.GetProcessDataByDate();
        }
      },

      mounted() {
        this.GetProcessData();
        this.GetActionsDate();
      }
    }
</script>