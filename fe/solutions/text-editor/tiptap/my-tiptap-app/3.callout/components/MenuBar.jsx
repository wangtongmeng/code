import React, { useCallback } from 'react';
import { useCurrentEditor } from '@tiptap/react';

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  // 添加链接的处理函数
  const addLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('请输入链接地址：', previousUrl);

    // 用户取消操作
    if (url === null) return;

    // 用户输入空字符串，移除链接
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    console.log(1111);

    // 设置链接
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };



  return (
    <div className="menu-bar">
      {/* 文本格式按钮 */}
      <div className="button-group">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
          title="加粗 (Ctrl+B)"
        >
          <strong>B</strong>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
          title="斜体 (Ctrl+I)"
        >
          <em>I</em>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
          title="删除线"
        >
          <s>S</s>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive('code') ? 'is-active' : ''}
          title="行内代码"
        >
          &lt;/&gt; 行内代码
        </button>
        {/* 块级代码 */}
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
          title="代码块"
        >
          &lt;/&gt; 块级代码
        </button>
      </div>

      {/* 分隔线 */}
      <div className="divider"></div>

      {/* 标题按钮 */}
      <div className="button-group">
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
          title="一级标题"
        >
          H1
        </button>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
          title="二级标题"
        >
          H2
        </button>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
          title="三级标题"
        >
          H3
        </button>

        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
          title="正文段落"
        >
          P
        </button>
      </div>

      {/* 分隔线 */}
      <div className="divider"></div>

      {/* 列表按钮 */}
      <div className="button-group">
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
          title="无序列表"
        >
          • 列表
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
          title="有序列表"
        >
          1. 列表
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
          title="引用块"
        >
          " 引用
        </button>
      </div>

      {/* 分隔线 */}
      <div className="divider"></div>

      {/* 操作按钮 */}
      <div className="button-group">
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          title="撤销 (Ctrl+Z)"
        >
          ↶ 撤销
        </button>

        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          title="重做 (Ctrl+Y)"
        >
          ↷ 重做
        </button>
      </div>
      {/* 添加链接 */}
      <button
        onClick={addLink}
        className={editor.isActive('link') ? 'is-active' : ''}
        title="添加链接"
      >
        🔗 链接
      </button>
      <button
        onClick={() => editor.commands.toggleCallout({ callouttype: 'warning' })}
        className={editor.isActive('callout', { callouttype: 'warning' }) ? 'is-active' : ''}
      >
        ⚠️ 警告框
      </button>

      <button
        onClick={() => editor.commands.toggleCallout({ callouttype: 'info' })}
        className={editor.isActive('callout', { callouttype: 'info' }) ? 'is-active' : ''}
      >
        ℹ️ 提示框
      </button>
        {/* 文字高亮 */}
        <button
          onClick={() => editor.chain().focus().toggleHighlight({ color: '#ff0000' }).run()}
          className={editor.isActive('highlight', { color: '#ff0000' }) ? 'is-active' : ''}
        >
          🎨 文字高亮
        </button>
    </div>
  );
};

export default MenuBar;
