<template>
  <div> <vueHighcharts   :options="chartOptions"  /></div>
</template>

<script setup>
import {computed, ref} from 'vue';
import VueHighcharts from 'vue3-highcharts'
const chartOptions = computed(() => ({
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    width: 245,
    height: 130,
    backgroundColor: "#393838"
  },
  title:{
    text:''
  },
  credits: {
    enabled: false
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      colors:['#7CFC00','red'],
      dataLabels: {
        enabled: true,
        format: '{point.percentage:.1f} %',
        distance:25,
        alignTo: 'plotEdges',
        y:0,
        x:0,

      }
    }
  },
  series: [{
    data:[{name:'Correctly exchanged',y:66},{name:'Mistakenly exchanged',y:34}]
  }],
}));
</script>

<style scoped>

</style>
