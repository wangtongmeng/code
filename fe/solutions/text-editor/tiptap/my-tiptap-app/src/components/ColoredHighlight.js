import { Mark, mergeAttributes } from '@tiptap/core';

export const ColoredHighlight = Mark.create({
  name: 'coloredHighlight', // 1. 唯一名称

  spanning: false, // 2. 默认情况下，标记不能跨越块级节点

  addOptions() {
    return {
      color: '#FFFF00',  // 默认颜色为黄色
    }
  },
  addAttributes() {
    return {
      color: {
        default: this.options.color,  // 使用 options 中的默认颜色
        parseHTML: element => element.style.backgroundColor || '',
        renderHTML: attributes => {
          if (!attributes.color) {
            return {};
          }
          return {
            style: `background-color: ${attributes.color}`,
          };
        },
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: 'mark',  // 匹配 <mark> 标签
        getAttrs: (element) => {
          // 从 style 属性中解析背景颜色
          const color = element.style.backgroundColor;
          return color ? { color } : {};
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    // mergeAttributes 会自动处理 color 属性转为 style
    return ['mark', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },

  addCommands() {
    return {
      setHighlight: (attributes) => ({ commands }) => {
        return commands.setMark(this.name, attributes);
      },
      toggleHighlight: (attributes) => ({ commands }) => {
        return commands.toggleMark(this.name, attributes);
      },
      unsetHighlight: () => ({ commands }) => {
        return commands.unsetMark(this.name);
      },
    };
  },
  addKeyboardShortcuts() {
    return {
      'Mod-H': () => {
        return this.editor.commands.toggleHighlight({ color: this.options.color });
      },
    };
  },
});
