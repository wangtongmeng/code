<template>
  <div>
    <p>遍历数组</p>
    <ul>
      <li v-for="(item, index) in listArr" :key="item.id">
        {{ index }} - {{ item.id }} - {{ item.title }}
      </li>
    </ul>
    <p>遍历对象</p>
    <ul>
      <li v-for="(val, key, index) in listObj" :key="key">
        {{ index }} - {{ key }} - {{ val.title }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      listArr: [
        { di: "1", title: "1" },
        { di: "2", title: "2" },
        { di: "3", title: "3" },
      ],
      listObj: {
        a: { title: "a" },
        b: { title: "b" },
        c: { title: "c" },
      },
    };
  },
};
</script>
