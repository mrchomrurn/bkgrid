<template>
  <AgGridVue
    class="ag-theme-quartz bk__grid-wrapper"
    :gridOptions="props"
  ></AgGridVue>
</template>

<script setup lang="ts" generic="TData">
import { ColDef, GridOptions } from "ag-grid-community";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-quartz.css";
import { AgGridVue } from "ag-grid-vue3";

type DeprecatedProps =
  | "enterMovesDown"
  | "enterMovesDownAfterEdit"
  | "excludeHiddenColumnsFromQuickFilter"
  | "enableChartToolPanelsButton"
  | "suppressParentsInRowNodes"
  | "suppressAsyncEvents"
  | "suppressAggAtRootLevel"
  | "serverSideFilterAllLevels"
  | "functionsPassive"
  | "advancedFilterModel"
  | "onColumnRowGroupChangeRequest"
  | "onColumnPivotChangeRequest"
  | "onColumnValueChangeRequest"
  | "onColumnAggFuncChangeRequest";

interface Props extends Omit<GridOptions<TData>, DeprecatedProps> {}

const props = withDefaults(defineProps<Props>(), {
  // @ts-ignore
  defaultColDef: {
    editable: true,
    sortable: true,
    filter: true,
  } as ColDef,
});
</script>

<style scoped></style>
