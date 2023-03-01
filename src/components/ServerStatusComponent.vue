<template>
  <div class="q-mt-sm q-mr-md text-subtitle2 server q-mb-sm"  >Server Status</div>
  <div class="q-mb-md q-mr-lg" style="border-bottom: 1px solid white"></div>
  <div class="row q-mt-md " >
    <div class="col-4"  v-for="(todo,index) in serverTodo" :key="todo.id" >
      <div class="q-mr-lg" >
        <q-card class="my-card" style="width:100%;height:100%;background-color: #393838;border-radius: 0px"  >
          <div style="text-align:left" class="q-pa-xs" >
            <div class="server text-subtitle2 q-ml-sm q-mt-sm q-mb-sm"  >{{todo.name}}</div>
            <div class="q-ml-md">
              <div v-if="todo.cpuState==1" class=" q-mb-sm server "  >CPU<q-avatar class="q-ml-xl" color="light-green-13" text-color="white"  size="xs" /></div>
              <div v-if="todo.cpuState==0" class=" q-mb-sm server"  >CPU<q-avatar class="q-ml-xl" color="red" text-color="white"  size="xs" /></div>

              <div  v-if="todo.memoryState==1" class=" q-mb-sm server"  >Memory<q-avatar class="q-ml-lg" color="light-green-13" text-color="white"  size="xs" /></div>
              <div v-if="todo.memoryState==0" class=" q-mb-sm server"  >Memory<q-avatar class="q-ml-lg" color="red" text-color="white"  size="xs" /></div>

              <div v-if="todo.storageState==1" class="  q-mb-sm server" >Storage <q-avatar class="q-ml-lg" color="light-green-13" text-color="white"  size="xs" /></div>
              <div v-if="todo.storageState==0" class=" q-mb-sm server" >Storage <q-avatar class="q-ml-lg" color="red" text-color="white"  size="xs" /></div>

              <div  class="server q-mb-md" >Uptime <span class="q-ml-lg">{{todo.upTime}}</span></div>
            </div>


          </div>


        </q-card>
        <div v-if="serverCount[index]==3" style="border-bottom: 3px solid lawngreen"></div>
        <div v-if="serverCount[index]!=3" style="border-bottom: 3px solid red"></div>

      </div>
    </div>

  </div>
</template>

<script setup >
import {onMounted,  ref} from 'vue';
import { Server } from 'components/models';

onMounted(() => {

})

const props = defineProps({
  serverTodo: {
    type: Array
  },
  serverCount: {
    type: Array
  },


})






</script>

<style scoped>
.server{
  color: white;
  font-size: 15px;
}


</style>
