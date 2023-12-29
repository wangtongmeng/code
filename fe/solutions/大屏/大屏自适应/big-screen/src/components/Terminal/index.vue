<!-- 命令行打字效果 -->
<template>
  <div ref="terminal" class="terminal-printing">
    <pre ref="output" class="output">{{ printedText }}</pre>
  </div>
</template>

<script setup>
import {  nextTick, onMounted, ref } from 'vue'
const printedText = ref('')
const output = ref('')
const terminal = ref()
const startPrint = () => {
  const textToPrint = `
    Hello, world!\n
    你好\n
    你叫什么名字\n
    你叫什么名字\n
    你叫什么名字\n
    你叫什么名字\n
    你叫什么名字\n
    你叫什么名字\n
    你叫什么名字\n
    你叫什么名字\n
    你叫什么名字\n
    你叫什么名字
    `; // The text to be printed
  let currentIndex = 0;

  const printInterval = setInterval(() => {
    printedText.value += textToPrint[currentIndex];
    currentIndex++;
    nextTick(() => {
      console.log('terminal', terminal.value.scrollTop);
      console.log('output', output.value.clientHeight);
      if (output.value.clientHeight > terminal.value.clientHeight) {
        terminal.value.scrollTop = output.value.clientHeight - terminal.value.clientHeight
      }
    })
    if (currentIndex === textToPrint.length) {
      clearInterval(printInterval);
    }

  }, 20); // Adjust the interval to control the printing speed
}
onMounted(() => {
  startPrint()
})
</script>

<style lang="scss" scoped>
.terminal-printing {
  font-family: monospace;
  border: 1px solid red;
  width: 200px;
  height: 200px;
  overflow-y: auto;



}

/* 隐藏滚动条样式 */
.terminal-printing::-webkit-scrollbar {
  width: 0em;
}

.terminal-printing::-webkit-scrollbar-track {
  background: transparent;
}

.output {
  border: 1px solid blue;
  white-space: pre;
  // animation: terminal-print-animation 1s steps(40) forwards;
}

@keyframes terminal-print-animation {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}
</style>