<template>
  <q-page padding>
    <q-card class="q-mb-md q-pa-sm">
      <div class="text-h6 text-primary">爸爸</div>
      <div class="text-subtitle">每日计划</div>
      <q-date v-model="date"></q-date>
    </q-card>
    <q-card class="q-mb-md q-pa-sm">
      <div class="text-h6 text-deep-orange-14">妈妈</div>
      <div class="text-subtitle">每日计划</div>
    </q-card>
    <q-card class="q-mb-md q-pa-sm">
      <div class="text-h6 text-green-14">哈哥</div>
      <div class="text-subtitle">每日计划</div>
    </q-card>
    <q-card class="q-mb-md q-pa-sm">
      <div class="text-h6 text-amber-14">希姐</div>
      <div class="text-subtitle">每日计划</div>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const date = ref<string>("2024.04.08");
</script>
