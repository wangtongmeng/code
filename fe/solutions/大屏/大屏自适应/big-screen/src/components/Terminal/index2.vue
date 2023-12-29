<!-- https://medium.com/@gwennie.io/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88%E5%A6%82%E4%BD%95%E7%94%A8%E4%BB%A3%E7%A0%81%E5%81%9A%E5%87%BA%E7%BB%88%E7%AB%AF%E6%89%93%E5%8D%B0%E7%9A%84%E6%95%88%E6%9E%9C-106c0b25c07f -->
<template>
  <div ref="logContainer" class="log-container"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {commandStart, commandParts, commandResponses} from './utils'
const logContainer = ref()

let processTime = ref(0) // 程序执行的时间(随机数)
let lastProcess = ref(0) // 上一次程序开始执行的时间
let isProcessing = ref(false) // 程序是否正在进行

const printLog = () => {
  let textEle = undefined;
  if (!isProcessing.value) {
    textEle = document.createElement("p");
    const commandType = Math.floor(Math.random() * 4); // 0 1 2 3
    switch (commandType) {
      case 0: // 输入语句
        textEle.innerText =
          commandStart[Math.floor(Math.random() * commandStart.length)] +
          commandParts[Math.floor(Math.random() * commandParts.length)];
        break;
      case 3:
        isProcessing.value = true;
        processTime = Math.floor(Math.random() * 5000); // 每次程序执行的时间不等
        lastProcess.value = Date.now();
      default:
        // 程序响应
        textEle.innerText =
          commandResponses[Math.floor(Math.random() * commandResponses.length)];
    }
  } else {
    textEle = document.createElement("span");
    textEle.innerText = Math.random() + " ";
    if (Date.now() - lastProcess.value > processTime) {
      isProcessing.value = false;
    }
  }
  logContainer.value.scrollBy(0, 100);
  logContainer.value.appendChild(textEle);

  if (logContainer.value.scrollHeight > logContainer.value.clientHeight * 2) {
    const removeNodes = logContainer.value.querySelectorAll("*");
    for (let i = 0; i < Math.floor(removeNodes.length / 2); i++) {
      removeNodes[i].remove();
    }
  }
  setTimeout(printLog, Math.floor(Math.random() * 1000));
};
onMounted(() => {
  // debugger
  printLog()
})
</script>

<style lang="scss" scoped>
.log-container {
  width: 800px;
  height: 200px;
  background: black;
  color: #00ff91;
  overflow-y: hidden;
}
</style>