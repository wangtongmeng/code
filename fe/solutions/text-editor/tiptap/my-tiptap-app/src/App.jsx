// src/App.jsx
import TiptapEditor from './components/TiptapEditor';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>🚀 Tiptap 编辑器演示</h1>
      </header>
      
      <main className="app-main">
        <TiptapEditor />
      </main>
    </div>
  );
}

export default App;
