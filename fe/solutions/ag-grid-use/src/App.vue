<!-- 分组，且分组行有编辑按钮 -->
<template>
  <div class="container">
    <ag-grid-vue
      style="width: 100%; height: 100%"
      :class="themeClass"
      :columnDefs="columnDefs"
      @grid-ready="onGridReady"
      :defaultColDef="defaultColDef"
      :autoGroupColumnDef="autoGroupColumnDef"
      :rowData="rowData"
      rowGroupPanelShow="always"
      groupLockGroupColumns="1"
    ></ag-grid-vue>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import CustomButtonComponent from "./components/CustomButtonComponent.vue";

export default {
  components: {
    CustomButtonComponent: CustomButtonComponent,
  },
  setup() {
    const columnDefs = ref([
      { field: "country", rowGroup: true, hide: true },
      { field: "year" },
      { field: "athlete" },
      { field: "sport" },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" },
      {
        field: "actions",
        headerName: "Actions",
        cellRenderer: "CustomButtonComponent",
      },
    ]);
    const gridApi = ref();
    const defaultColDef = ref({
      flex: 1,
      minWidth: 100,
    });
    const autoGroupColumnDef = ref(null);
    const rowData = ref(null);

    onBeforeMount(() => {
      autoGroupColumnDef.value = {
        minWidth: 200,
      };
    });

    const onGridReady = (params) => {
      gridApi.value = params.api;

      const updateData = (data) => (rowData.value = data);

      fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
        .then((resp) => resp.json())
        .then((data) => updateData(data));
    };

    return {
      columnDefs,
      gridApi,
      defaultColDef,
      autoGroupColumnDef,
      rowData,
      onGridReady,
      themeClass: "ag-theme-quartz",
    };
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
