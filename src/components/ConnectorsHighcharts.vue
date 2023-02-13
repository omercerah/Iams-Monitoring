<template>
  <apexchart width="100%" height="46%"  :options="chartOptions" :series="series"></apexchart>
</template>

<script  >
import {computed, onMounted, ref} from "vue";
import VueApexCharts from "vue3-apexcharts";


export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: function() {
    return {
      series: [{
        name: 'Correctly exchanged',
        data: [66],

      }, {
        name: 'Mistankenly exchanged',
        data: [34]
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          stacked: true,
          stackType: '100%',
          foreColor:'white',
          height: 147
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        annotations:{
          position: "front",
          yaxis: [],
          xaxis: [],
          points: []
        },
        colors:['#66FF00', '#FF0000' ],
        xaxis: {
          categories: [0],
          labels:{
            show:false,
          },
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: false
          },
        },
     grid:{
          yaxis:{
            lines:{
              show:false
            },
            labels:{
              show:false
            },
          },
       xaxis:{
         lines:{
           show:false
         },
         labels:{
           show:false
         },
         axisBorder: {
           show: false
         },
         axisTicks: {
           show: false
         },

       },

     },
        fill: {
          opacity: 1,
        },
        legend: {
          position: 'right',
          offsetX: -30,
          offsetY:15,
          markers: {
            shape: "circle",
          },
          fontSize: 14,

        }
      },
    };
  },
};
</script >

<style scoped>

</style>
