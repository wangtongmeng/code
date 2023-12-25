<!-- 通过 class style v-bind 来增强样式 -->
<template>
  <div>
    <!-- class -->

    <!-- 绑定对象 内联字面量的形式 -->
    <div v-bind:class="{active: isActive}">class 绑定</div>
    <!-- 缩写 -->
    <div :class="{active: isActive}">class 绑定缩写</div>
    <!-- :class 指令也可以和一般的 class attribute 共存 -->
    <div class="static" :class="{active: isActive}">class 和一般class 共存</div>
    <!-- 绑定一个对象 -->
    <div :class="classObject">class 直接绑定一个对象</div>
    <!-- 绑定一个返回对象的计算属性 -->
    <div :class="classObject1">class 绑定一个返回对象的计算属性</div>
    <!-- 绑定数组 -->
    <div :class="[activeClass, errorClass]">class 绑定数组</div>
    <!-- 绑定数组 使用三元表达式 -->
    <div :class="[isActive ? activeClass : '', errorClass]">class 绑定数组 使用三元表达式</div>
    <!-- 数组嵌套对象 -->
    <div :class="[{active: isActive}, errorClass]">class 数组嵌套对象</div>
    <!-- 在数组上使用 TODO -->


    <!-- style 绑定内联样式 -->
    <div :style="{color: activeClass, fontSize: fontSize + 'px'}">style 绑定对象</div>
    <!-- 推荐使用小驼峰命名 fontSize，但也支持 也支持 kebab-cased 形式 'font-size'  -->
    <div :style="{'font-size': fontSize + 'px'}">推荐使用小驼峰命名 fontSize，但也支持 kebab-cased 形式 'font-size'</div>
    <!-- 直接绑定对象 -->
    

    <!-- 总结 -->
    <!-- 当需要条件判断时，对象key value的形式比 三元表达式的形式好 -->
    <!-- 注意点 -->
    <!-- style 推荐使用小驼峰命名 fontSize，但也支持 kebab-cased 形式 'font-size' -->
  </div>
</template>

<script setup>
import {ref, reactive, computed} from 'vue'
const isActive = ref(true) // isActive为真值，则添加class active
const error = ref(null)
const classObject = reactive({
  active: true,
  'text-danger': false
})

const classObject1 = computed(() => ({
  active: isActive.value && !error.value,
}))



setTimeout(() => {
  isActive.value = false
}, 1000);

// class 绑定数组
const activeClass = ref('active')
const errorClass = ref('text-danger')

// 绑定内联样式
const activeColor = ref('red')
const fontSize = ref(30)

</script>

<style lang="scss" scoped>
.active {
  color: red;
}
</style>