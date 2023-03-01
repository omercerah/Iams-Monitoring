<template >
  <q-page style="background-color:#252323">

  <div class="row q-ml-md q-mr-md" >
    <div  class="col-7">
      <div class="q-mb-md">
        <div class="q-mb-md"> <moduleStatus :moduleTodo="dataJson.moduleStatus"></moduleStatus></div>

      </div>
      <serverStatus  :serverTodo="dataJson.serverStatus"></serverStatus>
      <div> <archivalOutcome :archivalTodo="dataJson.archivalStatus"></archivalOutcome></div>
    </div>

    <div class="col-5 ">
      <connectors :connectorTodo="dataJson.connectorStatus"></connectors>
    </div>

  </div>
  </q-page>
</template>

<script setup >
import archivalOutcome from "components/ArchivalOutcomeComponent.vue";
import connectors from "components/ConnectorsComponent.vue";
import serverStatus from "components/ServerStatusComponent.vue";
import moduleStatus from "components/ModuleStatusComponent.vue";
import {onMounted, ref} from 'vue';
// import { Server,Module,Meta,Connectors,Archival } from 'components/models';
// const serverTodo = ref<Server[]>([
//   {
//     name:'SERVER A',
//     cpuState:1,
//     memoryState:0,
//     storageState:0,
//     upTime:'2 days & 5 hours'
//
//
//   },
//   {
//     name:'SERVER B',
//     cpuState:1,
//     memoryState:0,
//     storageState:0,
//     upTime:'2 days & 5 hours'
//
//   },
//   {
//     name:'SERVER CD',
//     cpuState:1,
//     memoryState:0,
//     storageState:0,
//     upTime:'2 days & 5 hours'
//
//   }
// ]);
// const moduleTodo = ref<Module[]>([
//   {
//     name:'DHW  MODULE',
//     cpuState:1,
//     memoryState:0,
//     storageState:0,
//     upTime:'2d & 5h'
//   },
//   {
//     name:'SA MODULE',
//     cpuState:1,
//     memoryState:0,
//     storageState:0,
//     upTime:'2d & 5h'
//   },
//   {
//     name:'ERMS MODULE',
//     cpuState:1,
//     memoryState:0,
//     storageState:0,
//     upTime:'2d & 5h'
//   },
//   {
//     name:'MONITORING MODULE',
//     cpuState:1,
//     memoryState:0,
//     storageState:0,
//     upTime:'2d & 5h'
//   }
// ]);
// const connectorTodo = ref<Connectors[]>([
//   {
//     connectionStatus:0,
//     name:'ATS CONNECTOR',
//     exchangedMessage:2,
//   },
//   {
//     connectionStatus:1,
//     name:'NMS CONNECTOR',
//     exchangedMessage:1,
//   },
//   {
//     connectionStatus:1,
//     name:'FTM CONNECTOR',
//     exchangedMessage:3,
//   },
//   {
//     connectionStatus:0,
//     name:'MDU CONNECTOR',
//     exchangedMessage:4,
//   }
// ]);
// const archivalTodo = ref<Archival[]>([
//   {
//     cpuState:1,
//     memoryState:0,
//     storageState:0,
//     upTime:'2d & 5h'
//   },
// ]);




const dataJson=ref([])

onMounted(() => {
  getData()
})

async function getData() {
  const res = await fetch('http://localhost:8081/dashboards');
  const finalRes = await res.json();
  dataJson.value = finalRes;
}




</script>
