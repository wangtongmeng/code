import { EditorProvider } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';
import { ColoredHighlight } from './ColoredHighlight';
const TiptapEditor = () => {
  // 编辑器配置
  const extensions = [
    StarterKit,
    ColoredHighlight
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
        content={'<div callouttype="warning" data-type="callout"><p>阿沙发上的发</p></div>'}
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
