import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import { observer } from 'mobx-react-lite';
import { ChangeEvent, useState } from 'react';
import { Input, Button, message } from 'antd';
import { useRouter } from 'next/router';
import { useStore } from 'store/index';
import request from 'service/fetch';
import styles from './index.module.scss';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

const NewEditor = () => {
  const store = useStore();
  const { push } = useRouter();
  const { userId } = store.user.userInfo;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePublish = () => {
    if (!title) {
      message.warning('请输入文章标题');
      return ;
    }
    request.post('/api/article/publish', {
      title,
      content,
    }).then((res: any) => {
      if (res?.code === 0) {
        userId ? push(`/user/${userId}`) : push('/');
        message.success('发布成功');
      } else {
        message.error(res?.msg || '发布失败');
      }
    })
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event?.target?.value);
  };

  const handleContentChange = (content: any) => {
    setContent(content);
  };

  return (
    <div className={styles.container}>
      <div className={styles.operation}>
        <Input
          className={styles.title}
          placeholder="请输入文章标题"
          value={title}
          onChange={handleTitleChange}
        />
        <Button
          className={styles.button}
          type="primary"
          onClick={handlePublish}
        >
          发布
        </Button>
      </div>
      <MDEditor value={content} height={1080} onChange={handleContentChange} />
    </div>
  );
};

(NewEditor as any).layout = null;

export default observer(NewEditor);
