<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const router = useRouter()
const showBackButton = ref(false)
const historyLength = ref(0)

// 更新回退按钮显示状态
const updateBackButton = () => {
  historyLength.value = window.history.length
  showBackButton.value = historyLength.value > 1
}

// 回退函数
const goBack = () => {
  router.back()
}

// 使用push导航
const pushToPage = (page) => {
  router.push(`/${page}`)
}

// 使用replace导航
const replaceToPage = (page) => {
  router.replace(`/${page}`)
}

// 测试序列
const testSequence = async () => {
  console.log('开始测试路由序列...')
  
  // 测试1: 基础push操作
  console.log('测试1: Push到page1')
  await router.push('/page1')
  
  // 等待页面加载
  setTimeout(async () => {
    console.log('测试2: Push到page2')
    await router.push('/page2')
    
    setTimeout(async () => {
      console.log('测试3: 返回上一页')
      await router.back()
      
      setTimeout(async () => {
        console.log('测试4: 替换当前页面到page3')
        await router.replace('/page3')
        
        console.log('测试序列完成')
      }, 500)
    }, 500)
  }, 500)
}

// 重置测试环境
const resetTest = () => {
  window.location.reload()
}

// 监听路由变化和页面加载
onMounted(() => {
  updateBackButton()
  window.addEventListener('popstate', updateBackButton)
})

onUnmounted(() => {
  window.removeEventListener('popstate', updateBackButton)
})
</script>

<template>
  <div class="test-page">
    <h1>路由历史记录测试页面</h1>
    
    <div class="control-panel">
      <h2>控制面板</h2>
      <button @click="testSequence" class="test-button">执行完整测试序列</button>
      <button @click="resetTest" class="reset-button">重置测试环境</button>
    </div>

    <div class="navigation">
      <h3>单步导航</h3>
      <button @click="pushToPage('home')" class="nav-button">Push到首页</button>
      <button @click="pushToPage('page1')" class="nav-button">Push到Page1</button>
      <button @click="pushToPage('page2')" class="nav-button">Push到Page2</button>
      <button @click="pushToPage('page3')" class="nav-button">Push到Page3</button>
      <button @click="replaceToPage('about')" class="nav-button replace">替换到About</button>
      
      <button v-if="showBackButton" @click="goBack" class="back-button">
        router.back()
      </button>
    </div>

    <div class="status-panel">
      <h3>当前状态</h3>
      <p><strong>历史记录长度:</strong> {{ historyLength }}</p>
      <p><strong>回退按钮显示:</strong> {{ showBackButton ? '显示 (可回退)' : '隐藏 (无法回退)' }}</p>
      <p><strong>当前路径:</strong> {{ $route.path }}</p>
    </div>

    <div class="debug-logs">
      <h3>调试信息</h3>
      <p>打开浏览器控制台查看详细的路由操作日志</p>
    </div>
  </div>
</template>

<style scoped>
.test-page {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.control-panel {
  margin: 2rem 0;
  padding: 1rem;
  background-color: #e3f2fd;
  border-radius: 8px;
}

.navigation {
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f3e5f5;
  border-radius: 8px;
}

.status-panel {
  margin: 2rem 0;
  padding: 1rem;
  background-color: #e8f5e8;
  border-radius: 8px;
}

.debug-logs {
  margin: 2rem 0;
  padding: 1rem;
  background-color: #fff3e0;
  border-radius: 8px;
}

.test-button, .reset-button, .nav-button, .back-button {
  margin: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.test-button {
  background-color: #2196f3;
  color: white;
}

.reset-button {
  background-color: #ff9800;
  color: white;
}

.nav-button {
  background-color: #4caf50;
  color: white;
}

.nav-button.replace {
  background-color: #ff5722;
}

.back-button {
  background-color: #9c27b0;
  color: white;
}

button:hover {
  opacity: 0.8;
}
</style>