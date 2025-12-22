// src/App.jsx
import TiptapEditor from './components/TiptapEditor';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>🚀 Tiptap 编辑器演示</h1>
        <p>基于 React 的富文本编辑器实战教程</p>
      </header>
      
      <main className="app-main">
        <TiptapEditor />
      </main>
    </div>
  );
}

export default App;
