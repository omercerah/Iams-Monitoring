<template >
  <q-page style="background-color:#252323">
  <div class="row q-ml-md q-mr-md" >
    <div class="col-8">
      <div class="q-mb-md">
        <serverStatus  :serverTodo="serverTodo"></serverStatus>
      </div>
      <div class="q-mb-md"> <moduleStatus :moduleTodo="moduleTodo"></moduleStatus></div>
      <div> <archivalOutcome :archivalTodo="archivalTodo"></archivalOutcome></div>
    </div>

    <div class="col-4 ">
      <connectors :connectorTodo="connectorTodo"></connectors>
    </div>

  </div>
  </q-page>
</template>

<script setup lang="ts">
import archivalOutcome from "components/ArchivalOutcomeComponent.vue";
import connectors from "components/ConnectorsComponent.vue";
import serverStatus from "components/ServerStatusComponent.vue";
import moduleStatus from "components/ModuleStatusComponent.vue";
import { ref } from 'vue';
import { Server,Module,Meta,Connectors,Archival } from 'components/models';
const serverTodo = ref<Server[]>([
  {
    name:'SERVER A',
    cpuState:1,
    memoryState:0,
    storageState:0,
    upTime:'23 days & 5 hours'


  },
  {
    name:'SERVER B',
    cpuState:1,
    memoryState:0,
    storageState:0,
    upTime:'23 days & 5 hours'

  },
  {
    name:'SERVER CD',
    cpuState:1,
    memoryState:0,
    storageState:0,
    upTime:'23 days & 5 hours'

  }
]);
const moduleTodo = ref<Module[]>([
  {
    name:'DHW  MODULE',
    cpuState:1,
    memoryState:0,
    storageState:0,
    upTime:'2d & 5h'
  },
  {
    name:'SA MODULE',
    cpuState:1,
    memoryState:0,
    storageState:0,
    upTime:'2d & 5h'
  },
  {
    name:'ERMS MODULE',
    cpuState:1,
    memoryState:0,
    storageState:0,
    upTime:'2d & 5h'
  },
  {
    name:'MONITORING MODULE',
    cpuState:1,
    memoryState:0,
    storageState:0,
    upTime:'2d & 5h'
  }
]);
const connectorTodo = ref<Connectors[]>([
  {
    connectionStatus:0,
    name:'ATS CONNECTOR',
    exchangedMessage:2,
  },
  {
    connectionStatus:1,
    name:'NMS CONNECTOR',
    exchangedMessage:1,
  },
  {
    connectionStatus:1,
    name:'FTM CONNECTOR',
    exchangedMessage:3,
  },
  {
    connectionStatus:0,
    name:'MDU CONNECTOR',
    exchangedMessage:4,
  }
]);
const archivalTodo = ref<Archival[]>([
  {
    cpuState:1,
    memoryState:0,
    storageState:0,
    upTime:'2d & 5h'
  },
]);

const meta = ref<Meta>({
  totalCount: 1200
});

</script>
