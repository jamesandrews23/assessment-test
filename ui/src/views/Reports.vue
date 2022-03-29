<script>
import http from '../axiosHttp';
import VueApexCharts from 'vue3-apexcharts';

export default {
    components: {
      apexChart: VueApexCharts
    },

    data(){
      return {
        series: [{
          name: 'Users',
          data: [1, 4, 1, 8, 20, 25, 8, 1, 0, 0]
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
        let ranges = this.getRanges();

        data.forEach(num => {
          if(num <= 100 && num >= 90){
            ranges['100 - 90'] += 1;
          } else if(num <= 90 && num >= 80){
            ranges['90 - 80'] += 1;
          } else if(num <= 80 && num >= 70){
            ranges['80 - 70'] += 1;
          } else if(num <= 70 && num >= 60){
            ranges['70 - 80'] += 1;
          } else if(num <= 60 && num >= 50){
            ranges['60 - 50'] += 1;
          } else if(num <= 50 && num >= 40){
            ranges['50 - 40'] += 1;
          } else if(num <= 40 && num >= 30){
            ranges['40 - 30'] += 1;
          } else if(num <= 30 && num >= 20){
            ranges['30 - 20'] += 1;
          } else if(num <= 20 && num >= 10){
            ranges['20 - 10'] += 1;
          } else {
            ranges['10 - 0'] += 1;
          }
        });

        this.series = [{ data: Object.values(ranges) }];
      },

      getRanges(){
        return {
          '100 - 90' : 0,
          '90 - 80' : 0,
          '80 - 70' : 0,
          '70 - 60' : 0,
          '60 - 50' : 0,
          '50 - 40' : 0,
          '40 - 30' : 0,
          '30 - 20' : 0,
          '20 - 10' : 0,
          '10 - 0' : 0
        }
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
