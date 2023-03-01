<template >
  <q-page style="background-color:#252323">

  <div class="row q-ml-md q-mr-md" >
    <div  class="col-8">
      <div class="q-mb-md">
        <div class="q-mb-md"> <moduleStatus :moduleCount="moduleCount" :moduleTodo="dataJson.moduleStatus"></moduleStatus></div>

      </div>
      <serverStatus  :serverTodo="dataJson.serverStatus" :serverCount="serverCount"></serverStatus>
      <div> <archivalOutcome :archivalTodo="dataJson.archivalStatus" :archivalCount="archivalCount"></archivalOutcome></div>
    </div>

    <div class="col-4 ">
      <connectors :connectorTodo="dataJson.connectorStatus" :connectorCount="connectorCount"></connectors>
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




const dataJson=ref([])
const serverCount=ref([])
const moduleCount=ref([])
const archivalCount=ref([])
const connectorCount=ref([])
onMounted(() => {
  getData()
})

async function getData() {
  const res = await fetch('http://localhost:8081/dashboards');
  const finalRes = await res.json();
  dataJson.value = finalRes;
console.log("json",dataJson.value.archivalStatus[0].cpuState)
  for(let i=0;i<dataJson.value.serverStatus.length;i++)
   {
     const server=dataJson.value.serverStatus[i].cpuState + dataJson.value.serverStatus[i].memoryState + dataJson.value.serverStatus[i].storageState
     serverCount.value.push(server)
   }

   for(let i=0;i<dataJson.value.moduleStatus.length;i++){
     const module=dataJson.value.moduleStatus[i].cpuState + dataJson.value.moduleStatus[i].memoryState + dataJson.value.moduleStatus[i].storageState
     moduleCount.value.push(module)
   }

  for(let i=0;i<dataJson.value.archivalStatus.length;i++){
    const archival=dataJson.value.archivalStatus[i].cpuState + dataJson.value.archivalStatus[i].memoryState + dataJson.value.archivalStatus[i].storageState
    archivalCount.value.push(archival)
  }

  for(let i=0;i<dataJson.value.connectorStatus.length;i++){
  const connector=dataJson.value.connectorStatus[i].connectionStatus
    connectorCount.value.push(connector)

  }



}




</script>
