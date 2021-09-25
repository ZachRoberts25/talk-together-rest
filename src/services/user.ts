import { getMongoClient } from './../gateway/mongo';

interface User {
  firebaseId: string;
  isAdmin: boolean;
  isCreator: boolean;
}

const getCollection = async () => {
  const client = await getMongoClient();
  return client.collection<User>('creator');
};

export const getUser = async (firebaseId: string) => {
  const col = await getCollection();
  return col.findOne({ firebaseId });
};
