<template>
  <div class="q-mt-sm text-subtitle2" style="text-align: center;background-color: #393838;color:white">CONNECTORS</div>
  <div class="row q-mt-sm" style="text-align: center" v-for="connector in connectorTodo" :key="connector.id">
    <q-card class="my-card text-white" style="width:100%;background-color: #393838;border-radius: 0px">
      <div v-if="connector.connectionStatus==1" style="background-color: lawngreen;padding: 5px;border-radius: 0px">
        <div  class="q-ml-md text-subtitle2" style="text-align: left">{{ connector.name }}</div>
      </div>
      <div v-if="connector.connectionStatus==0" style="background-color: red;padding: 5px;border-radius: 0px">
        <div  class="q-ml-md text-subtitle2" style="text-align: left">{{ connector.name }}</div>
      </div>

        <div style="text-align: left" class="q-mt-xs">
          <div class="q-ml-lg">
            <div v-if="connector.connectionStatus==1" class="text-subtitle2 " >Connession: <span style="border-bottom: 1px solid white"> Established </span> <q-avatar color="green" text-color="white"  size="xs" /></div>
            <div v-if="connector.connectionStatus==0" class="text-subtitle2">Connession:<span style="border-bottom: 1px solid white"> Not established </span>  <q-avatar color="red" text-color="white"  size="xs" /></div>
            <div class="text-subtitle2">Exchanged messages per hour:{{connector.exchangedMessage}}</div>
          </div>
       <connectorhighcharts ></connectorhighcharts>
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

</style>
