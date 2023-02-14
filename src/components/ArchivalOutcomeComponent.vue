<template>
  <div class="row" >
    <div class="col-6" >
      <div class="q-mt-sm q-mb-sm q-mr-sm text-subtitle2" style="text-align: center;background-color: #393838;color:white" >ARCHIVAL OUTCOME</div>
      <div style="text-align: center;height: 175px" class="q-mr-sm  q-mt-sm" >
        <q-card class="my-card"  style="width:100%;height: 100%;background-color: lawngreen">
          <q-card-section >
            <q-icon  name="check_circle" size="50px" color="white" />
            <q-icon v-if="false" name="cancel" size="50px" color="white" />
            <div style="font-size: 25px;color: white" >Successfull</div>
            <div class="text-subtitle2"></div>
          </q-card-section>

          <q-card-section class="q-pt-none">

          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="col-6">
      <div class="q-mt-sm q-mb-sm q-mr-sm text-subtitle2" style="text-align: center;background-color: #393838;color:white">OUTCOME2</div>
      <div style="text-align: center;height: 175px" class="q-mr-sm  q-mt-sm">
        <q-card class="my-card"  style="width:100%;height: 100%;background-color: lawngreen">
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
import { computed, ref } from 'vue';
import { ArchivalOutcome } from 'src/types/index';

interface Props {
  archival: ArchivalOutcome;

}

</script>

<style scoped>

</style>
