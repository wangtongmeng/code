import { Node, mergeAttributes, nodeInputRule } from '@tiptap/core';

export const Callout = Node.create({
  name: 'callout', // 1. 唯一名称

  group: 'block', // 2. 属于块级节点组

  content: 'paragraph+', // 3. 内容必须是至少一个段落

  defining: true, // 4. 这是一个定义边界的节点

  addAttributes() {
    return {
      'callouttype': {
        default: 'info', // 默认类型是 'info',
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    // 最简版本：只渲染一个 div 标签
    // 0 表示子内容的插入位置
    console.log('HTMLAttributes', HTMLAttributes);
    
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'callout' }), 0];
  },
  parseHTML() {
    return [
      {
        tag: 'div[data-type="callout"]', // 匹配带有特定属性的 div 标签
        getAttrs: (element) => ({
          
          callouttype: element.getAttribute('callouttype'),
        }),
      },
    ];
  },

  addCommands() {
    return {
      toggleCallout: (attributes) => ({ chain }) => {
        console.log('attributes', attributes);

        // 使用 toggleWrap 来在段落和 Callout 之间切换
        return chain().toggleWrap(this.name, attributes).run();
      },
    };
  },
  addInputRules() {
    return [
      nodeInputRule({
        // 匹配以 ">>" 开头并紧跟一个换行符的文本
        find: /^>>\s$/,
        type: this.type,
      }),
    ];
  },

});
