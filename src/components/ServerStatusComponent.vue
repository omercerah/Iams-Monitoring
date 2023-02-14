<template>
  <div class="q-mt-sm q-mr-sm text-subtitle2" style="text-align: center;background-color: #393838;color:white">SERVER STATUS</div>
  <div class="row q-mt-sm " >

    <div class="col-3"  v-for="todo in serverTodo" :key="todo.id" >
      <div  v-if="todo.cpuState==1"  style="text-align: center;height: 175px" class="q-mr-sm" >
        <q-card class="my-card" style="width:100%;height:100%;background-color: lawngreen"  >
          <div style="text-align:left;padding: 5px"  >

          <div v-if="todo.cpuState==1" class="text-subtitle2">Cpu Status:<q-avatar color="green" text-color="white"  size="xs" /></div>
          <div v-if="todo.cpuState==0" class="text-subtitle2">Cpu Status:<q-avatar color="red" text-color="white"  size="xs" /></div>
            <div class="text-subtitle2">Up Time:{{todo.upTime}}</div>

          </div>
          <q-card-section  >
            <q-icon v-if="todo.cpuState==1"  name="check_circle" size="50px" color="white" />
            <q-icon v-if="todo.cpuState==0"  name="cancel" size="50px" color="white" />

            <div class="server text-subtitle2" >{{todo.name}}</div>
          </q-card-section>
          <q-card-section class="q-pt-none">

          </q-card-section>
        </q-card>


      </div>
      <div  v-if="todo.cpuState==0"  style="text-align: center;height: 175px" class="q-mr-sm" >
        <q-card class="my-card" style="width:100%;height:100%;background-color: red"  >
          <div style="text-align:left;padding: 5px"  >

            <div v-if="todo.cpuState==1" class="text-subtitle2">Cpu Status:<q-avatar color="green" text-color="white"  size="xs" /></div>
            <div v-if="todo.cpuState==0" class="text-subtitle2">Cpu Status:<q-avatar color="red" text-color="white"  size="xs" /></div>
            <div class="text-subtitle2">Up Time:{{todo.upTime}}</div>


          </div>
          <q-card-section  >
            <q-icon v-if="todo.cpuState==1"  name="check_circle" size="50px" color="white" />
            <q-icon v-if="todo.cpuState==0"  name="cancel" size="50px" color="white" />

            <div class="server text-subtitle2" >{{todo.name}}</div>
          </q-card-section>
          <q-card-section class="q-pt-none">

          </q-card-section>
        </q-card>


      </div>
    </div>

<!--    <div class="col-3">-->
<!--      <div style="text-align: center;height: 175px" class="q-mr-sm" >-->
<!--        <q-card class="my-card"  style="width:100%;height: 100%;background-color: lawngreen">-->
<!--          <q-card-section >-->
<!--            <q-icon  name="check_circle" size="50px" color="white" />-->
<!--            <q-icon v-if="false" name="cancel" size="50px" color="white" />-->
<!--            <div class="server" >SERVER B</div>-->
<!--            <div class="text-subtitle2"></div>-->
<!--          </q-card-section>-->

<!--          <q-card-section class="q-pt-none">-->

<!--          </q-card-section>-->
<!--        </q-card>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="col-3">-->
<!--      <div style="text-align: center;height: 175px" class="q-mr-sm" >-->
<!--        <q-card class="my-card"  style="width:100%;height: 100%;background-color: lawngreen">-->
<!--          <q-card-section >-->
<!--            <q-icon  name="check_circle" size="50px" color="white" />-->
<!--            <q-icon v-if="false" name="cancel" size="50px" color="white" />-->
<!--            <div class="server" >SERVER C</div>-->
<!--            <div class="text-subtitle2"></div>-->
<!--          </q-card-section>-->

<!--          <q-card-section class="q-pt-none">-->

<!--          </q-card-section>-->
<!--        </q-card>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="col-3">-->
<!--      <div style="text-align: center;height: 175px" class="q-mr-sm" >-->
<!--        <q-card class="my-card"  style="width:100%;height: 100%;background-color: lawngreen">-->
<!--          <q-card-section >-->
<!--            <q-icon  name="check_circle" size="50px" color="white" />-->
<!--            <q-icon v-if="false" name="cancel" size="50px" color="white" />-->
<!--            <div class="server" >SERVER D</div>-->
<!--            <div class="text-subtitle2"></div>-->
<!--          </q-card-section>-->

<!--          <q-card-section class="q-pt-none">-->

<!--          </q-card-section>-->
<!--        </q-card>-->
<!--      </div>-->
<!--    </div>-->


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
  font-size: 18px;
  color: white;
}

</style>
