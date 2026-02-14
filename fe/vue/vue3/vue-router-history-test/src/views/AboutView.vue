<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const router = useRouter()
const showBackButton = ref(false)
const historyLength = ref(0)

// 更新回退按钮显示状态
const updateBackButton = () => {
  showBackButton.value = window.history.length > 1
}

// 更新历史记录长度显示
const updateHistoryLength = () => {
  historyLength.value = window.history.length
}

// 统一的更新函数
const updateAll = () => {
  updateBackButton()
  updateHistoryLength()
}

// 回退函数
const goBack = () => {
  router.back()
}

// 监听路由变化和页面加载
onMounted(() => {
  updateAll()
  window.addEventListener('popstate', updateAll)
})

onUnmounted(() => {
  window.removeEventListener('popstate', updateAll)
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    
    <button 
      v-if="showBackButton" 
      @click="goBack" 
      class="back-button"
    >
      返回
    </button>

    <div class="navigation">
      <router-link to="/">首页</router-link>
      <router-link to="/page1">页面1</router-link>
      <router-link to="/page2">页面2</router-link>
      <router-link to="/page3">页面3</router-link>
    </div>

    <div class="debug-info">
      <p>当前历史记录长度: {{ historyLength }}</p>
      <p>回退按钮是否显示: {{ showBackButton ? '是' : '否' }}</p>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 2rem;
  text-align: center;
}

.back-button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem;
}

.back-button:hover {
  background-color: #369670;
}

.navigation {
  margin: 2rem 0;
}

.navigation a {
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #f0f0f0;
  border-radius: 4px;
  text-decoration: none;
  color: #2c3e50;
}

.navigation a:hover {
  background-color: #e0e0e0;
}

.debug-info {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  font-family: monospace;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
