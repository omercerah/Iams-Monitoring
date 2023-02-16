<template>
  <div class="q-mt-sm q-mr-md text-subtitle2 server q-mb-sm"  >Server Status</div>
  <div class="q-mb-md q-mr-md" style="border-bottom: 1px solid white"></div>
  <div class="row q-mt-md " >
    <div class="col-4"  v-for="todo in serverTodo" :key="todo.id" >
      <div    style="height: 185px;border-bottom: 3px solid lawngreen" class="q-mr-md" >
        <q-card class="my-card" style="width:100%;height:100%;background-color: #393838;border-radius: 0px"  >
          <div style="text-align:left;padding: 5px"  >
            <div class="server text-subtitle2 q-ml-sm q-mt-sm"  >{{todo.name}}</div>
            <q-card-section >

              <div v-if="todo.cpuState==1" class=" q-mb-sm " style="color: white" >CPU<q-avatar class="q-ml-xl" color="light-green-13" text-color="white"  size="xs" /></div>
              <div v-if="todo.cpuState==0" class=" q-mb-sm" style="color: white" >Cpu<q-avatar class="q-ml-xl" color="red" text-color="white"  size="xs" /></div>

              <div  v-if="todo.memoryState==1" class=" q-mb-sm" style="color: white" >Memory<q-avatar class="q-ml-lg" color="light-green-13" text-color="white"  size="xs" /></div>
              <div v-if="todo.memoryState==0" class=" q-mb-sm" style="color: white" >Memory<q-avatar class="q-ml-lg" color="red" text-color="white"  size="xs" /></div>

              <div v-if="todo.storageState==1" class="  q-mb-sm" style="color: white">Storage <q-avatar class="q-ml-lg" color="light-green-13" text-color="white"  size="xs" /></div>
              <div v-if="todo.storageState==0" class=" q-mb-sm" style="color: white">Storage <q-avatar class="q-ml-lg" color="red" text-color="white"  size="xs" /></div>

              <div   style="color: white">Uptime <span class="q-ml-lg">{{todo.upTime}}</span></div>
            </q-card-section>


          </div>


        </q-card>


      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Server } from 'components/models';


interface Props {
  serverTodo?: Server[];
}
const props = withDefaults(defineProps<Props>(), {
  serverTodo: () => [],
});




</script>

<style scoped>
.server{
  color: white;
  font-size: 15px;
}


</style>
