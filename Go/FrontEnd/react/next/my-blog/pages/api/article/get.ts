import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { ironOptions } from 'config/index';
import { prepareConnection } from 'db/index';
import { Article } from 'db/entity/index';

export default withIronSessionApiRoute(get, ironOptions);

async function get(req: NextApiRequest, res: NextApiResponse) {
  const db = await prepareConnection();
  const articleRepo = db.getRepository(Article);

  let articles = [];

  articles = await articleRepo.find({
    relations: ['user'],
  });
  console.log('articles', articles)
  res?.status(200).json({
    code: 0,
    msg: '',
    data: articles || [],
  });
}
