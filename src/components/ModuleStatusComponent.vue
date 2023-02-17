<template>
  <div class="q-mt-sm q-mr-md text-subtitle2 module"  >Modules Status</div>
  <div class="q-mt-sm q-mr-lg" style="border-bottom: 1px solid white"></div>
  <div class="row q-mt-md">

    <div class="col-3"  v-for="module in moduleTodo" :key="module.id">
      <div  style="text-align: center;height: 250px;border-bottom: 3px solid lawngreen" class="q-mr-lg" >
        <q-card class="my-card"  style="width:100%;height: 100%;background-color: #393838;border-radius: 0px">
          <div style="text-align:left;padding: 5px">
            <div class="module text-subtitle2 q-ml-sm q-mt-sm" >{{module.name}}</div>
            <div class="q-mt-md " style="padding: 10px" >
             <div  class="row q-mb-md">
               <div class="col-2 module">CPU</div>
               <div class="col-4">
                 <q-avatar  v-if="module.cpuState==1" color="light-green-13" class="q-ml-xl " text-color="white"  size="xs" />
                 <q-avatar  v-if="module.cpuState==0" color=red class="q-ml-xl" text-color="white"  size="xs" />
               </div>
             </div>
              <div  class="row q-mb-md">
                <div class="col-2 module">Memory</div>
                <div class="col-4">
                  <q-avatar  v-if="module.memoryState==1" color="light-green-13" class="q-ml-xl" text-color="white"  size="xs" />
                  <q-avatar  v-if="module.memoryState==0" color=red class="q-ml-xl" text-color="white"  size="xs" />
                </div>
              </div>
              <div  class="row q-mb-md">
                <div class="col-2 module">Storage</div>
                <div class="col-4">
                  <q-avatar  v-if="module.storageState==1" color="light-green-13" class="q-ml-xl" text-color="white"  size="xs" />
                  <q-avatar  v-if="module.storageState==0" color=red class="q-ml-xl" text-color="white"  size="xs" />
                </div>
              </div>
              <div style="color: white" class="row q-mb-sm ">
                <div class="col-5 module">Uptime</div>
                <div class="col-6">
                 {{module.upTime}}
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>



  </div>
</template>

<script setup lang="ts">
import { Module, } from 'components/models';

interface Props {
  moduleTodo?: Module[];
}
const props = withDefaults(defineProps<Props>(), {
  moduleTodo: () => [],
});



</script>

<style scoped>
.module{
  color: white;
  font-size: 15px;
}
</style>
