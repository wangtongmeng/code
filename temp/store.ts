import { defineStore } from 'pinia'
import { reactive } from 'vue'
import {
  getAiIdentificationResult,
  getSupplierSummary,
  getSupplierTrend,
  getSupplierWarnings,
  getSystemWithSupplier,
} from './mockRequest'
export interface IStore {
  loading: boolean
  isFullScreen: boolean
  aiIdentificationAbility: {
    alarmNum: string | number
    dealNum: string
    dealPercent: string
  }
  AiIdentificationResult: {
    alarmNum: number
    dealNum: number
    dealPercent: string
  }
  trend: {
    directQualifiedRate: string[]
    lastQualifiedRate: string[]
    x_axios: string[]
  }
  supplierSummary: {
    firstSupplier: number
    accessedSupplier: number
  }
  systemWithSupplier: {
    [key: string]: {
      name: string
      suppliers: { supplier_name: string; status: string; supplier_code: string }[]
    }
  }
  warnings: { content: string }[]
  activeSys: string
}
export const useSupplyOverviewStore = defineStore('supply-overview', () => {
  const storeData = reactive<IStore>({
    loading: true,
    isFullScreen: false,
    aiIdentificationAbility: {
      alarmNum: '建设中', // 故障分析模型
      dealNum: '90.95%', // 准确率
      dealPercent: '90.00%', // 拦截率
    },
    AiIdentificationResult: {
      alarmNum: 0, // 失效事件数
      dealNum: 0, // 工厂处理数
      dealPercent: '00.00%', // 工厂处理率
    },
    trend: { directQualifiedRate: [], lastQualifiedRate: [], x_axios: [] },
    supplierSummary: {
      firstSupplier: 0,
      accessedSupplier: 0,
    },
    systemWithSupplier: {},
    warnings: [],
    activeSys: '',
  })

  const init = () => {
    storeData.loading = true
    return Promise.allSettled([
      getAiIdentificationResult(),
      getSupplierTrend(),
      getSupplierSummary(),
      getSystemWithSupplier(),
      getSupplierWarnings(),
    ])
      .then((results) => {
        const names = [
          'AiIdentificationResult',
          'trend',
          'supplierSummary',
          'systemWithSupplier',
          'warnings',
        ]

        names.forEach((name, index) => {
          const result = results[index]
          if (result.status === 'fulfilled') {
            storeData[name] = result.value
          }
        })
        // 确定第一个 acitve 的预警系统
        storeData.activeSys = 'sys1'
      })
      .finally(() => (storeData.loading = false))
  }

  const onFullScreenChange = () => {
    storeData.isFullScreen = !storeData.isFullScreen
  }
  const onAcitveSysChange = (sys: string) => {
    storeData.activeSys = sys
  }
  return {
    storeData,
    onFullScreenChange,
    onAcitveSysChange,
    init,
  }
})
