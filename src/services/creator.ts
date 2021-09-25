import { getMongoClient } from './../gateway/mongo';

interface Creator {
  bio: string;
  profileImage: string;
  name: string;
}

const getCollection = async () => {
  const client = await getMongoClient();
  return client.collection<Creator>('creator');
};

export const getCreators = async (page: number = 0, pageSize: number = 100) => {
  const col = await getCollection();
  const ret = await col.find({}, { limit: pageSize, skip: page * pageSize });

  return ret.toArray();
};
