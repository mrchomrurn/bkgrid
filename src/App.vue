<script setup lang="ts">
import { ColDef } from "ag-grid-community";
import BkGrid from "./components/BkGrid.vue";
import { ref } from "vue";

const columns: ColDef[] = [
  { field: "make" },
  { field: "model" },
  { field: "price" },
];

const data = ref([]);
</script>

<template>
  <BkGrid :columns="columns" :data="data"></BkGrid>
</template>

<style scoped></style>
