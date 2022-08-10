import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Divider } from 'antd';
import { prepareConnection } from 'db/index';
import { Article } from 'db/entity';
// import ListItem from 'components/ListItem';
import { IArticle } from 'pages/api/index';
import request from 'service/fetch';
import styles from './index.module.scss';

const DynamicComponent = dynamic(() => import('components/ListItem'));

interface IProps {
  articles: IArticle[];
}

export async function getServerSideProps() {
  const db = await prepareConnection();
  const articles = await db.getRepository(Article).find({
    relations: ['user'],
  });

  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles)) || [],
    },
  };
}

const Home = (props: IProps) => {
  const { articles } = props;
  const [showAricles, setShowAricles] = useState([...articles]);

  useEffect(() => {
      request.get(`/api/article/get`).then((res: any) => {
        if (res?.code === 0) {
          setShowAricles(res?.data);
        }
      });
  }, []);

  return (
    <div>
      <div className="content-layout">
        {showAricles?.map((article) => (
          <>
            {/* <ListItem article={article} /> */}
            <DynamicComponent article={article} />
            <Divider />
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
