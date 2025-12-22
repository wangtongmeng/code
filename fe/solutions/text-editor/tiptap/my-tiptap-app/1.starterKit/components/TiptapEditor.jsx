// src/components/TiptapEditor.jsx
import { EditorProvider } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';

const TiptapEditor = () => {
  // 编辑器配置
  const extensions = [StarterKit];
  
  const content = `
    <h2>🚀 性能优化后的 Tiptap 编辑器</h2>
    <p>现在编辑器的性能已经得到大幅优化！</p>
    <p><strong>优化要点：</strong></p>
    <ul>
      <li>使用 <code>EditorProvider</code> 管理编辑器实例</li>
      <li>工具栏通过 <code>useCurrentEditor</code> 获取编辑器引用</li>
      <li>避免了不必要的组件重渲染</li>
      <li>大幅提升了编辑体验的流畅度</li>
    </ul>
    <blockquote>
      <p>💡 <strong>性能提示</strong>：在长文档编辑时，这种优化尤其重要。</p>
    </blockquote>
  `;

  const editorProps = {
    attributes: {
      class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
    },
  };

  return (
    <div className="tiptap-editor">
      <EditorProvider
        extensions={extensions}
        content={content}
        editorProps={editorProps}
        slotBefore={<MenuBar />}
        onUpdate={({ editor }) => {
          console.log('内容已更新:', editor.getHTML());
        }}
      >
        {/* EditorProvider 会自动渲染 EditorContent */}
        {/* 如果需要，可以在这里添加其他子组件 */}
      </EditorProvider>
    </div>
  );
};

export default TiptapEditor;
