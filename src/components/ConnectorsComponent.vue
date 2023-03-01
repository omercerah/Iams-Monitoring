<template>
  <div class="q-mt-sm text-subtitle2 connector q-mb-sm"  >Connectors</div>
  <div class="q-mb-md" style="border-bottom: 1px solid white"></div>
  <div class="row " style="text-align: center" v-for="(connector,index) in connectorTodo" :key="connector.id">
    <q-card class="my-card text-white " style="width:100%;background-color: #393838;border-radius: 0">

      <div class="row q-mb-xs " >
        <div style="text-align: left;font-size: 15px" class="col-6" >
          <div  class="q-ml-lg text-subtitle2 q-mt-md q-mb-sm" style="text-align: left">{{ connector.name }}</div>
          <div v-if="connector.connectionStatus==1" class="q-ml-md"  >Connession: <span > Established </span> <q-avatar class="q-ml-xs" color="light-green-13" text-color="white"  size="xs" /></div>
          <div v-if="connector.connectionStatus==0" class="q-ml-md" >Connession:<span > Not established </span>  <q-avatar class="q-ml-xs" color="red" text-color="white"  size="xs" /></div>
          <div class="q-ml-md" >Exchanged messages per hour:{{connector.exchangedMessage}}</div>
        </div>
        <div class="col-6" ><highcharts></highcharts></div>
      </div>

      <div style="display: inline-flex" class="q-mb-xs">
        <div style="margin-right: 20px"><q-avatar style="border-radius:0;margin-right: 5px" color="light-green-13" text-color="white"  size="xs" />Correctly exchanged</div>
        <div ><q-avatar style="border-radius: 0;margin-right: 5px" color="red" text-color="white"  size="xs" />Mistakenly exchanged</div>
      </div>
      <div v-if="connectorCount[index]==1" style="border-bottom: 3px solid lawngreen"></div>
      <div v-if="connectorCount[index]==0" style="border-bottom: 3px solid red"></div>

    </q-card>

  </div>


</template>

<script setup lang="ts">
import connectorhighcharts from "./ConnectorsHighcharts.vue";
import highcharts from "./Highcharts.vue";
import { computed, ref } from 'vue';
import {Connectors} from 'components/models';

const props = defineProps({
  connectorTodo: {type: Array},
  connectorCount: {type: Array}

})




</script>

<style scoped>
.connector{
  color: white;
  font-size: 15px;
}


</style>
