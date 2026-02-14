// suggestion.js
import { ReactRenderer } from '@tiptap/react';
import tippy from 'tippy.js';
import MentionList from './MentionList';

export default {
  items: ({ query }) => {
    // 模拟用户数据库查询
    const users = [
      { id: 1, name: '张三', avatar: '/avatars/zhang.jpg', role: '前端工程师' },
      { id: 2, name: '李四', avatar: '/avatars/li.jpg', role: '后端工程师' },
      { id: 3, name: '王五', avatar: '/avatars/wang.jpg', role: '产品经理' },
      { id: 4, name: '赵六', avatar: '/avatars/zhao.jpg', role: 'UI设计师' },
    ];

    return users
      .filter(user => user.name.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5);
  },

  render: () => {
    let component;
    let popup;

    return {
      onStart: (props) => {
        component = new ReactRenderer(MentionList, {
          props,
          editor: props.editor,
        });

        if (!props.clientRect) {
          return;
        }

        popup = tippy('body', {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start',
        });
      },

      onUpdate(props) {
        component.updateProps(props);

        if (!props.clientRect) {
          return;
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        });
      },

      onKeyDown(props) {
        if (props.event.key === 'Escape') {
          popup[0].hide();
          return true;
        }

        return component.ref?.onKeyDown(props);
      },

      onExit() {
        popup[0].destroy();
        component.destroy();
      },
    };
  },
};
