<script>
import http from '../axiosHttp';
import VueApexCharts from 'vue3-apexcharts';
import util from '../assets/js/util';

export default {
    components: {
      apexChart: VueApexCharts
    },

    data(){
      return {
        series: [{
          name: 'Users',
          data: []
        }],
        chartOptions: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          title: {
            text: 'Capsim Quiz Score'
          },
          xaxis: {
            categories: ['100% - 90%', '90% - 80%', '80% - 70%', '70% - 60%', '60% - 50%', '50% - 40%', '40% - 30%',
            '30% - 20%', '20% - 10%', '10% - 0%'],
            title: {
              text: 'Number of Users'
            },

          },
          yaxis: {
            forceNiceScale: true,
            min: 1,
            max: 100
          }
        },
      }
    },

    mounted(){
      http.get('/getScores')
          .then(res => {
            this.loadData(res.data);
          })
          .catch(err => {
            console.warn(err);
          });
    },

    methods: {
      loadData(data){
        let ranges = util.getRangeForScore(data);
        this.series = [{ data: Object.values(ranges) }];
      }
    }
  }
</script>

<template>
  <div class="chart-container">
    <apex-chart type="bar" height="350" :options="chartOptions" :series="series" ></apex-chart>
  </div>
</template>

<style>
.chart-container {
  margin-top: 4em;
  flex-direction: row;
}
</style>
