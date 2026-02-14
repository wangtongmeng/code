<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showDebugInfo = ref(false)

// 显示调试信息，仅用于首页查看状态
onMounted(() => {
  // 首页不显示回退按钮，但显示当前历史记录状态用于调试
  showDebugInfo.value = true
})

// 跳转到其他页面
const navigateTo = (path) => {
  router.push(path)
}

// 获取历史记录长度
const getHistoryLength = () => {
  return window.history.length
}
</script>

<template>
  <main>
    <div class="home-content">
      <h1>Vue Router 历史记录测试项目</h1>
      <p>欢迎来到首页！点击下方按钮测试路由导航功能。</p>
    </div>
    
    <div class="home-navigation">
      <h3>快速导航</h3>
      <div class="nav-buttons">
        <button @click="navigateTo('/about')" class="nav-button">关于页面</button>
        <button @click="navigateTo('/page1')" class="nav-button">页面1</button>
        <button @click="navigateTo('/page2')" class="nav-button">页面2</button>
        <button @click="navigateTo('/page3')" class="nav-button">页面3</button>
        <button @click="navigateTo('/test')" class="nav-button test-button">测试页面</button>
      </div>
    </div>
    <div v-if="showDebugInfo" class="debug-info">
      <p>当前页面: 首页 (不显示回退按钮)</p>
      <p>历史记录长度: <span id="history-length">{{ getHistoryLength() }}</span></p>
    </div>
  </main>
</template>

<style scoped>
.home-navigation {
  margin: 2rem 0;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  text-align: center;
}

.home-navigation h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.nav-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: #369670;
}

.nav-button.test-button {
  background-color: #2196f3;
}

.nav-button.test-button:hover {
  background-color: #1976d2;
}

.debug-info {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  font-family: monospace;
  text-align: center;
}
</style>
