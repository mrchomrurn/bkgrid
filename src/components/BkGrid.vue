<template>
  <AgGridVue
    style="width: 100%; height: 100vh"
    class="ag-theme-quartz"
    :columnDefs="columnDefs"
    :rowData="data"
    :defaultColDef="props.defaultColumnDefs"
  ></AgGridVue>
</template>

<script setup lang="ts" generic="TData">
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-quartz.css";
import { AgGridVue } from "ag-grid-vue3";
import { toRef } from "vue";

const props = defineProps<{
  defaultColumnDefs?: ColDef;
  columns: ColDef[];
  data: TData[];
}>();

const columnDefs = toRef(props, "columns");
const data = toRef(props, "data");
</script>

<style scoped></style>
