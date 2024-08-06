<template>
  <p>文本插值 {{ message }}</p>
  <p>JS 表达式 {{ flag ? "yes" : "no" }}</p>
  <p :id="dynamic">动态属性 id</p>
  <!-- <p v-html="rawHtml">
    <span>有 xss 风险</span>
    <span>使用 v-html 后，将覆盖子元素</span>
  </p> -->
  <p v-html="rawHtml"></p>
</template>
<script>
export default {
  data() {
    return {
      message: "hello",
      flag: true,
      rawHtml: "原始 html <b>加粗</b><i>斜体</i>",
      dynamic: `id-${Date.now()}`,
    };
  },
};
</script>
