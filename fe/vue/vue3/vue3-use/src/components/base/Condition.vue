<template>
  <div>
    <p v-if="type === 'a'">A</p>
    <p v-else-if="type === 'b'">B</p>
    <p v-else>other</p>

    <p v-show="type === 'a'">A by v-show</p>
    <p v-show="type === 'b'">B by v-show</p>

    <button @click="onClick">change</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "a",
    };
  },
  methods: {
    onClick() {
      console.log(111);
      this.type = this.type === "a" ? "b" : "a";
    },
  },
};
</script>
