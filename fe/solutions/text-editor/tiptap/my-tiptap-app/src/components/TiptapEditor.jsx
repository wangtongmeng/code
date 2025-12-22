// src/components/TiptapEditor.jsx
import { EditorProvider } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import CodeBlock from '@tiptap/extension-code-block'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import {all, common, createLowlight} from 'lowlight';

import 'prismjs/themes/prism-tomorrow.css'


// // 核心功能扩展（必需）
// import Document from '@tiptap/extension-document';
// import Paragraph from '@tiptap/extension-paragraph';
// import Text from '@tiptap/extension-text';
// import History from '@tiptap/extension-history';

// // 格式化扩展（按需引入）
// import Bold from '@tiptap/extension-bold';
// import Italic from '@tiptap/extension-italic';
// import Heading from '@tiptap/extension-heading';
// import BulletList from '@tiptap/extension-bullet-list';
// import OrderedList from '@tiptap/extension-ordered-list';
// import ListItem from '@tiptap/extension-list-item';

import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'

import 'highlight.js/styles/github-dark.css';

import Placeholder from '@tiptap/extension-placeholder';

// 创建 lowlight 实例
const lowlight = createLowlight(common)
// 注册语言
lowlight.register({html, css, js, ts})


import suggestion from './suggestion';
import { Callout } from './Callout';
import { ColoredHighlight } from './ColoredHighlight';
import { UpdateCounter } from './UpdateCounter';


import Mention from '@tiptap/extension-mention';


const TiptapEditor = () => {
  // 编辑器配置
  const extensions = [
    StarterKit.configure({
      link: {
        openOnClick: true,      // 点击时在新标签页中打开链接
        autolink: true,         // 自动将 URL 字符串转换为链接
        linkOnPaste: true,      // 粘贴时自动转换链接
        HTMLAttributes: {
          class: 'custom-link',  // 为链接添加自定义样式类
        },
      },
      codeBlock: false,
    }),
    // // 基础扩展 - 这些是编辑器运行的基石
    // Document,        // 文档根节点
    // Paragraph,       // 段落节点
    // Text,           // 文本节点
    // History,        // 撤销/重做功能

    // // 功能扩展 - 根据需求配置
    // Bold,           // 粗体
    // Italic,         // 斜体
    // Heading,
    // BulletList,
    // OrderedList,
    // ListItem,
    // Link.configure({
    //   openOnClick: true,      // 点击时在新标签页中打开链接
    //   autolink: true,         // 自动将 URL 字符串转换为链接
    //   linkOnPaste: true,      // 粘贴时自动转换链接
    //   HTMLAttributes: {
    //     class: 'custom-link',  // 为链接添加自定义样式类
    //   },
    // }),
    Image.configure({
      inline: true,           // 是否内联显示
      allowBase64: true,      // 是否允许 base64 图片
      HTMLAttributes: {
        class: 'custom-image',
      },
      enableTabIndentation: true, // 启用 Tab 键缩进
    }),
    // CodeBlock,
    CodeBlockLowlight.configure({
      lowlight,
      // HTMLAttributes: {
      //   class: 'my-custom-class',
      // },
      // languageClassPrefix: 'language-',
      // tabSize: 2,
    }),
    Placeholder.configure({
      placeholder: '开始编写你的内容...',
      // showOnlyWhenEditable: true,  // 只在可编辑状态显示
      // showOnlyCurrent: false,      // 在所有空行显示占位符
    }),
    Mention.configure({
      HTMLAttributes: {
        class: 'mention',
      },
      suggestion,
    }),
    Callout,
    ColoredHighlight,
    UpdateCounter,
    Mention
  ];

  const editorProps = {
    attributes: {
      class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
    },
  };

  return (
    <div className="tiptap-editor">
      <EditorProvider
        extensions={extensions}
        // content={'<p>Hello World!</p>'}
        editorProps={editorProps}
        slotBefore={<MenuBar />}
        onUpdate={({ editor }) => {
          // console.log('内容已更新:', editor.getHTML());
        }}
      >
        {/* EditorProvider 会自动渲染 EditorContent */}
        {/* 如果需要，可以在这里添加其他子组件 */}
      </EditorProvider>
    </div>
  );
};

export default TiptapEditor;
