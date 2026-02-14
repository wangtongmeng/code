<template>
    <div class="simple-input-container">
        <div class="toolbar">
            <button @click="insertTag" class="toolbar-btn">插入标签</button>
            <button @click="clearContent" class="toolbar-btn">清空内容</button>
            <button @click="getHtml" class="toolbar-btn">获取HTML</button>
            <button @click="getJson" class="toolbar-btn">获取JSON</button>
        </div>
        
        <div class="editor-wrapper">
            <editor-content :editor="editor" class="editor-content" />
        </div>
        
        <div class="output">
            <h4>输出内容：</h4>
            <pre>{{ getCurrentContent() }}</pre>
        </div>
    </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2';
import { Document } from '@tiptap/extension-document';
import { Paragraph } from '@tiptap/extension-paragraph';
import { Text } from '@tiptap/extension-text';
import TagExtension from './tag';

export default {
    name: 'SimpleInput',
    components: {
        EditorContent,
    },
    data() {
        return {
            editor: null
        };
    },
    mounted() {
        this.editor = new Editor({
            autofocus: true,
            content: '<p>这是一个简单的输入框，您可以在这里输入文本，或者插入Tag标签。</p><p>光标在tag标签后面按删除键会先选中tag，再次按删除键删除。</p>',
            extensions: [
                Document,
                Paragraph,
                Text,
                TagExtension,
            ],
            editorProps: {
                attributes: {
                    class: 'simple-input-editor',
                    placeholder: '在这里输入内容...',
                },
            },
        });
    },
    beforeUnmount() {
        if (this.editor) {
            this.editor.destroy();
        }
    },
    methods: {
        insertTag() {
            if (this.editor) {
                const tagTexts = ['重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要重要', '待办', '紧急', '已完成', '新品', '优惠'];
                const randomText = tagTexts[Math.floor(Math.random() * tagTexts.length)];
                this.editor.commands.insertTag(randomText);
                this.editor.commands.insertContent(' ');
            }
        },
        clearContent() {
            if (this.editor) {
                this.editor.commands.clearContent();
                this.editor.commands.setContent('<p></p>');
            }
        },
        getHtml() {
            console.log(this.editor?.getHTML());
        },
        getJson() {
            console.log(JSON.stringify(this.editor?.getJSON(), null, 2));
        },
        getCurrentContent() {
            if (!this.editor) return '';
            
            return {
                html: this.editor.getHTML(),
                json: this.editor.getJSON(),
                text: this.editor.getText(),
            };
        }
    }
};
</script>

<style lang="less" scoped>
.simple-input-container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: white;
}

.toolbar {
    margin-bottom: 15px;
    display: flex;
    gap: 10px;
    
    .toolbar-btn {
        padding: 8px 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: #f5f5f5;
        cursor: pointer;
        
        &:hover {
            background: #e0e0e0;
        }
    }
}

.editor-wrapper {
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 10px;
    min-height: 150px;
    
    .editor-content {
        outline: none;
        
        &:focus {
            outline: none;
        }
    }
}

.output {
    margin-top: 20px;
    padding: 15px;
    background: #f9f9f9;
    border-radius: 4px;
    
    h4 {
        margin: 0 0 10px 0;
        color: #666;
    }
    
    pre {
        margin: 0;
        font-size: 12px;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
}

:deep(.simple-input-editor) {
    outline: none;
    min-height: 100px;
    
    p {
        margin: 0 0 8px 0;
        line-height: 1.6;
    }
    
    :deep(.custom-tag) {
        display: inline-block;
        background-color: #e3f2fd;
        color: #1976d2;
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 12px;
        margin: 0 2px;
        border: 1px solid #bbdefb;
        user-select: none;
        cursor: pointer;
        
        &.ProseMirror-selectednode {
            background-color: #bbdefb;
            outline: 2px solid #64b5f6;
        }
    }
}
</style>
