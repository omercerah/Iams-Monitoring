<template>

  <div class="q-mt-sm q-mr-md text-subtitle2 archival" >Archival Outcome</div>
  <div class="q-mt-sm q-mr-lg" style="border-bottom: 1px solid white"></div>
  <div class="row q-mt-sm" >
    <div class="col-6"  v-for="archival in archivalTodo" :key="archival.id" >
      <div style="text-align: center;border-bottom: 3px solid red" class="q-mr-lg  q-mt-sm" >
        <q-card class="my-card"  style="width:100%;height: 100%;background-color: #393838;border-radius: 0px">
         <div style="text-align:left;padding: 5px">
           <div class="archival text-subtitle2 q-ml-sm q-mt-sm" >Successfull</div>
           <q-card-section class="archival">
           <div class="row q-mb-sm" >
             <div  v-if="archival.cpuState==1" class="col-6 ">CPU<q-avatar class="q-ml-xl" color="light-green-13" text-color="white"  size="xs" /></div>
             <div v-if="archival.cpuState==0" class="col-6">CPU<q-avatar class="q-ml-xl" color="red" text-color="white"  size="xs" /></div>
             <div v-if="archival.storageState==1" class="col-6">Storage<q-avatar class="q-ml-md" color="light-green-13" text-color="white"  size="xs" /></div>
             <div v-if="archival.storageState==0" class="col-6">Storage<q-avatar class="q-ml-md" color="red" text-color="white"  size="xs" /></div>

           </div>
             <div class="row">
               <div  v-if="archival.memoryState==1" class="col-6">Memory<q-avatar class="q-ml-lg" color="light-green-13" text-color="white"  size="xs" /></div>
               <div  v-if="archival.memoryState==0" class="col-6">Memory<q-avatar class="q-ml-lg" color="red" text-color="white"  size="xs" /></div>
               <div  class=" q-mb-sm  col-6 ">Uptime <span class="q-ml-md" >{{archival.upTime}}</span></div>
             </div>
           </q-card-section>
           </div>

        </q-card>
      </div>
    </div>


    <div class="col-6">
      <div style="text-align: center;height: 135px;border-bottom: 3px solid lawngreen" class="q-mr-lg  q-mt-sm">
        <q-card class="my-card"  style="width:100%;height: 100%;background-color: #393838;border-radius: 0px">
          <q-card-section >
            <div ></div>
            <div class="text-subtitle2"></div>
          </q-card-section>

          <q-card-section class="q-pt-none">

          </q-card-section>
        </q-card>
      </div>
    </div>



  </div>
</template>

<script setup lang="ts">
import {Archival} from 'components/models';

const props = defineProps({
  archivalTodo: {type: Array},

})

// interface Props {
//   archivalTodo?: Archival[];
// }
// const props = withDefaults(defineProps<Props>(), {
//   archivalTodo: () => [],
// });


</script>

<style scoped>
.archival{
  color: white;
  font-size: 15px;
}
</style>
