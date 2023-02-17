<template>
  <apexchart width="100%" height="65%"  :options="chartOptions" :series="series"></apexchart>
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
          show:false,
          position: "bottom",
          fontSize: 12,
          offsetY: 0,
          offsetX:0,
          markers: {
            radius: 0,
          },
          onItemHover: {
            highlightDataSeries: false
          },

        },

        plotOptions:{
          pie:{
            offsetX: -20,
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
