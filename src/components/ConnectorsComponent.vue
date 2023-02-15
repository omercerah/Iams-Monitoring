<template>
  <div class="q-mt-sm text-subtitle2 connector" style="border-bottom: 1px solid white" >Connectors</div>
  <div class="row " style="text-align: center;border-bottom: 3px solid lawngreen" v-for="connector in connectorTodo" :key="connector.id">
    <q-card class="my-card text-white " style="width:100%;background-color: #393838;border-radius: 0px">
        <div  class="q-ml-lg text-subtitle2 q-mt-md" style="text-align: left">{{ connector.name }}</div>
      <div class="row" >
        <q-card-section style="text-align: left" class="col-7" >
          <div v-if="connector.connectionStatus==1" >Connession: <span > Established </span> <q-avatar color="light-green-13" text-color="white"  size="xs" /></div>
          <div v-if="connector.connectionStatus==0">Connession:<span > Not established </span>  <q-avatar color="red" text-color="white"  size="xs" /></div>
          <div >Exchanged messages per hour:{{connector.exchangedMessage}}</div>
        </q-card-section>

        <div class="col-5" > <connectorhighcharts ></connectorhighcharts></div>
      </div>


    </q-card>

  </div>







<!--  <div class="row q-mt-md" style="text-align: center">-->
<!--    <q-card class="my-card  text-white" style="width:100%;background-color: #393838">-->
<!--      <div style="background-color: red;padding: 5px">-->
<!--        <div class="q-ml-md"  style="text-align: left">NMS CONNECTOR</div>-->
<!--      </div>-->

<!--      <div style="text-align: left">-->
<!--        <div class="q-ml-lg">-->
<!--          <div >Connession:</div>-->
<!--          <div >Exchanged messages per hour:</div>-->
<!--        </div>-->
<!--        <connectorhighcharts></connectorhighcharts>-->
<!--      </div>-->

<!--    </q-card>-->
<!--  </div>-->
<!--  <div class="row q-mt-md" style="text-align: center">-->
<!--    <q-card class="my-card  text-white" style="width:100%;background-color: #393838">-->
<!--      <div style="background-color: lawngreen;padding: 5px">-->
<!--        <div class="q-ml-md" style="text-align: left">FTM CONNECTOR</div>-->
<!--      </div>-->

<!--      <div style="text-align: left">-->
<!--        <div class="q-ml-lg">-->
<!--          <div >Connession:</div>-->
<!--          <div >Exchanged messages per hour:</div>-->
<!--        </div>-->
<!--        <connectorhighcharts></connectorhighcharts>-->
<!--      </div>-->

<!--    </q-card>-->
<!--  </div>-->
<!--  <div class="row q-mt-md" style="text-align: center">-->
<!--    <q-card class="my-card  text-white" style="width:100%;background-color: #393838">-->
<!--      <div style="background-color: lawngreen;padding: 5px">-->
<!--        <div class="q-ml-md" style="text-align: left">MDU CONNECTOR</div>-->
<!--      </div>-->

<!--      <div style="text-align: left">-->
<!--        <div class="q-ml-lg">-->
<!--          <div >Connession:</div>-->
<!--          <div >Exchanged messages per hour:</div>-->
<!--        </div>-->
<!--        <connectorhighcharts></connectorhighcharts>-->
<!--      </div>-->

<!--    </q-card>-->
<!--  </div>-->
</template>

<script setup lang="ts">
import connectorhighcharts from "./ConnectorsHighcharts.vue";
import { computed, ref } from 'vue';
import {Connectors} from 'components/models';

interface Props {
  connectorTodo?: Connectors[];

}
const props = withDefaults(defineProps<Props>(), {
  connectorTodo: () => [],
});
</script>

<style scoped>
.connector{
  color: white;
  font-size: 15px;
}


</style>
