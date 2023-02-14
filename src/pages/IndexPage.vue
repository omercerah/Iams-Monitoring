<template >
  <q-page style="background-color:#252323">
  <div class="row" >
    <div class="col-1"></div>
    <div class="col-6">
      <div>
        <serverStatus  :serverTodo="serverTodo"></serverStatus>
      </div>
      <div> <moduleStatus :moduleTodo="moduleTodo"></moduleStatus></div>
      <div> <archivalOutcome></archivalOutcome></div>
    </div>

    <div class="col-4">
      <connectors :connectorTodo="connectorTodo"></connectors>
    </div>
    <div class="col-1"></div>
  </div>
  </q-page>
</template>

<script setup lang="ts">
import archivalOutcome from "components/ArchivalOutcomeComponent.vue";
import connectors from "components/ConnectorsComponent.vue";
import serverStatus from "components/ServerStatusComponent.vue";
import moduleStatus from "components/ModuleStatusComponent.vue";
import { ref } from 'vue';
import { Server,Module,Meta,Connectors } from 'components/models';
const serverTodo = ref<Server[]>([
  {
    name:'SERVER A',
    cpuState:1,
    upTime:'52 days 23:55'


  },
  {
    name:'SERVER B',
    cpuState:1,
    upTime:'21 days 15:10'

  },
  {
    name:'SERVER C',
    cpuState:0,
    upTime:'0'

  },
  {
    name:'SERVER D',
    cpuState:1,
    upTime:'35 days 08:27'

  }
]);
const moduleTodo = ref<Module[]>([
  {
    name:'DHW  MODULE',
    cpuState:1
  },
  {
    name:'SA MODULE',
    cpuState:0
  },
  {
    name:'ERMS MODULE',
    cpuState:0
  },
  {
    name:'MONITORING MODULE',
    cpuState:1
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
const meta = ref<Meta>({
  totalCount: 1200
});

</script>
