<script setup lang="ts">
import { ColDef, ExcelStyle } from "ag-grid-community";
import BkGrid from "./components/BkGrid.vue";
import { onMounted, ref } from "vue";

interface ICompany {
  mission: string;
  company: string;
  location: string;
  date: string;
  time: string;
  rocket: string;
  price: number;
  successful: boolean;
}

const columns: ColDef[] = [
  { field: "mission" },
  { field: "company" },
  { field: "location" },
  { field: "date" },
  { field: "time" },
  { field: "rocket" },
  { field: "price" },
  { field: "successful" },
];

const data = ref<ICompany[]>([]);

const excelStyles: ExcelStyle[] = [
  {
    id: "mission",
    interior: {
      color: "#FF0000",
      pattern: "Solid",
    },
    font: {
      bold: true,
    },
  },
];

onMounted(() => {
  fetchData();
});

const fetchData = async () => {
  const response = await fetch(
    "https://www.ag-grid.com/example-assets/space-mission-data.json"
  );

  data.value = await response.json();
};
</script>

<template>
  <BkGrid
    style="height: 100vh"
    :column-defs="columns"
    :row-data="data"
    pagination
    :excel-styles="excelStyles"
    :key="data.length"
  ></BkGrid>
</template>

<style scoped></style>
