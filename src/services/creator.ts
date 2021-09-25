import { ObjectId } from 'mongodb';
import { getMongoClient } from './../gateway/mongo';

interface Creator {
  _id?: ObjectId;
  bio: string;
  profileImage: string;
  name: string;
  firebaseId: string;
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

export const getCreator = async (id: string) => {
  const col = await getCollection();
  return col.findOne({ firebaseId: id });
};
