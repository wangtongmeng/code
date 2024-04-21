import './assets/main.css'
// import "ag-grid-enterprise";
import { AgGridVue } from "@ag-grid-community/vue3";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { ModuleRegistry } from "@ag-grid-community/core";
ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule]);

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component('AgGridVue', AgGridVue)
app.mount('#app')
