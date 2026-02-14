<template>
  <node-view-wrapper class="custom-tag" :data-type="'tag'">
    {{ node.attrs.text }}
  </node-view-wrapper>
</template>

<script>
import { nodeViewProps, NodeViewWrapper } from '@tiptap/vue-2';

export default {
  name: 'CustomTag',
  props: {
    ...nodeViewProps,
  },
  components: {
    NodeViewWrapper,
  }
};
</script>

<style lang="less">
.custom-tag {
  display: inline-block;
  background-color: #e3f2fd;
  color: #1976d2;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin: 0 2px;
  border: 1px solid #bbdefb;
  user-select: none;
  
  // 被选中时的样式
  &.ProseMirror-selectednode {
    background-color: #bbdefb;
    outline: 2px solid #64b5f6;
  }
  
  &.ProseMirror-hideselection *::selection {
    background: transparent;
  }
  
  &.ProseMirror-hideselection *::-moz-selection {
    background: transparent;
  }
}
</style>