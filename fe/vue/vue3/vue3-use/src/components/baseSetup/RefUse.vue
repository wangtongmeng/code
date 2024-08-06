<template>
  {{ count }}
  <div>
    <ul>
      <li v-for="item in obj.list" :key="item.id">
        {{ item.id }} - {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
// 基本类型的值
const count = ref(0);
// 复杂类型的值
const obj = ref({
  list: [
    { id: "1", name: "1" },
    { id: "2", name: "2" },
    { id: "3", name: "3" },
  ],
  info: {
    name: "lisi",
    age: 18,
  },
});

// 更新值
onMounted(() => {
  setTimeout(() => {
    count.value++;

    obj.value.info.name = "李四";
    obj.value.list.push({ id: "4", name: "4" });
  }, 1000);

  setTimeout(() => {
    obj.value.list = []; // 直接清空是可以的
  }, 3000);
  setTimeout(() => {
    obj.value.list.push({ id: "1", name: "1" });
  }, 4000);
});
</script>
