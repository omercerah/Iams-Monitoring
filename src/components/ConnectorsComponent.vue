<template>
  <div class="q-mt-sm text-subtitle2 connector q-mb-sm"  >Connectors</div>
  <div class="q-mb-md" style="border-bottom: 1px solid white"></div>
  <div class="row " style="text-align: center;border-bottom: 3px solid lawngreen" v-for="connector in connectorTodo" :key="connector.id">
    <q-card class="my-card text-white " style="width:100%;background-color: #393838;border-radius: 0px">

<!--      <div class=" q-mb-sm " style="display: inline-flex">-->
<!--        <div style="text-align: left;font-size: 15px"  >-->
<!--          <div  class="q-ml-md text-subtitle2 q-mt-md q-mb-sm" style="text-align: left">{{ connector.name }}</div>-->
<!--          <div v-if="connector.connectionStatus==1"  >Connession: <span > Established </span> <q-avatar class="q-ml-xs" color="light-green-13" text-color="white"  size="xs" /></div>-->
<!--          <div v-if="connector.connectionStatus==0"  >Connession:<span > Not established </span>  <q-avatar class="q-ml-xs" color="red" text-color="white"  size="xs" /></div>-->
<!--          <div >Exchanged messages per hour:{{connector.exchangedMessage}}</div>-->
<!--        </div>-->
<!--&lt;!&ndash;        <div class="col-4"> <connectorhighcharts ></connectorhighcharts></div>&ndash;&gt;-->
<!--       <div class="q-ml-xl" ><highcharts></highcharts></div>-->
<!--      </div>-->

      <div class="row q-mb-xs " >
        <div style="text-align: left;font-size: 15px" class="col-6" >
          <div  class="q-ml-lg text-subtitle2 q-mt-md q-mb-sm" style="text-align: left">{{ connector.name }}</div>
          <div v-if="connector.connectionStatus==1" class="q-ml-md"  >Connession: <span > Established </span> <q-avatar class="q-ml-xs" color="light-green-13" text-color="white"  size="xs" /></div>
          <div v-if="connector.connectionStatus==0" class="q-ml-md" >Connession:<span > Not established </span>  <q-avatar class="q-ml-xs" color="red" text-color="white"  size="xs" /></div>
          <div class="q-ml-md" >Exchanged messages per hour:{{connector.exchangedMessage}}</div>
        </div>
        <!--        <div class="col-4"> <connectorhighcharts ></connectorhighcharts></div>-->
        <div class="col-6" ><highcharts></highcharts></div>
      </div>

      <div style="display: inline-flex" class="q-mb-xs">
        <div style="margin-right: 20px"><q-avatar style="border-radius:0;margin-right: 5px" color="light-green-13" text-color="white"  size="xs" />Correctly exchanged</div>
        <div ><q-avatar style="border-radius: 0;margin-right: 5px" color="red" text-color="white"  size="xs" />Mistakenly exchanged</div>
      </div>


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

})

// interface Props {
//   connectorTodo?: Connectors[];
//
// }
// const props = withDefaults(defineProps<Props>(), {
//   connectorTodo: () => [],
// });


</script>

<style scoped>
.connector{
  color: white;
  font-size: 15px;
}


</style>
