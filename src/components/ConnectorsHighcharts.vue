<template>
  <apexchart width="100%" height="90%"  :options="chartOptions" :series="series"></apexchart>
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
      series: [34, 66],
      chartOptions: {
        chart: {
          type: 'pie',
          foreColor:'white'
        },
        labels: ['Correctly exchanged', 'Mistankenly exchanged'],
        colors:['#66FF00', '#FF0000' ],
        legend: {
          position: "bottom",
          fontSize: 14,
          offsetY: 0,
          offsetX:0,
          markers: {
            radius: 0,
          },
        },

        plotOptions:{
          pie:{
            offsetX: 0,
            offsetY: -5
          }
        }


      },

    };
  },
};
</script >

<style scoped>

</style>
