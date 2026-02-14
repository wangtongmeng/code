import { mergeAttributes, Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-2'
import TagComponent from './tag.vue'


export default Node.create({
  name: 'tag',

  group: 'inline',
  
  inline: true,
  
  atom: true,  // 标记为原子节点，不能有内容

  selectable: true,

  draggable: true,

  addAttributes() {
    return {
      text: {
        default: '标签',
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-type="tag"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes(HTMLAttributes, {
      'data-type': 'tag',
      'class': 'custom-tag'
    })]
  },

  addNodeView() {
    return VueNodeViewRenderer(TagComponent)
  },

  addCommands() {
    return {
      insertTag: (text = '标签') => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: { text }
        })
      },
    }
  },

  addKeyboardShortcuts() {
    return {
      Backspace: ({ editor }) => {
        const { state } = editor
        const { selection } = state
        const { empty, $cursor } = selection
        
        // 如果光标在tag节点后面且为空选择
        if (empty && $cursor) {
          const nodeBefore = $cursor.nodeBefore
          
          if (nodeBefore && nodeBefore.type.name === this.name) {
            // 选中tag节点而不是直接删除
            const pos = $cursor.pos - nodeBefore.nodeSize
            editor.commands.setTextSelection({ 
              from: pos, 
              to: pos + nodeBefore.nodeSize 
            })
            return true
          }
        }
        
        return false
      },
    }
  },
})